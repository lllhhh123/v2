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
                name:'home',
                component: Home
            },

            {
                path: "user",
                name:'user',
                component: User
            },
            {
                path: "mall",
                name:'mall',
                component: Mall
            },
            {
                path: "page1",
                name:'page1',
                component: PageOne
            },
            {
                path: "page2",
                name:'page2',
                component: PageTwo
            },
        ]
    }

]

const router = new VueRouter({
    routes
})

export default router


let originPush=VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace;
//重写push/replace
//第一个参数：告诉原来的push方法，往哪里跳转（传递哪些参数）
//第二个参数：成功的回调
//第三个参数：失败的回调
//call/apply区别
//相同点：都可以调用函数一次，都可以篡改函数的上下文(this）一次‘
//不同点：call/apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}