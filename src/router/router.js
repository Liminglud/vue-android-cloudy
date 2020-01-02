import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'register',
        redirect:'/login'  // 重定向到登录
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/Index.vue')
    },

    {
        path: '/group',
        name: 'group',
        component: () => import('../views/Group.vue')
    },
    {
        path: '/groupinformation',
        name: 'groupinformation',
        component: () => import('../views/GroupInformation.vue')
    },
    {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/Mine.vue')
    },
    {
        path: '/personindex',
        name: 'personIndex',
        component: () => import('../views/PersonIndex.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

