<template>
    <div>
        <Row>
            <Col :xs="{span:0}" :sm="{span:24}">
                <div class="top">
                    <img src="../images/logos/logo.png" alt="">
                    <a href="javascript:void(0)">忘记密码</a>
                </div>
                <div class="buttom">
                    <div class="next">
                        <div class="left">
                            <p :class="[status==1 ? 'activeclass' : 'errorclass']">{{msg}}</p>
                            <input type="text" v-model="cellphone" class="phone" placeholder="请输入手机号" @click="clear" @keyup.enter="forget"><br>
                            <input type="text" v-model="validcode" class="code1" placeholder="请输入短信验证码" @click="clear" @keyup.enter="forget"> <input type="button" value="获取短信" @click='huoqu' class="text"> <br>
                            <input type="text" class="code" v-model="imgcode" placeholder="请输入图片验证码" @click="clear" @keyup.enter="forget"> <img @click ='getsrc' src='/xinda-api/ajaxAuthcode'><br>
                            <input type="password" v-model="password" class="password" placeholder="请输入新密码" @click="helpmsg" @keyup.enter="forget" @input="p_len"> <br>
                            <div class="lnu_container">
                                <p v-bind:class="{ lovercase_valid: contains_lovercase }">小写字母</p>
                                <p v-bind:class="{ number_valid: contains_number }">数字</p>
                                <p v-bind:class="{ uppercase_valid: contains_uppercase }">大写字母</p>
                            </div>
                            <input type="password" v-model="newpassword" class="password1" placeholder="请确认密码" @click="clear" @keyup.enter="forget"> <br> 
                            <button @click="forget" >确认修改</button>
                        </div>
                        <div class="right">
                            <div class="right1">
                                <div class="right2">
                                    <p>想起密码？</p>
                                    <a href="#/action/login">返回登录>></a>
                                    <img src="../images/logos/xiaoren.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col :xs="{span:24}" :sm="{span:0}">
                <div class="top-p">
                    <p>忘记密码</p>
                    <a href="#/action/login">>>返回登录</a>
                </div>
            </Col>
            <Col :xs="{span:24}" :sm="{span:0}">
                 <div class="left-p">
                    <p :class="[status==1 ? 'activeclass' : 'errorclass']">{{msg}}</p>
                    <input type="text" v-model="cellphone" class="phone" placeholder="请输入手机号" @click="clear" @keyup.enter="forget"><br>
                    <input type="text" v-model="validcode" class="code1" placeholder="请输入短信验证码" @click="clear" @keyup.enter="forget"> <input type="button" value="获取短信" @click='huoqu' class="text"> <br>
                    <input type="text" class="code" v-model="imgcode" placeholder="请输入图片验证码" @click="clear" @keyup.enter="forget"> <img @click ='getsrc' src='/xinda-api/ajaxAuthcode'><br>
                    <input type="password" v-model="password" class="password" placeholder="请输入新密码" @click="helpmsg" @keyup.enter="forget" @input="p_len"> <br>
                    <div class="lnu_container">
                        <p v-bind:class="{ lovercase_valid: contains_lovercase }">小写字母</p>
                        <p v-bind:class="{ number_valid: contains_number }">数字</p>
                        <p v-bind:class="{ uppercase_valid: contains_uppercase }">大写字母</p>
                    </div>
                    <input type="password" v-model="newpassword" class="password1" placeholder="请确认密码" @click="clear" @keyup.enter="forget"> <br> 
                    <button @click="forget" >确认修改</button>
                </div>
            </Col>
        </Row>
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
                password_length: 0,
                typed: false,
                contains_lovercase: false,
                contains_number: false,
                contains_uppercase: false,
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
            p_len:function(){
                 this.password_length = this.password.length;
                if (this.password_length > 7) {
                    this.valid_password_length = true;
                } else {
                    this.valid_password_length = false;
                }

                if (this.password_length > 0) {
                    this.typed = true;
                } else {
                    this.typed = false;
                }

                this.contains_lovercase = /[a-z]/.test(this.password);
                this.contains_number = /\d/.test(this.password);
                this.contains_uppercase = /[A-Z]/.test(this.password);
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
.activeclass {
    color: #2494d4;
    padding: 20px 150px 0;
}

.errorclass {
    color: red;
    text-align: center;
    margin-top: 15px
}

.top {
    width: 1200px;
    height: 97px;
    margin: 0 auto;
    img {
        float: left;
        margin-top: 21px;
    }
    a {
        width: 124px;
        height: 47px;
        float: left;
        font-size: 17px;
        color: #818181;
        border-left: 1px solid #c6c6c6;
        text-align: center;
        line-height: 50px;
        margin: 25px 27px;
    }
}

.buttom {
    width: 100%;
    height: 680px;
    background-color: #f5f5f5;
    padding-top: 25px;
    .next {
        width: 1200px;
        height: 433px;
        margin: 0 auto;
        background-color: #fff;
        margin-top: 25px;
        position: relative;
        .left {
            width: 598px;
            height: 433px;
            float: left;
            input {
                width: 282px;
                height: 35px;
                border-radius: 5px;
                margin-bottom: 21px;
                margin-left: 145px;
                padding-left: 10px;
                border: 1px solid #cecece;
            }
            .password {
                margin-bottom: 0px;
            }
            .lnu_container {
                    display: block;
                    margin: 10px auto;
                    width: 320px;
                    height: auto;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: justify;
                        -ms-flex-pack: justify;
                            justify-content: space-between;
                p {
                    width: 100px;
                    height: auto;
                    font-size: 12px;
                    line-height: 1.2;
                    text-align: center;
                    border-radius: 2px;
                    color: rgba(71, 87, 98, 0.8);
                    background: -webkit-linear-gradient(left, #00AD7C 50%, #eee 50%);
                    background: linear-gradient(to right, #00AD7C 50%, #eee 50%);
                    background-size: 200% 100%;
                    background-position: right;
                    -webkit-transition: background .3s;
                    transition: background .3s;
                }
            }
        .lovercase_valid,
        .number_valid,
        .uppercase_valid {
            background-position: left !important;
            color: rgba(255, 255, 255, 0.9) !important;
    }
            .text {
                width: 95px;
                height: 35px;
                border-radius: 5px;
                margin-bottom: 26px;
                margin-left: 0px;
                cursor: pointer;
                color: #2b91ce;
                border: 1px solid #2b91ce;
                background-color: #fff;
                padding: 0;
            }
            button {
                width: 292px;
                height: 35px;
                border-radius: 5px;
                margin-bottom: 14px;
                margin-left: 145px;
                cursor: pointer;
                color: #2b91ce;
                border: 1px solid #2b91ce;
                background-color: #fff;
            }
            .phone {
                margin-top: 20px;
            }
            .code {
                width: 174px;
            }
            .code1 {
                width: 174px;
            }
            img {
                width: 86px;
                height: 35px;
                margin: -13px 0;
                cursor: pointer;
            }
        }
        .right {
                width: 494px;
                height: 433px;
                float: left;
                .right1 {
                    width: 500px;
                    height: 300px;
                    margin-top: 43px;
                    
                    padding-left: 10px;
                    border-left: 1px solid #cecece;
                    .right2{
                        width:100px;
                        margin-left:183px;
                        p {
                        margin-bottom: 24px;
                        font-size: 16px;
                    }
                    a {
                        margin-bottom: 24px;
                        font-size: 16px;
                        color: #2b91ce;
                    }
                    img {
                        padding: 24px 0;
                    }
                }
            }
        }
    }
}
.top-p{
    width:100%;
    height: 35px;
    background-color: #e5e5e5;
    p{
       font-size:18px;
       width:100px;
       margin: 0 auto;
       line-height: 38px;
       text-align: center;
    }
    a{
        float: right;
        z-index: 1;
        margin: -28px 5px;
        color: #2b91ce;
    }
}
.left-p{
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;
    input{
        width: 100%;
        height: 30px;
        border: 1px solid #ccc;
        margin: 10px 0;
        border-radius: 5px
    }
    .code{
        width:78%;
    }
    img{
        width: 20%;
        height: 30px;
        margin: 10px 0;
        float: right;
    }
    .text{
        background-color:#2b91ce;
        color:#fff;
        border-radius: 5px;
        margin: 10px 0
    }
    .lnu_container {
        display: block;
        margin: 10px 0;
        width: 100%;
        height: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
    p {
        width: 80px;
        height: auto;
        font-size: 12px;
        line-height: 1.2;
        text-align: center;
        border-radius: 2px;
        color: rgba(71, 87, 98, 0.8);
        background: -webkit-linear-gradient(left, #00AD7C 50%, #eee 50%);
        background: linear-gradient(to right, #00AD7C 50%, #eee 50%);
        background-size: 200% 100%;
        background-position: right;
        -webkit-transition: background .3s;
        transition: background .3s;
    }
}
    .lovercase_valid,
    .number_valid,
    .uppercase_valid {
        background-position: left !important;
        color: rgba(255, 255, 255, 0.9) !important;
    }
    button {
        width: 100%;
        height: 35px;
        border-radius: 5px;
        margin: 10px 0;
        cursor: pointer;
        color: #2b91ce;
        border: 1px solid #2b91ce;
        background-color: #fff;
    }
}
</style>