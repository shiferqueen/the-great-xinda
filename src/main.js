// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import md5 from 'md5'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

//拼音 


Vue.config.productionTip = false
Vue.use(iView)


Vue.prototype.md5 = md5
Vue.prototype.ajax = axios
Vue.use(iView);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})

// var pinyin = require("node-pinyin");
 
// console.log(pinyin("重心"));    // [ [ 'zhòng' ], [ 'xīn' ] ] 
// console.log(pinyin("重心", {
//   heteronym: true               // 启用多音字模式 
// }));              

//时间格式
Date.prototype.format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}