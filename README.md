# 用户中心&安全组件 开发文档

## 命名规范

1. 图片的命名用-隔开，全小写
2. css 的 class 命名用-隔开，全小写
3. 组件 components 文件夹下面的文件夹命名是小驼峰
   文件名的命名是 大驼峰
4. 页面文件夹 views 下的文件夹和文件名都是小驼峰
5. 命名缩写 可用单词 ['button','message','image','background'] => ['btn','msg','img','bg']
6. 除了以上之外的命名都要遵循小驼峰命名
7. 涉及到资源的关键字命名 用 resource 不是 resourse
8. 组件接受的 prop 参数的命名不能是简单的 data，要有可以自解释的命名
9. 页面和 props 内定义同一个状态管理的变量只能有一个
10. 自定义路由用component:()=>import('跳转页面地址')

## 开发规范

1. 在 utils 文件在下面的工具 js 文件，需要用 class 的格式来编写
   不是在项目中特别频繁用到的工具，不允许直接暴露并且 new 出来，需要用到的时候再 new
   禁止在 vue 实例中引入工具
   
2. 禁止使用 switch

3. 在协同开发的页面内，先开发者需要写好布局，再开始开发
   在页面的每个 dom 的大节点（功能块）需要用 注释上模块名称 开始 和结束位置
   示例：
      <!-- 注释 start -->
      <div class="test">
      </div>
      <!-- 注释 end -->
4. 在编写表单页面的时候，无论几个操作项，都是采用多个 dom 的方案来编写，不采用定义在 data 用遍历的方式来构建页面

5. 获取接口的值不需要重新在 data 定义值的格式

6. 每个 vue 页面的第一行要加上这个页面的注释（这个页面的名称或者用途）

7. 提交代码之前要删除 console.log和无用代码、过一次本次提交的内容，删除不需要提交的部分

8. api.js 文件要根据功能模块划分，一个接口只能在一个 js 文件，如果页面需要多个功能模块的接口，则按需引入对应的功能模块的 js 文件

9. 所有的vue页面要写name,注释页面用处

10. 无用的引入要删除

11. let要初始化

12. ```<img>```标签写法

   示例：直接引用
   ```javascript
   <img src="@/assets/images/test.png">
   ```
   示例：动态拼接用require
   ```javascript
   <img :src="require(`@/assets/images/${test}.png`)">
   ``` 
   同一页面同一张图片多次使用在data定义取值 / 接口返回
   ```javascript
   <img :src="test">
   ```
## 项目执行

1. init
  `npm install --force`

2. dev运行
  `npm run dev`

3. 构建
  `npm run build`

## 项目路径别名

  配置路径在 `vite.config.js` 采用链式配置方式, 若要添加, 继续链式添加即可
  ` resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  `

  基于习惯命名

  1. `@ --> src/`

## 自定义配置项 Config

  基于物联网主项目的基准, 重新定义了 Config文件, 进行更详细的划分以及相对稳定的数据结构. 并且对于数据的获取方式进行了工具类的编写~

  工具类路径: `src/utils/config.js`

  建议先阅读具体的 Config.json文件, 并且了解具体能够取什么值~

  ### 数据结构
  ```json
      "propertyName": {
        "desc": "字段描述",
        "isActive": "是否启用字段描述",
        "value": "字段的内容"
      }
  ```

  下面分点描述应该如何使用并且取值:

  1. 引入 config.js
    `import Config from '@/utils/config'`
  2. 检查取值字段名称
    以第一层级为基准, 延展找出自己所需要的值所在的层级.
    比如: tabTitle, 是在 service的 global层级下, 故取值方法名称大致为: serviceGlobalTabTitle()
  3. 定义变量并且取值
    推荐写法: (解构赋值)
    `const { value: tabTitle } = Config.serviceGlobalTabTitle()`

    传统写法: 
    `const tabTitle = Config.serviceGlobalTabTitle().value`

## 弹窗 dialog
 1.引用element的dialog对话框组件  标题、按钮的样式已写在公共样式
  ```javascript
  <el-dialog
    v-model="showDialog"  // 显示状态
    title=""              // 标题
    width=""              // 弹窗宽度
    :close-on-click-modal="false"  // 是否可以通过点击 modal 关闭
    :before-close="handleClose"
    class="core-dialog"  // 公共样式
  > 
    弹窗内容
  </el-dialog>
  ```

  ## 消息提示
  1.引用element的dElMessage消息提示组件  成功\失败\警告\通知的样式已写在公共样式
  ```javascript
  ElMessage({
    message: '提示内容',
    type: '', // 消息类型 'success' | 'warning' | 'info' | 'error'
    customClass: 'core-message' // 公共样式
  })
  ```


### 接口编写规范

#### 传参

1. data 传参:PUT、POST、DELETE 请求方式
    示例：
  ```javascript
    const data = {
      id: '1111'
    }
    async equipUntreatedEventList(data) {
      return await request({
        url: `/apis/equip/event/undone/counting/finder`,
        method: 'post',
        data
      })
    }
  ```
2. params 传参: GET、PUT、POST、DELETE 请求方式
    示例:
  ```javascript
  const params = {
    id: '1111'
  }
  async hazardTrend(params) {
    return await request({
      url: `/apis/heartbeat/hazard/timeline/counting`,
      method: 'get',
      params
    })
  }
  ```
3. path 传参: GET、PUT、POST、DELETE 请求方式
    示例:
  ```javascript
  const params = {
    name: '1111'
  }
  // page、size为特殊传参，需要处于参数列表最后并存在默认值
  async equipViolationRecord(id, params, page = 1, size = 10) {
    return await request({
      url: `/apis/equip/id/${id}/heartbeat/event/page/${page}/size/${size}`,
      method: 'get',
      params
    })
  }
  ```
4. 综合
    示例:
  ```javascript
  const params = {
    name: '1111'
  }
  // page、size为特殊传参，需要处于参数列表最后并存在默认值
  async test(id, data, params, page = 1, size = 10) {
    return await request({
      url: `/apis/id/${id}/page/${page}/size/${size}`,
      method: 'post',
      data,
      params
    })
  }
  ```