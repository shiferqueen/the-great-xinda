<template>
    <div>
        <Row>
            <Col :xs="{span:0}" :sm="{span:24}">
                <div class="top">
                    <span @click="location"><img src="../images/logos/logo.png" alt=""></span>
                    <a href="javascript:void(0)">欢迎登陆</a>
                </div>
                <div class="buttom">
                    <div class="next">
                        <div class="left">
                            <p :class="[status==1 ? 'activeclass' : 'errorclass']">{{msg}}</p>
                            <input type="text" class="phone" v-model="cellphone" autofocus placeholder="请输入手机号码" @click="clear" @keyup.enter="jiaodian(1)"><br>
                            <input type="password" class="password" v-model="password" placeholder="请输入密码" @click="clear" @keyup.enter="jiaodian(2)">                    <br>
                            <input type="text" class="code" v-model="imgcode" placeholder="请输入验证码" @click="clear" @keyup.enter="jiaodian(3)">                    <img @click='getsrc' :src='imgsrc'><br>
                            <button @click="jiaodian(4)">立即登录</button><br>
                            <a href="#/action/forget">忘记密码?</a>
                        </div>
                        <div class="right">
                            <div class="right1">
                                <div class="right2">
                                    <p>还没有账号？</p>
                                    <a href="#/action/register">立即注册>></a>
                                    <img src="../images/logos/xiaoren.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col :xs="{span:24}" :sm="{span:0}">
                <div class="top-p">
                    <p>登录</p>
                    <a href="#/action/Register">>>立即注册</a>
                    <a href="#/Home" class="return">返回首页<<</a>
                </div>
            </Col>
            <Col :xs="{span:24}" :sm="{span:0}">
                <div class="left-p">
                    <p :class="[status==1 ? 'activeclass' : 'errorclass']" :style="{color:c}">{{msg}}</p>
                    <input type="text" class="phone" v-model="cellphone" autofocus placeholder="请输入手机号码" @click="clear" @keyup.enter="jiaodian(1)"><br>
                    <input type="password" class="password" v-model="password" placeholder="请输入密码" @click="clear" @keyup.enter="jiaodian(2)">                    <br>
                    <input type="text" class="code" v-model="imgcode" placeholder="请输入验证码" @click="clear" @keyup.enter="jiaodian(3)">                    <img @click='getsrc' :src='imgsrc'><br>
                    <button @click="jiaodian(4)">立即登录</button><br>
                    <a href="#/action/forget">忘记密码?</a>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import Vue from 'vue'
    import qs from 'qs'
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'login',
        data() {
            return {
                cellphone: '',
                password: '',
                imgcode: '',//
                status: '',//状态
                msg: '',//提示消息
                imgsrc: "/xinda-api/ajaxAuthcode",
                testphone: /^1[3|4|5|7|8][0-9]{9}$/,
                c:'#f00'
            }
        },
        computed:{
             ...mapGetters(['getCartNum','getmyurl']),
        },
        methods: {
            ...mapActions(["user", "refCartNum"]),
           

            location() {
                this.$router.push({
                    path: '../home'
                });
            },
            getsrc() {
                this.imgsrc = "/xinda-api/ajaxAuthcode?" + Math.random()
            },
            clear() {
                let _this = this;
                if (_this.status == 0) {
                    _this.msg = "";
                }
            },
            //焦点
            jiaodian(i) {
                let _this = this;
                switch (i) {
                    case 1:
                        document.getElementsByClassName('password')[0].focus();

                        break;
                    case 2:
                        document.getElementsByClassName('code')[0].focus();
                        break;
                    case 3:
                    case 4:
                        if (_this.testphone.test(_this.cellphone)) {
                            _this.ajax.post('/xinda-api/sso/login', qs.stringify({//登录提交
                                loginId: '' + this.cellphone,//手机号
                                password: this.md5(this.password),//密码
                                imgCode: '' + this.imgcode,//图片验证码
                            })).then(function (data) {
                                _this.status = data.data.status;
                                _this.msg = data.data.msg;
                                if (_this.status == 1) {
                                    //登录成功
                                    _this.user();
                                    _this.refCartNum();
                                    _this.c = "#2494d4";
                                    _this.$Message.success('登录成功');
                                    sessionStorage.setItem('login','true')
                                    if(sessionStorage.getItem('url')){
                                        _this.$Message.success('自动跳转到上次页面');
                                        setTimeout(function () {
                                            _this.$router.push({ path: '/'+ sessionStorage.getItem('url')});                                            
                                        }, 500);
                                    }else{
                                        setTimeout(function () {
                                            _this.$router.push({ path: '/home' });
                                        }, 500);
                                    }
                                   
                                } else {
                                    _this.getsrc()
                                }
                            })
                        } else {
                            _this.status = 0;
                            _this.msg = "手机号码不正确，请重新输入手机号";
                        }
                        break;
                }



            }
        },

    }

</script>

<style scoped lang="less">
    .activeclass {
        color: #2494d4;
        // padding: 20px  0;
        // text-align: left;
    }
    input {
        border: 1px solid #ccc;
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
                p{
                    color: red;
                    text-align: center;
                    margin-top: 15px;
                }
                input {
                    width: 282px;
                    height: 35px;
                    border-radius: 5px;
                    margin-bottom: 26px;
                    margin-left: 145px;
                    padding-left: 10px;
                    border: 1px solid #cecece;
                }
                button {
                    width: 292px;
                    height: 35px;
                    border-radius: 5px;
                    margin-bottom: 26px;
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
                img {
                    width: 86px;
                    height: 35px;
                    margin: -13px 0;
                    cursor: pointer;
                }
                a {
                    color: #2b91ce;
                    margin-left: 145px;
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
       width:50px;
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
    .return{
        float: left;
    }
}
.left-p{
    width:100%;
    margin: 0 auto;
    padding: 0 10px;
    p{
        color: red;
        text-align: center;
        margin-top: 15px;
    }
    input{
        width:100%;
        height: 40px;
        margin:20px 0;
        border-radius: 5px;
        padding: 0 5px
    }
    .code{
        width: 78%;
    }
    img{
        width: 20%;
        height: 40px;
        margin: -16px 0
    }
    button {
        width: 100%;
        height: 30px;
        border-radius: 5px;
        margin: 20px 0;
        cursor: pointer;
        color: #2b91ce;
        border: 1px solid #2b91ce;
        background-color: #fff;
    }
    a{
        display: block;
        margin: 0 auto;
        color:#2494d4;
        width:100px;
        text-align: center
    }
}
</style>