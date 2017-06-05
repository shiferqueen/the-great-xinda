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
                    <input type="text" v-model="cellphone" class="phone" placeholder="请输入手机号" @click="clear"><br>
                        
                    <input type="text" v-model="validcode" class="code1" placeholder="请输入短信验证码" @click="clear">
                        <!--短信发送之前-->  
                    <input type="button" v-if="yanzhen" value="获取短信" @click='huoqu' class="text"> 
                        <!--发送之后-->
                    <input type="button" v-else :value="reciprocal + 's后重新发送'" @click='huoqu' class="disabled-text" disabled> 
                    <br>
                    <select class="first" name="province" v-model="selectedProvince">
                        <option v-for="(item, index) in provinces"
                            v-if="item.level === 1"
                            :value="item">
                            {{ item.name }}
                        </option>
                    </select>
                    <select name="city" v-model="selectedCity">
                        <option
                            v-for="(item, index) in cities"
                            :value="item">
                            {{ item.name }}
                        </option>
                    </select>
                    <select name="block" v-model="selectedBlock">
                        <option
                            v-for="(item, index) in blocks"
                            :value="item">
                            {{ item.name }}
                        </option>
                    </select><br>
                    <input type="password" v-model="password" class="password" placeholder="请设置密码" @click="helpmsg"><br>
                    <input type="text" v-model="imgcode" class="code" placeholder="请输入图片验证码" @click="clear"> <img @click ='getsrc' :src='imgsrc'><br>
                    <button @click="register" @keyup.enter="register">立即注册</button>
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
    import provinces from '../provinces.js'
    import Vue from 'vue'
    export default {
        name: 'register',
        data() {
            return {
                imgif: true,
                imgsrc: "/xinda-api/ajaxAuthcode", //图片验证码链接
                cellphone: '', //手机号
                password: '', //密码
                validcode: '', //短信验证码
                imgcode: '', //图片验证码
                status: '', //状态
                msg: '', //提示消息
                testphone:/^1[3|4|5|7|8][0-9]{9}$/,
                testpassword:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/,
                selectedProvince: provinces[0],
                selectedCity: 0,
                selectedBlock: 0,
                cities: 0,
                provinces,
                blocks: 0,
                reciprocal: 60, //倒数
                yanzhen: true, //验证码发送
                stop: '', //动画停止参数
            }
        },
        methods: {
            getsrc() {
                this.imgsrc = "/xinda-api/ajaxAuthcode?" + Math.random()
            },
            clear(){
                 let _this = this;
                 if(_this.status==0){
                     _this.msg="";
                 }
            },
            helpmsg(){
                 let _this = this;
                 _this.status=0;
                 _this.msg="为了您的账号安全，密码至少6位，最多16位，必须包含大写字母、小写字母、数字";
            },
            register() {
                let _this = this;
                if(_this.testphone.test(_this.cellphone)==false){
                    _this.status=0;
                    _this.msg="手机号码不正确，请重新输入手机号";
                }else if(_this.testpassword.test(_this.password)==false){
                     _this.status=0;
                    _this.msg="密码不正确，请重新输入密码";
                }else{
                    _this.ajax.post('/xinda-api/register/valid-sms', qs.stringify({ //注册验证
                        cellphone: this.cellphone, //手机号				
                        smsType: 1, //短信类型:1注册				
                        validCode: this.validcode, //短信验证码				
                    })).then(function(data) {
                        //console.log(data.data);
                        _this.status = data.data.status;
                        _this.msg = data.data.msg;
                        if(_this.status==1){
                            _this.ajax.post('/xinda-api/register/register', qs.stringify({ //注册提交
                                cellphone: _this.cellphone,
                                smsType: 1,
                                validCode: _this.validcode,
                                password: _this.md5(_this.password),
                                regionId: 110010, //所属地区编码
                            })).then(function(data) {
                                console.log(data.data);
                                _this.status = data.data.status;
                                _this.msg = data.data.msg;
                                if (_this.status == 1) {
                                    //注册成功
                                    setTimeout(function() {
                                        _this.$router.push({path: 'login'});
                                    }, 500);
                                }else{
                                    _this.getsrc()
                                }
                            })
                        }
                    })
                }
                
            },
            startReciprocal() {
                let that = this
                that.stop = setInterval(function() {
                    if (that.reciprocal == 0) {
                        clearInterval(that.stop);
                        that.yanzhen = true;
                        that.reciprocal = 60;
                    }
                    that.reciprocal--;
                }, 1000)
            },
            huoqu() {
                let _this = this;
                this.ajax.post('/xinda-api/register/sendsms', qs.stringify({ //发送短信接口
                    cellphone: this.cellphone,
                    smsType: 1,
                    imgCode: this.imgcode,
                })).then(function(data) {
                    console.log(data.data)
                    _this.status = data.data.status;
                    _this.msg = data.data.msg;
                    if (data.data.status == 1) {
                        _this.yanzhen = false;
                        _this.startReciprocal();
                    }

                })
            }
        },
        created() {
            // 数据初始化,默认选中北京市,默认选中第一个;北京市数据为总数据的前18个
            let beijing = this.provinces.slice(0, 19)
            this.cities = beijing.filter(item => {
                if (item.level === 2) {
                    return true
                }
            })
            this.selectedCity = this.cities[0]
            this.blocks = beijing.filter(item => {
                if (item.level === 3) {
                    return true
                }
            })
            this.selectedBlock = this.blocks[0]
        },
        watch: {
            selectedProvince(newVal, oldVal) {
                // 港澳台数据只有一级,特殊处理
                if (newVal.sheng === '71' || newVal.sheng === '81' || newVal.sheng === '82') {
                    this.cities = [newVal]
                    this.blocks = [newVal]
                } else {
                    this.cities = this.provinces.filter(item => {
                        if (item.level === 2 && item.sheng && newVal.sheng === item.sheng) {
                            return true
                        }
                    })
                }
                var _this = this
                    // 此时在渲染DOM,渲染结束之后再选中第一个
                Vue.nextTick(() => {
                    _this.selectedCity = _this.cities[0]
                    _this.$emit('input', _this.info)
                })
            },
            selectedBlock() {
                var _this = this
                Vue.nextTick(() => {
                    _this.$emit('input', _this.info)
                })
            },
            selectedCity(newVal) {
                // 选择了一个市,要选择区了 di是城市的代表,sheng
                if (newVal.sheng === '71' || newVal.sheng === '81' || newVal.sheng === '82') {
                    this.blocks = [newVal]
                    this.cities = [newVal]
                } else {
                    this.blocks = this.provinces.filter(item => {
                        if (item.level === 3 && item.sheng && item.sheng == newVal.sheng && item.di === newVal.di && item.name !== '市辖区') {
                            return true
                        }
                    })
                }
                var _this = this
                Vue.nextTick(() => {
                    _this.selectedBlock = _this.blocks[0]
                        // 触发与 v-model相关的 input事件
                    _this.$emit('input', _this.info)
                })
            }
        },
        computed: {
            info() {
                return {
                    province: this.selectedProvince,
                    city: this.selectedCity,
                    block: this.selectedBlock
                }
            }
        },
    }
</script>


<style scoped lang="less">
    .activeclass {
        color: #2494d4;
        padding: 20px 150px 0;
    }
    
    .errorclass {
        color: red;
        padding: 20px 70px 0 120px;
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
            height: 450px;
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
                select {
                    width: 80px;
                    height: 35px;
                    border: 1px solid #cecece;
                    border-radius: 5px;
                    margin-bottom: 21px;
                }
                .first {
                    margin-left: 145px;
                }
                .text {
                    width: 100px;
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
                .disabled-text {
                    width: 100px;
                    height: 35px;
                    border-radius: 5px;
                    margin-bottom: 26px;
                    margin-left: 0px;
                    cursor: pointer;
                    color: #999;
                    background-color: #ededed;
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
                .p1 {
                    text-align: center;
                    span {
                        color: #2b91ce;
                    }
                }
            }
            .right {
                width: 494px;
                height: 433px;
                float: left;
                .right1 {
                    width: 100px;
                    height: 262px;
                    margin-top: 43px;
                    padding-left: 187px;
                    border-left: 1px solid #cecece;
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
</style>