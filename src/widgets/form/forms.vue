<template>
    <div class="forms">
        <p>首页支付</p>
        <div class="forms-div1">订单详情</div>
        <div class="forms-table">
            <ul class="clear">
                <li>订单编号：<span>{{businessNo}}</span></li>
                <li class="teshuli">
                    创建时间：{{newdate}}
                </li>
                <li style="padding-bottom:0px;">
                    订单金额：<span>￥{{totalPrice}}</span> 元
                    <p class="details" @click="toggle" >
                        订单明细<span :class="toggleclass"></span>
                    </p>
                </li>
            </ul>
            <transition name="forms">
                <div v-if="toggles">   
                    <ul class="clear" v-for='(order,index) in dataOrder'>   
                        <li>
                            服务名称：{{order.serviceName}}
                        </li>
                        <li>
                            单价：<span>￥{{order.unitPrice}}元</span>
                        </li>
                        <li>
                            数量：<span>{{order.buyNum}}</span>
                        </li>
                        <li>
                            服务总额：<span>￥{{order.totalPrice}}元</span>
                        </li>
                    </ul>
                </div>
            </transition>  

        </div>
    </div>
</template>
<script>
    import qs from 'qs'
    import {
        mapActions
    } from "vuex"
    export default {

        name: 'forms',
        data() {
            return {
                businessNo: this.$route.params.order,
                toggles: true,
                toggleclass: {
                    xuanzhuan: true,
                    xuanzhuan2: false
                },
                newdate: '',
                dataOrder: [],
                totalPrice: 0
            }
        },
        methods: {
            ...mapActions(['setorder']),
            toggle() {
                this.toggles = !this.toggles;
                this.toggleclass.xuanzhuan = !this.toggleclass.xuanzhuan;
                this.toggleclass.xuanzhuan2 = !this.toggleclass.xuanzhuan2;
            }
        },
        computed: {

        },
        created() {

            var that = this
            that.ajax.post("/xinda-api/sso/login-info").then(function(data) {
                if (data.data.status == 1) {
                    that.ajax.post("/xinda-api/business-order/detail", qs.stringify({
                        businessNo: that.businessNo,
                    })).then(function(data) {
                        var createTime = data.data.data.businessOrder.createTime;
                        that.newdate = new Date(createTime).format("yyyy-MM-dd hh:mm:ss")
                        that.dataOrder = data.data.data.serviceOrderList
                        for (let k in that.dataOrder) {
                            that.totalPrice += that.dataOrder[k].totalPrice
                        }
                        that.setorder(that.totalPrice)
                            // console.log(data.data.data.serviceOrderList)
                    })
                }
            })

        }
    }
</script>

<style lang="less" scoped>
    .clear:after {
        content: '';
        display: block;
        clear: both;
    }
    
    .forms {
        width: 100%;
        font-size: 14px;
        margin-bottom: 45px;
        .forms-div1 {
            margin-top: 25px;
            color: #52a3da;
            border-bottom: 1px solid #bdbdbd;
            padding-bottom: 10px;
        }
        .forms-table {
            margin-top: 35px;
            border: 1px solid #bdbdbd;
            width: 100%;
            ul {
                border-bottom: 1px solid #bdbdbd;
            }
            ul:last-child {
                border-bottom: 0px;
            }
            li {
                float: left;
                width: 20%;
                padding: 2.5%;
                .details {
                    width: 80px;
                    cursor: pointer;
                }
                p {
                    margin-left: 40px;
                    margin-top: 5px;
                    color: #fe6263;
                    span {
                        transform-origin: 50% 70%;
                        display: inline-block;
                        border: 5px solid transparent;
                        border-bottom: 5px solid #fe6263;
                        margin-left: 5px;
                        margin-bottom: 2px;
                    }
                }
            }
            .teshuli {
                width: 45%;
                text-align: center;
            }
            span {
                color: #52a3da;
            }
        }
    }
    
    .xuanzhuan {
        transform: rotate(180deg);
        transition: transform .5s;
    }
    
    .xuanzhuan2 {
        transform: rotate(360deg);
        transition: transform .5s;
    }
    /*过渡动画*/
    
    .forms-enter-active {
        transition: all .3s ease;
    }
    
    .forms-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    
    .forms-enter,
    .forms-leave-active {
        transform: translateY(-50px);
        opacity: 0;
    }
</style>