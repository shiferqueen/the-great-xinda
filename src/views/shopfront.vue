<template>
    <div>
        <Row>
            <Col :xs="0" :sm="24">
                <div class="wid">
                    <!--<Col :xs="0" :sm="24">-->
                    <div class="shopfront-top clear">
                        <img src="../images/logos/logo2.png" class="shopfront-top-logo">
                        <div class="shopfront-top-area">
                            <h2>{{getShop.name}}</h2>
                            <p>{{getShop.regionName}}</p>
                        </div>
                    </div>
                    <!--</Col>-->
                    <div class="shopfront-content clear">
                        <Col :xs="0" :sm="24" class="delwidth">
                        <div class="shopfront-content-left">
                            <div class="shopfront-compony-intro">
                                <div>
                                    <h2>公司介绍{{myready}}</h2>
                                    <p>
                                        为给客户提供更加标准化的体验，信达北京服务中心采用自营模式，打造一站式企业服务平台， 帮助企业快速解决发展遇到的问题，提供工商注册，财税服务，知识产权，人事外包，证件办理等全方位解决方案， 为你的企业发展保驾护航。
                                    </p>
                                </div>
                            </div>
                            <div class="shopfront-compony-service">
                                <div>
                                    <ul class="clear">
                                        <li>
                                            <img src="../images/logos/home.png">
                                            <p>平台担保</p>
                                        </li>
                                        <li style="margin-left:40px;">
                                            <img src="../images/logos/home1.png">
                                            <p>优质服务</p>
                                        </li>
                                    </ul>
                                    <ul class="clear">
                                        <li style="margin-top:37px;">
                                            <img src="../images/logos/home2.png">
                                            <p>过程监督</p>
                                        </li>
                                        <li style="margin-left:40px;margin-top:34px;">
                                            <img src="../images/logos/home3.png">
                                            <p>增值服务</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </Col>
                        <div class="shopfront-content-right">
                            <!--<Col :xs="0" :sm="24">-->
                                <div class="shopfront-content-right-title clear">
                                    <div @click="changecolor(1)" :class="{'changecolor': mydefault == 1}">
                                        <router-link :to="shopfront + links" exact>服务产品</router-link>
                                    </div>
                                    <div @click="changecolor(2)" :class="{'changecolor': mydefault == 2}">
                                        <router-link :to="shopfront+links+'/customService'" exact>客服</router-link>
                                    </div>
                                    <div @click="changecolor(3)" :class="{'changecolor': mydefault == 3}">
                                        <router-link :to="shopfront+links+'/certification'" exact>资质证书</router-link>
                                    </div>
                                </div>
                                <!--</Col>-->
                                <!--<Col :xs="0" :sm="24">-->
                                <div class="shopfront-content-right-service-content" v-if="ifnone">服务内容</div>
                                <!--</Col>-->
                            

                            <router-view></router-view>
                        </div>
                    </div>
                    <!--<div class="shopfront-content-change clear">
                        <div>首页</div>
                        <div v-show="current != 0" @click="current-- && goto(current)">上一页</div>
                        <div v-for="index in pages" @click="goto(index)" :click="{'active':current == index}">{{index}}</div>
                        <div v-show="allpage != current && allpage != 0" @click="current++ && goto(current++)">下一页</div>
                        <div>尾页</div>
                    </div>-->
                </div>
            </Col>
            <Col :xs="24" :sm="0">
                <Row>
                    <Col span="6" offset="9"><div class="images"><img src="../images/logos/logo1.png"></div></Col>
                </Row>
                <Row>
                    <Col span="8" offset="8"><h3 class="ph_company">信达北京服务中心</h3></Col>
                </Row>
                <Row type="flex" justify="center" class="ph_inform">
                    <Col span="22"><p>为给客户提供更加标准化的体验，信达北京服务中心采用自营模式，打造一站式企业服务平台， 帮助企业快速解决发展遇到的问题，提供工商注册，财税服务，知识产权，人事外包，证件办理等全方位解决方案， 为你的企业发展保驾护航。</p></Col>
                </Row>
                <Row>
                    <Col><p class="ph_allservise">所有服务</p></Col>
                </Row>
                <div style="margin-bottom:20%">
                    <div v-for="(liscon,index) in listpage_ajax_new">
                        <a :href="'#/secondproduct/'+liscon.id" @click="storeid(liscon.id)">
                        <Row class="ph_line">
                            <Col span="5" offset="1" class="ph_providerimg"><img :src="'http://115.182.107.203:8088/xinda/pic' + liscon.providerImg"></Col>
                            <Col span="17" offset="1">
                                <Row class="ph_fz16">{{liscon.serviceName}}</Row>
                                <Row>{{liscon.serviceInfo}}</Row>
                                <!--<Row>{{liscon.regionName}} {{'&nbsp &nbsp &nbsp'}} {{liscon.marketPrice}}</Row>-->
                                <Row class="ph_mt10">
                                    <Col span="14" class="ph_fz8">{{liscon.regionName}}</Col>
                                    <Col span="8" class="ph_price ph_fz8">￥{{liscon.price}}</Col>
                                    <Col span="2" class="ph_fz8">元</Col>
                                </Row>                        
                            </Col>
                        </Row>
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import serviceProducts from '../widgets/shopfront/serviceProducts'
import customService from '../widgets/shopfront/customService'
import certification from '../widgets/shopfront/certification'
import myhead from '../components/header'
import myfoot from '../components/footer'
import qs from 'qs'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'shopfront',
    components: {
        myhead,
        myfoot,
        serviceProducts,
        customService,
        certification,

    },
    data() {
        return {
            lispage_ajax: [],
            listpage_ajax_new:[],
            links: this.$route.params.shopfrontID,
            shopfront: '/shopfront/',
            current: 1,
            allpage: 4,
            showItem: 3,
            number: 0,
            mydefault: 1,
            ifnone:true,
            comtype:0,
        }
    },
    computed: {
        ...mapGetters(['getshopid', 'getShop']),
        myready() {
            let that = this
            that.ajax.post('/xinda-api/provider/detail', qs.stringify({ id: that.$route.params.shopfrontID })).then(function (res) {
                //   console.log(res.data)
                that.currentShop(res.data.data)
            })
        },
        onresize(){
            if(document.body.scrollWidth < 768){
            this.ifnone = false;
            console.log(this.ifnone)
        }
        }
        
    },
    methods: {
        ...mapActions(['currentShop','setstoreid']),
        changecolor(index) {
            this.mydefault = index;
        },
        storeid(index) {
            this.setstoreid(index);
        }
    },
    created() {
        console.log(this.getshopid)
        // console.log(this.ifnone)
        // window.screen.width = 
        // if(window.outerWidth < 768){
        //     this.ifnone = false;
        // }
         if(this.getshopid == "a7304eecbd7246b4b424874e0359eab0"){
            this.comtype = 1
        }else{
            this.comtype = 0
        }
        let _this = this
        this.ajax.post("/xinda-api/product/package/grid", qs.stringify({     //接口（电脑端和手机端）
                limit: 18,
                start: _this.number,
                productTypeCode: _this.comtype,
            })).then(function (res) {

                _this.listpage_ajax_new = res.data.data;
                // console.log(res.data.data)
                // console.log(_this.listpage_ajax_new)
                // _this.number = 0
                // _this.isA = false
                // _this.listpage_ajax = _this.listpage_ajax_new.slice(_this.number, _this.number + 6)
                // console.log(_this.listpage_ajax)
            })
    },
    
}
// console.log(window.onresize)
// window.onresize = function(){
//     if(window.screen.width<768){
//         // console.log(this.ifnone)
//         this.ifnone = false
//     }
// }
</script>


<style lang="less" scoped>
.wid {
    width: 1200px;
    margin: 0 auto;
}



.shopfront-top {
    width: 100%;
    height: 179px;
    border: 1px solid gray;
    margin-top: 7px;
}

.shopfront-top-logo {
    margin-top: 43px;
    margin-left: 60px;
    float: left;
}

.shopfront-top-area {
    margin-left: 30px;
    float: left;
    h2 {
        padding: 50px 0 15px 0;
        font-size: 36px;
        color: #000;
    }
}

.shopfront-content {
    margin-top: 24px;
}

.delwidth {
    width: 300px;
}

.shopfront-content-left {
    width: 300px;
    height: 583px;
    border: 1px solid gray;
    float: left;
}

.shopfront-compony-intro {
    border-bottom: 1px solid gray;
    h2 {
        font-size: 24px;
        margin-top: 15px;
        margin-left: 8px;
    }
    p {
        padding: 40px 25px 90px 25px;
        font-size: 14px;
        line-height: 25px;
    }
}

.shopfront-compony-service {
    div {
        padding: 20px 50px 40px 50px;
        li {
            float: left;
        }
        img {
            margin-left: 10px;
        }
    }
}

.shopfront-content-right {
    float: right;
    width: 875px; // border: 1px solid gray;
}

.shopfront-content-right-title {
    border-bottom: 2px solid gray;
    height: 40px;
    div {
        width: 112px;
        float: left;
        line-height: 40px; // border-bottom: 2px solid #2693d4;
        // margin-left: 10px;
        text-align: center;
    }
    .changecolor {
        background-color: #a5aead;
        border-bottom: 1px solid #ae6152;
    }
}

.shopfront-content-right-service-content {
    z-index: 99999;
    line-height: 93px;
    text-align: center;
    border-bottom: 1px solid gray;
    font-size: 28px;
    color: #2694d3;
} // .shopfront-content-change {
//     margin-top: 40px;
//     margin-left: 470px;
//     div {
//         width: 37px;
//         height: 34px;
//         border: 1px solid gray;
//         font-size: 12px;
//         float: left;
//         text-align: center;
//         line-height: 34px;
//         margin: 0 5px;
//         cursor: pointer;
//     }
//     div:nth-child(1),
//     div:nth-child(2),
//     div:nth-last-child(1),
//     div:nth-last-child(2) {
//         width: 55px;
//         height: 34px;
//     }
// }
//手机端
.ph_toplogo {
    width: 100%;
    height: 100%;
    div {
        margin: 0 auto;
    }
}
.images{
    text-align: center;
    margin-top:10px;
}
.ph_company {
    text-align: center;
    font-weight: 700;
    margin-top:5px;
}
.ph_inform {
    margin-top: 20px;
}
.ph_allservise {
    font-size: 14px;
    padding: 10px;
    border-bottom: 1px solid #2693d4;
    margin-top: 20px;
}
.ph_providerimg {
    img {
        width: 100%;
        height: 100%;
        margin-top: 20px;
    }
}
.ph_line {
    padding: 10px 1px;
    border-bottom: 1px solid #cfcfcf;
    margin:0 2px;
}
.ph_price {
    color: red;
}
.ph_fz8 {
    font-size: 8px;
}
.ph_fz16 {
    font-size: 16px;
}
.ph_mt10 {
    margin-top: 10px;
}
</style>