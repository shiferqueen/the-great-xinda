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
                        <input type="button" @click="min(listdata.buyNum,listdata.serviceId,index)" value="-"><input @input='oninput(listdata.buyNum,listdata.serviceId)' type="number" min=1 v-model="listdata.buyNum" ><input type="button" @click="add(listdata.buyNum,listdata.serviceId,index)" value="+">
                    </dd>
                    <dd class="sum">￥ {{listdata.unitPrice*listdata.buyNum}}</dd>
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
                trans: false
            }
        },
        computed: {
            ...mapGetters(['getpopupstatus']),
            univalence() {
                var total = 0;
                for (var i = 0; i < this.listdatas.length; i++) {
                    var item = this.listdatas[i];
                    total += item.unitPrice * item.buyNum;
                }
                // console.log('total========', total);
                return total;
            },
            ceshi() {
                if (this.getpopupstatus) {
                    console.log('getpopupstatus发生了变化')
                }
            }
        },
        methods: {
            ...mapActions(['refCartNum', 'popups']),
            //增加数量

            oninput(a, id) {
                var that = this
                clearInterval(that.inputs);
                that.inputs = setTimeout(function() {
                    that.ajax.post('/xinda-api/cart/set', qs.stringify({
                        id: id,
                        num: a,
                    })).then(function(data) {
                        console.log(data)
                    })
                }, 500)
            },
            add: function(nums, id, index) {
                let that = this;
                that.ajax.post('/xinda-api/cart/add', qs.stringify({
                    id: id,
                    num: 1,
                })).then(function(data) {
                    if (data.data.status == 1) { //操作成功
                        var item = that.listdatas[index];
                        item.buyNum++;
                    } else {
                        alert("添加购物车失败");
                    }
                })
            },
            //减少数量
            min: function(num, id, index) {

                let that = this;
                if (!this.trans && num > 1) {
                    this.trans = true;
                    this.ajax.post('/xinda-api/cart/add', qs.stringify({
                        id: id,
                        num: -1,
                    })).then(function(data) {
                        if (data.data.status == 1) {
                            that.listdatas[index].buyNum--;
                        } else {
                            alert("添加购物车失败");
                        }
                        that.trans = false;
                    })
                }
            },
            //删除当前
            deleteone: function(index, id, price) {
                let that = this;
                this.popups({ //弹出框内容
                    headers: '这是购物车弹出的框',
                    content: '这是删除购物车对话框的内容',
                    ok() {
                        that.listdatas.splice(index, 1);
                        that.ajax.post('/xinda-api/cart/del', qs.stringify({
                            id: id
                        })).then(function(data) {
                            that.refCartNum();
                            that.shoppingnum--;
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
                            this.ajax.post('/xinda-api/cart/submit').then(function(data) {
                                // console.log(data)

                                if (data.data.status === 1) {
                                    // console.log(that.setorder)
                                    that.refCartNum();
                                    location.href = '#/form' + data.data.data;
                                } else {
                                    alert(data.data.msg);
                                }

                            })
                        } else {
                            alert('您的购物车没有商品');
                        }
                        break;

                    case 2:
                        location.href = '#/Listpage';
                        break;

                }
            }
        },

        created() {
            let that = this;
            that.ajax.post('/xinda-api/cart/list').then(function(data) {
                var data = data.data.data;
                that.listdatas = data;
                that.shoppingnum = data.length;

            });
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