export default {
    state: {
        isCollapse: false, //控制菜单隐藏和展开
        tebsList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            }
        ] //面包屑数据
    },
    mutations: {
        // 修改菜单状态
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state, val ){
            console.log(val);
            // 判断添加的数据是否为首页
            if (val.name !== 'home') {
                const index = state.tebsList.findIndex(item => item.name === val.name)
                // 如果不存在
                if(index === -1){
                    state.tebsList.push(val)
                }
            }
        },
        // 删除指定的tag数据
        closeTag(state,item){
            console.log(item,'item');
            const index = state.tebsList.findIndex(val => val.name ===item.name)
            state.tebsList.splice(index,1)
        }

    }
}