<template>
    <div id="login">
        <div class="login_left">
            <div class="title">欢迎</div>
        </div>
        <div class="login_right">
            <div class="info">
                <div class="log_img">
                    <img src="../../../public/static/images/bmw_logo.png" alt="">
                </div>
                <div class="user_sign">
                    <div class="sign_item">
                        <label>公司编码：</label>
                        <input type="text" v-model="companyName">
                    </div>
                    <div class="sign_item">
                        <label>用&nbsp;&nbsp;户&nbsp;名：</label>
                        <input type="text" v-model="user">
                    </div>
                    <div class="sign_item">
                        <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  码：</label>
                        <input type="password" v-model="password">
                    </div>
                    <div class="forget">
                        <div><input type="checkbox">记住用户名</div>
                        <div>
                            <span>忘记密码？</span>
                        </div>
                    </div>
                    <div class="submit">
                        <button @click="login">登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Admin_login} from '../../api/api'
    export default {
        name: "login",
        data(){
            return{
                companyName: '',
                user:'',
                password:''
            }
        },
        created(){

        },
        methods:{
            login(){
                if (this.companyName == 'Admin'&&this.user == 'Admin'&&this.password == '123456'){
                    this.$message.success('登陆成功！')
                    this.$router.push('/')
                    const userInfo = {
                        companyName:this.companyName,
                        user:this.user,
                        password: this.password
                    }
                    window.sessionStorage.setItem('userInfo',JSON.stringify(userInfo))
                }else if(this.companyName == ''||undefined){
                    this.$message.error('请输入公司编码！');
                }else if(this.user == ''||undefined){
                    this.$message.error('请输入用户名！');
                }else if(this.password == ''||undefined){
                    this.$message.error('请输入密码！');
                }else {
                    this.$message.error('请输入正确的登录信息！');
                }
            // //     //模拟请求接口
            // let params = {
            //     user_name: this.user,
            //     password: this.password
            // };
            // Admin_login(params).then(res => {
            //     console.log(res)
            // })
            }
        }
    }
</script>

<style scoped>
    #login{height: 100%;}
    #login:after{content: '';display: block;clear: both;visibility: hidden;}
    #login .login_left{height: 100%;width: 55%;background-image: url("../../../public/static/images/bmw_login_bg.png");background-repeat: no-repeat;background-size: cover;float: left;}
    #login .login_left .title{font-size: 45px;text-align: center;padding-top: 160px;font-weight: bolder;color: white;}
    #login .login_right{width: 45%;height: 100%;background-color: white;float: left;}
    #login .login_right .info{width: 450px;padding: 15px 15px 0 60px;}
    #login .login_right .info .log_img{text-align: right;margin-bottom: 60px;}
    #login .login_right .info .log_img>img{width: 110px;}
    #login .login_right .info .user_sign .sign_item{padding: 8px 0;border-bottom: 1px solid #7d7d7d;margin-top: 30px;}
    #login .login_right .info .user_sign .sign_item>label{font-size: 15px;color: #7d7d7d;}
    #login .login_right .info .user_sign .sign_item>input{border: none;outline: none;padding: 6px 0;font-size: 16px;color: black;}
    #login .login_right .info .user_sign .forget{display: flex;}
    #login .login_right .info .user_sign .forget>div{flex: 1;line-height: 60px;font-size: 12px;}
    #login .login_right .info .user_sign .forget>div>input{position: relative;top: 2px;}
    #login .login_right .info .user_sign .forget>div:nth-child(2){text-align: right;}
    #login .login_right .info .user_sign .submit{margin-top: 45px;}
    #login .login_right .info .user_sign .submit>button{width: 100%;height: 50px;padding: 0 20px;
        background-color: #1c69d4!important;border: 0 none;box-shadow: 0 1px 4px 0 rgba(0,0,0,.29);
        -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.29);-moz-box-shadow: 0 1px 4px 0 rgba(0,0,0,.29);font-size: 14px;font-weight: 700;line-height: 50px;
        color: #fff;border-radius: 0!important;cursor: pointer;}

</style>
