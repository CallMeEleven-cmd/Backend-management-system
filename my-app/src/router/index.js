import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/myHome.vue'
import User from '../views/myUser.vue'
import Main from '../views/myMain.vue'
import Mall from '../views/myMall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/myLogin.vue'


Vue.use(VueRouter)

//1.创建路由组件

//2.将路由与组件进行映射
const routes = [
    //主路由
    {
        path:'/',
        component:Main,
        name:'Main',
        redirect:'/home',//重定向
        children: [
            //子路由，这里如果写死了会导致用户访问界面的权限失效
            // { path: 'home', name:'home', component: Home },//首页
            // { path: 'user',name: 'user', component: User },//用户管理
            // { path: 'mall', name: 'mall', component: Mall},//商品管理
            // { path: 'page1', name: 'page1', component:PageOne  },//页面1
            // { path: 'page2', name: 'page2', component:PageTwo } //页面2
        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login
    }
 
]

//3.创建router实例
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

export default router


