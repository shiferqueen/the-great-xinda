<template>
    <div>
        <p>首页/购物车</p>
        <dl class="headdl clear">
            <dt>
                全部商品（<span>1</span>） 
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
                    <dd class="price">{{listdata.unitPrice+' '+listdata.unit}}</dd>
                    <dd class="quantity" id ="ddval">
                        <input type="button" @click="min" value="-"><input type="text" v-model="listdata.buyNum" ><input type="button" @click="add" value="+">
                    </dd>
                    <dd class="sum">{{listdata.totalPrice+' '+listdata.unit}}</dd>
                    <dd class="empty"></dd>
                    <!--deleteone 删除当前-->
                    <dd class="operation" @click="deleteone(index,listdata.providerId)">删除</dd>
                </dl>
            </li>
        </ul>
        <div class="clear goods-end"> 
            <p class="clear">金额总计<strong>￥800.00</strong></p>
            <div class="clear">
                <input type="button" value="继续购物">
                <input type="button" value="去结算">
            </div>
        </div>
    </div>
</template>
<script>
    import qs from 'qs'

    export default {
        name: 'goods',
        data() {
            return {
                data: '',
                goodsval: 1,
                univalence: 800,
                srcimg: 'http://115.182.107.203:8088/xinda/pic',
                listdatas: [],

                subtotal: function() {
                    return this.goodsval * this.univalence
                }
            }
        },
        methods: {
            add: function() {
                this.goodsval++;
            },
            min: function() {
                if (this.goodsval > 0) {
                    this.goodsval--;
                }
            },
            deleteone: function(index, id) {
                this.listdatas.splice(index, 1);
                this.ajax.post('/xinda-api/cart/del', qs.stringify({
                    id: id
                })).then(function(data) {
                    console.log(data)
                })
            }
        },

        created() {
            let that = this;
            this.ajax.post('/xinda-api/cart/list').then(function(data) {
                console.log(data.data.data)
                var data = data.data.data;
                for (var i = 0, length = data.length; i < length; i++) {
                    that.listdatas.push(data[i])
                    console.log(that.listdatas)
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
            height: 76px;
            background: #f7f7f7;
            line-height: 76px;
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