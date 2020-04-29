/*
  单个组件
*/
// 导入组件
// import imgContainer from './img'

// let plugin = {}
// plugin.install = function (Vue) {
//   Vue.component(imgContainer.name, imgContainer); // 注册组件
// }

// // 当使用Vue.use(plugin)安装插件时，
// // 实际上就是在调用这里暴露出的对象的
// // install方法，因此务必确保这里带有install方法
// export default plugin

/*
 组件库
 将所有的组件引入进来
*/
import button from './button'
import imgUpload from './img-upload'
const components = [button, imgUpload]

// 定义install方法，它将作为export暴露的对象的方法被Vue.use调用
const install = function (Vue) {
  // 判断当前组件是否已被安装过，如果已安装过则不再安装
  if (install.installed) return
  install.installed = true

  // 遍历components数组，依次注册每个组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ...components // 将插件暴露出去，这样可以按需引入
}
// 如果只需要部分组件，请使用import {button} from ''
// Vue.component(Button)的语法手动注册组件
// 这样便可以实现按需引入
