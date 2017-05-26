<template>
  <div>
    手机号<input type="text" v-model="cellphone"><br>
    密码<input type="text" v-model="password"> <br>
    短信验证码<input type="text" v-model="validcode"> 获取短信：<input type="button" value="获取短信" @click='huoqu'> <br>
    图片验证码 <input type="text" v-model="imgcode"> <img @click ='getsrc' :src='imgsrc'><br>
    <input type="button" value="注册" @click="register">
  </div>
</template>

<script>
    import qs from 'qs'
    export default {
        name: 'register',
        data() {
            return {
                imgsrc: "/xinda-api/ajaxAuthcode",
                cellphone: '',
                password: '',
                validcode: '',
                imgcode: '',
            }
        },
        methods: {
            getsrc() {
                this.imgsrc = "/xinda-api/ajaxAuthcode/##";
            },
            register() {
                this.ajax.post('/xinda-api/register/register', qs.stringify({
                    cellphone: '' + this.cllphone,
                    smsType: 1,
                    validCode: '' + this.validcode,
                    password: '' + this.password,
                    regionId: 110010,
                })).then(function(data) {
                    console.log(data)
                })
            },
            huoqu() {
                this.ajax.post('/xinda-api/register/sendsms', qs.stringify({
                    cellphone: '' + this.cllphone,
                    smsType: 1,
                    imgCode: '' + this.imgcode,
                })).then(function(data) {
                    console.log(data)
                })
            }
        }
    }
</script>


<style scoped lang="less">
    input {
        border: 1px solid #ccc;
    }
    
    img {
        width: 50px;
        height: 20px;
        border: 1px solid #ccc;
    }
</style>