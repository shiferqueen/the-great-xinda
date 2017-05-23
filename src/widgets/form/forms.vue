<template>
    <div class="forms">
        <p>首页支付</p>
        <div class="forms-div1">订单详情</div>
        <div class="forms-table">
            <ul class="clear">
                <li>订单编号：<span>S62728272727211</span></li>
                <li class="teshuli">
                    创建时间：2017-07-01 01:12:21
                </li>
                <li style="padding-bottom:0px;">
                    订单金额：<span>￥2000.00</span>元
                    <p>
                        订单明细<span></span>
                    </p>
                </li>
            </ul>
            <ul class="clear">
                <li>
                    服务名称：注册分公司
                </li>
                <li>
                    单价：<span>￥800.00元</span>
                </li>
                <li>
                    数量：<span>1</span>
                </li>
                <li>
                    服务总额：<span>￥800.00元</span>
                </li>
            </ul>
            <ul class="clear">
                <li>
                    服务名称：代理记账
                </li>
                <li>
                    单价：<span>￥1800.00元</span>
                </li>
                <li>
                    数量：<span>1</span>
                </li>
                <li>
                    服务总额：<span>￥1800.00元</span>
                </li>
            </ul>


        </div>
    </div>
</template>
<script>
    export default {
        name: 'hotService'
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
                p {
                    margin-left: 40px;
                    margin-top: 5px;
                    color: #fe6263;
                    span {
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
</style>