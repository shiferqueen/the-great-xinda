<template>
    <div>
        <div class="wid">
            <div class="shopfront-top clear">
                <img src="../images/logos/logo2.png" class="shopfront-top-logo">
                <div class="shopfront-top-area">
                    <h2>{{getShop.name}}</h2>
                    <p>{{getShop.regionName}}</p>
                </div>
            </div>
            <div class="shopfront-content clear">
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
                <div class="shopfront-content-right">
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
                    <div class="shopfront-content-right-service-content">服务内容</div>
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
            links: this.$route.params.shopfrontID,
            shopfront: '/shopfront/',
            current: 1,
            allpage: 4,
            showItem: 3,
            number: 0,
            mydefault: 1,
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
        }
        // pages:function(){
        //      let _this = this;
        //     var pag = [];
        //            var i = _this.showItem;
        //            while(_this.showItem){
        //                pag.unshift(_this.showItem--);
        //            }
        //      return pag
        //    }
    },
    methods: {
        ...mapActions(['currentShop']),
        changecolor(index) {
            this.mydefault = index;
        }
        // goto:function(index){
        //     let _this =this
        //     if(index == this.current)return;
        //     _this.current = index
        //     if(index == 4){
        //         index = 3
        //     }
        //     _this.number = (index-1)*6
        //      _this.listpage_ajax = _this.listpage_ajax_new.slice(_this.number,_this.number+4)
        // }
    },
    created() {

        //     this.ajax.post('/xinda-api/recommend/list',qs.stringify({id: that.$route.params.shopfrontID})).then(function(res){
        // console.log(res.data.data)
        //         that.currentShop(res.data.data)
        //     });
    }
}
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
</style>