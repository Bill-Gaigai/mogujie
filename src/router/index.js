import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由引入
import Layout from '../views/layout/index.vue'

// 二级路由引入
import Home from '../views/home/index.vue'
import Category from '../views/category/index.vue'
import ShopCar from '../views/shopcar/index.vue'
import Mine from '../views/mine/index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        component: Layout,
        redirect: '/layout/home',
        children: [{
                path: 'home',
                component: Home
            },
            {
                path: 'category',
                component: Category
            },
            {
                path: 'shopcar',
                component: ShopCar
            },
            {
                path: 'mine',
                component: Mine
            },
        ]

    },


]

const router = new VueRouter({
    routes
})

export default router