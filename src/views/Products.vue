<template>
    <div>
    
        <div>
            <p class="head_top">首页/财税服务</p>
        </div>
        <!--------------------商品部分------------------------------>
        <div class="goods-main">
            <div class="goods-left">
                <img :src="product.img">
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
                    <span>立即购买</span>
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
                        <a href="#/shopfront">查看服务商</a>
                    </span>
                </div>
            </div>
            <div class="consult-box" v-show="bSign">
                <div class="consult-box-title">&nbsp &nbsp 免费电话咨询<span @click="closeDiv">X</span></div>
                <div></div>
                <div class="entry-num">
                    <input type="input" placeholder="请输入手机号">
                </div>
                <div class="entry-logo">
                    <input type="input" placeholder="请输入图形验证码">
                </div>
                <div class="entry-code">
                    <input type="input" placeholder="请输入验证码">
                </div>
                <div class="begin-infor">开始免费咨询</div>
                <p class="promease">本次电话咨询完全免费，我们将对你的号码严格保密，请放心使用!</p>
            </div>
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
    
            <div class="main-con1" v-show="con1" >
                <p v-html="providerProduct.serviceContent" ></p>
                <p v-html="provider.providerInfo" ></p>
                
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
                    <div class="main-m-l">111</div>
                    <div class="main-m-m">111</div>
                    <div class="main-m-r"><img src=""></div>
                </div>
                <div class="main-con2-m2" v-show="mid">
                    <div class="main-m-l">222</div>
                    <div class="main-m-m">222</div>
                     <div class="main-m-r"><img src=""></div>
                </div>
                <div class="main-con2-m3" v-show="bad">
                    <div class="main-m-l">333</div>
                    <div class="main-m-m">333</div>
                     <div class="main-m-r"><img src=""></div>
                </div>
            </div>
        </div>
    </div>
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
            msg: '数据',
            con1: true,
            con2: false,
            good: true,
            mid: false,
            bad: false,
            bSign:false,
            goodsval: 1,
            product:{
                img:'/static/e3a93cf9c3094fa6afb5b643c4f8d30f.png'
            },
            providerProduct:{},
            providerRegionText:{},
            provider:{},
            goodNum:{},
            badNum:{},
            midNum:{},
            assess: [],
            tp:"http://115.182.107.203:8088/xinda/pic"
        }
    },
    //获取接口
 created() {
    //  this.getid();
    console.log('商品详情数据',this.$route.params.productId);
            let _this = this
            this.ajax.post("/xinda-api/product/package/detail", qs.stringify({
                sId: this.$route.params.productId
            })).then(function (res) {
                let data = res.data.data;
                data.product.img =_this.tp+data.product.img;
                _this.product = data.product;
                _this.providerProduct = data.providerProduct;
                _this.providerRegionText = data.providerRegionText;
                _this.provider = data.provider;
                 console.log('商品详情数据',res.data.data);
                 console.log(_this.product.img);
            });



             this.ajax.post("/xinda-api/product/judge/detail", qs.stringify({
               serviceId:this.$route.params.productId
            })).then(function (res) {
                let data = res.data.data;
                _this.goodNum = data.goodNum;
                _this.midNum = data.midNum;
                _this.badNum = data.badNum;
                 console.log("评价条数",res.data.data)
            });
      

            



        },
    computed: {
        ...mapGetters(['getCartNum','getuser'])
    },
    methods: {
        ...mapGetters(['getstoreid']),
        ...mapActions(['refCartNum','user']),


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
            if (this.goodsval > 0) {
                this.goodsval--;
            }
        },

         goon(){
            this.bSign = true
        },
        closeDiv(){
            this.bSign = false
            },

        addProducts(uname) {
            if(uname==""){
                    this.$router.push({path: '/action/login'});
            }else{
                let that = this
                var id = that.$route.params.productId;
                this.ajax.post("/xinda-api/cart/add", qs.stringify({
                    id: id,
                    num: 1

                })).then(function (res) {
                        that.refCartNum();
                        that.ajax.post("/xinda-api/cart/set", qs.stringify({
                        id:id,
                        num:that.goodsval
                    

                    })).then(function (res) {
                        console.log(that.goodsval);
                        console.log(id)

                    })
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
            margin-left: 508px;
            font-size: 12px;
            cursor: pointer;
        }
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
    }
    .entry-code {
        margin-top: 28px;
        margin-left: 170px;
        input {
            width: 190px;
            height: 33px;
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
        .main-con2-m1,.main-con2-m2,.main-con2-m3{
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
                img{
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
</style>