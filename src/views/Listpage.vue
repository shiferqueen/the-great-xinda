<template>
    <Row>
        <Col :xs="0" :sm="24">
        <div>
            <p class="head_top">首页/财税服务</p>
        </div>
        <div class="main">
            <div class="main_left">
                <div class="navigation">
                    <div class="nav_line">
                        <div class="nav_line_left">服务分类</div>
                        <div class="nav_line_right">
                            <span :class="{nav_line_spana: spantoga}" @click="queryb()">公司注册</span>
                            <span :class="{nav_line_spana: !spantoga}" @click="querya()">公司变更</span>
                        </div>
                    </div>
                    <div class="nav_line">
                        <div class="nav_line_left teshuyangshi">类型</div>
                        <div class="nav_line_right">
                            <span :class="{nav_line_spanb: spantogb ==1}" @click="queryc(1)">公司代理记账</span>
                            <span :class="{nav_line_spanb: spantogb ==2}" @click="queryc(2)">分公司税务报道</span>
                            <span :class="{nav_line_spanb: spantogb ==4}" @click="queryc(4)">合伙企业注册</span>
                            <span :class="{nav_line_spanb: spantogb ==5}" @click="queryc(5)">外商独资公司注册</span>
                            <span :class="{nav_line_spanb: spantogb ==3}" @click="queryc(3)">VIE架构</span>
                            <span :class="{nav_line_spanb: spantogb ==6}" @click="queryc(6)">一般纳税公司基金</span>
                        </div>
                    </div>
                    <div class="nav_line">
                        <div class="nav_line_left">服务区域</div>
                        <div class="nav_line_right">
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
                            <select name="block" v-model="selectedBlock" @change="chan($event)">
                                <option v-for="(item, index) in blocks" :value="item">
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="content_top">
                        <span :class="{nav_line_top: spta ==1}" @click='chicked(1)'>综合排序</span>
                        <span :class="{nav_line_top: spta ==2}" @click='chicked(2)'>{{prices}}</span>
                    </div>
                    <div class="content_top-t">
                        <div class="content-t-left">商品</div>
                        <div class="content-t-right">价格</div>
                    </div>
                    <div class="con-main" v-for="(listeach,index) in listpage_ajax">
                        <div v-if="listeach.regionName =='北京-北京市-'+selectedBlock.name">
                            <div class="con-main-left">
                                <a :href="'#/products/'+listeach.id" @click="storeid(listeach.id)">
                                    <img :src="'http://115.182.107.203:8088/xinda/pic'+listeach.productImg">
                                </a>
                            </div>
                            <div class="con-main-middle">
                                <h3>
                                    <a :href="'#/products/'+listeach.id" @click="storeid(listeach.id)">{{listeach.serviceName}}</a>
                                </h3>
                                <p>{{listeach.serviceInfo}}</p>
                                <p>
                                    <span>{{listeach.providerName}}</span>
                                    <span>{{listeach.regionName}}</span>
                                </p>
                            </div>
                            <div class="con-main-right">
                                <p>￥{{listeach.price}}</p>
                                <span @click="addCartNumb(listeach.id,getuser)">立即购买</span>
                                <span @click="addCartNum(listeach.id,getuser,index)">加入购物车</span>
                                <transition name="trans">
                                    <div class="transition-div" v-if="transifs == index+1"> + 1</div>
                                </transition>
                                <transition name="trans">
                                    <div class="transition-div" v-if="transifs == index + 'a'"> + 1</div>
                                </transition>
    
                            </div>
                        </div>
    
                    </div>
                </div>
                <div class="bottom_page pagination">
                    <span @click="current--">上一页</span>
                    <span v-for="(value,index) in pages" @click="current = index" :class="{'active':current == index}">{{index+1}}</span>
                    <span @click="current++">下一页</span>
                </div>
            </div>
            <div class="main_right">
                <div class="border">
                    <img src="../images/listpage/logo_1.png" alt="">
                    <p>平台担保</p>
                </div>
                <div class="border">
                    <img src="../images/listpage/logo_2.png" alt="">
                    <p>优质服务</p>
                </div>
                <div class="border">
                    <img src="../images/listpage/logo_3.png" alt="">
                    <p>过程监督</p>
                </div>
                <div class="border">
                    <img src="../images/listpage/logo_4.png" alt="">
                    <p>增值服务</p>
                </div>
            </div>
        </div>
        </Col>
        <Col :xs="24" :sm="0">
        <Row>
            <div class="main-phone">
                <Col span="16" offset="4" class="phone-top">
                <Row>
                    <Col span="12" class="phone-top-con">
                    <div :class="{top :spta ==1}" @click='chicked(1)'>综合排序</div>
                    </Col>
                    <Col span="12" class="phone-top-con">
                    <div :class="{top :spta ==2}" @click='chicked(2)'>{{prices}}</div>
                    </Col>
                </Row>
                </Col>
                <Col span="24">
                <div class="con-main-phone" v-for="(listeach,index) in listpage_ajax">
                    <a :href="'#/products/'+listeach.id" @click="storeid(listeach.id)">
                        <Col span="8">
                        <div class="con-main-left-phone">
                            <a :href="'#/products/'+listeach.id" @click="storeid(listeach.id)">
                                <img :src="'http://115.182.107.203:8088/xinda/pic'+listeach.productImg">
                            </a>
                        </div>
                        </Col>
                        <Col span="15" offset="1">
                        <div class="con-main-middle-phone">
                            <p class="title">
                                <a :href="'#/products/'+listeach.id" @click="storeid(listeach.id)">{{listeach.serviceName}}</a>
                            </p>
                            <p>{{listeach.serviceInfo}}</p>
                            <p>
                                <span class="region">
                                    <Icon type="android-pin"></Icon> {{listeach.regionName}}</span>
                                <span class="teshu">
                                    <span class="price">￥{{listeach.price}}</span>元</span>
                            </p>
    
                        </div>
                        </Col>
                    </a>
                </div>
                </Col>
                <Col span="24" class="phone-bottom">
                </Col>
            </div>
        </Row>
        </Col>
    </Row>
</template>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
<script>
import provinces from '../provinces.js'
import Vue from 'vue'
import myhead from '../components/header'
import myfoot from '../components/footer'
import qs from 'qs'
import {
    mapActions,
    mapGetters
} from 'vuex'
export default {
    name: 'Listpage',
    components: {
        myhead,
        myfoot
    },
    data() {
        return {
            listpage_ajax: [],
            selectedProvince: provinces[0],
            selectedCity: 0,
            selectedBlock: 0,
            cities: 0,
            provinces,
            blocks: 0,
            transifs: 0,
            current: 0,
            showItem: 2,
            allpage: 3,
            number: 0,
            start: true,
            sorts: 0,
            que: 1,
            prices: '价格',
            pages: [],
            spantoga: true, //样式切换
            spantogb: 1, //样式切换
            spta: 1,
            spt: 1,
            snji: ''
        }

    },

    created() {

        let _this = this
        window.onresize = function () {
            _this.changePage();
        };
        if (this.getindexnum == "") {
            this.que = 1
        } else {
            this.que = this.getindexnum
        }
        this.list();
        // ------------以下为省市区三级联动
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
        ...mapGetters(['getCartNum', 'getuser', 'getindexnum']),
        info() {
            return {
                province: this.selectedProvince,
                city: this.selectedCity,
                block: this.selectedBlock
            }
        },
    },
    methods: {
        ...mapActions(['setstoreid', 'refCartNum', 'user', 'popups', 'setindexnum']),

        //加入购物车
        addCartNum(id, uname, index) {
            let that = this;
            if (uname == "") {
                that.popups({
                    headers: "当前尚未登录",
                    content: "是否跳转到登录页面",
                    ok() {

                        that.$router.push({
                            path: 'action/login'
                        });
                    }
                })
            } else {
                var index = index + 1;
                if (that.transifs === index) {
                    this.transifs = index - '1' + 'a';
                } else {
                    that.transifs = index;
                }

                that.ajax.post("/xinda-api/cart/add", qs.stringify({
                    id: id,
                    num: 1
                })).then(function (res) {
                    that.refCartNum();

                })
            }
        },
        //立即购买
        addCartNumb(id, uname) {
            let that = this;
            if (uname == "") {
                that.popups({
                    headers: "当前尚未登录",
                    content: "是否跳转到登录页面",
                    ok() {
                        that.$router.push({
                            path: 'action/login'
                        });
                    }
                })
            } else {
                that.ajax.post("/xinda-api/cart/add", qs.stringify({
                    id: id,
                    num: 1
                })).then(function (res) {
                    that.refCartNum();
                    that.$router.push({ name: 'shopping' });
                })

            }

        },
        storeid(index) {
            this.setstoreid(index);
        },
        //页面接口
        list() {

            let _this = this
            this.ajax.post("/xinda-api/product/package/grid", qs.stringify({
                productTypeCode: _this.que,
                start: _this.number,
                sort: _this.sorts,
            })).then(function (res) {
                //_this.que = _this.indexnum;
                _this.listpage_ajax_new = res.data.data;
                _this.pages.length = Math.ceil(_this.listpage_ajax_new.length / 4)
                _this.number = 0
                _this.isA = false
                //屏幕大小监控
                _this.changePage();
            });
        },
        //改变分页数据
        changePage() {
            if (document.body.clientWidth > 600) {
                this.listpage_ajax = this.listpage_ajax_new.slice(this.number, this.number + 4)
            } else {
                this.listpage_ajax = this.listpage_ajax_new
            }
        },
        //点击按钮
        querya() {
            let _this = this
            _this.que = 5;
            _this.list();
            _this.spantoga = false
        },
        queryb() {
            let _this = this
            _this.que = 4;
            _this.list();
            _this.spantoga = true
        },

        //下方按钮切换
        queryc(c) {
            let _this = this
            _this.que = c;
            _this.list();
            _this.spantogb = c

        },



        //价格排序
        chicked(c) {
            let _this = this;
            if (_this.sorts == 2) {
                _this.sorts = 3;
                _this.list();
                _this.prices = '价格 ↓';
            }
            else {
                _this.sorts = 2;
                _this.list();
                _this.prices = '价格 ↑';
            }
            _this.spta = c
            if (_this.spta == 1) {
                _this.prices = '价格';
            }

        },
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
        },
        current(newv, oldv) {
            if (newv > this.pages.length - 1 || newv < 0) {
                this.current = oldv
            }
            this.listpage_ajax = this.listpage_ajax_new.slice(this.current, this.current + 4)
        }
    },

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
    width: 1205px;
    margin: 25px auto 10px;
    font-size: 14px;
    color: #696969;
}

.main {
    width: 1200px;
    margin: 0 auto;
    &:after {
        .clear;
    }
    .main_left {
        width: 950px;
        float: left;
        .navigation {
            width: 950px;
            background: #f7f7f7;
            border: 1px solid #cdcdcd;
            .nav_line {
                width: 950px;
                border-bottom: 1px solid #cdcdcd;
                &:after {
                    .clear;
                }
                &:nth-child(3) {
                    border-bottom: 0 !important;
                }
                .nav_line_left {
                    width: 100px;
                    float: left;
                    text-align: center;
                    line-height: 42px;
                    font-size: 16px;
                    font-weight: 700;
                    border-right: 1px solid #cdcdcd;
                }
                .nav_line_right {
                    width: 842px;
                    float: right;
                    line-height: 38px;
                    font-size: 16px;
                    span {
                        padding: 3px 15px;
                        border-radius: 5px;
                        margin: 0 18px;
                        cursor: pointer;

                        &:hover {
                            background: #2080b9;
                        }
                    }
                    .nav_line_spana {
                        background: #2693d4;
                        color: #fff;
                    }
                    .nav_line_spanb {
                        background: #2693d4;
                        color: #fff;
                    }
                    select {
                        width: 90px;
                        height: 20px;
                        margin: 0 5px;
                        font-size: 14px;
                    }
                }
            }
        }
        .content {
            width: 950px;
            margin-top: 25px;
            border: 1px solid #cdcdcd;
            .content_top {
                width: 950px;
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
                }
            }
            .nav_line_top {
                background: #2693d4;
                color: #fff !important;
            }
            .content_top-t {
                width: 930px;
                height: 50px;
                margin: 0 auto;
                border-bottom: 1px solid #cdcdcd;
                &:after {
                    .clear;
                }
                .content-t-left {
                    line-height: 50px;
                    padding: 0 35px;
                    float: left;
                    color: #686868;
                    font-size: 14px;
                }
                .content-t-right {
                    line-height: 50px;
                    padding: 0 35px;
                    float: right;
                    color: #686868;
                    font-size: 14px;
                }
            }
            .con-main {
                width: 930px;
                margin: 0 auto;
                border-bottom: 1px solid #cdcdcd;
                &:last-child {
                    border-bottom: 0;
                }
                &:after {
                    .clear;
                }
                .con-main-left {
                    float: left;
                    img {
                        width: 100px;
                        height: 100px;
                        border: 1px solid #cdcdcd;
                        margin: 7px 0;
                    }
                }
                .con-main-middle {
                    float: left;
                    margin: 0 20px;
                    h3 {
                        margin: 15px 0;
                    }
                    p {
                        margin: 5px 0;
                        color: #686868;
                        font-size: 14px;
                        width: 465px;
                        span {
                            margin-right: 70px;
                        }
                    }
                }
                .con-main-right {
                    float: right;
                    position: relative;
                    p {
                        font-size: 22px;
                        color: red;
                        margin: 25px 30px;
                    }
                    span {
                        padding: 10px 17px;
                        background: #2693d4;
                        color: #fff;
                        border-radius: 5px;
                        cursor: pointer;
                        z-index: 999;
                    }
                }
            }
        }
        .bottom_page {
            width: 270px;
            margin: 25px auto;
            span {
                font-size: 15px;
                padding: 10px;
                border: 1px solid #cdcdcd;
                color: #cdcdcd;
                cursor: pointer;
                &:hover {
                    background: #7dcdf3 !important;
                    color: #fff;
                }
            }
        }
    }
    .main_right {
        width: 237px;
        float: right;
        border: 1px solid #cdcdcd;
        .border {
            width: 220px;
            height: 165px;
            margin: 0 auto;
            border-bottom: 1px solid #cdcdcd;
            &:nth-child(4) {
                border-bottom: 0;
            }
            img {
                margin: 10px 60px;
            }
            p {
                margin: 5px 75px;
                font-size: 16px;
                font-weight: 700;
                color: #666666;
            }
        }
    }
}

.teshuyangshi {
    line-height: 78px !important;
}







/*过渡动画的class*/

.transition-div {
    width: 110px;
    height: 35px;
    z-index: -3;
    position: absolute;
    bottom: -8px;
    right: 5px;
    color: #2693d4;
    text-align: center;
    font-size: 30px;
}







/*// 过渡动画*/

.trans-enter-active {
    animation: bounce-in 1.2s linear;
}

@keyframes bounce-in {
    0% {
        transform: translate(0px, 0px);
        font-size: 40px;
    }
    50% {
        transform: translate(100px, -400px);
        font-size: 20px;
    }
    100% {
        transform: translate(200px, -800px);
        font-size: 0px;
    }
} //分页器
.pagination {
    position: relative;
}

.pagination span {
    display: inline-block;
    margin: 0 5px;
}

.pagination span a {
    padding: .5rem;
    display: inline-block;
    border: 1px solid #ddd;
    background: #fff;

    color: #0E90D2;
}

.pagination span:hover {
    background: #cdcdcd !important;
}

.pagination span.active {
    background: #0E90D2;
    color: #fff !important;
} //分页器结束
.main-phone {
    padding: 0 10px;
    .phone-top {
        margin-top: 10px;
        height: 30px;
        border: 1px solid #2693d4;
        border-radius: 5px;
        .phone-top-con {
            height: 28px;
            font-size: 14px;
            text-align: center;
            div {
                height: 28px;
                padding: 3px 0;
            }
        }
    }
    .top {
        background: #2693d4;
        color: #fff;
    }
    .con-main-phone {
        width: 100%;
        margin: 0 auto;
        border-bottom: 1px solid #cdcdcd;

        &:after {
            .clear;
        }
        .con-main-left-phone {
            float: left;
            img {
                width: 100%;
                height: auto;
                border: 1px solid #cdcdcd;
                margin: 25px 0;
            }
        }
        .con-main-middle-phone {
            .title {
                font-size: 16px;
                margin: 20px 0;
            }
            p {
                margin: 5px 0;
                color: #686868;
                font-size: 14px;
                margin-bottom: 10px;
                .region {
                    font-size: 12px;
                    margin-right: 10%;
                }
                .teshu {
                    font-size: 8px;
                    margin-right: 5%;
                    .price {
                        font-size: 18px;
                        margin-right: 3px;
                        color: red;
                    }
                }
            }
        }
    }
    .phone-bottom {
        height: 170px;
    }
}
</style>