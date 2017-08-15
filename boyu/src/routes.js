import Login from './views/login/Login.vue'
import NotFound from './views/404/404.vue'
import Home from './views/Home.vue'
import Main from './views/home/Main.vue'
import Personaldate from './views/personaldate/Personaldate.vue'
import Commodity from './views/commodity/Commodity.vue'
import Details from './views/commodity/Details.vue'
import Order from './views/order/Order.vue'
import Doname from './views/doname/Doname.vue'
import { Message } from 'element-ui';
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true,
        beforeEnter: (to, from, next) => {
            var _this=this;
            if(to.path&&(!localStorage.getItem('currentUser_name'))){
                    next()
            }else{
                Message.success({
                    message: '您已经在登陆状态!',
                    type: 'warning'
                })
                next({                        
                    path:'/main',
                    query:{redirect:to.fullPath}
                })
            }
        }
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
     {
        path: '/',
        component: Home,
        name: '',
        children: [
            { path: 'main', component: Main, name: '最近消息',meta:{requiresAuth:true}}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        children: [
            { path: 'personaldate', component: Personaldate, name: '更改个人资料',meta:{requiresAuth:true}}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        children: [
            { path: 'commodity', component: Commodity, name: '商品列表',meta:{requiresAuth:true}}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        children: [
            { path: 'order', component: Order, name: '订单中心',meta:{requiresAuth:true}}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        children: [
            { path: 'doname', component: Doname, name: '域名管理',meta:{requiresAuth:true}}
        ]
    },
        {
        path: '/',
        component: Home,
        name: '',
        children: [
            { path: 'details', component: Details, name: '订单状态',meta:{requiresAuth:true}}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;