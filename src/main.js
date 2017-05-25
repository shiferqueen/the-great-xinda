// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import axios from 'axios'
import qs from 'qs'
import store from './store'

Vue.use(qs)
    // axios.defaults.baseURL = 'https://api.example.com';
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
=======
import store from './store'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.ajax = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
>>>>>>> 1cb26d58b1074383564070e1f551660381339919

// axios.post('http://115.182.107.203:8088/xinda/xinda-api/cart/list', {})
//     .then(function(res) {
//         console.log('res==', res);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

Vue.config.productionTip = false
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
})