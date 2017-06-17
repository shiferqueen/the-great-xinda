<template>
    <div>
        <Row>
            <Col :xs ="0" :sm="24">
                <div class="wid">
                    <p class="shoplist">首页/公司工商</p>
                    <div class="service-area-list clear">
                        <div class="service-area">服务区域</div>
                        <div class="service-area-right">
                            <select name="province" v-model="selectedProvince">
                                <option v-for="(item, index) in provinces" v-if="item.level === 1" :value="item">
                                    {{ item.name }}
                                </option>
                            </select>
                            <select name="city" v-model="selectedCity">
                                <option v-for="(item, index) in cities" :value="item">
                                    {{ item.name }}
                                </option>
                            </select>
                            <select name="block" v-model="selectedBlock">
                                <option v-for="(item, index) in blocks" :value="item">
                                    {{ item.name }}
                                </option>
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
                                    <p class="all-items-content-left-logo">
                                        <img :src="'http://115.182.107.203:8088/xinda/pic'+liscon.providerImg">
                                    </p>
                                    <p class="all-items-content-left-gold">
                                        <img src="../images/logos/little01.png">
                                        <span>金牌服务商</span>
                                    </p>
                                </div>
                                <div class="all-items-content-left-infor">
                                    <ul class="clear">
                                        <li>{{liscon.providerName}}</li>
                                        <li>信誉&nbsp &nbsp
                                            <img src="../images/logos/little07.png">
                                            <img src="../images/logos/little07.png">
                                            <img src="../images/logos/little07.png">
                                            <img src="../images/logos/little07.png">
                                            <img src="../images/logos/little04.png">
                                        </li>
                                        <li>{{liscon.regionName}}</li>
                                        <li>累计服务客户次数：{{liscon.orderNum}} &nbsp|&nbsp &nbsp 好评率：100%</li>
                                        <li>
                                            <ul class="all-items-tax clear">
                                                <li class="all-items-tax-fir" v-for="lis in lispage[index]">{{lis}}</li>
                                                <!--<li class="all-items-tax-sec">{{liscon.productTypes.substr(5,4)}}</li>-->
                                                <!--<li class="all-items-tax-sec">{{liscon.productTypes.substr(10,4)}}</li>-->
                                                <!--<li class="all-items-tax-sec">{{liscon.productTypes.substr(15,4)}}</li>-->
                                            </ul>
                                        </li>
                                        <li class="go-to-shop">
                                            <a :href="'#/shopfront/' + liscon.id" @click="goshop(liscon.id)">进入店铺</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-change clear">
                        <div class="item-change-up">上一页</div>
                        <div class="item-change-num">1</div>
                        <div class="item-change-next">下一页</div>
                    </div>
                </div>
            </Col>
            <Col :xs="24" :sm="0">
                <Row style="margin-top: 20px;">
                    <Col span="16" offset="4" style="border: 1px solid #2693d4; border-radius:5px">
                        <!--<div class="ph_title clear">
                            <div class="ph_sort">默认排序</div>
                            <div class="ph_sales">销量</div>
                        </div>-->
                        <Row>
                            <Col span="12" style="text-align:center;"><p :class="{bccol: bccoll ==1}" @click="changenum(1)" style="padding:5px 0;">默认排序</p></Col>
                            <Col span="12" style="text-align: center;"><p :class="{bccol: bccoll ==2}" @click="changenum(2)" style="padding:5px 0;">销量</p></Col>
                        </Row>
                    </Col>
                </Row>
                <div v-for="(liscon,index) in lispage_ajax">
                    <a :href="'#/shopfront/' + liscon.id" @click="goshop(liscon.id)">
                    <Row class="ph_shoplistcon" >
                        <Col span="5" offset="1" class="ph_shoplistimg"><img :src="'http://115.182.107.203:8088/xinda/pic'+liscon.providerImg"></Col>
                        <Col span="17" offset="1" class="ph_shoplistTitle">
                            <Row><div class="ph_listname">{{liscon.providerName}}</div></Row>
                            <Row><div class="ph_listplace"><span><Icon type="ios-location-outline"></Icon></span>{{liscon.regionName}}</div></Row>
                            <Row><div class="ph_listnum">累计服务客户数量:&nbsp<span class="clored">{{liscon.orderNum}}</span> &nbsp 好评率:&nbsp<span class="clored">100%</span></div></Row>
                        </Col>
                    </Row>
                    </a>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import provinces from '../provinces.js'
import Vue from 'vue'
import myhead from '../components/header'
import myfoot from '../components/footer'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'shoplist',
    data() {
        return {
            lispage_ajax: [],
            // lis_arrs:[]
            selectedProvince: provinces[0],
            selectedCity: 0,
            selectedBlock: 0,
            cities: 0,
            provinces,
            blocks: 0,
            lispage: [],
           sort_one:1,
           bccoll:1,
        }

    },
    created() {
       this.move();
        // let _this = this;
        // this.ajax.post('/xinda-api/provider/grid', { start: 0, limit: 6, productTypeCode: 10 }).then(function (data) {
        //     _this.lispage_ajax = data.data.data
        //     _this.lispage = _this.lispage_ajax.map(function (value) {
        //         return value.productTypes.split(',')
        //     })
        //     // console.log(_this.lispage)
        // })
        // ----------以下为省市区三级联动
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
        // ----------三级联动结束
    },
    computed: {
        info() {
            return {
                province: this.selectedProvince,
                city: this.selectedCity,
                block: this.selectedBlock
            }
        },
        ...mapGetters(['getshopid']),
    },
    methods: {
        ...mapActions(['setgoshop']),
        goshop(id) {
            this.setgoshop(id)
            this.$Message.info('欢迎进入店铺');
          
            console.log(id)
        },
        // changenum(){
        //     console.log(this.sort_one)
        //     this.sort_one = 2,
        //     move()
        // },
        move(){
            let _this = this;
        this.ajax.post('/xinda-api/provider/grid', { sort: _this.sort_one, start: 0, limit: 6, productTypeCode: 10 }).then(function (data) {
            _this.lispage_ajax = data.data.data
            _this.lispage = _this.lispage_ajax.map(function (value) {
                return value.productTypes.split(',')
            })
            // console.log(_this.lispage)
        })
    },
    changenum(n){
            this.sort_one = 3,
            this.move(),
            this.bccoll = n
        }
    },
    components: {
        myhead,
        myfoot,
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
    &>div {
        margin: 12px auto;
    }
}

.all-items-content-left {
    width: 568px;
    height: 250px;
    border: 1px solid gray; // float: left;
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

.all-items-tax {
    width: 300px;
    height: 65px;
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
    margin: 2px;
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
    color: #fff;
    cursor: pointer;
}

.all-items-content-right {
    width: 568px;
    height: 250px;
    border: 1px solid gray; // float: right;
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
//手机端
.ph_shoplistcon {
    border-bottom :1px solid #cfcfcf;
    margin: 40px 2px 0 2px;
    padding-bottom: 20px;
}
.ph_shoplistimg {
    // border: 1px solid gray;
    margin-bottom: 20px;
    text-align: center;
    img {
        width: 100%;
        height: 100%;
    }
}
.ph_listname {
    font-size: 16px;
}
.ph_listplace {
    font-size: 12px;
    margin-top: 8px;
}
.ph_listnum {
    font-size: 8px;
    margin-top: 15px;
}
.clored {
    color: red;
}
.bccol {
     background:#2693d4;
     color:#fff;
     
}
</style>