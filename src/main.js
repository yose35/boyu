import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
//ui库
import ElementUI from 'element-ui'
import './assets/theme/theme-cyan/index.css'
//路由
import VueRouter from 'vue-router'
//vuex
import Vuex from 'vuex'
import store from './vuex/'

//路由调用
import routes from './routes'
// import Mock from './mock'
// Mock.bootstrap();
//字体图标样式
import 'font-awesome/css/font-awesome.min.css'

//异步组件
import axios from 'axios'
Vue.prototype.$http=axios;
axios.defaults.baseURL = 'http://api.cdn.dev/v1';
axios.defaults.timeout = 5000;    
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; 

//加载效果
import Loading from './components/loading/'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//popup
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Loading)

const router = new VueRouter({
  mode:'history',
  scrollBehavior:()=>({
    y:0
  }),
  routes
})
router.beforeEach((to, from, next) => {
  let user = localStorage.getItem('currentUser_name');
    if (to.meta.requiresAuth) {  
          if(!user){
              next({
                path:'/login',
                query:{redirect:to.fullPath}
            })
          }else{
            next()
          }
    }else {
      next()
    }
 })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export{
  router
}