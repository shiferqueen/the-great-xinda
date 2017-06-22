<template>
    <div>
        <Row>
            <Col :xs='0' :sm="24">
            <p>首页/购物车</p>
            </Col>
        </Row>
    
        <Row class="headcol">
            <Col class="agnlf" offset='1' :xs="0" :sm="23"> 全部商品（
            <span>{{shoppingnum}}</span>）
            </Col>
            <Col :xs='24' :sm="0"> 购物车内共有
            <span>{{shoppingnum}}</span> 件商品
            </Col>
        </Row>
        <Row v-if="getbodywidth >=768" class="headrow">
            <Col class="agnlf" offset='1' span="2">公司</Col>
            <Col span="4">服务商品</Col>
            <Col span="4">单价</Col>
            <Col span="6">数量</Col>
            <Col span="3">全额</Col>
            <Col span="2">&nbsp</Col>
            <Col span="2">操作</Col>
        </Row>
        <div v-if="getCartNum!=0">
            <div v-for='(listdata,index) in listdatas'>
                <Row class="storerow">
                    <Col class='agnlf' :xs='24' :sm="{offset:1, span:23}">
                    <span v-if="getbodywidth >= 768">店铺：</span>{{listdata.providerName}}</Col>
                </Row>
    
                <Row class="conterrow" type="flex" align="middle">
                    <Col :xs="6" :sm="3">
                    <div class="conterrowimg">
                        <img :src='srcimg + listdata.providerImg'>
                    </div>
                    </Col>
                    <Col :xs="18" :sm="21">
                    <Row type="flex" class="conterrow-row">
                        <Col :xs='{span:16,order:1}' :sm="{span:5,order:1}" class="nobr">
                        <nobr>{{listdata.serviceName}}</nobr>
                        </Col>
                        <Col :xs="0" :sm="{span:4,order:2}">￥ {{listdata.unitPrice}}</Col>
                        <Col :xs='{span:24,order:4}' :sm="{span:7,order:3}" class="inputCol">
                        <span v-if="getbodywidth < 768 ">购买数量：</span>
                        <input type="button" @click="min(listdata.buyNum,listdata.serviceId,index)" value="-"><input @input='oninput(listdata.buyNum,listdata.serviceId)' type="number" min=1 v-model="listdata.buyNum"><input type="button" @click="add(listdata.buyNum,listdata.serviceId,index)" value="+">
                        </Col>
                        <Col class="totalSum" :xs="{span:24,order:3}" :sm="{span:3,order:4}">￥ {{listdata.unitPrice*listdata.buyNum}}</Col>
                        <Col :xs='0' :sm="{span:2,order:5}"> &nbsp </Col>
                        <!--deleteone 删除当前-->
                        <Col :xs='{span:8,order:2}' :sm="{span:3,order:6}" class="conterrow-del">
                        <div @click="deleteone(index,listdata.serviceId,listdata.totalPrice)">删除<span v-if="getbodywidth < 768">订单</span>
                        </div>
                        </Col>
                        <Col :xs='{span:24,order:6}' :sm="{span:0,order:7}">
                        <Icon type="ios-location-outline"></Icon>
                        <span style="font-size:14px;">{{address(listdata.providerId)}}</span>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </div>
            <Row class="goods-end" type="flex" justify="end">
                <Col :xs="0" :sm="3"> 金额总计
                <strong>￥{{univalence}} &nbsp &nbsp</strong>
                </Col>
                <Col :xs="{pull:1}" :sm='0'>
                <p>
                    共
                    <span>{{shoppingnum}}</span>件商品 小计：
                    <span>￥ {{univalence}}</span>
                </p>
                </Col>
            </Row>
    
            <Row class="goodsinput" type="flex" justify="end">
                <Col :xs="0" :sm="3">
                <input type="button" value="去结算" @click="href(1)">
                </Col>
                <Col :xs="0" :sm="3">
                <input type="button" value="继续购物" @click="href(2)">
                </Col>
            </Row>
    
            <Row type="flex" align="middle" class="weixininput">
                <Col :xs="16" :sm="0">
                <div>
                    合计
                    <span>￥{{univalence}}</span>
                </div>
                </Col>
                <Col :xs="8" :sm="0" class="weixininput-col">
                <input type="button" value="去结算" @click="href(1)">
                </Col>
            </Row>
        </div>
        <div v-else class="elsecart" style="height:100%;">
            <img src="../../images/goods/cart.png">
            <p>购物车空空如也，去首页逛逛吧！</p>
            <a href="#/home">去首页</a>
        </div>
    </div>
</template>
<script>
import qs from 'qs'
import {
    mapActions,
    mapGetters
} from 'vuex'
export default {
    name: 'goods',
    data() {
        return {
            data: '',
            srcimg: 'http://115.182.107.203:8088/xinda/pic',
            listdatas: [],
            shoppingnum: 0,
            inputs: '', //input的setTimeout 
            trans: false,
            show: true,
            dizhi: {},
        }
    },
    computed: {
        ...mapGetters(['getpopupstatus', 'getbodywidth','getCartNum']),
        univalence() {
            var total = 0;
            for (var i = 0; i < this.listdatas.length; i++) {
                var item = this.listdatas[i];
                total += item.unitPrice * item.buyNum;
            }
            return total;
        },

    },
    methods: {
        ...mapActions(['refCartNum', 'popups']),
        //增加数量

        oninput(a, id) {
            var that = this
            clearInterval(that.inputs);
            that.inputs = setTimeout(function () {
                that.ajax.post('/xinda-api/cart/set', qs.stringify({
                    id: id,
                    num: a,
                }))
            }, 500)
        },
        add: function (nums, id, index) {
            let that = this;
            that.ajax.post('/xinda-api/cart/add', qs.stringify({
                id: id,
                num: 1,
            })).then(function (data) {
                if (data.data.status == 1) { //操作成功
                    var item = that.listdatas[index];
                    item.buyNum++;
                } else {
                    that.$Message.error('添加购物车失败');
                }
            })
        },
        //减少数量
        min: function (num, id, index) {

            let that = this;
            if (!this.trans && num > 1) {
                this.trans = true;
                this.ajax.post('/xinda-api/cart/add', qs.stringify({
                    id: id,
                    num: -1,
                })).then(function (data) {
                    if (data.data.status == 1) {
                        that.listdatas[index].buyNum--;
                    } else {
                        that.$Message.error('添加购物车失败');
                    }
                    that.trans = false;
                })
            }
        },
        //删除当前
        deleteone: function (index, id, price) {
            let that = this;
            this.popups({ //弹出框内容
                headers: '是否确定删除',
                content: '确定要删除此商品吗？',
                ok() {
                    that.listdatas.splice(index, 1);
                    that.ajax.post('/xinda-api/cart/del', qs.stringify({
                        id: id
                    })).then(function (data) {
                        that.refCartNum();
                        that.shoppingnum--;
                        that.$Message.success('删除成功');
                    })
                }
            })

        },

        //购物车总数

        href(i) {
            var that = this
            switch (i) {
                case 1:
                    if (that.shoppingnum > 0) {
                        that.ajax.post('/xinda-api/cart/submit').then(function (data) {
                            // console.log(data)
                            if (document.body.clientWidth >= 768) {
                                if (data.data.status === 1) {
                                    // console.log(that.setorder)
                                    that.refCartNum();
                                    location.href = '#/form' + data.data.data;
                                } else {
                                    this.$Notice.warning({
                                        desc: data.data.msg
                                    });
                                }
                            } else {
                                that.ajax.post('/xinda-api/pay/weixin-js-pay', qs.stringify({
                                    businessNo: data.data.data
                                })).then(function (data) {
                                    that.$Notice.warning({
                                        desc: '请在微信端打开'
                                    });
                                })
                            }


                        })
                    } else {
                        this.$Notice.warning({
                            desc: '购物车没有商品'
                        });
                    }
                    break;

                case 2:
                    location.href = '#/Listpage';
                    break;

            }
        },
        //地址
        address(id) {
            let that = this
            this.ajax.post('/xinda-api/provider/detail', qs.stringify({
                id: id
            })).then(function (data) {
                that.$set(that.dizhi, id, data.data.data.regionName)
            })
            return that.dizhi[id];
        },


    },

    created() {
        let that = this;
        that.ajax.post('/xinda-api/cart/list').then(function (data) {
            var data = data.data.data;
            that.listdatas = data;
            if (that.getbodywidth < 768) {
                setTimeout(function () {
                    let height = document.getElementsByClassName('conterrowimg');
                    for (let i = 0, l = height.length; i < l; i++) {
                        height[i].style.height = height[i].offsetWidth - 2 + 'px';
                    }
                }, 0);
            }else{
                let height = document.getElementsByClassName('conterrowimg');
                    for (let i = 0, l = height.length; i < l; i++) {
                        height[i].style.height = '';
                }
            }
            that.shoppingnum = data.length;
        });
    },
    watch:{
        getbodywidth(val){
            if (val < 768) {
                setTimeout(function () {
                    let height = document.getElementsByClassName('conterrowimg');
                    for (let i = 0, l = height.length; i < l; i++) {
                        height[i].style.height = height[i].offsetWidth - 2 + 'px';
                    }
                }, 0);
            }else{
                 let height = document.getElementsByClassName('conterrowimg');
                    for (let i = 0, l = height.length; i < l; i++) {
                        height[i].style.height = '';
                }
            }
        },
    }

}

</script>

<style lang="less" scoped>
div {
    font-size: 14px;
}

.agnlf {
    text-align: left;
}

.storerow {
    margin-top: 15px;
}


@media screen and (max-width: 768px) {
    .headcol {
        padding: 4% 2.6%;
        background: #e5e5e5;
        color: #999;
    }
    .headcol span {
        color: red;
    }
    div {
        font-size: 14px;
    }
    .storerow {
        font-size: 28px;
        padding-left: 2.6%;
        font-weight: 700;
    }
    .conterrow {
        padding: 2% 0;
        padding-left: 2.6%;
        text-align: left;
        border-bottom: 1px solid #cfcfcf;
        background: #fff;
        .conterrowimg {
            position: relative;
            border: 1px solid #666;
            img {
                position: absolute;
                width: 70%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%)
            }
        }
    }
    .inputCol {
        margin-bottom:6px;
        input:nth-child(2),
        input:nth-child(4) {
            width: 10%;
            height: auto;
            background: #ededed;
            cursor: pointer;
            border: 1px solid #ccc;
        }
        input:nth-child(3) {
            width: 10%;
            height: auto;
            text-align: center;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
        }
        span {
            font-size: 12px;
        }
    }
    .conterrow-del {
        color: #ed3f14;
    }
    .conterrow-row {
        padding-left: 15px;
    }
    .totalSum {
        color: #fe0100;
        font-weight: 700;
    }
    .nobr {
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .weixininput{
        bottom:62.38px;
    }
}
@media screen and (max-width:400px) {
	.weixininput{
        bottom:54.58px;
    }
}
@media screen and (min-width: 768px) {
    .headcol {
        margin-top: 20px;
        color: #72b1dc;
        padding-bottom: 5px;
        border-bottom: 1px solid #bdbdbd;
        text-align: center;
    }
    .conterrow {
        height: 77px;
        margin-top: 38px;
        text-align: center;
        background: #f7f7f7;
        img {
            vertical-align: middle;
            width: 41px;
        }
    }
    .inputCol {
        input:nth-child(1),
        input:nth-child(3) {
            width: 18px;
            background: #bcbebd;
            cursor: pointer;
        }
        input:nth-child(2) {
            width: 33px;
            text-align: center;
        }
    }
    .weixininput {
        display: none;
    }
}

.headrow {
    margin-top: 25px;
    div {
        text-align: center;
    }
    .agnlf {
        text-align: left;
    }
}

.conterrow {

    .conterrow-del {
        cursor: pointer;
        &:hover {
            color: #ed3f14;
        }
    }
}

.goods-end {

    margin-top: 25px;
    margin-bottom: 150px;
    span {
        color: #fe0100;
    }
    strong {
        color: #2a91d6;
        font-size: 20px;
    }
}

.goodsinput {
    width: 100%;
    input {
        cursor: pointer;
        background: #fff;
        padding: 5px 20%;
        margin-top: 10px;
        border: 1px solid #2a91d6;
        color: #2a91d6;
        border-radius: 5px;
        margin-bottom: 65px;
    }
}



// 微信端支付
.weixininput {
    z-index: 999;
    height: 8%;
    background: #e5e5e5;
    position: fixed;
    width: 100%;
    padding-left: 2.5%;
    .weixininput-col {
        height: 100%;
    }
    span {
        color: #fe0100;
    }
    input {
        color: #fff;
        text-align: center;
        background: #fb2d2d;
        width: 100%;
        height: 100%;
    }
}

//购物车数量为0
@media screen and (max-width: 768px) {
    .elsecart {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        img {
            width: 100%;
        }
        p {
            margin-top: 2%;
            color: #4eb5ba;
            margin-bottom: 5%;
        }
        a {
            padding: 1% 5%;
            background: #4eb5ba;
            color: #fff;
            border-radius: 6px;
        }
    }
}

@media screen and (min-width: 768px) {

    .elsecart {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        p {
            color: #4eb5ba;
            margin-bottom: 2%;
            font-weight: 700;
        }
        a {
            font-weight: 700;
            padding: 1% 3%;
            background: #4eb5ba;
            color: #fff;
            border-radius: 6px;
        }
    }
}







/*去除input 上下箭头*/

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>