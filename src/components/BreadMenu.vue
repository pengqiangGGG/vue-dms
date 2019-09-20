<template>
    <div class="bread_nav">
        <ul>
            <router-link v-for="(url,index) in list" :key="index" :to="url.path" tag="li">
                <span :class="{'active':isActive(url)}"><i class="fa fa-home" v-if="index == 0"></i>{{url.meta.name}}</span>
                <img src="../../public/static/images/close_icon.png" alt="" @click.stop="delRouteList(url)" v-if="index !== 0">
            </router-link>
        </ul>
        <div class="fa fa-bars closeMoreWindowBtn" @click="showClose = !showClose">
            <ul v-show="showClose">
                <li @click.stop="closeAll">全部关闭</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "",
        data(){
            return{
                showClose:false
            }
        },
        computed:{
            // list(){
            //     return this.$store.state.bread.list
            // }
            ...mapState({
                list:state=>state.bread.list
            })
        },
        methods:{
            ...mapActions('bread',['addBreadList','delBreadList','delAllList']),
            //是否显示的当前路由
            isActive(route) {
                return route.path == this.$route.path;
            },
            addRouteList(){
                //路由改变时执行的方法
                // console.log(this.$route)
                if(this.$route.name){
                    if(this.$route.name == 'home')return
                    if(this.$route.name == 'login')return
                    const route = this.$route
                    // this.$store.dispatch('addBreadList',route)
                    this.addBreadList(route)
                }
            },
            delRouteList(route){
                //点击删除的箭头
                //先提交删除数据的方法,数组删除出掉数据后，如果关闭的是当前打开的路由需要将路由改为数组最后一次push进去的路由
                if(route.name == 'home')return
                // this.$store.dispatch('delBreadList',route).then(res=>{
                //     if(this.isActive(route)){
                //         //只有在关闭当前打开的标签页才会有影响
                //         let lastRoute = res.slice(-1)[0]; //选取路由数组中的最后一位
                //         if (lastRoute) {
                //             this.$router.push(lastRoute);
                //         } else {
                //             this.$router.push("/");
                //         }
                //     }
                // })
                this.delBreadList(route).then(res=>{
                    if(this.isActive(route)){
                                //只有在关闭当前打开的标签页才会有影响
                        let lastRoute = res.slice(-1)[0]; //选取路由数组中的最后一位
                        if (lastRoute) {
                            this.$router.push(lastRoute);
                        } else {
                            this.$router.push("/");
                        }
                    }
                })
            },
            closeAll(){
                this.delAllList().then(()=>{
                    this.$router.push("/");
                    this.showClose = false
                })
            }
        },
        watch:{
            $route(){
                this.addRouteList()
            }
        }
    }
</script>

<style scoped>
    .bread_nav{height: 32px;padding-top: 7px;box-sizing: border-box;position: relative}
    .top_menu .bread_nav>ul{padding-left: 15px;}
    .top_menu .bread_nav>ul>li{display: inline-block;color: #5299ff;font-size: 15px;font-weight: bolder;margin-left: 15px;cursor: pointer;float: left;vertical-align: top;box-sizing: border-box}
    .top_menu .bread_nav>ul>li:nth-child(1){margin-left: 0px;}
    .top_menu .bread_nav>ul>li>span{padding-bottom: 2px;font-weight: bolder}
    .top_menu .bread_nav>ul>li>span>i{font-size: 15px;top: -1px}
    .top_menu .bread_nav>ul>li>span.active{border-bottom: 2px solid #5299ff;padding-bottom: 2px;}
    .top_menu .bread_nav>ul>li>img{vertical-align: top;position: relative;margin-left: 2px;top: -1px}
    .top_menu .bread_nav>ul>li>img:hover{transform: scale(1.1);}
    .bread_nav .closeMoreWindowBtn{
        text-align: center;
        width: 35px;
        line-height: 35px;
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        z-index: 99;
        color: #5299ff;
    }
    .bread_nav .closeMoreWindowBtn ul{position: absolute;left: -150px}
    .bread_nav .closeMoreWindowBtn ul li{
        width: 150px;
        margin-top: -1px;
        border: 1px solid #ccc;
        line-height: 35px;
        height: 35px;
        color: #000;
        background: #fff;
        font-size: 13px;
    }
</style>
