import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to ,from ,next) => {
    //console.log(to)
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})