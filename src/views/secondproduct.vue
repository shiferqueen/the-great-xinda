<template>
     <Row>
        <Col :xs="0" :sm="24" >
        <div>
            <p class="head_top">首页/商品详情</p>
        </div>
        <!--------------------商品部分------------------------------>
        <div class="goods-main">
            <div class="goods-left">
               <img src="../images/products/loge_loge.png">
            </div>
            <!------------------商品价格部分------------------>
            <div class="goods-middle">
                <h3 class="">{{providerProduct.serviceName}}</h3>
                <p class="word-size">{{providerProduct.serviceInfo}}</p>
                <div class="bg">
                    <p class="bg-p">市场价：
                        <span class="huadiao">￥{{product.marketPrice}} </span>
                    </p>
                    <p class="bg-p">价格
                        <span class="price">￥{{providerProduct.price}}</span>元</p>
                </div>
                <p>类型：
                    <span class="kuang">{{product.info}}</span>
                </p>
                <p>地区：{{providerRegionText}}</p>
                <p>购买数量：
                    <button @click="reduct()">-</button>
                    <input type="text" v-model="goodsval" class="numbers">
                    <button @click="add()">+</button>
                </p>
                <div class="summbit">
                    <span @click="addProductsb(getuser)">立即购买</span>
                    <span @click="addProducts(getuser)">加入购物车</span>
                </div>
            </div>
            <!----------------服务商咨询部分-------------->
            <div class="goods-right">
                <div class="goods-r-top">
                    <h2>顶级服务商</h2>
                    <p>北京信达服务中心</p>
                    <span @click="goon">马上咨询</span>
                </div>
                <div class="goods-r-bottom">
                    <span>
                        <a :href="'#/shopfront/'+provider.id">查看服务商</a>
                    </span>
                </div>
            </div>
            <transition name="slide-fade">
                <div class="consult-box" v-show="bSign">
                    <div class="consult-box-title">&nbsp &nbsp 免费电话咨询
                        <span @click="closeDiv">×</span>
                    </div>
                    <div></div>
                    <p class="phonemsg">{{phonemsg}}</p>
                    <div class="entry-num">
                        <input type="input" v-model="cellphone" placeholder="请输入手机号">
                    </div>
                    <div class="entry-logo">
                        <input type="input" v-model="imgcode" placeholder="请输入图形验证码">
                        <img @click="getsrc" :src="imgsrc">
                    </div>
                    <div class="entry-code">
                        <input type="input" placeholder="请输入验证码">
                        <input class="button" type="button" v-if="yanzheng" value="获取验证码" @click="huoqu">
                        <input class="disabled-button" type="button" v-else :value="reciprocal + 's后重新发送'" @click="huoqu" disabled>
                    </div>
                    <div class="begin-infor" @click="goinfor">开始免费咨询</div>
                    <p class="promease">本次电话咨询完全免费，我们将对你的号码严格保密，请放心使用!</p>
                </div>
            </transition>
        </div>
        <!--------------------导航栏图部分------------------>
        <div class="banner">
            <img src="../images/products/background.png">
        </div>
    
        <!-----------内容切换-------------------->
        <div class="main-bottom">
            <div class="main-nav">
                <span class="con1" @click="server()">服务内容</span><span class="con2" @click="evaluate()">商品评价</span>
            </div>
    
            <div class="main-con1" v-show="con1">
                <p v-html="providerProduct.serviceInfo" ></p>
                <p v-html="provider.providerInfo"></p>
                <p v-html="providerProduct.serviceInfo" ></p>
                <p v-html="provider.providerInfo"></p>
            </div>
    
            <div class="main-con2" v-show="con2">
                <div class="main-con2-top">
                    <div class="main-con2-left">
                        <p>
                            <span>0%</span>好评</p>
                    </div>
                    <div class="main-con2-middle">
                        <p>好评（
                            <span>0%</span>）
                            <span class="tiao"></span>
                        </p>
                        <p>中评（
                            <span>0%</span>）
                            <span class="tiao"></span>
                        </p>
                        <p>差评（
                            <span>0%</span>）
                            <span class="tiao"></span>
                        </p>
                    </div>
                    <div class="main-con2-right">
                        <p>客户印象</p>
                        <p>暂无已添加的印象标签</p>
                    </div>
                </div>
    
                <div class="main-con2-nav">
                    <span>全部评价（0）</span>
                    <span class="good" @click="goodn()">好评（{{goodNum}}）</span>
                    <span class="mid" @click="midn()">中评（{{midNum}}）</span>
                    <span class="bad" @click="badn()">差评（{{badNum}}）</span>
                </div>
                <div class="main-con2-t">
                    <div class="main-t-l">评价</div>
                    <div class="main-t-m">满意度</div>
                    <div class="main-t-r">用户</div>
                </div>
                <div class="main-con2-m1" v-show="good">
                    <div class="main-m-l">{{content}}</div>
                    <div class="main-m-m"></div>
                    <div class="main-m-r">
                        <img src="">
                    </div>
                </div>
                <div class="main-con2-m2" v-show="mid">
                    <div class="main-m-l"></div>
                    <div class="main-m-m"></div>
                    <div class="main-m-r">
                        <img src="">
                    </div>
                </div>
                <div class="main-con2-m3" v-show="bad">
                    <div class="main-m-l"></div>
                    <div class="main-m-m"></div>
                    <div class="main-m-r">
                        <img src="">
                    </div>
                </div>
            </div>
        </div>
   </Col>
   <Col :xs="24" :sm="0" >
            <Row>
                <div class="main-phone">
                    <div class="phone-top">
                        <Col  span="24" class="phone-img">
                            <img src="../images/products/loge_loge.png">
                             <div class="word-top">
                                <h3 class="">{{providerProduct.serviceName}}</h3>
                                <p class="word-size">{{providerProduct.serviceInfo}}</p>
                            </div>
                        </Col>
                        <Col span="24" class="productarea">
                          <p class="region">区域：{{providerRegionText}}</p>
                        </Col>
                        <Col span="24"  class="productprice">
                            <p class="price">价格：<span class="teshu">￥{{providerProduct.price}}</span>
                            <span class="huadiao">￥{{product.marketPrice}} </span></p>
                        </Col>
                        <Col span="24"  class="label">
                                <div class="lab-containt">
                                    <p>服务商家</p>
                                    <span></span>
                                </div>
                        </Col>
                        <Col span="24" class="store">
                            <Row>
                                <Col span="8" class="picture">
                                     <img :src="imgA" class="imagepic">
                                     <p class="gold">
                                        <img class="logo" src="../images/logos/little01.png">
                                        <span>金牌服务商</span>
                                    </p>
                                </Col>
                                <Col span="16" class="word-word">
                                    <ul>
                                    <li>{{provider.name}}</li>
                                    <li>信誉&nbsp &nbsp
                                        <img src="../images/logos/little07.png">
                                        <img src="../images/logos/little07.png">
                                        <img src="../images/logos/little07.png">
                                        <img src="../images/logos/little07.png">
                                        <img src="../images/logos/little04.png">
                                    </li>
                                    <li>{{providerProduct.regionName}}</li>
                                    <li>累计服务客户次数：{{providerBusiness.serviceNum}} &nbsp|&nbsp &nbsp 好评率：100%</li>
                                    <li class="go-to-shop">
                                        <a :href="'#/shopfront/' + provider.id" class="go-to-shop">进入店铺</a>
                                    </li>
                                </ul>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                    <Col span="24"  class="label">
                        <div class="lab-containt">
                            <p>服务介绍</p>
                            <span></span>
                        </div>
                    </Col>
                    <div class="main-con">
                        <p class="con-word" v-html="providerProduct.serviceInfo" ></p>
                        <p class="con-word" v-html="provider.providerInfo"></p>
                    </div>
                     <Col span="24"  class="label">
                        <div class="lab-containt">
                            <p>用户评价</p>
                            <span></span>
                        </div>
                     </Col>
                     <Col span="24" class="button-button">
                        <Row>
                             <Col class="lianxi" span="8">
                              <div class="m1"  @click="goon"> <Icon class="icon" type="ios-telephone"></Icon></br>联系商家</div>
                            </Col>
                            <Col class="gouwuche" span="8">
                                <div class="m" @click="addProducts(getuser)">加入购物车</div>
                            </Col>
                            <Col class="goumai" span="8">
                                <div class="m" @click="addProductsb(getuser)">立即购买</div>
                            </Col>
                        </Row>
                     </Col>
                        
                    <Col span="24" class="phone-bottom">
                    </Col> 
                    <div>
                            <transition name="slide-fade">
                            <div class="consult-box" v-show="bSign">
                                <div class="consult-box-title">&nbsp &nbsp 免费电话咨询
                                    <span @click="closeDiv">×</span>
                                </div>
                                <div></div>
                                <p class="phonemsg">{{phonemsg}}</p>
                                <div class="entry-num">
                                    <input type="input" v-model="cellphone" placeholder="请输入手机号">
                                </div>
                                <div class="entry-logo">
                                    <input type="input" v-model="imgcode" placeholder="请输入图形验证码">
                                    <img @click="getsrc" :src="imgsrc">
                                </div>
                                <div class="entry-code">
                                    <input type="input" placeholder="请输入验证码">
                                    <input class="button" type="button" v-if="yanzheng" value="获取验证码" @click="huoqu">
                                    <input class="disabled-button" type="button" v-else :value="reciprocal + 's后重新发送'" @click="huoqu" disabled>
                                </div>
                                <div class="begin-infor" @click="goinfor">开始免费咨询</div>
                                    <p class="promease">本次电话咨询完全免费，我们将对你的号码严格保密，请放心使用!</p>
                                </div>
                        </transition>
                            </div>
                        </div>
                </div>
            </Row>     
        </Col>     
  </Row>
</template>

<script>
import myhead from '../components/header'
import myfoot from '../components/footer'
import qs from 'qs'
import { mapActions, mapGetters } from 'vuex'//好几个页面传输数据
export default {
    name: 'Products',

    components: {
        myhead,
        myfoot
    },
    data() {
        return {
            imgsrc: '/xinda-api/ajaxAuthcode',//图片验证接口
            imgcode: '',  //图片验证码
            cellphone: '',  //手机号
            testphone: /^1[3|4|5|7|8][0-9]{9}$/,
            msg: '',
            phonemsg: '',
            con1: true,
            con2: false,
            good: true,
            mid: false,
            bad: false,
            bSign: false,
            goodsval: 1,
            reciprocal: 60,//等待验证时间
            yanzheng: true,
            stop: '',//动画停止参数
            product: {
                img: '/static/e3a93cf9c3094fa6afb5b643c4f8d30f.png'
            },
            providerBusiness:{},
            providerProduct: {},
            providerRegionText: {},
            provider: {
                providerImg:'/static/8c419db3f572418a80ff5a08397fb857.png'
            },
            goodNum: {},
            badNum: {},
            midNum: {},
            content: {},
            assess: [],
            tp: "http://115.182.107.203:8088/xinda/pic",
            imgA:''
        }
    },
    //获取接口
    created() {
        //  this.getid();
        console.log('商品详情数据', this.$route.params.productId);
        let _this = this
        this.ajax.post("/xinda-api/product/package/detail", qs.stringify({
            sId: this.$route.params.productId
        })).then(function (res) {
            let data = res.data.data;
            console.log(data)
            data.product.img = _this.tp + data.product.img;
            _this.imgA = _this.tp + data.provider.providerImg
            _this.product = data.product;
            _this.providerProduct = data.providerProduct;
            _this.providerBusiness = data.providerBusiness;
            _this.providerRegionText = data.providerRegionText;
            _this.provider = data.provider;
        });



        this.ajax.post("/xinda-api/product/judge/detail", qs.stringify({
            serviceId: this.$route.params.productId
        })).then(function (res) {
            let data = res.data.data;
            _this.goodNum = data.goodNum;
            _this.midNum = data.midNum;
            _this.badNum = data.badNum; 
        });

        this.ajax.post("/xinda-api/product/judge/grid", qs.stringify({
            serviceId: this.$route.params.productId
        })).then(function (res) {
            let data = res.data.data;
            _this.content = data.content;
        });
            this.ajax.post("/xinda-api/product/package/detail", qs.stringify({
                sId: this.$route.params.productId
            })).then(function (res) {
                let data = res.data.data;
                data.product.img =_this.tp+data.product.img;
                _this.product = data.product;
                _this.providerProduct = data.providerProduct;
                _this.providerRegionText = data.providerRegionText;
                _this.provider = data.provider;
            });
            //跳转页面置顶
            this.menu();
    },
    //跳转页面置顶
    menu() {
        window.scrollTo(0,0);
      },
    computed: {
        ...mapGetters(['getCartNum', 'getuser'])
    },
    methods: {
        ...mapGetters(['getstoreid']),
        //获取动态验证码
        ...mapActions(['refCartNum','user','popups']),
        //跳转页面置顶
        menu() {
            window.scrollTo(0,0);
          },
       
            //获取动态验证码
        getsrc() {
            this.imgsrc = '/xinda-api/ajaxAuthcode?' + Math.random()
        },
        //开始免费咨询
        goinfor() {
            //
        },

        //获取短信button

        startReciprocal() {
            let that = this
            that.stop = setInterval(function () {
                if (that.reciprocal == 0) {
                    clearInterval(that.stop);
                    that.yanzheng = true;
                    that.reciprocal = 60;
                }
                that.reciprocal--;
            }, 1000)
        },
        huoqu() {
            let _this = this;
            if (_this.testphone.test(_this.cellphone) == false) {
                _this.phonemsg = "手机号码不正确，请重新输入";
            } else {
                _this.phonemsg = "";
            }
            this.ajax.post('/xinda-api/register/sendsms', qs.stringify({ //发送短信接口
                cellphone: this.cellphone,
                smsType: 1,
                imgCode: this.imgcode,
            })).then(function (data) {
                // console.log("短信",data.data)
                _this.status = data.data.status;
                _this.msg = data.data.msg;
                if (data.data.status == 1) {
                    _this.yanzheng = false;
                    _this.startReciprocal();
                } else if (data.data.status == -1) {
                    _this.getsrc();
                }

            });
        },



        //服务，评价切换方法
        server: function () {
            this.con1 = true,
                this.con2 = false
            var con1 = document.getElementsByClassName('con1')[0];
            var con2 = document.getElementsByClassName('con2')[0];
            con1.style.color = '#fff';
            con1.style.backgroundColor = '#2693d4';
            con2.style.color = '#686868';
            con2.style.backgroundColor = '#f7f7f7';
        },
        evaluate: function () {
            this.con1 = false,
                this.con2 = true
            var con2 = document.getElementsByClassName('con2')[0];
            var con1 = document.getElementsByClassName('con1')[0];
            con2.style.color = '#fff';
            con2.style.backgroundColor = '#2693d4';
            con1.style.color = '#686868';
            con1.style.backgroundColor = '#f7f7f7';
        },
        //好评，中评，差评切换
        goodn: function () {
            this.good = true,
                this.mid = false,
                this.bad = false
            var good = document.getElementsByClassName('good')[0];
            var mid = document.getElementsByClassName('mid')[0];
            var bad = document.getElementsByClassName('bad')[0];
            good.style.color = '#fff';
            good.style.backgroundColor = '#2693d4';
            mid.style.color = '#686868';
            mid.style.backgroundColor = '#f7f7f7';
            bad.style.color = '#686868';
            bad.style.backgroundColor = '#f7f7f7';

        },
        midn: function () {
            this.good = false,
                this.mid = true,
                this.bad = false
            var good = document.getElementsByClassName('good')[0];
            var mid = document.getElementsByClassName('mid')[0];
            var bad = document.getElementsByClassName('bad')[0];
            good.style.color = '#686868';
            good.style.backgroundColor = '#f7f7f7';
            mid.style.color = '#fff';
            mid.style.backgroundColor = '#2693d4';
            bad.style.color = '#686868';
            bad.style.backgroundColor = '#f7f7f7';

        },
        badn: function () {
            this.good = false,
                this.mid = false,
                this.bad = true
            var good = document.getElementsByClassName('good')[0];
            var mid = document.getElementsByClassName('mid')[0];
            var bad = document.getElementsByClassName('bad')[0];
            good.style.color = '#686868';
            good.style.backgroundColor = '#f7f7f7';
            bad.style.color = '#fff';
            bad.style.backgroundColor = '#2693d4';
            mid.style.color = '#686868';
            mid.style.backgroundColor = '#f7f7f7';
        },

        // 数量加减方法
        add: function () {
            this.goodsval++;
        },
        reduct: function () {
            if (this.goodsval > 1) {
                this.goodsval--;
            }
        },

        goon() {
            this.bSign = true
        },
        closeDiv() {
            this.bSign = false
        },

        addProducts(uname) {
            let that = this;
            if(uname==""){
                 that.popups({
                    headers: "当前尚未登录",
                    content: "是否跳转到登录页面",
                    ok() {
                         that.$router.push({path: '/action/login'});
                    }
                })
            }else{
                this.$Notice.success({
                    duration:2,
                    desc: '加入成功'
                });
                var id = that.$route.params.productId;

                this.ajax.post("xinda-api/cart/add", qs.stringify({

                    id: id,
                    num:that.goodsval

                })).then(function (res) {
                        that.refCartNum();
                    //     that.ajax.post("/xinda-api/cart/set", qs.stringify({
                    //     id:id,
                    //     num:that.goodsval
                    

                    // })).then(function (res) {
                        
                    // })
                })
            }
        },
           addProductsb(uname) {
            let that = this
            if(uname==""){
                 that.popups({
                    headers: "当前尚未登录",
                    content: "是否跳转到登录页面",
                    ok() {
                         that.$router.push({path: '/action/login'});
                    }
                })
            }else{
                let that = this
                var id = that.$route.params.productId;
                this.ajax.post("xinda-api/cart/add", qs.stringify({
                    id: id,
                    num: 1

                })).then(function (res) {
                        that.refCartNum();
                    //     that.ajax.post("/xinda-api/cart/set", qs.stringify({
                    //     id:id,
                    //     num:that.goodsval
                    

                    // })).then(function (res) {
                        that.$router.push({name: 'shopping'});
                    // })
                })

            }

        },
    }
}
</script>

<style lang="less" scoped>
.clear {
    content: '';
    display: block;
    width: 0;
    clear: both;
}

.head_top {
    width: 1200px;
    margin: 25px auto 10px;
    font-size: 14px;
    color: #696969;
}

.goods-main {
    width: 1200px;
    height: 393px;
    margin: 0 auto;
    position: relative;
    &:after {
        .clear;
    }
    .goods-left {
        width: 525px;
        height: 393px;
        float: left;
        img {
            width: 525px;
            height: 393px;
        }
    }
    .goods-middle {
        width: 387px;
        height: 393px;
        margin: 0 32px;
        float: left;
        .word-size {
            font-size: 14px;
        }
        p {
            margin: 20px 0;
            font-size: 16px;
            color: #a3a3a3;
        }
        .bg {
            width: 387px;
            height: 74px;
            background: #f7f7f7;
            .bg-p {
                font-size: 16px;
                .huadiao {
                    text-decoration: line-through;
                }
                .price {
                    color: red;
                    margin: 0 7px;
                }
            }
        }
        .kuang {
            padding: 5px;
            border: 1px solid #2693d4;
            color: #2693d4;
            cursor: pointer;
        }
        button {
            width: 30px;
            height: 25px;
            border: 1px solid #cdcdcd;
            background: #f7f8fa;
            color: #cccccc;
        }
        input {
            width: 50px;
            height: 23px;
            border: 1px solid #cdcdcd;
            text-align: center;
        }
        .summbit {
            margin: 30px 40px;
            span {
                padding: 8px 25px;
                border-radius: 5px;
                cursor: pointer;
                &:first-child {
                    color: #fff;
                    background: #2693d4;
                    margin: 0 20px;
                    border: 1px solid #2793d4
                }
                &:nth-child(2) {
                    border: 1px solid #2793d4;
                    color: #2793d4;
                }
            }
        }
    }
    .goods-right {
        width: 198px;
        height: 235px;
        float: right;
        border: 1px solid #2793d4;
        .goods-r-top {
            width: 198px;
            height: 160px;
            h2 {
                text-align: center;
                line-height: 70px;
            }
            p {
                text-align: center;
                margin-bottom: 30px;
            }
            span {
                color: #2793d4;
                padding: 8px 25px;
                border-radius: 5px;
                margin: 0 40px;
                cursor: pointer;
                border: 1px solid #2793d4;
            }
        }
        .goods-r-bottom {
            width: 198px;
            height: 75px;
            background: #bdddf2;
            span {
                color: #fff;
                padding: 8px 25px;
                background: #2693d4;
                margin: 43px 33px;
                line-height: 70px;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
}

.consult-box {
    width: 645px;
    height: 420px;
    border: 1px solid gray;
    position: absolute;
    top: 60px;
    left: 320px;
    z-index: 9;
    background-color: #fff;
    input {
        border: 1px solid gray;
    }
    .consult-box-title {
        height: 44px;
        background-color: #f8f8f8;
        line-height: 44px;
        font-size: 14px;
        span {
            display: inline-block;
            margin-left: 508px;
            font-size: 26px;
            cursor: pointer;
            &:hover {
                transform: rotate(360deg);
                transition: transform 1.2s;
            }
        }
    }
    .phonemsg {
        margin-left: 70px;
        color: red
    }
    .entry-num {
        margin-top: 28px;
        margin-left: 170px;
        input {
            width: 303px;
            height: 33px;
        }
    }
    .entry-logo {
        margin-top: 20px;
        margin-left: 170px;
        input {
            width: 190px;
            height: 33px;
        }
        img {
            vertical-align: bottom;
            margin-left: 10px;
        }
    }
    .entry-code {
        margin-top: 28px;
        margin-left: 170px;
        input {
            width: 190px;
            height: 33px;
        }
        .button,
        .disabled-button {
            width: 110px;
            height: 35px;
            margin-left: 10px;
            border-radius: 3px;
        }
    }
    .begin-infor {
        width: 303px;
        height: 33px;
        border-radius: 5px;
        background-color: #4eb5ba;
        margin-top: 20px;
        margin-left: 170px;
        line-height: 33px;
        text-align: center;
        color: #fff;
        cursor: pointer;
    }
    .promease {
        margin-top: 22px;
        margin-left: 140px;
        font-size: 12px;
    }
}

.banner {
    width: 1200px;
    margin: 20px auto;
    img {
        width: 1200px;
    }
}

.main-bottom {
    width: 1200px;
    margin: 25px auto;
    border: 1px solid #cdcdcd;
    .main-nav {
        width: 1200px;
        height: 40px;
        background: #f7f7f7;
        border-bottom: 1px solid #cdcdcd;
        span {
            text-align: center;
            line-height: 40px;
            padding: 11px 25px;
            color: #686868;
            font-size: 14px;
            border: 1px solid #cdcdcd;
            cursor: pointer;
            &:nth-child(1) {
                background: #2693d4;
                color: #fff;
            }
        }
    }
    .main-con1 {
        p {
            margin: 30px 15px;
        }
    }
    .main-con2 {
        &:after {
            .clear;
        }
        .main-con2-top {
            width: 1200px;
            height: 120px;
            .main-con2-left {
                width: 120px;
                height: 120px;
                float: left;
                p {
                    text-align: center;
                    line-height: 120px;
                    color: #2693d4;
                    span {
                        font-size: 28px;
                    }
                }
            }
            .main-con2-middle {
                width: 270px;
                height: 120px;
                margin: 0 15px;
                float: left;
                p {
                    margin: 10px 0;
                    .tiao {
                        display: inline-block;
                        width: 120px;
                        height: 15px;
                        background: #cccccc;
                    }
                }
            }
            .main-con2-right {
                width: 230px;
                height: 80px;
                margin: 10px 0;
                float: right;
                border-left: 1px solid #ccc;
                p {
                    margin: 10px 10px;
                }
            }
        }
        .main-con2-nav {
            width: 1200px;
            height: 40px;
            background: #f7f7f7;
            border-bottom: 1px solid #cdcdcd;
            span {
                text-align: center;
                line-height: 40px;
                padding: 12px 25px;
                color: #686868;
                font-size: 14px;
                cursor: pointer;
                &:nth-child(2) {
                    background: #2693d4;
                    color: #fff;
                }
            }
        }
        .main-con2-t {
            width: 1195px;
            height: 30px;
            border-bottom: 1px solid #cdcdcd;
            &:after {
                .clear;
            }
            .main-t-l {
                margin: 0 100px;
                float: left;
                width: 450px;
                line-height: 30px;
            }
            .main-t-m {
                float: left;
                width: 270px;
                line-height: 30px;
            }
            .main-t-r {
                float: right;
                width: 270px;
                text-align: center;
                line-height: 30px;
            }
        }
        .main-con2-m1,
        .main-con2-m2,
        .main-con2-m3 {
            width: 1195px;
            height: 120px;
            border-bottom: 1px solid #cdcdcd;
            &:after {
                .clear;
            }
            .main-m-l {
                margin: 0 40px;
                float: left;
                width: 450px;
                line-height: 30px;
            }
            .main-m-m {
                float: left;
                width: 270px;
                line-height: 100px;
                text-align: center;
            }
            .main-m-r {
                float: right;
                width: 270px;
                text-align: center;
                img {
                    border-radius: 50%;
                    width: 70px;
                    height: 70px;
                    text-align: center;
                    margin-top: 25px
                }
            }
        }
    }
}
// 手机端
.main-phone{
  
    .phone-img{
         
        img{
            position: relative;
            width:100%;
        }
    }
    .word-top{
        position: absolute;
        bottom: 6px;
        background: rgba(0, 0, 0, .4);
        color:#fff;
        width: 100%; 
        padding: 8px 3%;  
        h3{
            font-size:18px;
        }  
        p{
            font-size:14px;
        }   
    }
    .productarea{
        border-bottom:1px solid #c5c5c5;
        .region{
            font-size: 16px;
            margin: 0 3% 
        }
    }
    .productprice{
        border-bottom:3px solid #ebebeb;
        .price{
           font-size: 16px;
            margin: 0 3% ;
            .teshu{
                font-size: 20px;
                color: red;
                margin-right:3% ;
            }
            .huadiao {
                font-size: 16px;
                text-decoration: line-through;
            }
        }  
    }

    //导航线
    .label{
    width:100%;
    .lab-containt{
            width:100%;
            margin: 8px auto 0;
            height: 35px;
            border-bottom: 2px solid #2494d4;
            position: relative;
            &:after {
                .clear;
            }
            p{
            float:left;
            font-size: 16px;
            color:#000;
            padding-top: 5px;
            padding-left: 6px;
            }
            span{
            border: 6px solid transparent;
            border-bottom: 8px solid #2494d4;
            display:block;
            position: absolute;
            top:20px;
            left: 32px;
            }
        }
    }
  .store{
      margin-top:10px;
      .picture{
          .imagepic{
              width:75%;
              height:auto;
             margin-top: 11%;
             margin-left: 10%;
          }
          .gold{
            margin-top: 12%;
            margin-left: 10%;
          .logo{
            width:15%;
            height:15%;
            vertical-align: middle;
          }
          img{
             vertical-align: middle; 
          }
         }
        }
      .word-word{
        li{
            margin-top:2%;
        }
      }
      .go-to-shop {
        width: 40%;
        height: 33px;
        border-radius: 3px;
        background-color: #ff591b;
        text-align: center;
        line-height: 33px;
        color: #fff;
        cursor: pointer;
        margin-bottom:10%;
    }
       border-bottom:2px solid #ebebeb;
  }
    .main-con{
        padding-bottom:10px;
        border-bottom:2px solid #ebebeb;
        .con-word{
            font-size:14px;
            padding-top:10px;
        }
    }
    .phone-bottom{
        height: 270px;
        z-index: -10;
    }
   .button-button{
        position:fixed;
        
         .m1{
           font-size:16px;
           padding:8px 0; 
           text-align: center;
           z-index: 10;
        }
        .lianxi{
            background: #eeeff3;
        }
        .gouwuche{
            background: #2693d4;
            color:#fff;
        }
        .goumai{
            background: #fb4146;
            color:#fff;
        }
    }
    .consult-box {
    width: 100%;
    height: 280px;
    border: 1px solid gray;
    position: fixed;
    top: 60px;
    left: 0px;
    z-index: 9;
    background-color: #fff;
    input {
        border: 1px solid gray;
    }
    .consult-box-title {
        height: 44px;
        background-color: #f8f8f8;
        font-size: 14px;
        span {
            display: inline-block;
            margin-left:60%;
            font-size: 26px;
            cursor: pointer;
            &:hover {
                transform: rotate(360deg);
                transition: transform 1.2s;
            }
        }
    }
    .phonemsg {
        margin-left:10%;
        color: red
    }
    .entry-num {
        margin-top: 10px;
        margin-left: 20%;
        input {
            width: 76%;
            height: 20px
        }
    }
    .entry-logo {
        margin-top: 6px;
        margin-left: 20%;
        input {
        width: 50%;
        height: 20px;
        }
        img {
            vertical-align: bottom;
            margin-left: 10px;
        }
    }
    .entry-code {
        margin-top: 15px;
        margin-left:20%;
        input {
            width: 50%;
            height: 20px;
        }
        .button,
        .disabled-button {
            width: 26%;
            height: 33%;
            margin-left: 10px;
            border-radius: 3px;
        }
    }
    .begin-infor {
        width: 67%;
        height: 33px;
        border-radius: 5px;
        background-color: #4eb5ba;
        margin-top: 15px;
        margin-left: 20%;
        text-align: center;
        color: #fff;
        cursor: pointer;
    }
    .promease {
        margin-top: 22px;
        margin-left: 6%;
        margin-right: 6%;
        font-size: 12px;
    }
}

}
@media screen and (max-width: 768px){
    .button-button{
        bottom:62.38px;
        .m{
           font-size:16px;
           padding:25px 0; 
           text-align: center;
           z-index: 10;
        }
        .icon{
            font-size:32px;
           }
        
    }
}
@media screen and (max-width:400px){
    .button-button{
        bottom:54.58px;
        .m{
           font-size:14px;
           padding:22px 0; 
           text-align: center;
           z-index: 10;
        }
        .icon{
            font-size:22px;
        }
    }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateY(10px);
  opacity: 0;
}


</style>