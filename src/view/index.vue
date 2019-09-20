<template>
        <div id="content">
            <div class="left_part">
                <div class="top_log">
                    <img src="../../public/static/images/bmw.png" alt=""><span>DMS系统</span>
                </div>
                <div class="menu">
                    <ul>
                        <li v-for="(item,index) in leftMenuList" :class="{'activeBg':active==index}" :key="index" @click="chooseMenu(index)">
                            <p>{{item.name}}</p>
                            <div class="item_menu_wrap" v-if="active == index">
                                <ul v-if="item.second">
                                    <li v-for="(sec,index) in item.second" :key="index">
                                        <p>{{sec.name}}</p>
                                        <ul v-if="sec.third">
                                            <li v-for="(third,index) in sec.third" :key="index">
                                                <!--<router-link :to='"/"+third.url' tag="p">{{third.name}}</router-link>-->
                                                <p @click.stop="goPage(third.name,third.url)">{{third.name}}</p>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right_part" @click="active = undefined">
                <div class="top_menu">
                    <div class="admin_manager">
                        <div class="person_info">
                            <img src="../../public/static/images/user_log.png" alt=""><span style="font-size: 16px;font-weight: bolder;">管理员</span><span style="font-size:12px;color:#8c8c8c;margin-left:7px">百事可乐</span>
                        </div>
                        <div class="person_menu">
                            <ul>
                                <li><i class="fa fa-question-circle"></i>使用帮助</li>
                                <li @click="showMsgInfo"><i class="fa fa-envelope"></i>系统通知<span class="message_info">1</span></li>
                                <li @click="showPersonSetting"><i class="fa fa-gear"></i>个人设置</li>
                                <li><i class="fa fa-power-off"></i>退出登录</li>
                            </ul>
                        </div>
                    </div>
                    <breads></breads>
                </div>
                <div id="main_content" :style="'height:'+contentHeight+'px;'">
                    <router-view></router-view>
                </div>
            </div>
            <!--右下角信息弹框-->
            <div class="msg_box" :class="{'boxTransition':showMsgBox == true}">
                <div class="msg_top">
                    <h2>提醒信息</h2>
                    <img src="../../public/static/images/close.png" alt="" class="close_msgBox" @click="showMsgBox = false">
                </div>
                <div class="msg_body">
                    <p>还有<span>1</span>个提车任务未完成!</p>
                </div>
            </div>
            <!--个人设置弹框-->
            <div class="person_setting" v-show="showSettingBox">
                <div class="setting_box" :class="{'personSettingBox':showSettingBox == true,'minBox':showSettingBox == false}" key="settingBox">
                    <div class="tab_wrap" style="font-size: 0">
                        <div class="tab_item" :style="index == 1?'background-color: #999;color: white':''" @click="index = 1">
                            修改密码
                            <div class="tab_content" :style="{'left': '-1px','display':index == 1?'block':'none'}">
                                <div class="password">
                                    <span>旧密码：</span><input type="text">
                                </div>
                                <div class="password">
                                    <span>新密码：</span><input type="text">
                                </div>
                                <div class="password">
                                    <span>确认新密码：</span><input type="text">
                                </div>
                            </div>
                        </div>
                        <div class="tab_item" :style="index == 2?'background-color: #999;color: white':''" @click="index = 2">
                            更换主题
                            <div class="tab_content" :style="{'left': '-80px','display':index == 2?'block':'none'}">
                                <div class="colorType">
                                    <div>
                                        <div class="color_item" style="background-color: #799edf"></div>
                                        <div>
                                            <input type="radio" style="position: relative;top: 2px;left: -2px" name="theme">经典蓝
                                        </div>
                                    </div>
                                    <div>
                                        <div class="color_item" style="background-color: #3399ff;"></div>
                                        <div>
                                            <input type="radio" style="position: relative;top: 2px;left: -2px" name="theme">简约
                                        </div>
                                    </div>
                                    <div>
                                        <div class="color_item" style="background-color: #e8efff"></div>
                                        <div>
                                            <input type="radio" style="position: relative;top: 2px;left: -2px" name="theme">传统
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab_item" :style="index == 3?'background-color: #999;color: white':''" @click="index = 3">
                            数据账套
                            <div class="tab_content" :style="{'left': '-159px','display':index == 3?'block':'none'}">
                                <div style="padding-top:80px;text-align: center">
                                    设置数据账套：
                                    <select>
                                        <option>
                                            运行帐套：2018年1月1日～当前时间
                                        </option>
                                        <option>
                                            历史帐套：2010年1月1日～2017年12月31日
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn_wrap">
                        <span>确定</span>
                        <span class="go_back" @click="showSettingBox = false">返回</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import breads from '../components/BreadMenu'
    import menuList from '../utils/menu'
    export default {
        name: "index",
        components:{
            breads
        },
        data(){
            return{
                leftMenuList:menuList,
                active:undefined,
                showMsgBox:false,
                showSettingBox:false,
                index:1,
                contentHeight:undefined,
            }
        },
        created() {
            // console.log(menuList)
            // console.log(this.$initLogin())
            if (this.$initLogin()){
                return
            } else {
                this.$router.push('/login')
            }
        },
        mounted(){
            let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
            this.contentHeight = h - 79
            // 监视浏览器窗口大小变化
            window.onresize = () => {
                return (() => {
                    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
                    this.contentHeight = h - 79
                })();
            };
        },
        methods:{
            chooseMenu(index){
                this.active = index
            },
            goPage(name,url){
                this.$router.replace('/'+url)
                this.active = undefined
            },
            showMsgInfo(){
                this.showMsgBox = !this.showMsgBox
            },
            showPersonSetting(){
                this.showSettingBox = !this.showSettingBox
            },
        }
    }
</script>

<style scoped>
    #content{height: 100%;width: 100%;position: relative;}
    #content .left_part{width: 170px;height: 100%;background-color: #226ad1;position: absolute;top: 0;left: 0;}
    #content .right_part{height: 100%;padding-left: 170px;}
    #content .left_part .top_log{padding: 15px 0 15px 10px;background-color: white;border-right: 1px solid #f5f5f5;}
    #content .left_part .top_log>img{vertical-align: middle;width: 42px;}
    #content .left_part .top_log>span{margin-left: 10px;font-size: 18px;font-weight: bolder;}
    #content .left_part .menu{padding-top: 10px;}
    #content .left_part .menu>ul>li{line-height: 38px;font-size:15px ;color: white;padding-left: 30px;background-image: url("../../public/static/images/arrow.png");background-repeat: no-repeat;
        background-position: 140px 7px ;background-size: 24px 24px;cursor: pointer;position: relative;}
    #content .left_part .menu>ul>li.activeBg{background-color:#598ed0 }
    #content .left_part .menu>ul>li .item_menu_wrap{position: fixed;width: 1000px;top: 72px;left: 169px;height: 100%;background-color: #226ad1;border-left: 1px solid #598ed0;padding-top: 5px;z-index: 2019}
    #content .left_part .menu>ul>li .item_menu_wrap>ul>li{display: inline-block;vertical-align: top;padding: 0 20px;text-align: left;}
    #content .left_part .menu>ul>li .item_menu_wrap>ul>li>p{border-bottom: 1px solid #d2d1d1;font-weight: bolder;font-size: 15px;color: white;line-height: 38px;height: 30px;}
    #content .left_part .menu>ul>li .item_menu_wrap>ul>li>ul>li>p{height: 30px;overflow: hidden;line-height: 30px;text-align: left;color: #d0cece;font-size: 12px;z-index: 1001;position: relative;}
    #content .left_part .menu>ul>li .item_menu_wrap>ul>li>ul>li>p:hover{color: white;}
    #content .left_part .menu>ul>li:hover{background-color: #598ed0;}
    #content .right_part .top_menu{height: 72px;border-bottom: 7px solid #eeeeee;}
    #content .right_part .top_menu .admin_manager{line-height: 38px;display: flex;padding-left: 10px;padding-top: 2px}
    #content .right_part .top_menu .admin_manager>div{flex: 1;}
    #content .right_part .top_menu .admin_manager .person_info>img{width: 24px;height: 24px;vertical-align: middle;position: relative;top: -2px;}
    #content .right_part .top_menu .admin_manager .person_menu{position: relative;}
    #content .right_part .top_menu .admin_manager .person_menu>ul{position: absolute;right: 0px;top: 0;}
    #content .right_part .top_menu .admin_manager .person_menu>ul>li{line-height: 40px;height: 40px;display: inline-block;font-size: 13px;float: left;margin-right: 20px;color: #7d7d7d;position: relative;cursor: pointer;}
    #content .right_part .top_menu .admin_manager .person_menu>ul>li>i{font-size: 18px;margin-right: 5px;position: relative;top: 1px}
    #content .right_part .top_menu .admin_manager .person_menu>ul>li .message_info{position: absolute;width: 16px;line-height: 16px;color: #fff;background: red;border-radius: 50%;font-size: 12px;text-align: center;top: 2px;left: 10px;}
    #content #main_content{padding:10px;overflow-y: auto;box-sizing: border-box}
    #content .msg_box{background-color: #f1f1f1;position: fixed;right: 52px;width: 270px;cursor: pointer;bottom: -100%;z-index: 99;}
    #content .msg_box .msg_top>h2{background-color: #5299ff;color: #fff;font-size: 14px;line-height: 30px;border-top-left-radius: 5px;border-top-right-radius: 5px;text-indent: 5px;}
    #content .msg_box .msg_top>img{position: absolute;left: 245px;top: 7px;width: 14px;cursor: pointer;}
    #content .msg_box .msg_body>p{color: #000;line-height: 27px;font-size: 15px;}
    #content .msg_box .msg_body{background: #f0f0f0;border-radius: 5px;padding: 5px;}
    #content .msg_box .msg_body>p>span{margin: 0 10px;color: #0000FF;font-weight: 600;display: inline-block;text-decoration: underline;}
    #content .boxTransition{bottom:5px;-moz-transition:all 0.5s;-webkit-transition: all 0.5s;-o-transition: all 0.5s}
    #content .person_setting{position: fixed;height: 100%;width: 100%;z-index: 1999;background-color: rgba(0,0,0,.3);top: 0;left: 0;display: block;}
    #content .person_setting .setting_box{position: absolute;box-sizing: border-box;right: 3%;top: 6%;background: #fff;border-radius: 5px;overflow: hidden;padding: 15px 20px;cursor: pointer;}
    #content .person_setting .personSettingBox{width:500px;height:300px;transition: all 0.5s;-moz-transition:all 0.5s;-webkit-transition: all 0.5s;-o-transition: all 0.5s}
    #content .person_setting .minBox{width:0px;height:0px}
    #content .person_setting .setting_box .tab_wrap .tab_item{display: inline-block;font-size: 12px;height: 20px;line-height: 20px;color: #333;border: 1px solid #ccc;padding: 0 15px;box-sizing: border-box;border-bottom:0;border-right: 0;position: relative;}
    #content .person_setting .setting_box .tab_wrap .tab_item:nth-child(3){border-right: 1px solid #ccc;}
    #content .person_setting .setting_box .tab_wrap .tab_item .tab_content{width: 460px;height: 250px;position: absolute;top: 19px;border: 1px solid #ccc;box-sizing: border-box;color: #333;background-color: #ffffff;}
    #content .person_setting .setting_box .tab_wrap .tab_item .tab_content select{height: 27px;line-height: 24px;border: 1px solid #bbb;padding: 3px;vertical-align: middle;min-width: 40px;font-family: "微软雅黑",Helvetica, Arial, sans-serif;}
    #content .person_setting .setting_box .tab_wrap .tab_item .tab_content .password{padding: 15px 0 10px 50px;}
    #content .person_setting .setting_box .tab_wrap .tab_item .tab_content .password>span{width: 100px;text-align: right;display: inline-block;font-size: 13px;}
    #content .person_setting .setting_box .tab_wrap .tab_item .tab_content .password>input{padding: 5px 0;border: 1px solid #bbb;outline: none;}
    #content .person_setting .setting_box .tab_wrap .tab_item .tab_content .colorType{display: flex;}
    #content .person_setting .setting_box .tab_wrap .tab_item .tab_content .colorType>div{flex: 1;padding-top: 60px;text-align: center;align-items: center;vertical-align: middle;}
    #content .person_setting .setting_box .tab_wrap .tab_item .tab_content .colorType>div .color_item{width: 60px;height: 60px;display: inline-block;}
    #content .person_setting .setting_box .btn_wrap{position: absolute;bottom: 25px;left: 50%;transform: translateX(-50%);-moz-transform:translateX(-50%) ;-o-transform: translateX(-50%);-webkit-transform: translateX(-50%);}
    #content .person_setting .setting_box .btn_wrap>span{width: 95px;height: 30px;text-align: center;display: inline-block;line-height: 30px;background: #aaa;color: #fff;font-family: 'microsoft yahei';border-radius: 3px;font-size: 14px;}
    #content .person_setting .setting_box .btn_wrap>span:hover{color: #333333;cursor: pointer;}
</style>
