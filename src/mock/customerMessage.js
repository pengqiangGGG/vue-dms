//添加一个mock规则
const Mock = require('mockjs')
const Random = Mock.Random //获取mock.random对象

// mock一组数据
const produceNewsData  = function () {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            id:i+1,
            comeType: Random.csentence(5, 8), //  Random.csentence( min, max )
            sex: Random.csentence(1, 2), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            author_icon: Random.dataImage('50x50', 'mock的图片'),
            number: Random.natural(0,3000),//随机生成一个浏览次数
            date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            customerType:Random.csentence(1, 2),
            customerPhone:Random.natural(10000000000,2000000000),
            customerNum:Random.natural(1000,10000),
            customerTime: Random.date('yyyy-MM-dd'),
            leaveTime:Random.date(),
            sellName:  Random.cname(),
            isTrueComplete: '是',
            thinkType: Random.csentence(2, 4),
            thinkCar: 'X1',
            thinkLevel:Random.csentence(5, 8)
        }
        articles.push(newArticleObject)
    }
    return{
        articles: articles
    }
}
Mock.mock('/customer/index', 'get', produceNewsData);
