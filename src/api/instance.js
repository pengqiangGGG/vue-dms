import axios from 'axios'


const instance = axios.create({
    timeout:5000,//请求超时时间
    // baseURL:'',
    baseURL:process.env.NODE_ENV === 'development'?"":'https://elm.cangdu.org',//请求地址前缀
    // headers: {
    // "Content-Type": "application/x-www-form-urlencoded"
    // },
})

//添加请求拦截器
instance.interceptors.request.use(
        config => {
            //如果有token
            // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
            // if(token){
            //   config.params = {'token':token}
            // }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
)

//添加response拦截器
instance.interceptors.response.use(
    response => {
        // if(response.data.code ==2){
        //     这里判断请求返回的状态码做逻辑处理
        // }
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

//封装get方法
export function get(url,params={}) {
    return new Promise((resolve,reject) => {
        instance.get(url,{params:params}).then(response => {
            resolve(response.data)
        }).catch(err => {
            reject(err)
        })
    })
}

//封装post方法
export function post(url,data={}) {
    return new Promise((resolve,reject) => {
        instance.post(url,data).then(response => {
            resolve(response.data)
        }).catch(err => {
            reject(err)
        })
    })
}
