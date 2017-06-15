<template>
    <div class="my_order">
        <div>
            <a>我的订单</a>
        </div>
        <div>
            <li>
                <span>订单号：</span>
                <input v-model="bn" placeholder="请输入订单号搜索" />
                <a href="javascript:void(0);" @click="myorderlist">搜索</a>
            </li>
            <li>
                <span>创建时间：</span>
                <input class="rili_one" />
                <input class="rili_two" />
            </li>
        </div>
        <ul class="info_list">
                <li>
                    <strong>商品名称</strong>
                    <strong>单价</strong>
                    <strong>数量</strong>
                    <strong>总金额</strong>
                    <strong>订单状态</strong>
                    <strong>订单操作</strong>
                </li>
        </ul>
<div v-for="(order,index) in myorder">
        <table border="1px solid #e8e8e8"  cellspacing="0" cellpadding="0">
            <thead>
                <tr><td colspan="6"><span class="order_sp">订单号:{{order.businessNo}}</span><span class="time_sp">下单时间:{{order.createTime}}</span></td></tr>
            </thead>
            <tbody class="tbody">
                <tr class="xinda" v-for="(service,idx) in order.serviceList">
                    <td class="t_d1">
                            <img class="logos" src="../../images/logos/bg_01.jpg" />
                            <span class="t_sp">{{service.providerName}}</span><br>
                            <span class="t_sp2">{{service.serviceName}}</span>
                    </td>
                    <td class="t_d2">￥{{service.unitPrice}}</td>
                    <td class="t_d3">{{service.buyNum}}</td>
                    <td class="t_d4">￥{{service.totalPrice}}</td>
                    <td class="t_d5">{{service.status==1?"等待买家付款":"已付款"}}</td>
                    <td class="t_d6" :rowspan="order.serviceList.length" v-if="idx===0">
                        <a class="pay-on" @click="servicepay(index)" v-if="order.status==1">付款</a>
                        <a class="pay-on"  v-else style="color:#ccc;border-color:#ccc">已支付</a>
                        <a class="del-order" @click="removelist(index)" v-if="order.status==1">删除订单</a>
                    </td>
                </tr>
            </tbody>
        </table>
</div>
        <!--</div>-->
        <div class="page_next">
            <span>上一页</span>
            <span>1</span>
            <span>下一页</span>
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
    name: 'myorder',
    data() {
        return {
            myorder: [],
            bn: ''
        }
    },
    created() {
        this.myorderlist();
        // this.mypanylist();
    },
    methods: {
        ...mapActions(['refCartNum', 'popups']),
        myorderlist() {
            let _this = this;
            this.ajax.post('/xinda-api/business-order/grid', qs.stringify({//获取业务订单
                businessNo: this.bn,
                startTime: '2017-03-28',
                endTime: '2017-03-28',
                start: '0',
            })).then(function (data) {
                _this.myorder = data.data.data;
                console.log(data.data.data)
                
                _this.myorder.forEach(function(order) {
                    _this.ajax.post('/xinda-api/service-order/grid', qs.stringify({
                    businessNo:order.businessNo,
                    startTime: '2017-03-28',
                    endTime: '2017-03-28',
                    start: '0',
                    })).then(function (data) {
                        // order.serviceList = data.data.data;
                        _this.$set(order,'serviceList',data.data.data);
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
        removelist(index){
            let _this= this
            this.ajax.post("/xinda-api/ business-order/del",qs.stringify({
                id:this.myorder[index].id
            })).then(function(data){
                if(data.data.status==1){
                _this.myorder.splice(index,1)
                } 
             })
            },
            // removelist: function(index) {
            //     let that = this;
            //     this.popups({ //弹出框内容
            //         headers: '是否确定删除',
            //         content: '确定要删除此商品吗？',
            //         ok() {
            //             // let _this= this
            //             that.myorder.splice(index, 1);
            //             this.ajax.post("/xinda-api/ business-order/del",qs.stringify({
            //                 id:this.myorder[index].id
            //             })).then(function(data){
                            
            //             })
                        
            //         }
            //     })
            // },
        //付款
        servicepay(index){
            // this.$router.push({path:"/form"+this.myorder[index].businessNo})
            // console.log(this.myorder[index].businessNo)
            location.href = '#/form' + this.myorder[index].businessNo;
        }
    }
}
</script>
<style scoped lang="less">
a{cursor: pointer;}
.tbody{
    border: 1px solid #ebebeb;
}
.xinda{
    height: 67px;
    // border: 1px solid red;
    td{
        font-size: 12px;
    }
}
table {
    text-align: left;
    width:100%;
    margin-top: 12px;
    border: 1px solid #ebebeb;
    thead{
        background: #f7f7f7;
        tr{
            height:40px;
            td{
                 border: 1px solid #e8e8e8;
                 font-size: 12px;
                 color: #3f3f3f;
            }
        }
    }
}
.order_sp{
    margin-left: 23px;
}
.time_sp{
    margin-left: 23px;
}
.logos{
    margin-left: 12px;
    margin-top: 9px;
    float: left;
}
.img-span{
    width: 20%;
}
.t_sp{
    position: relative;
    top: 10px;
    left: 20px;
}
.t_sp2{
    position: relative;
    top: 20px;
    left: 20px;
}
.t_d1{
     width:28%;
     border-bottom: 1px solid #ebebeb;
    &:after{
        content:'';
        display: block;
        clear: both;
    }
}
.t_d2{
    width:8%;
    text-align: center;
    border-bottom: 1px solid #ebebeb;
    line-height: 67px;
}
.t_d3{
    width:10%;
    text-align: center;
    line-height: 67px;
    border-bottom: 1px solid #ebebeb;
}
.t_d4{
    width: 12%;
    color: #2792d6;
    // border-left: 1px solid #ebebeb;
    text-align: center;
    line-height: 67px;
    border: 1px solid #ebebeb;
}
.t_d5{
    width: 13%;
    color: #2792d6;
    border: 1px solid #ebebeb;
    text-align: center;
}
.t_d6{
    width: 10%;
    border: 1px solid #ebebeb;
    border-left: none;
}
.pay-on{
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
.del-order{
    color: red;
    margin-left: 35px;
}
// ----------------------------------------------------------------
span {
    cursor: pointer;
}

.page_next {
    margin-left: 285px;
    span:nth-child(1) {
        width: 66px;
        height: 34px;
        border: 1px solid #e8e8e8;
        display: inline-block;
        color: #ccc;
        text-align: center;
        line-height: 34px;
        font-size: 14px;
        margin-top: 37px;
        margin-left: 385px;
    }
    span:nth-child(2) {
        width: 37px;
        height: 34px;
        border: 1px solid #2693d4;
        display: inline-block;
        color: #2693d4;
        margin-left: 5px;
        text-align: center;
        line-height: 34px;
        font-size: 14px;
        margin-top: 37px;
    }
    span:nth-child(3) {
        width: 66px;
        height: 34px;
        border: 1px solid #e8e8e8;
        display: inline-block;
        color: #ccc;
        margin-left: 5px;
        text-align: center;
        line-height: 34px;
        font-size: 14px;
        margin-top: 37px;
    }
}

.number_1 {
    position: absolute;
    top: 25px;
    left: 475px;
}

.pay_del {
    width: 935px;
    height: 134px;
    overflow: hidden;
    border: 1px solid #e8e8e8;
    li:nth-child(1) {
        width: 935px;
        height: 67px;
        border-bottom: 1px solid #f0f0f0;
        p:nth-child(1) {
            width: 935px;
            height: 67px;
            margin-top: 0px;
            position: relative;
            border-right: 1px solid #e8e8e8;
            img {
                margin-top: 9px;
                margin-left: 12px;
                float: left;
            }
            span:nth-child(3) {
                float: left;
                margin-top: 40px;
                margin-left: -110px;
            }
            span:nth-child(2) {
                float: left;
                margin-top: 15px;
                margin-left: 11px;
            }
            span:nth-child(4) {
                line-height: 67px;
                margin-left: 150px;
            }
            span:nth-child(5) {
                margin-left: 150px;
                padding: 26px 37px;
                color: #2693d4;
                border: 1px solid #e8e8e8;
            }
            span:nth-child(6) {
                border: 1px solid #e8e8e8;
                border-top: none;
                border-left: none;
                color: #2693d4;
                padding: 26px 20px;
                margin-left: -4px;
                color: #2693d4;
            }
            span:nth-child(7) {
                position: absolute;
                width: 56px;
                height: 23px;
                display: inline-block;
                border: 1px solid #2693d4;
                border-radius: 10%;
                line-height: 23px;
                top: 40px;
                right: 40px;
                color: #2693d4;
                text-align: center;
            }
            span {
                color: #656565;
            }
        }
    }
    li:nth-child(2) {
        width: 935px;
        height: 67px;
        border-bottom: 1px solid #f0f0f0;
        p:nth-child(1) {
            width: 935px;
            height: 67px;
            margin-top: 0px;
            position: relative;
            border-right: 1px solid #e8e8e8;
            img {
                margin-top: 9px;
                margin-left: 12px;
                float: left;
            }
            span:nth-child(3) {
                float: left;
                margin-top: 40px;
                margin-left: -110px;
            }
            span:nth-child(2) {
                float: left;
                margin-top: 15px;
                margin-left: 11px;
            }
            span:nth-child(4) {
                line-height: 67px;
                margin-left: 150px;
            }
            span:nth-child(5) {
                margin-left: 150px;
                padding: 26px 37px;
                color: #2693d4;
                border: 1px solid #e8e8e8;
                border-top: none;
                color: #2693d4;
            }
            span:nth-child(6) {
                border: 1px solid #e8e8e8;
                border-top: none;
                border-left: none;
                color: #2693d4;
                padding: 26px 20px;
                margin-left: -4px;
                color: #2693d4;
            }
            span:nth-child(7) {
                padding: 25px 37px;
                margin-left: -4px;
                border-top: 1px solid #fff;
                color: #ff3e3e;
            }
            span {
                color: #656565;
            }
        }
    }
}

.main {
    width: 1200px;
    height: 676px;
    margin: 0 auto;
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
    width: 1200px;
    div:first-child {
        width: 242px;
        height: 551px;
        float: left;
        &:after {
            content: '';
            display: block;
            clear: both;
        }
        div:first-child {
            width: 242px;
            height: 141px;
            background-color: #e9e9e9;
            img {
                margin-top: 9px;
                margin-left: 70px;
            }
            span {
                display: block;
                margin-left: 70px;
            }
        }
        div:last-child {
            margin-top: 9px;
            width: 242px;
            height: 376px;
            overflow: hidden;
            background-color: #f7f7f7;
            li {
                width: 242px;
                height: 50px;
                img {
                    vertical-align: middle;
                }
                span {
                    font-size: 18px;
                    line-height: 50px;
                    padding-left: 12px;
                }
            }
            li:first-child {
                background-color: #e9e9e9;
                text-align: center;
            }
            li:nth-child(2) {
                text-align: center;
            }
            li:nth-child(3) {
                text-align: center;
            }
        }
    }
    div:last-child {
        width: 935px;
        float: right;
        &:after {
            content: '';
            display: block;
            clear: both;
        }
        div:first-child {
            width: 935px;
            height: 31px;
            float: left;
            border-bottom: 2px solid #e9e9e9;
            a {
                color: #2693d4;
                font-size: 14px;
                width: 112px;
                float: left;
                line-height: 29px;
                border-bottom: 2px solid #2693d4;
                text-align: center;
            }
        }
        div:nth-child(2) {
            width: 935px;
            height: 114px;
            overflow: hidden;
            li:first-child {
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
            li:last-child {
                width: 935px;
                height: 25px;
                margin-top: 20px;
                span {
                    float: left;
                }
                .rili_one {
                    border: 1px solid #b0b0b0;
                    float: left;
                }
                .rili_two {
                    float: left;
                    margin-left: 16px;
                    border: 1px solid #b0b0b0;
                }
            }
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
    strong:nth-child(2) {
        margin-left: 275px;
    }
    strong:nth-child(3) {
        margin-left: 89px;
    }
    strong:nth-child(1) {
        margin-left: 25px;
    }
    strong:nth-child(4) {
        margin-left: 89px;
    }
    strong:nth-child(5) {
        margin-left: 93px;
    }
    strong:nth-child(6) {
        margin-left: 86px;
    }
}

.order_num {
    width: 933px;
    height: 37px;
    background-color: #f7f7f7;
    border: 1px solid #e8e8e8;
    overflow: hidden;
    margin-top: 12px;
    li span {
        font-size: 12px;
        color: #4a4a4a;
        line-height: 37px;
        margin-left: 34px;
        float: left;
    }
    span:last-child {
        margin-left: 25px;
    }
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

//    .my_order{
//        display: none;
//    }
</style>