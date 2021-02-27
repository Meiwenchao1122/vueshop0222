import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import User from '../components/user/Users'
import Roles from '../components/right/Roles'
Vue.use(VueRouter)

const routes = [

  {path:'/',redirect:'/login'},
  {path:'/login',component:Login},
  {path:'/home',component:Home,
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        component:Welcome,
      },
      {path:'/users',component:User},
      {path:'/roles',component:Roles},
    ]  
  }
 ]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path === '/login') return next()
  
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})

export default router
