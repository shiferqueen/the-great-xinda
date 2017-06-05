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
                    <p :class="[status==1 ? 'activeclass' : 'errorclass']">{{msg}}</p>
                    <input type="text" v-model="cellphone" class="phone" placeholder="请输入手机号" @click="clear" @keyup.enter="forget"><br>
                    <input type="text" v-model="validcode" class="code1" placeholder="请输入短信验证码" @click="clear" @keyup.enter="forget"> <input type="button" value="获取短信" @click='huoqu' class="text"> <br>
                    <input type="text" class="code" v-model="imgcode" placeholder="请输入图片验证码" @click="clear" @keyup.enter="forget"> <img @click ='getsrc' src='/xinda-api/ajaxAuthcode'><br>
                    <input type="password" v-model="password" class="password" placeholder="请输入新密码" @click="helpmsg" @keyup.enter="forget"> <br>
                    <input type="password" v-model="newpassword" class="password" placeholder="请确认密码" @click="clear" @keyup.enter="forget"> <br> 
                    <button @click="forget" >确认修改</button>
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
    import qs from 'qs'
    export default {
        name: 'forget',
        data() {
            return {
                imgsrc: "/xinda-api/ajaxAuthcode",
                cellphone: '',//手机号
                newpassword: '',//确认密码
                password: '',//新密码
                validcode: '',//短信验证码
                imgcode: '',//图片验证码
                status:'',//状态
                msg:'',//提示消息
                testphone:/^1[3|4|5|7|8][0-9]{9}$/,
                testpassword:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/,
            }
        },
        methods: {
            getsrc() {
                this.imgsrc = "/xinda-api/ajaxAuthcode?" + Math.random();//图片验证码
            },
            helpmsg(){
                 let _this = this;
                 _this.status=0;
                 _this.msg="为了您的账号安全，密码至少6位，最多16位，必须包含大写字母、小写字母、数字";
            },
            clear(){
                 let _this = this;
                 if(_this.status==0){
                     _this.msg="";
                 }
            },
            forget() {
                let _this = this;
                // console.log(_this.validcode)
                if(_this.testphone.test(_this.cellphone)==false){
                    _this.status=0;
                    _this.msg="手机号码不正确，请重新输入手机号";
                }else if(_this.testpassword.test(_this.password)==false){
                     _this.status=0;
                     _this.msg="密码不正确，请重新输入密码";
                }else if(_this. newpassword!=_this.password){
                    _this.msg='密码不一致,请重新输入密码';
                    _this.status=0;
                }else{
                    _this.ajax.post('/xinda-api/register/findpas', qs.stringify({//找回密码
                        cellphone: _this.cellphone,
                        smsType: 1,
                        validCode: _this.validcode,
                        password: _this.md5(_this.password),
                     })).then(function(data) {
                        //console.log(data.data);
                        _this.status=data.data.status;
                        _this.msg=data.data.msg;
                        if(_this.status==1){
                            //修改密码成功
                            setTimeout(function() {
                                _this.$router.push({path: 'login'});
                                _this.msg='修改密码成功,请登录！'
                            }, 500);
                        }else{
                             _this.getsrc()
                        }
                    })
                } 
            },
            huoqu() {
                let _this = this;
                this.ajax.post('/xinda-api/register/sendsms', qs.stringify({//短信验证码
                    cellphone: '' + this.cellphone,
                    smsType: 1,
                    imgCode: '' + this.imgcode,
                })).then(function(data) {
                    console.log(data);
                     _this.status=data.data.status;
                    _this.msg=data.data.msg;
                })
            }
        }
    }

</script>


<style scoped lang="less">
.activeclass{
    color: #2494d4;
    padding: 20px 150px 0;
}
.errorclass{
    color: red;
   padding: 20px 70px 0 120px;
}
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
                    margin-top: 20px;
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