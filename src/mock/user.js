//mock用户登录
const Mock = require('mockjs')
const Random = Mock.Random //获取mock.random对象

const userLogin = function(data){
    if (data.username == 'admin' && parseInt(data.password) == 123456){
        let userInfo = {
            code:200,
            name:"小明",
            icon:Random.dataImage('120x120', 'mock的图片'),
            level:Random.natural(10,50),
            fans:Random.natural(1000,2000),
            concern:Random.natural(10,20),
            collect:Random.natural(10,100),
            shop:Random.natural(50,100),
            coupon:Random.natural(100,200),
            token:"#13216546465",
        }
        return userInfo
    }else{
        let userInfo = {
            code:400,
            text: "密码错误！"
        }
        return userInfo
    }
}

Mock.mock('/user/login', 'post', (options)=>{ //登录接口
    // console.log(options.body)
    let data = JSON.parse(options.body)
    // console.log(data)
    return userLogin(data)
});
