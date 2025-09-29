<!--
 * @Description: layout 菜单栏组件
-->
<template>
  <div class="core-menu-container height flex flex-column align-center">
    <!-- 菜单栏 -->
    <el-menu
      active-text-color="#0052D9"
      :default-active="state.activePage"
      :unique-opened="true"
      :collapse="state.isCollapse"
      :router="true"
    > 
      <!-- 将logo放此处，避免el-menu伸缩时动画卡顿 -->
      <el-menu-item class="logo-menu-item" :class="state.isCollapse ? '' : 'margin-t30 margin-b60'" disabled>
        <img src="@/assets/images/menu/logo.png" class="logo-img" alt="" v-if="!state.isCollapse">
      </el-menu-item>
      <template v-for="(menuItem, menuKey) of state.menuList">
        <!-- 拥有子集菜单 -->
        <el-sub-menu v-if="menuItem.children" :key="menuKey" :index="menuItem.path" :teleported="false" popper-class="aaa">
          <template #title>
            <!-- <img v-if="state.activeSubMenu === menuItem.path" class="menu-icon" :src="icon(menuItem.meta.choiceIcon)" alt="">
            <img v-else class="menu-icon" :src="icon(menuItem.meta.icon)" alt=""> -->
            <span class="core-menu-text margin-l16 font-14 weight" :class="state.activeSubMenu === menuItem.path ? 'c-white': 'c-6'">{{ menuItem.meta.title }}</span>
          </template>
          <el-menu-item-group v-for="(cMenuItem, cMenuKey) of menuItem.children" :key="cMenuKey" class="core-menu-item-group">
            <el-menu-item :index="cMenuItem.path">
              {{ cMenuItem.meta.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <!-- 无子集菜单 -->
        <el-menu-item v-else :key="menuKey + 's'" :index="menuItem.path" :teleported="false" popper-class="aaa">
          <!-- <img v-if="state.activeSubMenu === menuItem.path" class="menu-icon" :src="icon(menuItem.meta.choiceIcon)" alt="">
          <img v-else class="menu-icon" :src="icon(menuItem.meta.icon)" alt=""> -->
          <template #title>
            <span class="core-menu-text margin-l16 font-14 weight" :class="state.activeSubMenu === menuItem.path ? 'c-white': 'c-6'">{{ menuItem.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { reactive , onMounted, computed, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { routes } from '@/router'

const state = reactive({
  // 菜单列表
  menuList: [],
  // 激活页
  activePage: '/index',
  // 父层级激活的 index标识
  activeSubMenu: '',
  // 不在菜单中，但能访问到的页面
  singlePageList: [],
  // 是否收起
  isCollapse: false
})

const emits = defineEmits('onCloseMean')

// 路由相关
const currentRoute = useRoute()
const router = useRouter()

// 根据路由meta信息，获取对应icon资源
const icon = computed(() => {
  return name => new URL('../../assets/images/menu/' + name + '.png', import.meta.url).href
})

// 监听路由变化
watch(() => currentRoute, (to, from) => {
  getCurRouter(to)
}, { deep: true })

onMounted(() => {
  generateMenuList()
  getCurRouter(currentRoute)
})

/**
 * @description: 根据路由生成菜单信息
 * @return {*}
 */
const generateMenuList = () => {
  // 遍历路由的内容
  for (const r of routes) {
    let item = routerFilter(r)
    if (Reflect.ownKeys(item).length !== 0) state.menuList.push(item)
  }
}

/**
 * @description: 路由筛选
 * @param {*} r
 * @return {*}
 */
const routerFilter = (r) => {
  // 判定是否要显示该路由
  if (!Reflect.has(r.meta, 'hidden') || Reflect.get(r.meta, 'hidden') === false) {
    // 判定是否存在 children
    if (Reflect.has(r, 'children')) {
      // 取子路由待用
      const ch = Reflect.get(r, 'children')
      // 拷贝一个对象, 避免串行影响
      const or = Object.assign({}, r)
      // 记录当前父路由旗下拥有显示权限的子路由列表
      const list = []
      // 遍历子路由
      for (const route of ch) {
        // 开启递归, 当作一个正常路由处理
        const l = routerFilter(route)
        // 判断该路由是否为空
        if (Reflect.ownKeys(l).length !== 0) {
          // 非空即添加到子路由列表中
          list.push(l)
        }
      }
      // 子路由列表为空, 则删除当前 children字段
      if (list.length === 0) {
        Reflect.deleteProperty(or, 'children')
      } else {
        // 子路由非空, 替换当前 children字段
        Reflect.set(or, 'children', list)
      }
      // 添加到页面路由列表中
      // state.menuList.push(or)
      return or
    } else {
      return r
    }
  } else {
    return {}
  }
}

/**
 * @description: 路由对应菜单选中方法
 * @param {Object} curRoute 	当前路由
 * @return
 */
const getCurRouter = curRoute => {
  // 检查跳转的路由是否不在菜单栏里
  const singleStatus = state.singlePageList.some(e => {
    return e === curRoute.path
  })
  if (singleStatus) {
    state.activeSubMenu = '' // 父层级去除标识项
    state.activePage = curRoute.path
  } else {
    // 路由在菜单栏的情况
    state.activePage = curRoute.path // 激活菜单的index
    state.activeSubMenu = curRoute.matched[0].path // 父层级激活的 index标识
  }
}

/**
 * @description: 收起/展开 菜单栏 
 * @return {*}
 */
 const handleCollapse = (isCollapse) => {
  state.isCollapse = isCollapse
  if (state.isCollapse) {
    state.showFooter = false
  } else {
    setTimeout(() => {
      state.showFooter = true
    }, 300)
  }
}

defineExpose({
  handleCollapse
})
</script>

<style>
.core-menu-container {
  padding: 0 10px;
  background-image: url('@/assets/images/menu/menu-bg.png');
}

.core-menu-container .el-menu:not(.el-menu--collapse) {
  width: 240px;
}
.core-menu-container .el-menu.el-menu--collapse {
  width: 60px;
}

.core-menu-container .margin-b60 {
  margin-bottom: 60px;
} 
.core-menu-container .el-menu {
  background-color: transparent;
}
.core-menu-container .el-menu-item.is-active {
  color: #fff;
  background: #2083E5;
  border-radius: 4px;
}
.core-menu-container .el-menu .el-menu-item:hover {
  border-radius: 4px;
}

.core-menu-container .el-menu.el-menu--collapse .el-menu-item .el-menu-tooltip__trigger{
  padding-left: 35px;
}
.core-menu-container .el-menu {
  border-right: none;
}
.core-menu-container .logo-container {
  padding: 50px 40px 60px 40px;
}
.core-menu-container .el-menu .menu-icon {
  width: 20px;
  height: 20px;
}
.core-menu-container .el-menu > .el-menu-item {
  height: 40px;
  margin-bottom: 10px;
  padding: 10px 23px 10px 35px !important;
}
.core-menu-container .el-menu > .el-menu-item.logo-menu-item {
  margin-bottom: 60px;
}

.core-menu-container .el-menu .core-menu-item-group .el-menu-item{
  padding-left: 85px !important;
  font-size: 18px;
  color: #65666A;
  font-weight: 500;
}
.core-menu-container .el-menu .core-menu-item-group .el-menu-item.is-active {
  color: #0052D9;
}
.core-menu-container .el-menu .logo-menu-item.el-menu-item.is-disabled {
  opacity: 1;
  cursor: pointer;
}
.core-menu-container .el-menu .logo-img {
  width: 165px;
  height: 45px;
}

.el-popper .core-menu-text {
  color: #fff !important;
  margin-left: 0 !important;
}
</style>