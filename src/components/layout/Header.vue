<!--
 * @Description: layout 头部组件 
-->
<template>
  <div class="core-header width height flex-between">
    <!-- 左侧 -->
    <div class="flex-center">
      <img
        :class="isCollapse ? 'rotate' : ''"
        src="@/assets/images/header/pack-up.png"
        class="margin-r30 wh-20 cursor"
        alt=""
        @click="handleCollapse"
      />
      <span
        v-for="breadcrumbItem,breadcrumbKey in store.getters.breadcrumbList" 
        :key="breadcrumbKey" 
        class="weight cursor" 
        :class="breadcrumbKey === store.getters.breadcrumbList.length - 1 ? 'c-3' : 'c-9'" 
        @click="handleBreadcrumbClick(breadcrumbKey)"
      >
        <span>{{ breadcrumbItem }} </span> 
        <span v-if="store.getters.breadcrumbList.length > 1 && breadcrumbKey !== store.getters.breadcrumbList.length-1">&ensp;/&ensp;</span>
      </span>
    </div>
    <!-- 右侧 -->
    <div class="height flex align-center">
      <div class="wh-20 margin-r20 relative cursor">
        <img
          src="@/assets/images/header/top-question.png"
          class="width height cursor"
          alt=""
        />
      </div>
      <div class="wh-20 margin-r20 relative cursor">
        <img
          src="@/assets/images/header/top-new.png"
          class="width height cursor"
          alt=""
        />
      </div>
      <div class="core-header-line"></div>
      <img :src="store.getters.avatarUrl" class="avatar cursor" alt="" />
      <el-popover
        :width="20"
      >
        <template #reference>
          <div class="flex-center">
            <span class="c-6 margin-r5 weight">用户名</span>
            <el-icon><ArrowDown /></el-icon>
          </div>
        </template>
        <template #default>
          <div class="text-center c-6 weight cursor" @click="logout">退出</div>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script setup>
// compositionAPI
import { ref, onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
// apis
import loginApi from '@/apis/login'
// utils
import { removeToken } from '@/utils/auth'
import { ElMessage } from 'element-plus'
// emits
const emits = defineEmits(['handleCollapse'])
// store
const store = useStore()
// router
const router = useRouter()
const route = useRoute()

watch(() => route, (to, from) => {
  setBreadcrumb(to)
}, { deep: true })

onMounted(async () => {
  setBreadcrumb(route)
})

// 是否收起
const isCollapse = ref(false)

/**
 * @description: 数据判空
 * @param {*} val 要判断的值
 * @return {*}
 */    
const nullCheck = computed(() => {
  return val => {
    return !val && val !== -1 ? '-' : val
  }
})

/**
 * @description: 菜单栏 开启/关闭
 * @return {*}
 */
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value
  emits('handleCollapse', isCollapse.value)
}

/**
 * @description: 设置面包屑信息
 * @param {*} route
 * @return {*}
 */
const setBreadcrumb = route => {
  store.commit('SET_BREADCRUMB_LIST', [route.meta.title])
}

/**
 * @description: 点击面包屑
 * @param {*} index 面包屑下标
 * @return {*}
 */
const handleBreadcrumbClick = index => {
  if (index === 0 && store.getters.breadcrumbList.length > 1) {
    router.go(0)
  }
}

/**
 * @description: 退出登录
 * @return {*}
 */
const logout = async () => {
  // const res = await loginApi.logout()
  // if (res.code === 200){
  //   removeToken()
  //   router.replace('/safetyLogin')
  // } else {
  //   ElMessage({ message: res.message, type: 'error', customClass: 'core-message' })
  // }
}
</script>

<style scoped>
.core-header {
  padding: 0 30px;
  border-bottom: 1px solid #ECEEF0;
}
.core-header .wh-20 {
  width: 20px;
  height: 20px;
}
.core-header .core-header-line {
  height: 20px;
  border: 1px solid #ECEEF0;
}
.core-header .avatar {
  margin: 0 20px;
  width: 32px;
  height: 32px;
}
.core-header .rotate {
  transform: rotateZ(180deg);
}
</style>
