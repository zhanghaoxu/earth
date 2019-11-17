import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/index'
import My from '@/pages/My/index'
import Find from '@/pages/Find/index'
Vue.use(VueRouter)

const routes=[   
    {
        path: '/home',
        component: Home
    },
    {
        path: '/find',
        component: Find
    },
    {
        path: '/my',
        component: My
    }   
]

export default new VueRouter({
    routes
})