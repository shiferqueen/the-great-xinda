<template>
  <div>
    手机号<input type="text" v-model="cellphone"><br>
    密码<input type="text" v-model="password"> <br>
    图片验证码 <input type="text" v-model="imgcode"> <img @click ='getsrc' :src='imgsrc'><br>
    <input type="button" value="登录" @click="login">
  </div>
</template>

<script>
    import qs from 'qs'
    export default {
        name: 'login',
        data() {
            return {
                imgsrc: "/xinda-api/ajaxAuthcode",
                cellphone: '',
                password: '',
                imgcode: '',
            }
        },
        methods: {
            getsrc() {
                this.imgsrc = "/xinda-api/ajaxAuthcode/##";
            },
            login() {
                this.$ajax.post('/xinda-api/sso/login', qs.stringify({
                    loginId: '' + this.cllphone,
                    password: '' + this.password,
                    imgCode: '' + this.imgcode,
                })).then(function(data) {
                    console.log(data)
                })
            },
        }
    }
</script>


<style scoped lang="less">
    input {
        border: 1px solid #ccc;
    }
</style>