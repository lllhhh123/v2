export default{
    state:{
        isCollapse:false //控制菜单隐藏和展开
    },
    mutations:{
        // 修改菜单状态
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}