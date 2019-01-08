import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const mainRouter = [{
        path: '/',
        name: 'Login',
        component: () => import('@/views/login')
    },{
        path: '/evaluation',
        name: 'Layout',
        component: () => import('@/components/layout'),
        redirect: '/evaluation/evaluation',
        children: [
            {
                path: '/evaluation/evaluation',
                name: 'Evaluation',
                component: () => import('@/views/evaluation/evaluation')
            },{
                path: '/evaluation/sort',
                name: 'Sort',
                component: () => import('@/views/evaluation/sort')
            },{
                path: '/agency/agency',
                name: 'Agency',
                component: () => import('@/views/agency/agency')
            },{
                path: '/user/user',
                name: 'User',
                component: () => import('@/views/user/user')
            },{
                path: '/market/commission',
                name: 'Commission',
                component: () => import('@/views/market/commission')
            },{
                path: '/market/coupon',
                name: 'Coupon',
                component: () => import('@/views/market/coupon')
            },{
                path: '/market/share',
                name: 'Share',
                component: () => import('@/views/market/share')
            },{
                path: '/order/order',
                name: 'Order',
                component: () => import('@/views/order/order')
            },{
                path: '/password/password',
                name: 'Password',
                component: () => import('@/views/password/password')
            },
        ]
    }
]

export default new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: mainRouter
})
