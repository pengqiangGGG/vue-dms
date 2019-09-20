import {get,post} from "./instance";


//mock的登陆接口
export const Admin_login = (data) => {
    return post('/user/login',data)
}

//mock的表格信息
export const customer_data = (data) => {
    return get('/customer/index',data)
}

