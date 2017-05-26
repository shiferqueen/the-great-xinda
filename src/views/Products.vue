<template>
    <div>
    
        <div>
            <p class="head_top">首页/财税服务</p>
        </div>
        <!--------------------商品部分------------------------------>
        <div class="goods-main">
            <div class="goods-left">
                <img src="" alt="">
            </div>
            <!------------------商品价格部分------------------>
            <div class="goods-middle">
                <h3 class="">注册分公司</h3>
                <p class="word-size">营业执照+5个章（公章、财务章、人名章、发票章、合同章）</p>
                <div class="bg">
                    <p class="bg-p">市场价：
                        <span class="huadiao">￥900.00 </span>
                    </p>
                    <p class="bg-p">价格
                        <span class="price">￥800.00</span>元</p>
                </div>
                <p>类型：
                    <span class="kuang">注册分公司</span>
                </p>
                <p>地区：北京-北京市-朝阳区</p>
                <p>购买数量：
                    <button @click="reduct()">-</button>
                    <input type="text" v-model="goodsval" class="numbers">
                    <button @click="add()">+</button>
                </p>
                <div class="summbit">
                    <span>立即购买</span>
                    <span @click="addProducts">加入购物车</span>
                </div>
            </div>
            <!----------------服务商咨询部分-------------->
            <div class="goods-right">
                <div class="goods-r-top">
                    <h2>顶级服务商</h2>
                    <p>北京信达服务中心</p>
                    <span>马上咨询</span>
                </div>
                <div class="goods-r-bottom">
                    <span>
                        <a href="#/shopfront">查看服务商</a>
                    </span>
                </div>
            </div>
        </div>
        <!--------------------导航栏图部分------------------>
        <div class="banner">
            <img src="../images/products/background.png">
        </div>
    
        <!-----------内容切换-------------------->
        <div class="main-bottom">
            <div class="main-nav">
                <span class="con1" @click="server()">服务内容</span>
                <span class="con2" @click="evaluate()">商品评价</span>
            </div>
    
            <div class="main-con1" v-show="con1">
                <p @click="getid">服务内容：</p>
                <p>1.整理原始票据</p>
                <p>2.记账</p>
                <p>3.装订凭证</p>
                <p>4.出报表</p>
                <p>5.月报、季度企业所得税、年度汇算清缴</p>
                <p>6.打印总帐、明晰账本</p>
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
                    <span>好评</span>
                    <span>中评</span>
                    <span>差评</span>
                </div>
                <div class="main-con2-t">
                    <div class="main-t-l">评价</div>
                    <div class="main-t-m">满意度</div>
                    <div class="main-t-r">用户</div>
                </div>
                <div class="main-con2-m1">
                    <div class="main-m-l"></div>
                    <div class="main-m-m"></div>
                    <div class="main-m-r"></div>
                </div>
                <div class="main-con2-m1">
                    <div class="main-m-l"></div>
                    <div class="main-m-m"></div>
                    <div class="main-m-r"></div>
                </div>
                <div class="main-con2-m1">
                    <div class="main-m-l"></div>
                    <div class="main-m-m"></div>
                    <div class="main-m-r"></div>
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
            goodsval: 1,
            listproducts:[]
        }

    },
    created() {
            let _this = this
            this.ajax.post("/xinda-api/product/package/detail", qs.stringify({
                 sId:"0cb85ec6b63b41fc8aa07133b6144ea3"})).then(function (res) {
                
                console.log(res.data.data.serviceList);
                _this.listproducts = res.data.data.serviceName;
                
            });

        },
    methods: {
        ...mapGetters(['getstoreid']),
        ...mapActions(['setCartNum']),
        getid(){
            console.log(this.getstoreid())
        },
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
        add: function () {
            this.goodsval++;
        },
        reduct: function () {
            if (this.goodsval > 0) {
                this.goodsval--;
            }
        },
        // addProducts: function () {
        //     this.sum++;
        // },

        addProducts() {
            var that = this
            var id = that.getstoreid();
            console.log(id)
            this.ajax.post("/xinda-api/cart/add", qs.stringify({
                id: id,
                num: 1

            })).then(function (res) {
                console.log(res)
            })



            this.ajax.post("/xinda-api/cart/cart-num", qs.stringify({})).then(function (res) {

                var num = res.data.data.cartNum;
                console.log(num)
                that.setCartNum(num);
            })

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
                width: 150px;
                line-height: 30px;
            }
        }
        .main-con2-m {
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
                line-height: 30px;
            }
            .main-m-r {
                float: right;
                width: 150px;
                line-height: 30px;
            }
        }
    }
}
</style>