<template>
  <div>
    <div>
        <div class="top">
            <img src="../images/logos/logo.png" alt="">
            <a href="">欢迎注册</a>
        </div>
        <div class="buttom">
            <div class="next">
                <div class="left">
                    <p :class="[status==1 ? 'activeclass' : 'errorclass']">{{msg}}</p>
                    <input type="text" v-model="cellphone" class="phone" placeholder="请输入手机号"><br>
                    <input type="text" v-model="validcode" class="code1" placeholder="请输入短信验证码"> <input type="button" value="获取短信" @click='huoqu' class="text"> <br>
                    <select class="first">
                        <option value="0">省</option>
                        <option value="1">北京</option>
                        <option value="2">天津</option>
                        <option value="3">河北省</option>
                    </select>
                    <select>
                        <option value="0">市</option>
                        <option value="1">北京</option>
                        <option value="2">石家庄</option> 
                    </select>
                    <select>
                        <option value="0">区</option>
                        <option value="1">海淀区</option>
                        <option value="2">朝阳区</option>
                    </select><br>
                    <input type="password" v-model="password" class="password" placeholder="请设置密码"> <br>
                    <input type="text" v-model="imgcode" class="code" placeholder="请输入图片验证码"> <img @click ='getsrc' :src='imgsrc'><br>
                    <button @click="register">立即注册</button>
                    <p class="p1">注册即同意遵守<span>《服务协议》</span></p>
                </div>
                <div class="right">
                    <div class="right1">
                        <p>已有账号？</p>
                        <a href="#/action/login">立即登录>></a>
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
        name: 'register',
        data() {
            return {
                imgsrc: "/xinda-api/ajaxAuthcode",//图片验证码链接
                cellphone: '',//手机号
                password: '',//密码
                validcode: '',//短信验证码
                imgcode: '',//图片验证码
                status:'',//状态
                msg:'',//提示消息
            }
        },
        methods: {
            getsrc() {
                this.imgsrc = "/xinda-api/ajaxAuthcode/##";//获取图片验证码
            },
            register() {
                let _this = this;
                this.ajax.post('/xinda-api/register/register', qs.stringify({//注册提交
                    cellphone: this.cellphone,
                    smsType: 1,
                    validCode:this.validcode,
                    password:this.password,
                    regionId: 110010,//所属地区编码
                })).then(function(data) {
                    //console.log(data.data);
                    _this.status=data.data.status;
                    _this.msg=data.data.msg;
                    if(_this.status==1){
                        //注册成功
                        _this.$router.push({path: 'login'});
                    }
                })
                this.ajax.post('/xinda-api/register/valid-sms', qs.stringify({ //注册验证
                    cellphone:this.cellphone,	//手机号				
                    smsType:1,			//短信类型:1注册				
                    validCode:this.validcode,	//短信验证码				
                })).then(function(data) {
                    console.log(data.data);
                    _this.status=data.data.status;
                    _this.msg=data.data.msg;
                })
            },
            huoqu() {
                let _this = this;
                this.ajax.post('/xinda-api/register/sendsms', qs.stringify({//发送短信接口
                    cellphone:this.cellphone,
                    smsType: 1,
                    imgCode:this.imgcode,
                })).then(function(data) {
                    console.log(data.data)
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
    padding: 20px 150px 0;
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
                select{
                    width:80px;
                    height: 35px;
                    border: 1px solid #cecece;
                    border-radius: 5px;
                    margin-bottom: 21px;
                }
                .first{
                     margin-left: 145px;
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
                .p1{
                    text-align: center;
                    span{
                        color: #2b91ce;
                    }
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