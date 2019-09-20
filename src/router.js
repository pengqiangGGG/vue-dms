import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Login = r => require.ensure([], () => r(require('./view/login/login')), 'login')
const Index = r => require.ensure([], () => r(require('./view/index')), 'index')
const Home = r => require.ensure([], () => r(require('./view/pages/home')), 'home')
const Test = r => require.ensure([], () => r(require('./view/pages/test')), 'test')
const One = r => require.ensure([], () => r(require('./view/pages/one')), 'one')
const Two = r => require.ensure([], () => r(require('./view/pages/two')), 'two')
const Three = r => require.ensure([], () => r(require('./view/pages/three')), 'three')
const Four = r => require.ensure([], () => r(require('./view/pages/four')), 'four')
const Five = r => require.ensure([], () => r(require('./view/pages/five')), 'five')
const FlowMark = r =>require.ensure([], () => r(require('./view/pages/CustomerManagement/flowMark')), 'FlowMark')
const Reception = r =>require.ensure([], () => r(require('./view/pages/CustomerManagement/reception')), 'reception')
const CustomerMessage = r =>require.ensure([], () => r(require('./view/pages/CustomerManagement/customerMessage')), 'customerMessage')
const Print = r =>require.ensure([], () => r(require('./view/pages/printPage/print')), 'print')
Vue.use(Router)



// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
// const scrollBehavior = function (to, from, savedPosition) {
//   if (savedPosition) {
//     // savedPosition is only available for popstate navigations.
//     return savedPosition
//   } else {
//     const position = {}
//
//     // scroll to anchor by returning the selector
//     if (to.hash) {
//       position.selector = to.hash
//       console.log(to.hash)
//       alert("11111111111111")
//       // specify offset of the element
//       if (to.hash === 'one') {
//         position.offset = { y: 300 }
//       }
//
//       // bypass #1number check
//       if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
//         return position
//       }
//
//       // if the returned position is falsy or an empty object,
//       // will retain current scroll position.
//       return false
//     }
//
//     return new Promise(resolve => {
//       // check if any matched route config has meta that requires scrolling to top
//       if (to.matched.some(m => m.meta.scrollToTop)) {
//         // coords will be used if no selector is provided,
//         // or if the selector didn't match any element.
//         position.x = 0
//         position.y = 0
//       }
//
//       // // wait for the out transition to complete (if necessary)
//       // this.app.$root.$once('triggerScroll', () => {
//       //   // if the resolved position is falsy or an empty object,
//       //   // will retain current scroll position.
//       //   resolve(position)
//       // })
//     })
//   }
// }

export default new Router({
  mode:'history',
  scrollBehavior(to) {
    if(to.path==="/one"){
      // console.log("1111111111111111111111111111111111111111111")
      //只能控制一级路由的滚动条高度，不能控制子路由的滚动条高度
      return {
        x:0,
        y:100
      }
    }
    // 跳转到指定的选择器
    // if(to.path==="/one"){
    //   return {
    //     selector:"#toolbar_demo3"
    //   }
    // }
  },
  routes: [
    {
      path:'/',
      component:Index,
      meta:{name:'首页',},
      children:[
        {path:'/',name:'home',component:Home,meta:{name:'首页',keepAlive: true}},
        {path:'test',name:'test',component:Test,meta:{name:'页面一',keepAlive: true}},
        {path:'one',name:'one',component:One,meta:{name:'页面一',keepAlive: true}},
        {path:'two',name:'two',component:Two,meta:{name:'页面二',keepAlive: true}},
        {path:'three',name:'three',component:Three,meta:{name:'页面三',keepAlive: true}},
        {path:'four',name:'four',component:Four,meta:{name:'页面四',keepAlive: true}},
        {path:'five',name:'five',component:Five,meta:{name:'页面五',keepAlive: true}},
        {path:'flowMark',name:'flowMark',component:FlowMark,meta:{name:'展厅流量登记',keepAlive: true}},
        {path:'reception',name:'reception',component:Reception,meta:{name:'展厅接待',keepAlive: true}},
        {path:'customerMessage',name:'customerMessage',component:CustomerMessage,meta:{name:'客户信息',keepAlive:true}}
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/print',
      name:'print',
      component:Print,
      meta:{name:'打印',keepAlive:true}
    }
  ]
})

