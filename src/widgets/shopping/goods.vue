<template>
    <div>
        <p>首页/购物车</p>
        <dl class="headdl clear">
            <dt>
                全部商品（<span>{{shoppingnum}}</span>） 
            </dt>
            <dd class="company">公司</dd>
            <dd class="commodity">服务商品</dd>
            <dd class="price">单价</dd>
            <dd class="quantity">数量</dd>
            <dd class="sum">全额</dd>
            <dd class="empty"></dd>
            <dd class="operation">操作</dd>
        </dl>
        <ul class="clear">
            <li v-for='(listdata,index) in listdatas'>
                <dl class="clear ul-dl">
                    <dt>
                        店铺：{{listdata.providerName}}
                    </dt>
                    <dd class="company">
                        <img :src ='srcimg + listdata.providerImg'>
                    </dd>
                    <dd class="commodity">{{listdata.serviceName}}</dd>
                    <dd class="price">￥ {{listdata.unitPrice}}</dd>
                    <dd class="quantity" id ="ddval">
                        <input type="button" @click="min(listdata.buyNum,listdata.serviceId)" value="-"><input type="text" v-model="listdata.buyNum" ><input type="button" @click="add(listdata.buyNum,listdata.serviceId)" value="+">
                    </dd>
                    <dd class="sum">￥ {{listdata.totalPrice}}</dd>
                    <dd class="empty"></dd>
                    <!--deleteone 删除当前-->
                    <dd class="operation" @click="deleteone(index,listdata.serviceId,listdata.totalPrice)">删除</dd>
                </dl>
            </li>
        </ul>
        <div class="clear goods-end"> 
            <p class="clear">金额总计<strong>￥{{univalence}}</strong></p>
            <div class="clear">
                <input type="button" value="继续购物" @click="href(2)">
                <input type="button" value="去结算" @click="href(1)">
            </div>
        </div>
    </div>
</template>
<script>
    import qs from 'qs'
    import {
        mapActions
    } from 'vuex'
    export default {
        name: 'goods',
        data() {
            return {
                data: '',
                univalence: 0,
                srcimg: 'http://115.182.107.203:8088/xinda/pic',
                listdatas: [],
                shoppingnum: 0,

                subtotal: function() {
                    return this.goodsval * this.univalence
                }
            }
        },
        methods: {
            ...mapActions(['refCartNum', 'setorder']),
            //增加数量
            add: function(nums, id) {
                let that = this;
                that.ajax.post('/xinda-api/cart/add', qs.stringify({
                    id: id,
                    num: 1,
                })).then(function() {
                    that.ajax.post('/xinda-api/cart/list', qs.stringify({})).then(function(data) {
                        var data = data.data.data;
                        that.listdatas = [];
                        that.univalence = 0;
                        for (var i = 0, length = data.length; i < length; i++) {

                            that.listdatas.push(data[i]);
                            that.shoppingnum = length;
                            that.univalence += data[i].totalPrice;
                        }

                    })
                })
            },
            //减少数量
            min: function(num, id) {
                let that = this;
                if (num > 1) {
                    this.ajax.post('/xinda-api/cart/add', qs.stringify({
                        id: id,
                        num: -1,
                    })).then(function() {
                        that.ajax.post('/xinda-api/cart/list', qs.stringify({})).then(function(data) {
                            var data = data.data.data;
                            that.listdatas = [];
                            that.univalence = 0;
                            for (var i = 0, length = data.length; i < length; i++) {
                                that.listdatas.push(data[i]);
                                that.shoppingnum = length;
                                that.univalence += data[i].totalPrice;
                            }

                        })
                    })
                }
            },
            //删除当前
            deleteone: function(index, id, price) {
                var that = this;
                this.listdatas.splice(index, 1);
                this.ajax.post('/xinda-api/cart/del', qs.stringify({
                    id: id
                })).then(function(data) {
                    that.refCartNum();
                    that.shoppingnum--;
                    that.univalence -= price;
                })
            },
            //购物车总数
            zong() {
                this.ajax.post('/xinda-api/cart/cart-num').then(function(data) {
                    return data.data.cartNum;
                })
            },
            href(i) {
                var that = this
                switch (i) {
                    case 1:
                        // if (that.zong() > 0) {
                        this.ajax.post('/xinda-api/cart/submit').then(function(data) {
                                // console.log(data)
                                if (data.data.status === 1) {
                                    that.setorder(data.data.data)
                                        // console.log(that.setorder)
                                    location.href = '#/form';
                                } else {
                                    alert(data.data.msg);
                                }

                            })
                            // } else {
                            //     alert('您的购物车没有商品');
                            // }
                        break;

                    case 2:
                        location.href = '#/Listpage';
                        break;

                }
            }
        },

        created() {
            let that = this;
            that.ajax.post('/xinda-api/cart/list', qs.stringify({})).then(function(data) {
                var data = data.data.data;
                for (var i = 0, length = data.length; i < length; i++) {
                    that.listdatas.push(data[i]);
                    that.shoppingnum = length;
                    that.univalence += data[i].totalPrice;
                }

            })
        }
    }
</script>

<style lang="less" scoped>
    * {
        margin: 0;
        padding: 0;
        border: 0
    }
    
    .clear:after {
        content: '';
        display: block;
        clear: both;
    }
    
    li {
        list-style: none;
        margin-bottom: 50px;
    }
    
    dt {
        width: 1140px;
        padding-left: 60px;
    }
    
    dd {
        margin-top: 10px;
        text-align: center;
        text-indent: 0;
        float: left;
    }
    
    .width1200 {
        width: 1200px;
        margin: 0 auto;
    }
    
    .headdl {
        margin-top: 20px;
        dt {
            color: #72b1dc;
            padding-bottom: 5px;
            border-bottom: 1px solid #bdbdbd;
        }
        dd {
            line-height: 40px;
        }
    }
    
    .company {
        width: 13%;
    }
    
    .commodity {
        width: 18%;
    }
    
    .price {
        width: 15%;
    }
    
    .quantity {
        width: 25%;
    }
    
    .sum {
        width: 12%;
    }
    
    .empty {
        width: 9%;
    }
    
    .operation {
        width: 8%;
    }
    
    .ul-dl {
        dd {
            img {
                vertical-align: middle;
                width: 41px;
            }
            margin-top:30px;
            height: 51px;
            background: #f7f7f7;
            padding-top:25px;
        }
        .sum {
            color: #72b1dc;
        }
        .operation {
            cursor: pointer;
            &:hover {
                color: red;
            }
        }
        .quantity {
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
    }
    
    .goods-end {
        width: 1200px;
        float: right;
        margin-top: 25px;
        margin-right: 20px;
        text-align: right;
        strong {
            color: #2a91d6;
            font-size: 20px;
        }
        input {
            cursor: pointer;
            background: #fff;
            padding: 5px 30px;
            float: right;
            margin-top: 10px;
            border: 1px solid #2a91d6;
            color: #2a91d6;
            margin-left: 5px;
            border-radius: 5px;
            margin-bottom: 65px;
        }
    }
</style>