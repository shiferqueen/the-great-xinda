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
        <!--<div v-for="(order,index) in myorder">-->
        <!--<ul class="order_num">
                        <li>
                            <span>订单号:{{order.businessNo}}</span>
                            <span>下单时间:{{order.createTime}}</span>
                        </li>
                    </ul>-->
        <!--<ul class="pay_del">
                        <li>
                            <p>
                                <img src="../../images/logos/bg_01.jpg" />
                                <span>信达北京服务中心</span>
        
                                <span>注册分公司</span>
                                <span>￥800.00</span>
                                <span>￥800.00</span>
                                <span>等待买家付款</span>
                                <span>付款</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <img src="../../images/logos/bg_01.jpg" />
                                <span>信达北京服务中心</span>
                                <span>注册分公司</span>
                                <span>￥800.00</span>
                                <span>￥800.00</span>
                                <span>等待买家付款</span>
                                <span @click="del()">删除订单</span>
                                <span class="number_1">1</span>
                            </p>
                        </li>
                    </ul>-->
        <div>
              <table border="1px solid #e8e8e8"  cellspacing="0" cellpadding="0">
                  <thead>
                      <tr><td colspan="6"><span class="order_sp">订单号:S1706070150090759094<span></span></span><span class="time_sp">下单时间:2017-06-07 09:07:59<span></span></span></td></tr>
                  </thead>
                  <tbody class="tbodyr">
                      <tr class="xinda">
                          <td class="t_d1">
                              <img class="logos" src="../../images/logos/bg_01.jpg" />
                              <span class="t_sp">信达北京服务中心</span>
                              <span class="t_sp2">注册分公司</span>
                          </td>
                          <td class="t_d2">￥800.00</td>
                          <td class="t_d3">1</td>
                          <td class="t_d4">￥800.00</td>
                          <td class="t_d5">等待买家付款</td>
                          <td class="t_d6" rowspan="2" >
                              <a class="pay-on" href="">付款</a>
                              <a class="del-order" href="javascript:void(0);">删除订单</a>
                          </td>
                      </tr>
                      <tr class="xinda">
                         <td class="t_d1">
                              <img class="logos" src="../../images/logos/bg_01.jpg" />
                              <span class="t_sp">信达北京服务中心</span>
                              <span class="t_sp2">注册分公司</span>
                          </td>
                          <td class="t_d2">￥800.00</td>
                          <td class="t_d3">1</td>
                          <td class="t_d4">￥800.00</td>
                          <td class="t_d5">等待买家付款</td>
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
export default {
    name: 'myorder',
    data() {
        return {
            myorder: [],
            mycompany: [],
            bn: ''
        }
    },
    created() {
        this.myorderlist();
        // this.mycompanylist()
    },
    methods: {
        del: function () {
            event.target.parentNode.parentNode.parentNode.parentNode.parentNode
                .removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
        },
        myorderlist() {
            let _this = this;
            this.ajax.post('/xinda-api/business-order/grid', qs.stringify({
                businessNo: this.bn,
                startTime: '2017-03-28',
                endTime: '2017-03-28',
                start: '0',
            })).then(function (data) {
                _this.myorder = data.data.data;
                console.log(_this.myorder)
                for (var time in _this.myorder) {
                    var createTime = _this.myorder[time].createTime;
                    _this.myorder[time].createTime = new Date(createTime).format("yyyy-MM-dd hh:mm:ss");

                }
            })
        },
    }
}
</script>
<style scoped lang="less">
.tbodyr{
    border: 1px solid #ebebeb;
}
.t_d1{
    // border: 1px solid #ebebeb;
}
.xinda{
    height: 67px;
    // border: 1px solid #ebebeb;
    td{
        font-size: 12px;
    }
}
table {
    text-align: left;
    width:100%;
    margin-top: 12px;
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
.t_sp{
    float: left;
    margin-top: 15px;
    margin-left: 12px;
}
.t_sp2{
    float: left;
    margin-left: -95px;
    margin-top: 35px;
}
.t_d1{
    &:after{
        content:'';
        display: block;
        clear: both;
    }
}
.t_d2{
    margin-left: 100px;
    line-height: 67px;
    float: left;
}
.t_d3{
    position: relative;
    left: -34px;
}
.t_d4{
    position: relative;
    left: 50px;
    color: #2792d6;
    // border-left: 1px solid #ebebeb;
    text-align: center;
}
.t_d5{
    position: relative;
    left: 100px;
    color: #2792d6;
    border: 1px solid #ebebeb;
    text-align: center;
}
.t_d6{
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
    top: -10px;
    right: -115px;
    color: #2693d4;
    text-align: center;
    position: relative;
}
.del-order{
    color: red;
    position: relative;
    top: 16px;
    right: -60px;
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
                line-height: 31px;
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
                    margin-left: 24px;
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