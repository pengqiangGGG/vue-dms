//全局时间过滤器
import Vue from 'vue'

Vue.filter('filterTime',function (time) {
    if(!time){
        return
    }
    const date = new Date(time)
    const dateNumFun = (num) => num<10?`0${num}`:num
    const [Y,M,D,h,m,s] = [ //解构赋值es6
        date.getFullYear(),
        dateNumFun((date.getMonth()+1)),
        dateNumFun(date.getDate()),
        dateNumFun(date.getHours()),
        dateNumFun(date.getMinutes()),
        dateNumFun(date.getSeconds())
    ]
    return `${Y}-${M}-${D} ${h}:${m}:${s}`
})
