// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// axios.post('http://115.182.107.203:8088/xinda/xinda-api/cart/list', {})
//     .then(function(res) {
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

Vue.config.productionTip = false
Vue.prototype.ajax = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },

})