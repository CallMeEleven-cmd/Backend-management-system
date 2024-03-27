import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import './api/mock';
import Cookie from 'js-cookie'


Vue.config.productionTip = false


Vue.use(ElementUI)

//按需引入。优点是减少代码量,减少用户加载时间
// Vue.use(Row)
// Vue.use(Button)

//添加全局前置守卫
router.beforeEach((to, from, next) => {
  // 判断token存在不存在
  const token = Cookie.get('token')
  if (!token && to.name !== 'login' ){
    next({ name:'login' })
  }else if (token && to.name === 'login'){//token存在，说明用户登录，跳转至首页
    next ({name : 'home' })
  }else{
    next() 
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu',router)
  },
 }).$mount('#app')
 