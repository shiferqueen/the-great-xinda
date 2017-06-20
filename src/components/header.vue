<template>
    <Row>
        <Col :xs="{ span: 0}" :sm="{ span: 24}">
        <div class="header">
            <div class="header-containter">
                <div class="hdcon-top">
                    <div class="hdcon-top-l fl">
                        <h1 class="fl">信达</h1>
                        <p class="fr">北京市</p>
                        <a href="javascript:void(0)" class="fr">[切换城市]</a>
                    </div>
                    <div class="hdcon-top-m fl">
                        <a href="javascript:" class="goods fl" @click="goods(1)" :class="{blue:serch_idnex==1}">产品</a>
                        <a href="javascript:" class="server fl" @click="goods(2)" :class="{blue:serch_idnex==2}">服务商</a>
                        <input type="text" placeholder="搜索您需要的服务或服务商" class="fl" v-model="search" @keyup.enter="searchInput" @keyup="get($event)">
                        <h3 @click="clearInput()" class="search-reset">×</h3>
                        <button @click="searchInput()" class="search-btn fl">搜索</button>
                        <div class="search-select">
                            <transition-group tag="ul" transition-mode="out-in">
                                <li v-for="(value,index) in searchData" :class="{selectback:index==now}" :key="index" @click="searchThis(value.serviceName,value.id, value.providerName)" @mouseover="selectHover(index)" class="search-select-option">
                                    {{serch_idnex == 1 ? value.serviceName : value.providerName}}
                                </li>
                            </transition-group>
                        </div>
                        <span class="fl">热门服务：</span>
                        <span class="fl hand">社保开户</span>
                        <span class="fl hand">公司注册</span>
                    </div>
                    <div class="hdcon-top-r fr">
                        <span>010-83421842</span>
                    </div>
                </div>
                <div class="hdcon-bot">
                    <ul class="clear">
                        <li v-for="(massage,index) in massages">
                            <a :href="massage.lin" class="loader" id="loader" v-on:click="choice_active(index)" :class="{blueBorder:active===index}">{{massage.text}}</a>
                            <!----多级列表------>
                            <div class="allproduces" id="allproduces" v-if="index==0">
                                <div class="addpro-left">
                                    <div class="addpro-list" id="add-l1">
                                        <img src="../images/index/u283.png" class="fl">
                                        <div class="fl addpro-li">
                                            <p class="p1">财税服务</p>
                                            <span class="span1">代理记账</span>
                                            <span class="span1">税务代办</span>
                                            <span class="span1">审计报告</span>
                                            <div id="add-r1" class="addpro-right">
                                                <p>
                                                    <span>代理记账 ></span>
                                                    <a href="javascript:void(0)">小规模记账</a>
                                                    <a href="javascript:void(0)">一般纳税人记录</a>
                                                </p>
                                                <br>
                                                <br>
                                                <p>
                                                    <span>税务代办 ></span>
                                                    <a href="javascript:void(0)">国税地税报道</a>
                                                    <a href="javascript:void(0)">代开增值税专用发票</a>
                                                    <a href="javascript:void(0)">所得税汇算清缴</a>
                                                    <a href="javascript:void(0)">一般纳税人资质申办</a>
                                                </p>
                                                <br>
                                                <br>
                                                <p>
                                                    <span>审计报告 ></span>
                                                    <a href="javascript:void(0)">验资报告</a>
                                                    <a href="javascript:void(0)">财务审计报告</a>
                                                    <a href="javascript:void(0)">税审报告</a>
                                                    <a href="javascript:void(0)">企业注销清算报告</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="addpro-list" id="add-l2">
                                        <img src="../images/index/u293.png" class="fl">
                                        <div class="fl addpro-li">
                                            <p class="p1">公司工商</p>
                                            <span class="span1">公司注册</span>
                                            <span class="span1">公司变更</span>
                                            <div id="add-r2" class="addpro-right">
                                                <p>
                                                    <span>公司注册 ></span>
                                                    <a href="javascript:void(0)">分公司注册</a>
                                                    <a href="javascript:void(0)">合伙企业注册</a>
                                                    <a href="javascript:void(0)">外商独资公司</a>
                                                    <a href="javascript:void(0)">VIE架构</a>
                                                    <a href="javascript:void(0)">股份公司注册</a>
                                                    <a href="javascript:void(0)">有限责任公司注册</a>
    
                                                    <a href="javascript:void(0)">一般纳税人注册地址</a>
                                                </p>
                                                <br>
                                                <br>
                                                <p>
                                                    <span>公司变更 ></span>
                                                    <a href="javascript:void(0)">公司股权变更</a>
                                                    <a href="javascript:void(0)">公司名称变更</a>
                                                    <a href="javascript:void(0)">公司注册地址变更</a>
                                                    <a href="javascript:void(0)">内资公司注销</a>
                                                    <a href="javascript:void(0)">法人、高管或注册资本变更</a>
                                                    <a href="javascript:void(0)">公司经营范围变更</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="addpro-list" id="add-l3">
                                        <img src="../images/index/u293.png" class="fl">
                                        <div class="fl addpro-li">
                                            <p class="p1">知识产权</p>
                                            <span class="span1">专利申请</span>
                                            <span class="span1">商标注册</span>
                                            <span class="span1">版权保护</span>
                                            <div id="add-r3" class="addpro-right">
                                                <p>
                                                    <span>专利申请 ></span>
                                                    <a href="javascript:void(0)">审查意见答复</a>
                                                    <a href="javascript:void(0)">外观专利减缓（共同申请）</a>
                                                    <a href="javascript:void(0)">发明不减缓</a>
                                                    <a href="javascript:void(0)">发明减缓（个人）</a>
                                                    <a href="javascript:void(0)">实用新型专利减缓</a>
                                                    <a href="javascript:void(0)">专利申请复审</a>
                                                    <a href="javascript:void(0)">外观设计专利（不减缓）</a>
                                                    <a href="javascript:void(0)">办理实用新型检索报告</a>
                                                    <a href="javascript:void(0)">实用新型专利</a>
                                                    <a href="javascript:void(0)">外观专利减缓</a>
                                                    <a href="javascript:void(0)">实用新型专科减缓（共同申请）</a>
                                                </p>
                                                <br>
                                                <br>
                                                <p>
                                                    <span>商标注册 ></span>
                                                    <a href="javascript:void(0)">LOGO设计+商标注册</a>
                                                    <a href="javascript:void(0)">商标变更</a>
                                                    <a href="javascript:void(0)">商标续展</a>
                                                    <a href="javascript:void(0)">商标驳回复审</a>
                                                    <a href="javascript:void(0)">商标快速注册</a>
                                                    <a href="javascript:void(0)">著名商标认定</a>
                                                </p>
                                                <br>
                                                <br>
                                                <p>
                                                    <span>版权保护 ></span>
                                                    <a href="javascript:void(0)">电视剧作品登记</a>
                                                    <a href="javascript:void(0)">美术著作权</a>
                                                    <a href="javascript:void(0)">软件著作权</a>
                                                    <a href="javascript:void(0)">音乐作品</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="addpro-list" id="add-l4">
                                        <img src="../images/index/u311.png" class="fl">
                                        <div class="fl addpro-li">
                                            <p class="p1">社保办理</p>
                                            <span class="span1">企业社保</span>
                                            <span class="span1">个人社保</span>
                                            <div id="add-r4" class="addpro-right">
                                                <p>
                                                    <span>企业社保 ></span>
                                                    <a href="javascript:void(0)">社保/公积金账户注销</a>
                                                    <a href="javascript:void(0)">社保开户</a>
                                                    <a href="javascript:void(0)">社会公积金代缴</a>
                                                    <a href="javascript:void(0)">公积金开户</a>
                                                </p>
                                                <br>
                                                <br>
                                                <p>
                                                    <span>个人社保 ></span>
                                                    <a href="javascript:void(0)">个人社保代理</a>
                                                    <a href="javascript:void(0)">个人代理社保和公积金</a>
                                                    <a href="javascript:void(0)">新参保（个人）</a>
                                                    <a href="javascript:void(0)">个人代理公积金</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </Col>
    
    </Row>
</template>

<script>
import pinyin from 'pinyin'
export default {
    name: 'myhead',
    data() {
        return {
            massages: [{
                text: '全部产品',
                lin: '#/home'
            }, {
                text: '财税服务',
                lin: '#/listpage'
            }, {
                text: '公司工商',
                lin: '#/pagelist'
            }, {
                text: '加盟我们',
                lin: '#/us'
            }, {
                text: '店铺',
                lin: '#/shoplist'
            }],
            active: 0,
            search: '',
            myData: [],
            flag: 0,
            id: '',
            now: -1,
            serch_idnex: 1,
        }
    },
    computed: {
        searchData: function () {

            var search = this.search;
            let that = this;

            if (search == '') {
                that.myData = []
            } else {
                return that.myData.filter(function (product) {
                    var pin = () => {
                        var reg = /[A-z]/;
                        return reg.test(search)
                    };
                    if (that.serch_idnex == 1) {
                        var zimu = () => {
                            var quanpin = String(pinyin(product.serviceName, { style: pinyin.STYLE_NORMAL })).split(',').join('').toLowerCase().indexOf(String(search).toLowerCase()) != -1
                            return quanpin ? true : String(pinyin(product.serviceName, { style: pinyin.STYLE_FIRST_LETTER })).split(',').join('').toLowerCase().indexOf(String(search).toLowerCase()) != -1
                        }
                        return pin() ? zimu() : String(product.serviceName).toLowerCase().indexOf(search) != -1
                    } else {
                        var zimua = () => {
                            var quanpin = String(pinyin(product.providerName, { style: pinyin.STYLE_NORMAL })).split(',').join('').toLowerCase().indexOf(String(search).toLowerCase()) != -1
                            return quanpin ? true : String(pinyin(product.providerName, { style: pinyin.STYLE_FIRST_LETTER })).split(',').join('').toLowerCase().indexOf(String(search).toLowerCase()) != -1
                        }
                        return pin() ? zimua() : String(product.providerName).toLowerCase().indexOf(search) != -1
                    }
                })
            }
            return that.myData;
        },
    },
    methods: {
        choice_active: function (index) {
            this.active = index;
        },
        goods(index) {
            this.serch_idnex = index;
        },
        //失去焦点
        lost() {
            this.myData = []
        },

        get: function (event) {
            let _this = this;
            // if(event.keyCode == 38 || event.keyCode == 40){ //向上向下
            //     _this.selectHover();
            // };
            _this.myData = []
            if (_this.serch_idnex == 1) {
                _this.ajax.post('/xinda-api/product/package/search-grid', {
                    start: 0,
                    limit: 8,
                    searchName: _this.search,
                    sort: 2,
                }).then(function (data) {
                    _this.myData = data.data.data;
                })
            } else {
                _this.ajax.post('/xinda-api/provider/search-grid', {
                    start: 0,
                    limit: 8,
                    searchName: _this.search,
                    sort: 1,
                    productTypeCode: 7,
                    regionId: 110105,
                }).then(function (data) {
                    _this.myData = data.data.data;
                })
            }
        },
        //清除内容
        clearInput: function () {
            this.search = '';
            this.get();
        },
        //搜索点击（enter）事件
        searchInput: function () {
            if (this.id != '') {
                if (this.serch_idnex == 1) {
                    this.$router.push({
                        path: '/secondproduct/' + this.id
                    });
                } else {
                    this.$router.push({
                        path: '/shopfront/' + this.id
                    });
                }
            }
        },
        //搜索的内容:点击触发enter事件
        searchThis: function (value, id, value2) {
            if (this.serch_idnex == 1) {
                this.search = value;
                this.id = id;
            } else {
                this.search = value2;
                this.id = id;
            }
            this.searchInput();
            this.myData = [];
        },
        //li hover
        selectHover: function (index) {
            this.now = index;
        },

    },

}
</script>

<style lang="less" scoped>
.fl {
    float: left;
}

.fr {
    float: right;
}

.show {
    display: block;
}

.hide {
    display: none;
}

.blue {
    color: #2494d4!important;
}

.blueBorder {
    color: #2494d4!important;
    border-bottom: 2px solid #2494d4;
}

.hand {
    cursor: pointer;
}

.selectback {
    background: rgba(169, 169, 169, .9);
}

.header {
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #2494d4;
    .header-containter {
        width: 1200px;
        height: 150px;
        margin: 0 auto;
        .hdcon-top {
            height: 110px;
            width: 100%;
            .hdcon-top-l {
                width: 320px;
                height: 60px;
                margin-top: 30px;
                h1 {
                    width: 140px;
                    height: 60px;
                    font-size: 30px;
                    line-height: 65px;
                    padding-left: 70px;
                    background: url(../images/logos/xinda-logo.png) no-repeat left 3px;
                }
                p {
                    margin-top: 18px;
                    font-size: 13px;
                    padding-left: 10px;
                    padding-right: 117px;
                }
                a {
                    margin-top: 5px;
                    padding-right: 100px;
                    font-size: 14px;
                    .blue;
                }
            }
            .hdcon-top-m {
                width: 584px;
                margin-top: 25px;
                position: relative;
                .goods {
                    border-right: 1px solid #2494d4;
                    padding-right: 10px;
                    font-size: 14px;
                }
                .search-reset {
                    position: absolute;
                    right: 130px;
                    font-size: 20px;
                    top: 31px;
                    color: #ccc;
                    cursor: pointer;
                }
                .search-select {
                    width: 81%;
                    font-size: 14px;
                    position: absolute;
                    z-index: 9999;
                    top: 70px;
                    background: #fff;
                    .search-select-option {
                        padding: 2px 4px;
                        cursor: pointer;
                    }
                }
                .server {
                    padding-left: 10px;
                    font-size: 14px;
                    margin-right: 20px;
                }
                input {
                    width: 81%;
                    padding: 0 0 0 2%;
                    height: 40px;
                    font-size: 15px;
                    border: 2px solid #2494d4;
                    margin-top: 5px;
                }
                button {
                    margin-top: 5px;
                    width: 16%;
                    height: 40px;
                    background-color: #2494d4;
                    text-align: center;
                    line-height: 33px;
                    font-size: 15px;
                    color: #fff;
                }
                span {
                    font-size: 13px;
                    line-height: 21px;
                    color: #c7c7c7;
                    padding: 0 5px;
                }
            }
            .hdcon-top-r {
                width: 147px;
                height: 80px;
                margin-top: 25px;
                span {
                    width: 140px;
                    padding-left: 38px;
                    display: block;
                    height: 80px;
                    line-height: 80px;
                    color: #a3a3a3;
                    font-size: 15px;
                    background: url(../images/index/u649.png) no-repeat left center;
                    font-weight: bold;
                }
            }
        }
        .hdcon-bot {
            width: 100%;
            ul {
                width: 100%;
                li {
                    .fl;
                    position: relative;
                    &:hover {
                        .allproduces {
                            display: block;
                        }
                    }
                    .loader {
                        font-size: 18px;
                        text-align: center;
                        padding: 5px 0 3px;
                        width: 80px;
                        display: block;
                        color: #333;
                        margin: 0 60px;
                        &:hover {
                            .blue;
                        }
                    }
                    .allproduces {
                        position: absolute;
                        display: none;
                        z-index: 999;
                        left: 0;
                        top: 38px;
                        width: 100%;
                        height: 400px;
                        .addpro-left {
                            float: left;
                            width: 200px;
                            display: block;
                            height: 400px;
                            .addpro-list {
                                width: 100%;
                                height: 25%;
                                background: rgba(169, 169, 169, 1);
                                cursor: pointer;
                                color: #fff;
                                img {
                                    width: 35px;
                                    height: 35px;
                                    padding-left: 5px;
                                }
                                .addpro-li {
                                    width: 160px;
                                    height: 100%;
                                    display: block;
                                    position: relative;
                                    &:hover {
                                        .addpro-right {
                                            display: block;
                                            z-index: 999;
                                        }
                                    }
                                    .p1 {
                                        height: 40px;
                                        line-height: 40px;
                                        margin: 0 10px;
                                        font-size: 17px;
                                    }
                                    .span1 {
                                        float: left;
                                        font-size: 15px;
                                        padding: 5px 5px 0px 5px;
                                    }
                                    .addpro-right {
                                        display: none;
                                        position: absolute;
                                        width: 1000px;
                                        background: #ccc;
                                        height: 100px;
                                        top: 0px;
                                        left: 165px;
                                        opacity: 0.9;
                                        color: #fff;
                                        p {
                                            width: 98%;
                                            line-height: 19px;
                                            padding: 0% 0 0 1%;
                                            span {
                                                float: left;
                                                font-size: 15px;
                                                margin: 3px 2px;
                                                padding: 0px 10px 0 5px;
                                                border-left: 2px solid #2494d4;
                                            }
                                            a {
                                                float: left;
                                                color: #fff;
                                                margin: 2px 0;
                                                padding: 0px 10px;
                                                border-left: 1px solid #fff;
                                                font-size: 15px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>