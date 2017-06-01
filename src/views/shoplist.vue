<template>
  <div>
    <div class="wid">
        <p class="shoplist">首页/公司工商</p>
        <div class="service-area-list clear">
            <div class="service-area">服务区域</div>
            <div class="service-area-right">
                <select>
                    <option value="">省</option>
                    <option value="">北京</option>
                    <option value="">天津</option>
                    <option value="">河北</option>
                </select>
                <select>
                    <option value="">市</option>
                    <option value="">北京市</option>
                    <option value="">石家庄市</option>
                </select>
                <select>
                    <option value="">区</option>
                    <option value="">海淀区</option>
                    <option value="">朝阳区</option>
                </select>
            </div>
        </div>
        <div class="product-type-list clear">
            <div class="product-type">产品类型</div>
            <div>
                <ul class="clear">
                    <li class="product-all">所有</li>
                    <li>专利申请</li>
                    <li class="product-space">版权保护</li>
                    <li class="product-space">商标注册</li>
                    <li class="product-space">代理记账</li>
                    <li class="product-space">公司注册</li>
                    <li class="product-space">企业社保</li>
                    <li class="product-space">公司变更</li>
                    <li class="product-space">税务代办</li>
                    <li class="product-space">个人社保</li>
                    <li class="product-space">审计报告</li>
                </ul>
            </div>
        </div>
        <div class="all-items">
            <div class="all-items-top">
                <ul class="clear">
                    <li class="all-items-top-all">综合排序</li>
                    <li class="all-items-top-price">价格</li>
                    <li class="all-items-top-num">接单数</li>
                </ul>
            </div>
            <div class="all-items-content">
                <div class="all-items-content-left clear" v-for="(liscon,index) in lispage_ajax">
                    <div>
                        <p class="all-items-content-left-logo"><img :src="'http://115.182.107.203:8088/xinda/pic'+liscon.providerImg"></p>
                        <p class="all-items-content-left-gold"><img src="../images/logos/little01.png"><span>金牌服务商</span></p>
                    </div>
                    <div class="all-items-content-left-infor">
                        <ul class="clear">
                            <li>{{liscon.providerName}}</li>
                            <li>信誉&nbsp &nbsp<img src="../images/logos/little07.png">
                                <img src="../images/logos/little07.png">
                                <img src="../images/logos/little07.png">
                                <img src="../images/logos/little07.png">
                                <img src="../images/logos/little04.png">
                            </li>
                            <li>{{liscon.regionName}}</li>
                            <li>累计服务客户次数：{{liscon.orderNum}} &nbsp|&nbsp &nbsp 好评率：100%</li>
                            <li>
                                <ul class="all-items-tax clear">
                                    <li class="all-items-tax-fir">{{liscon.productTypes.substr(0,4)}}</li>
                                    <li class="all-items-tax-sec">{{liscon.productTypes.substr(5,4)}}</li>
                                    <li class="all-items-tax-sec">{{liscon.productTypes.substr(10,4)}}</li>
                                    <!--<li class="all-items-tax-sec">{{liscon.productTypes.substr(15,4)}}</li>-->
                                </ul>
                            </li>
                            <li class="go-to-shop"><a @click="goshop">进入店铺</a></li>
                        </ul>
                    </div>
                </div>
                <!--<div class="all-items-content-right">
                    <div>
                        <p class="all-items-content-left-logo"><img src="../images/logos/logo.png"></p>
                        <p class="all-items-content-left-gold"><img src="../images/logos/little01.png"><span>金牌服务商</span></p>
                    </div>
                    <div class="all-items-content-left-infor">
                        <ul class="clear">
                            <li>信达北京服务中心</li>
                            <li>信誉&nbsp &nbsp<img src="../images/logos/little07.png">
                                <img src="../images/logos/little07.png">
                                <img src="../images/logos/little07.png">
                                <img src="../images/logos/little07.png">
                                <img src="../images/logos/little04.png">
                            </li>
                            <li>北京-北京市-朝阳区</li>
                            <li>累计服务客户次数：8272 &nbsp|&nbsp &nbsp 好评率：100%</li>
                            <li>
                                <ul class="all-items-tax clear">
                                    <li class="all-items-tax-fir">税务代办</li>
                                    <li class="all-items-tax-sec">代理记账</li>
                                    <li class="all-items-tax-sec">个人社保</li>
                                    <li class="all-items-tax-sec">公司变更</li>
                                </ul>
                            </li>
                            <li class="go-to-shop"><a href="#/shopfront">进入店铺</a></li>
                        </ul>
                    </div>
                </div>-->
            </div>
        </div>
        <div class="item-change clear">
            <div class="item-change-up">上一页</div>
            <div class="item-change-num">1</div>
            <div class="item-change-next">下一页</div>
        </div>
    </div>
  </div>
</template>

<script>
import myhead from '../components/header'
import myfoot from '../components/footer'
    export default {
        name: 'shoplist',
        data() {
            return {
                lispage_ajax:[]
            }
            
        },
        created(){
            let _this = this;
            this.ajax.post('/xinda-api/provider/grid',{start:0,limit:6,productTypeCode:10}).then(function(data){
                //  var fir = (data.data.data);
                // var sec = (data.data.data)[1];
                //  console.log(fir)
                // console.log(sec)
                _this.lispage_ajax = data.data.data
                console.log(_this.lispage_ajax)
            })
        },
        methods: {
            goshop(){
                alert(1)
            }
        },

        components:{
                myhead,
                myfoot
            },
        
        
    }
</script>


<style lang="less" scoped>
    .shoplist {
        margin-top: 26px;
    }

    
    .wid {
        width: 1200px;
        margin: 0 auto;
    }
    
    .service-area-list {
        height: 40px;
        background-color: #f7f7f7;
        border: 1px solid gray;
        div {
            float: left;
            line-height: 40px;
        }
    }
    
    .service-area {
        width: 98px;
        font-weight: 800;
        font-size: 16px;
        color: #262626;
        border-right: 1px solid gray;
        text-align: center;
    }
    
    .service-area-right {
        select {
            width: 86px;
            height: 20px;
            border: 1px solid gray;
            margin-left: 10px;
        }
    }
    
    .product-type-list {
        height: 45px;
        background-color: #f7f7f7;
        border: 1px solid gray;
        border-top: none;
        div {
            float: left;
            ul li {
                float: left;
                margin-top: 9px;
                line-height: 25px;
                cursor: pointer;
            }
        }
    }
    
    .product-type {
        width: 98px;
        font-weight: 800;
        font-size: 16px;
        color: #262626;
        border-right: 1px solid gray;
        text-align: center;
        line-height: 45px;
    }
    
    .product-all {
        width: 80px;
        background: #2693d4;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        margin: 0 27px 0 12px;
    }
    
    .product-space {
        margin-left: 21px;
    }
    
    .all-items {
        margin-top: 24px;
        border: 1px solid gray;
    }
    
    .all-items-top {
        height: 41px;
        background-color: #f7f7f7;
        border-bottom: 1px solid gray;
        li {
            float: left;
            font-size: 14px;
        }
    }
    
    .all-items-top-all {
        width: 107px;
        line-height: 43px;
        text-align: center;
        background-color: #2693d4;
        color: #fff;
    }
    
    .all-items-top-price {
        margin-left: 33px;
        line-height: 43px;
    }
    
    .all-items-top-num {
        margin-left: 35px;
        line-height: 43px;
        text-align: center;
    }
    
    .all-items-content {
        // padding: 12px 14px;
        display: flex;
        width: 100%;
        &>div{
            margin: 12px auto;
        }
    }
    
    .all-items-content-left {
        width: 568px;
        height: 250px;
        border: 1px solid gray;
        // float: left;
        div {
            float: left;
        }
    }
    
    .all-items-content-left-logo {
        margin-top: 76px;
        margin-left: 35px;
    }
    
    .all-items-content-left-gold {
        margin-top: 50px;
        margin-left: 45px;
        img {
            vertical-align: middle;
        }
        span {
            margin-left: 15px;
            font-size: 12px;
        }
    }
    
    .all-items-content-left-infor {
        padding: 22px 40px 20px 40px;
        font-size: 14px;
        li {
            line-height: 30px;
        }
        img {
            vertical-align: middle;
        }
    }
    
    .all-items-tax li {
        width: 71px;
        height: 22px;
        border-radius: 2px;
        text-align: center;
        line-height: 22px;
        background-color: #2393d2;
        float: left;
        color: #fff;
    }
    
    .all-items-tax-sec {
        margin-left: 5px;
    }
    
    .go-to-shop {
        width: 102px;
        height: 33px;
        border-radius: 3px;
        background-color: #ff591b;
        text-align: center;
        line-height: 33px;
        margin-top: 35px;
        color: #fff;
        cursor: pointer;
    }
    
    .all-items-content-right {
        width: 568px;
        height: 250px;
        border: 1px solid gray;
        // float: right;
        margin: 12px auto;
        div {
            float: left;
        }
    }
    .item-change {
        width: 187px;
        margin: 62px auto 148px auto;
        div {
            float: left;
        }
    }
    .item-change-up {
        width: 66px;
        line-height: 34px;
        border: 1px solid gray;
        text-align: center;
        
    }
    .item-change-num {
        width: 37px;
        line-height: 34px;
        border: 1px solid #2693d4;
        text-align: center;
        margin-left: 6px;
    }
    .item-change-next {
        width: 66px;
        line-height: 34px;
        border: 1px solid gray;
        text-align: center;
        margin-left: 6px;
    }
</style>