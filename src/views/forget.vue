<template>
  <div>
    <div>
        <div class="top">
            <img src="../images/logos/logo.png" alt="">
            <a href="">忘记密码</a>
        </div>
        <div class="buttom">
            <div class="next">
                <div class="left">
                    <input type="text" v-model="cellphone" class="phone" placeholder="请输入手机号"><br>
                    <input type="text" v-model="validcode" class="code1" placeholder="请输入短信验证码"> <input type="button" value="获取短信" @click='huoqu' class="text"> <br>
                    <input type="text" class="code" v-model="imgcode" placeholder="请输入图片验证码"> <img @click ='getsrc' src='/xinda-api/ajaxAuthcode'><br>
                    <input type="password" v-model="password" class="password" placeholder="请输入新密码"> <br>
                    <input type="password" v-model="password" class="password" placeholder="请确认密码"> <br>
                    
                    <button @click="forget">确认修改</button>
                </div>
                <div class="right">
                    <div class="right1">
                        <p>想起密码？</p>
                        <a href="#/action/login">返回登录>></a>
                        <img src="../images/logos/xiaoren.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

    // import qs from 'qs'
    export default {
        name: 'forget',
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
            forget() {
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
    
    // img {
    //     width: 50px;
    //     height: 20px;
    //     border: 1px solid #ccc;
    // }
    .top{
        width:1200px;
        height:97px;
        margin:0 auto;
        img{
            float: left;
            margin-top:21px;
        }
        a{
            width:124px;
            height:47px;
            float:left;
            font-size: 17px;
            color: #818181;
            border-left:1px solid #c6c6c6;
            text-align: center;
            line-height: 50px;
            margin:25px 27px;
        }
    }
    .buttom{
        width: 100%;
        height:680px; 
        background-color: #f5f5f5;
       padding-top: 25px;
        .next{
            width:1200px;
            height: 433px;
            margin:0 auto;
            background-color: #fff;
            margin-top: 25px;
            position: relative;
            .left{
                width:598px;
                height:433px;
                float:left;
                input{
                    width:282px;
                    height:35px;
                    border-radius: 5px;
                    margin-bottom: 21px;
                    margin-left: 145px;
                    padding-left:10px;
                    border:1px solid #cecece;
                }
               
                .text{
                    width:95px;
                    height:35px;
                    border-radius: 5px;
                    margin-bottom: 26px;
                    margin-left: 0px;
                    cursor: pointer;
                    color: #2b91ce;
                    border: 1px solid #2b91ce;
                    background-color: #fff;
                    padding: 0;
                }
                button{
                    width:292px;
                    height:35px;
                    border-radius: 5px;
                    margin-bottom: 14px;
                    margin-left: 145px;
                    cursor: pointer;
                    color: #2b91ce;
                    border: 1px solid #2b91ce;
                    background-color: #fff;
                }
                .phone{
                    margin-top: 54px;
                }
                .code{
                    width:174px;
                }
                .code1{
                    width:174px;
                }
                img{
                    width: 86px;
                    height: 35px;
                    margin: -13px 0;
                    cursor: pointer;
                }
                
            }
            .right{
                width:494px;
                height: 433px;
                float:left;
                .right1{
                    width: 100px;
                    height: 262px;
                    margin-top: 43px;
                    padding-left: 187px;
                    border-left: 1px solid #cecece;
                    p{
                        margin-bottom: 24px;
                        font-size: 16px;
                    }
                    a{
                        margin-bottom: 24px;
                        font-size: 16px;
                        color: #2b91ce;
                    }
                    img{
                        padding: 24px 0;
                        
                    }
                }
               
            }
        }
    }
</style>