import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
Vue.use(VueRouter)

// 1.创建路由
// 2.将路由与组件进行映射
// 3.创建router实例
const routes = [
    // 主路由
    {
        path: '/',
        component: Main,
        redirect:'./home', //重定向
        // 子路由
        children: [
            {
                path: "home",
                component: Home
            },

            {
                path: "user",
                component: User
            },
            {
                path: "mall",
                component: Mall
            },
            {
                path: "page1",
                component: PageOne
            },
            {
                path: "page2",
                component: PageTwo
            },
        ]
    }

]

const router = new VueRouter({
    routes
})

export default router


