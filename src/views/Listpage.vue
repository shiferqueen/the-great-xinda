<template>
    <div>
        <div>
            <p class="head_top">首页/公司工商</p>
        </div>
        <div class="main">
            <div class="main_left">
                <div class="navigation">
                    <div class="nav_line">
                        <div class="nav_line_left">服务分类</div>
                        <div class="nav_line_right">
                            <span>公司注册</span>
                            <span>公司变更</span>
                        </div>
                    </div>
                    <div class="nav_line">
                        <div class="nav_line_left teshuyangshi">类型</div>
                        <div class="nav_line_right">
                            <span>分公司注册</span>
                            <span>公司注册地址</span>
                            <span>合伙企业注册</span>
                            <span>外商独资公司注册</span>
                            <span>VIE架构</span>
                            <span>一般纳税注册地址</span>
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
                            <select name="block" v-model="selectedBlock">
                                <option v-for="(item, index) in blocks" :value="item">
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="content_top">
                        <span>综合排序</span>
                        <span @click='chicked'>{{prices}}</span>
                    </div>
                    <div class="content_top-t">
                        <div class="content-t-left">商品</div>
                        <div class="content-t-right">价格</div>
                    </div>
                    <div class="con-main" v-for="(listeach,index) in listpage_ajax">
                        <div class="con-main-left">
                            <a :href="'#/products/'+listeach.id" @click="storeid(listeach.id)">
                                <img :src="'http://115.182.107.203:8088/xinda/pic'+listeach.productImg">
                            </a>
                        </div>
                        <div class="con-main-middle">
                            <h4>
                                <a :href="'#/products/'+listeach.id" @click="storeid(listeach.id)">{{listeach.serviceName}}</a>
                            </h4>
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
                 <div class="bottom_page pagination">
                    <span v-show="current != 0" @click="current-- && goto(current--)">上一页</span>
                    <span  v-for="index in pages" @click="goto(index)" :class="{'active':current == index}">{{index}}</span>
                    <span  v-show="allpage != current" @click="current++ && goto(current++)">下一页</span>
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
    </div>
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
                current:1,
                showItem:2,
                allpage:3,
                number: 0,
                start: true,
                sorts: 0,
                prices:'价格'
            }

        },

        created() {
            let _this = this
            this.list();
            // let _this = this
            // this.ajax.post("/xinda-api/product/package/grid", qs.stringify({
            //     start: 0,productTypeCode: "1",
            // })).then(function (res) {
            //     _this.listpage_ajax = res.data.data;
            // });
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
            ...mapGetters(['getCartNum', 'getuser']),
            info() {
                return {
                    province: this.selectedProvince,
                    city: this.selectedCity,
                    block: this.selectedBlock
                }
            },
           

             //  分页器部分
             pages:function(){
                 let _this = this;
                var pag = [];
                       var i = _this.showItem;
                       while(_this.showItem){
                           pag.unshift(_this.showItem--);
                       }
               
                 return pag
               }

        },
        methods: {
            ...mapActions(['setstoreid', 'refCartNum', 'user']),


            //加入购物车
            addCartNum(id, uname, index) {
                // this.transif = !this.transif;
                var index = index + 1;
                if (this.transifs === index) {
                    this.transifs = index - '1' + 'a';
                } else {
                    this.transifs = index;
                }
                if (uname == "") {
                    this.$router.push({
                        path: 'action/login'
                    });
                } else {
                    let that = this;
                    this.ajax.post("/xinda-api/cart/add", qs.stringify({
                        id: id,
                        num: 1
                    })).then(function(res) {
                        that.refCartNum();

                    })
                }
            },
            //立即购买
            addCartNumb(id, uname) {
                if (uname == "") {
                    this.$router.push({
                        path: 'action/login'
                    });
                } else {
                    let that = this;
                    this.ajax.post("/xinda-api/cart/add", qs.stringify({
                        id: id,
                        num: 1
                    })).then(function(res) {
                        that.refCartNum();
                        that.$router.push({
                            name: 'shopping'
                        });
                    })

                }

            },
            storeid(index) {
                this.setstoreid(index);
            },
              //页面接口
            list(){
                let _this = this
                this.ajax.post("/xinda-api/product/package/grid", qs.stringify({
                productTypeCode: "1",
                start: _this.number,
                sort:_this.sorts,
                })).then(function (res) {
                    _this.listpage_ajax_new= res.data.data;
                  
                    _this.number = 0
                    _this.isA = false
                    _this.listpage_ajax = _this.listpage_ajax_new.slice(_this.number,_this.number+4)
                });
            },
            //分页器下一页方法
            goto:function(index){
            
                let _this = this
                
                if(index == this.current) return;
                _this.current = index
                //这里可以发送ajax请求
                if(index ==3 ){
                    index = 2
                }else if(index ==0){
                    index = -1
                }
                _this.number = (index-1)*4
                _this.listpage_ajax = _this.listpage_ajax_new.slice(_this.number,_this.number+4)
             
           },
            //价格排序
           chicked(){
               let _this = this;
               if(_this.sorts == 2){
                    _this.sorts = 3;
                    _this.list();
                    _this.prices = '价格 ↓';
               }
               else{
                   _this.sorts = 2;
                    _this.list();
                    _this.prices = '价格 ↑';
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
                            &:nth-child(1) {
                                background: #2693d4;
                                color: #fff;
                            }
                            &:hover {
                                background: #2080b9;
                            }
                        }
                        select {
                            width: 90px;
                            height: 20px;
                            margin: 0 5px;
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
                        &:first-child {
                            background: #2693d4;
                            color: #fff;
                        }
                    }
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
                    height: 123px;
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
                        h4 {
                            margin: 15px 0;
                        }
                        p {
                            margin: 15px 0;
                            color: #686868;
                            font-size: 14px;
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
                    font-size:15px;
                    padding: 10px;
                    border: 1px solid #cdcdcd;
                    color: #cdcdcd;
                    cursor: pointer;
                    
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
                    margin: 5px 78px;
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
    }

    //分页器
    .pagination {
        position: relative;

      }
      .pagination span{
        display: inline-block;
        margin:0 5px;
      }
      .pagination span a{
        padding:.5rem;
        display:inline-block;
        border:1px solid #ddd;
        background:#fff;

        color:#0E90D2;
      }
      .pagination span a:hover{
        background:#eee;
      }
      .pagination span.active{
        background:#0E90D2;
        color:#fff !important;
      }
      //分页器结束
</style>