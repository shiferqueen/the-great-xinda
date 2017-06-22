<template>
    <Row style="position:inherit">
        <Col :xs="0" :sm="24" class="my_order">
        <div class="xh_0">
            <a class="trn">我的订单</a>
        </div>
        <div class="xh_1" style="width: 935px; height: 114px;overflow: hidden;">
            <li class="xh_2">
                <span>订单号：</span>
                <input v-model="bn" placeholder="请输入订单号搜索" />
                <a href="javascript:void(0);" @click="myorderlist">搜索</a>
            </li>
            <li class="xh_3">
                <span>创建时间：</span>
                <input class="time_one" />
                <input class="time_two" />
            </li>
        </div>
        <ul class="info_list">
            <li class="xh_4">
                <strong class="xh_5">商品名称</strong>
                <strong class="xh_6">单价</strong>
                <strong class="xh_7">数量</strong>
                <strong class="xh_8">总金额</strong>
                <strong class="xh_9">订单状态</strong>
                <strong class="xh_10">订单操作</strong>
            </li>
        </ul>
        <div v-for="(order,index) in myorder">
            <table border="1px solid #e8e8e8" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <td colspan="6">
                            <span class="order_sp">订单号:{{order.businessNo}}</span>
                            <span class="time_sp">下单时间:{{order.createTime}}</span>
                        </td>
                    </tr>
                </thead>
                <tbody class="tbody">
                    <tr class="xinda" v-for="(service,idx) in order.serviceList">
                        <td class="t_d1">
                            <img class="logos" src="../../images/logos/bg_01.jpg" />
                            <span class="t_sp">{{service.providerName}}</span>
                            <br>
                            <span class="t_sp2">{{service.serviceName}}</span>
                        </td>
                        <td class="t_d2">￥{{service.unitPrice}}</td>
                        <td class="t_d3">{{service.buyNum}}</td>
                        <td class="t_d4">￥{{service.totalPrice}}</td>
                        <td class="t_d5">{{service.status==1?"等待买家付款":"已付款"}}</td>
                        <td class="t_d6" :rowspan="order.serviceList.length" v-if="idx===0">
                            <a class="pay-on" @click="servicepay(index)" v-if="order.status==1">付款</a>
                            <a class="pay-on" v-else style="color:#ccc;border-color:#ccc">已支付</a>
                            <a class="del-order" @click="removelist(index)" v-if="order.status==1">删除订单</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="page_next">
            <span class="xh_10">上一页</span>
            <span class="xh_11">1</span>
            <span class="xh_12">下一页</span>
        </div>
        </Col>
        <!--移动端代码-->
        <!--移动端代码-->
        <Col :xs="24" :sm="0" style="background-color:#f8f8f8;">
        <Row class="head">
            <Col :xs="3" class="icon">
            <div onclick="window.history.go(-1)">   
                <Icon type="ios-arrow-left"></Icon>
            </div>
            
            </Col>
            <Col :xs="21" class="wo_dan"> 我的订单
            </Col>
        </Row>
        <div v-for="(order,index) in myorder">
            <div v-for="(service,idx) in order.serviceList">
                <Row class="header">
                    <Col :xs="14" class="hao_time"> 订单号:{{order.businessNo}}
                    </Col>
                    <Col :xs="10" class="pay_1"> {{service.status==1?"等待买家付款":"已付款"}}
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="middle" class="xiangqi">
                    <Col :xs="6" class="logo_1">
                    <img src="../../images/logos/未标题-1.jpg" />
                    </Col>
                    <Col :xs="18" class="logo_2">
                        <dd class="xin_pany">{{service.providerName}}</dd>
                        <dd class="xia_1">下单时间&nbsp;:{{order.createTime}}</dd>
                        <dd class="money"> ￥{{service.unitPrice}}
                            <span class="yuan">元</span>
                            &nbsp;
                            <span class="yi">×{{service.buyNum}}</span>
                        </dd>
                    </Col>
                </Row>
                <Row class="zongji" type="flex" justify="center" align="middle">
                    <Col class="buynum1" :xs="12">合计：
                    <span class="er">￥{{service.totalPrice}}</span>
                    </Col>
                    <Col class="del_order" :xs="6">
                    <a @click="removelist(index)" v-if="order.status==1">删除订单</a>
                    </Col>
                    <Col class="pay_for" :xs="6">
                    <!--<a @click="servicepay(index)">付款</a>-->
                    <a @click="servicepay(index)" v-if="order.status==1">付款</a>
                    <a v-else style="color:#ccc;border-color:#ccc">已支付</a>
                    </Col>
                </Row>
            </div>
        </div>
        </Col>
    </Row>
</template>

<script>
import qs from 'qs'
import {
    mapActions,
    mapGetters
} from 'vuex'
export default {
    name: 'myorder',
    data() {
        return {
            myorder: [],
            bn: ''
        }
    },
    computed:{
        ...mapGetters(['getuser'])
    },
    created() {
        console.log(sessionStorage.getItem("login"))
        if(sessionStorage.getItem("login")){
            sessionStorage.setItem('url','')
            this.myorderlist();
        }else{
            this.$Message.warning('当前未登录，自动跳转到登录页面');
            sessionStorage.setItem('url','member')
            this.$router.push({path:'/action/login'}) 
        }

        // this.mypanylist();
    },
    methods: {
        ...mapActions(['refCartNum', 'popups','setmyurl']),
        myorderlist() {
            let _this = this;
            this.ajax.post('/xinda-api/business-order/grid', qs.stringify({//获取业务订单
                businessNo: this.bn,
                startTime: '2017-03-28',
                endTime: '2017-03-28',
                start: '0',
            })).then(function (data) {
                _this.myorder = data.data.data;
                // console.log(data.data.data)
                _this.myorder.forEach(function (order) {
                    _this.ajax.post('/xinda-api/service-order/grid', qs.stringify({
                        businessNo: order.businessNo,
                        startTime: '2017-03-28',
                        endTime: '2017-03-28',
                        start: '0',
                    })).then(function (data) {
                        // order.serviceList = data.data.data;
                        _this.$set(order, 'serviceList', data.data.data);
                        // console.log(data)
                    })

                });
                for (var time in _this.myorder) {
                    var createTime = _this.myorder[time].createTime;
                    _this.myorder[time].createTime = new Date(createTime).format("yyyy-MM-dd hh:mm:ss");

                }
            })
        },
        // 删除订单
        removelist(index) {
            let that = this;
            this.popups({ //弹出框内容
                headers: '是否确定删除',
                content: '确定要删除此订单吗？',
                ok() {
                    that.ajax.post("/xinda-api/ business-order/del", qs.stringify({
                        id: that.myorder[index].id
                    })).then(function (data) {
                        if (data.data.status == 1) {
                            that.myorder.splice(index, 1)
                        }
                    })
                }
            })
        },
            //付款
            servicepay(index) {
                // this.$router.push({path:"/form"+this.myorder[index].businessNo})
                // console.log(this.myorder[index].businessNo)
                location.href = '#/form' + this.myorder[index].businessNo;
            }
        }
    }
</script>
<style scoped lang="less">
// 移动端代码
.head {
    height: 72px;
    background: #e8e8e8;
    div.icon {
        padding-left: 2%;
        i {
            line-height: 77px;
            font-size: 25px;
        }
    }
    .wo_dan {
        font-size: 16px;
        line-height: 77px;
        padding-left: 25%;
    }
}

.header {
    background: #fff;
    margin-top: 20px;
    height: 73px;
    line-height: 73px;
    .hao_time {
        padding-left: 2%;

        white-space: nowrap;
    }
    .pay_1 {
        padding-left: 13%;

        white-space: nowrap;
    }
}

.xiangqi {
    // width: 750px;
    height: 120px;
    background: #f8f8f8;
    .logo_2 {
        height: 50px;
    }
    .logo_1 {
        padding-left: 2%;
        img {
            width: 60%;
            border: 2px solid #c3c3c3;
        }
    }
    .xin_pany {
        font-size: 14px;
    }
    .xia_1 {
        font-size: 14px;
    }
    .money {
        font-size: 14px;
        color: red;
        .yuan {
            font-size: 12px;
            color: black;
        }
        .yi {
            color: black;
        }
    }
}

.zongji {
    background: #fff;
    height: 60px;
    .buynum1 {
        font-size: 14px;
        .er {
            color: red;
        }
    }
    .del_order {
        color: red;
        font-size: 14px;
    }
    .pay_for {
        a {
            width: 49px;
            height: 25px;
            display: block;
            border-radius: 2%;
            line-height: 25px;
            font-size: 14px;
            background-color: #2693d4;
            color: #cfd5d8;
            text-align: center;
        }
    }
}

.zongji2 {
    background: #fff;
    height: 73px;
    .buynum2 {
        margin-left: -7%;
        font-size: 14px;
        text-align: center;
        line-height: 73px;
        .er {
            color: red;
        }
    }
    .pay_for2 {
        line-height: 73px;
        font-size: 13px;
        text-align: center;
    }
}

// 移动端代码结束
.trn {
    color: #2693d4;
    font-size: 14px;
    width: 112px;
    float: left;
    line-height: 29px;
    border-bottom: 2px solid #2693d4;
    text-align: center;
}

table {
    text-align: left;
    width: 100%;
    margin-top: 12px;
    border: 1px solid #ebebeb;
    thead {
        background: #f7f7f7;
        tr {
            height: 40px;
            td {
                border: 1px solid #e8e8e8;
                font-size: 12px;
                color: #3f3f3f;
            }
        }
    }
}

.order_sp {
    margin-left: 23px;
}

.time_sp {
    margin-left: 23px;
}

.logos {
    margin-left: 12px;
    margin-top: 9px;
    float: left;
}

.img-span {
    width: 20%;
}

.t_sp {
    position: relative;
    top: 10px;
    left: 20px;
}

.t_sp2 {
    position: relative;
    top: 20px;
    left: 20px;
}

.t_d1 {
    width: 28%;
    border-bottom: 1px solid #ebebeb;
    &:after {
        content: '';
        display: block;
        clear: both;
    }
}

.t_d2 {
    width: 8%;
    text-align: center;
    border-bottom: 1px solid #ebebeb;
    line-height: 67px;
}

.t_d3 {
    width: 10%;
    text-align: center;
    line-height: 67px;
    border-bottom: 1px solid #ebebeb;
}

.t_d4 {
    width: 12%;
    color: #2792d6;
    text-align: center;
    line-height: 67px;
    border: 1px solid #ebebeb;
}

.t_d5 {
    width: 15%;
    color: #2792d6;
    border: 1px solid #ebebeb;
    text-align: center;
}

.t_d6 {
    width: 10%;
    border: 1px solid #ebebeb;
    border-left: none;
}

.pay-on {
    width: 56px;
    height: 23px;
    display: inline-block;
    border: 1px solid #2693d4;
    border-radius: 10%;
    line-height: 23px;
    color: #2693d4;
    text-align: center;
    margin-left: 30px;
}

.del-order {
    display: block;
    margin-top: 3px;
    color: red;
    margin-left: 35px;
}

.page_next {
    span {
        height: 34px;
        border: 1px solid #e8e8e8;
        display: inline-block;
        line-height: 34px;
        text-align: center;
        font-size: 14px;
        margin-top: 37px;
    }
    .xh_10 {
        width: 66px;
        color: #ccc;
        margin-left: 385px;
    }
    .xh_11 {
        width: 37px;
        color: #2693d4;
        margin-left: 5px;
    }
    .xh_12 {
        width: 66px;
        color: #ccc;
        margin-left: 5px;
    }
}

.number_1 {
    position: absolute;
    top: 25px;
    left: 475px;
}

.main {
    &:after {
        content: '';
        display: block;
        clear: both;
    }
    p {
        font-size: 14px;
        color: #252525;
        margin-top: 25px;
        width: 90px;
    }
}

.person_main {
    width: 242px;
    height: 551px;
    float: left;
    &:after {
        content: '';
        display: block;
        clear: both;
    }
    .xh_0 {
        width: 935px;
        border-bottom: 2px solid #e9e9e9;
        height: 31px;
    }
    .my_order {
        width: 935px;
        margin-left: 20px;
        float: left;
    }
    .xh_2 {
        width: 935px;
        height: 29px;
        margin-top: 22px;
        span {
            float: left;
            font-size: 14px;
            margin-top: 5px;
        }
        input {
            width: 263px;
            height: 23px;
            float: left;
            margin-left: 4px;
            border: 1px solid #b0b0b0;
        }
        a {
            width: 70px;
            height: 26px;
            display: inline-block;
            border: 1px solid #2693d4;
            border-radius: 10%;
            color: #2693d4;
            font-size: 14px;
            line-height: 26px;
            text-align: center;
            float: left;
            margin-left: 12px;
        }
    }
    .xh_3 {
        width: 935px;
        height: 25px;
        margin-top: 20px;
        span {
            float: left;
        }
        .time_one {
            border: 1px solid #b0b0b0;
            float: left;
        }
        .time_two {
            float: left;
            margin-left: 16px;
            border: 1px solid #b0b0b0;
        }
    }
}

.info_list {
    width: 935px;
    height: 34px;
    background-color: #f7f7f7;
    overflow: hidden;
    li strong {
        font-size: 12px;
        line-height: 34px;
    }
    .xh_5 {
        margin-left: 25px;
    }
    .xh_6 {
        margin-left: 283px;
    }
    .xh_7 {
        margin-left: 78px;
    }
    .xh_8 {
        margin-left: 89px;
    }
    .xh_9 {
        margin-left: 93px;
    }
    .xh_10 {
        margin-left: 86px;
    }
}
</style>