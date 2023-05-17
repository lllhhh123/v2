<template>
    <div>
        <el-container>
            <el-aside width="auto">
                <CommonAside/>
            </el-aside>
            <el-container>
                <el-header>
                    <CommonHeader/>
                </el-header>
                <CommonTag/>
                <el-main>
                    <!-- 路由出口 -->
                    <!-- 路由匹配到的组件将渲染在这里 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonTag from '../components/CommonTag.vue';
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue'
export default {
    data() {
        return {}
    },
    components:{
        CommonAside,
        CommonHeader,
        CommonTag
    }
}
</script>
<style scoped>
    .el-header{
        padding: 0;
    }
</style>