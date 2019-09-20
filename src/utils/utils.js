import Vue from 'vue'

export default {
    install() {
        Vue.prototype.$initLogin = function () {
            const userInfo = window.sessionStorage.getItem('userInfo')
            if (userInfo){
                return true
            } else{
                return false
            }
        }
    }
}
