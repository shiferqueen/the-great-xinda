<template>
    <div class="pay clear">
        <div class="forms-div1">支付方式</div>
        <p>非网银支付</p>
        <div class="inputdiv">
            <input type="radio" name="only" value="yinlian" v-model="picked"><img src="../../images/form/yinlian.jpg">
        </div>
        <p>平台支付</p>
        <div class="clear">
            <div class="inputdiv zf">
                <input type="radio" name="only"  value="weixin" v-model="picked"><img src="../../images/form/weixin.jpg">
            </div>
            <div class="inputdiv zf margin10">
                <input type="radio" name="only"  value="zhifubao" v-model="picked"><img src="../../images/form/zhifubao.jpg">
            </div>
        </div>
        <p>自助转账 <span class="pay-p-span">因限额不能支付时，建议使用自助转账</span></p>
        <div class="inputdiv2">
            <input type="radio"  name="only" value="zhaoshang" v-model="picked"><img src="../../images/form/zhanshang.jpg">
        </div>
        <br>
        <span style="color:#ffa4a3">注：转账时请将订单编号备注在付款信息里：转账完成后，请通知客服。</span>

        <div class="clear end-div yf">
            <p class="yf">金额总计 <strong>￥{{getorder}}</strong></p>
            <input class="yf " type="button" @click="settle" value="去结算">
        </div>
    </div>
</template>
<script>
    import qs from 'qs'
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        name: 'pay',
        data() {
            return {
                picked: ''
            }
        },
        computed: {
            ...mapGetters(['getorder']),
        },
        methods: {
            ...mapActions(['setUnionPay']),
            settle() {
                let that = this;
                let order = this.$route.params.order;
                switch (this.picked) {
                    case '':
                        alert('请选择支付方式');
                        break;

                    case 'yinlian': //银联支付
                        this.ajax.post('/xinda-api/pay/china-pay', qs.stringify({
                            businessNo: order
                        })).then(function(data) {
                            window.open('data:text/html,' + data.data, '_blank');
                        })
                        break;

                    case 'weixin': //微信支付
                        this.ajax.post('/xinda-api/pay/weixin-pay', qs.stringify({
                            businessNo: order
                        })).then(function(data) {
                            console.log('data.data===', data);
                            console.log(order)

                        })
                        break;

                    case 'zhifubao': //支付宝支付页面
                        this.ajax.post('/xinda-api/pay/ali-pay', qs.stringify({
                            businessNo: order
                        })).then(function(data) {
                            window.open('data:text/html,' + data.data, '_blank')
                        })
                        break;

                    case 'zhaoshang':
                        alert('去用别的');
                        break;
                }

            }
        }
    }
</script>

<style lang="less" scoped>
    .clear:after {
        content: '';
        display: block;
        clear: both;
    }
    
    .zf {
        float: left;
    }
    
    .yf {
        float: right;
    }
    
    .pay {
        img {
            vertical-align: middle;
        }
        input {
            margin-left: 6px;
        }
        .inputdiv {
            width: 205px;
            border: 1px solid #bdbdbd;
        }
        .margin10 {
            margin-left: 10px;
        }
        .inputdiv2 {
            width: 420px;
            border: 1px solid #bdbdbd;
        }
        .pay-p-span {
            color: #868686;
            font-size: 12px;
        }
        p {
            margin: 20px 0;
        }
    }
    
    .end-div {
        width: 150px;
        margin-bottom: 160px;
        p {
            margin-top: 85px;
            margin-bottom: 15px;
            strong {
                font-size: 16px;
                color: #2992d6;
            }
        }
        input {
            width: 100px;
            /*height: 26px;*/
            line-height: 26px;
            border: 1px solid #2793d4;
            text-align: center;
            background: #fff;
            border-radius: 5px;
            color: #2793d4;
        }
    }
    
    .forms-div1 {
        margin-top: 25px;
        color: #52a3da;
        border-bottom: 1px solid #bdbdbd;
        padding-bottom: 10px;
    }
</style>