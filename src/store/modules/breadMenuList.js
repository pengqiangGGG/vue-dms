const bread = {
    namespaced: true,
    state:{
      list:[{path:'/',name:'home',meta:{name:'首页',keepAlive: true}}]//存放浏览过的且不重复的页面路由数据
    },
    mutations:{ //定义处理路由数据的方法
        //打开新的页面添加路由数据
        OPEN_BREAD_ITEM(state,item){
            //打开的页面路由中已存在
            if(state.list.some(i => i.path == item.path)) return

            //不存在
            state.list.push({
                name:item.name,
                path:item.path,
                meta:item.meta
            })
        },

        //关闭路由
        CLOSE_BREAD_ITEM(state,item){
            //es6中entries() 该方法返回一个新的Array Iterator对象，该对象包含数组中每个索引对应的键/值对['a','b','c'].entries() => [0,'a'][1,'b'][2,'c']
            for (let[i,v] of state.list.entries()){
                if(v.path ==  item.path){
                    state.list.splice(i,1)
                    break
                }
            }
        },
        //关闭所有的路由
        CLOSE_ALL_ITEM(state){
            state.list = []
            state.list = [{path:'/',name:'home',meta:{name:'首页',keepAlive: true}}]
        }
    },
    actions:{//把mutations里面的方法变成异步
        addBreadList({commit},item){
            commit('OPEN_BREAD_ITEM',item)
        },
        delBreadList({commit,state},item){
            // commit('CLOSE_BREAD_ITEM',item)
            //删除数组存放的路由之后，需要再去刷新路由，这是一个异步的过程，需要有回掉函数，所以使用并返回promise对象，也可以让组件在调用的时候接着使用.then的方法
            return new Promise((resolve)=>{
                commit('CLOSE_BREAD_ITEM',item)
                resolve([...state.list])
            })
        },
        delAllList({commit,state}){
            //关闭所有路由之后需要回调事件刷新路由
            return new Promise((resolve)=>{
                commit('CLOSE_ALL_ITEM')
                resolve([...state.list])
            })
        }
    }
}

export default bread
