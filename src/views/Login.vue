<template>
  <div>
      <div class="top">
          <img src="../images/logos/logo.png" alt="">
          <a href="">欢迎登陆</a>
      </div>
      <div class="buttom">
          <div class="next">
            <div class="left">
                <p class="tishi"></p>
                <input type="text" class="phone" v-model="cellphone" placeholder="请输入手机号码"><br>
                <input type="password" class="password" v-model="password" placeholder="请输入密码"> <br>
                <input type="text" class="code" v-model="imgcode" placeholder="请输入验证码"> <img @click ='getsrc' src='/xinda-api/ajaxAuthcode'><br>
                <button @click="login">立即登录</button><br>
                
                <a href="#/action/forget">忘记密码?</a>
            </div>
            <div class="right">
                <div class="right1">
                    <p>还没有账号？</p>
                    <a href="#/action/register">立即注册>></a>
                    <img src="../images/logos/xiaoren.png" alt="">
                </div>
            </div>
        </div>
    </div>
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
                this.ajax.post('/xinda-api/sso/login', qs.stringify({
                    loginId: '' + this.cllphone,
                    password: '' + this.password,
                    imgCode: '' + this.imgcode,
                })).then(function(data) {
                    console.log(data)

                })
                // var phnum = document.getElementsByClassName('phone')[0].value;
                // var tishi = document.getElementsByClassName('tishi')[0];
                // var phonenum =/^1[3|4|5|7|8][0-9]{9}$/;
                // if(phnum==''){
                //     tishi.innerHtml='请输入手机号';
                // }else if(phonenum.test(phnum)==false){
                //     tishi.innerHtml='请重新输入手机号';
                // }else{

                // }
            },
           
        }
    }
</script>


<style scoped lang="less">
    input {
        border: 1px solid #ccc;
        
    }
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
                    margin-bottom: 26px;
                    margin-left: 145px;
                    padding-left:10px;
                    border:1px solid #cecece;
                }
                button{
                    width:292px;
                    height:35px;
                    border-radius: 5px;
                    margin-bottom: 26px;
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
                img{
                    width: 86px;
                    height: 35px;
                    margin: -13px 0;
                    cursor: pointer;
                }
                a{
                    color: #2b91ce;
                    margin-left: 145px;
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