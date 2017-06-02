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
                            <select>
                <option value="">省</option>
                <option value=""></option>
                <option value=""></option>
              </select>
                            <select>
                <option value="">市</option>
                <option value=""></option>
                <option value=""></option>
              </select>
                            <select>
                <option value="">区</option>
                <option value=""></option>
                <option value=""></option>
              </select>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="content_top">
                        <span>综合排序</span><span>价格</span>
                    </div>
                    <div class="content_top-t">
                        <div class="content-t-left">商品</div>
                        <div class="content-t-right">价格</div>
                    </div>
                    <div class="con-main" v-for="(listeach,index) in listpage_ajax">
                        <div class="con-main-left">
                         <a :href="'#/products/'+listeach.id" @click="storeid(listeach.id)"><img :src="'http://115.182.107.203:8088/xinda/pic'+listeach.productImg"></a>
                        </div>
                        <div class="con-main-middle">
                            <h4><a :href="'#/products/'+listeach.id" @click="storeid(listeach.id)">{{listeach.serviceName}}</a></h4>
                            <p>{{listeach.serviceInfo}}</p>
                            <p><span>{{listeach.providerName}}</span><span>{{listeach.regionName}}</span></p>
                        </div>
                        <div class="con-main-right">
                            <p>￥{{listeach.price}}</p>
                            <span @click="addCartNumb(listeach.id,getuser)">立即购买</span>
                            <span @click="addCartNum(listeach.id,getuser)">加入购物车</span>
                        </div>
                    </div>
                </div>
                <div class="bottom_page">
                    <span>上一页</span>
                    <span>1</span>
                    <span>下一页</span>
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
    import myhead from '../components/header'
    import myfoot from '../components/footer'
    import qs from 'qs'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'Listpage',
        components: {
            myhead,
            myfoot
        },
        data() {
            return {
                listpage_ajax: []
            }

        },

        created() {
            let _this = this
            this.ajax.post("/xinda-api/product/package/grid", qs.stringify({
                start: 0, limit: 8, productTypeCode: "1",
                productId: "8a82f52b674543e298d2e5f685946e6e", sort: 2
            })).then(function (res) {
                _this.listpage_ajax = res.data.data;
            });

        },
        computed: {
            ...mapGetters(['getCartNum','getuser']),
        },
        methods: {
            ...mapActions(['setstoreid','refCartNum','user']),
            

            addCartNum(id,uname) {
                if(uname==""){
                    this.$router.push({path: 'action/login'});
                }else{
                let that = this;
                this.ajax.post("/xinda-api/cart/add", qs.stringify({
                    id: id,
                    num: 1
                })).then(function (res) {
                    that.refCartNum();
                })
                }
            },
            addCartNumb(id,uname) {
                if(uname==""){
                    this.$router.push({path: 'action/login'});
                }else{
                let that = this;
                this.ajax.post("/xinda-api/cart/add", qs.stringify({
                    id: id,
                    num: 1
                })).then(function (res) {
                    that.refCartNum();
                    that.$router.push({name: 'shopping'});
                })
                
            }
           
            },
        

            storeid(id){
                this.setstoreid(id);
            }
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
                        }
                    }
                }
            }
            .bottom_page {
                width: 195px;
                margin: 25px auto;
                span {
                    padding: 10px;
                    border: 1px solid #cdcdcd;
                    color: #cdcdcd;
                    cursor: pointer;
                    &:nth-child(2) {
                        border: 1px solid #2693d4;
                        padding: 10px 15px;
                        color: #2693d4;
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
</style>