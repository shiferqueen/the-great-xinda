<template>
    <div class="my_order">
        <div>
            <a>我的订单</a>
        </div>
        <div>
            <li>
                <span>订单号：</span>
                <input placeholder="请输入订单号搜索" />
                <a href="#">搜索</a>
            </li>
            <li>
                <span>创建时间：</span>
                <input type="date" class="rili_one" />
                <input type="date" class="rili_two" />
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
        <ul class="order_num">
            <li>
                <span>订单号:S347484929274490</span>
                <span>下单时间:2017-04-21 01:23:32</span>
            </li>
        </ul>
        <ul class="pay_del">
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
                    <span>删除订单</span>
                    <span class="number_1">1</span>
                </p>
            </li>
        </ul>
        <ul class="order_num">
            <li>
                <span>订单号:S347484929274490</span>
                <span>下单时间:2017-04-21 01:23:32</span>
            </li>
        </ul>
        <ul class="pay_del">
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
                    <span>删除订单</span>
                    <span class="number_1">1</span>
                </p>
            </li>
        </ul>
        <div class="page_next">
            <span>上一页</span>
            <span>1</span>
            <span>下一页</span>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'myorder',

    }

</script>


<style scoped lang="less">
.page_next{
    margin-left: 285px;  
    span:nth-child(1){
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
    span:nth-child(2){
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
    }span:nth-child(3){
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
.number_1{
    position: absolute;
    top: 25px;
    left: 475px;
}
.pay_del{
    width: 935px;
    height: 134px;
    overflow: hidden;
    border: 1px solid #e8e8e8;
    li:nth-child(1){
        width: 935px;
        height: 67px;
        border-bottom: 1px solid #f0f0f0;
        p:nth-child(1){
            width: 935px;
            height: 67px;
            margin-top: 0px;
            position: relative;
            border-right: 1px solid #e8e8e8;
            img{
                margin-top: 9px;
                margin-left: 12px;
                float: left;
            }span:nth-child(3){
                float:left;
                margin-top:40px;
                margin-left: -110px;
            }span:nth-child(2){
                float:left;
                margin-top: 15px;
                margin-left: 11px;
            }span:nth-child(4){
               line-height: 67px;
               margin-left: -380px;
            }span:nth-child(5){
                position: absolute;
                top: 25px;
                right: 295px;
                color: #2693d4;
            }span:nth-child(6){
                position: absolute;
                top: 25px;
                right: 140px;
                color: #2693d4;
            }span:nth-child(7){
                position: absolute;
                width: 56px;
                height: 23px;
                display: inline-block;
                border: 1px solid #2693d4;
                border-radius: 10%;
                line-height: 23px;
                top: 40px;
                right: 20px;
                color: #2693d4;
                text-align: center;
            }
            span{
                color: #656565;
            }
        }
    }
    li:nth-child(2){
        width: 935px;
        height: 67px;
        border-bottom: 1px solid #f0f0f0;
        p:nth-child(1){
            width: 935px;
            height: 67px;
            margin-top: 0px;
            position: relative;
            border-right: 1px solid #e8e8e8;
            img{
                margin-top: 9px;
                margin-left: 12px;
                float: left;
            }span:nth-child(3){
                float:left;
                margin-top:40px;
                margin-left: -110px;
            }span:nth-child(2){
                float:left;
                margin-top: 15px;
                margin-left: 11px;
            }span:nth-child(4){
               line-height: 67px;
               margin-left: -380px;
            }span:nth-child(5){
                position: absolute;
                top: 25px;
                right: 295px;
                color: #2693d4;
            }span:nth-child(6){
                position: absolute;
                top: 25px;
                right: 140px;
                color: #2693d4;
            }span:nth-child(7){
                position: absolute;
                right: 20px;
                color: #ff3e3e;
            }
            span{
                color: #656565;
            }
        }
    }
}
   .main{
       width: 1200px;
       height: 676px;
       margin: 0 auto;
       &:after{
           content:'';
           display:block;
           clear:both;
       }
       p{
           font-size: 14px;
           color: #252525;
           margin-top: 25px;
           width: 90px;
       }
   }
   .person_main{
       width: 1200px;
       div:first-child{
           width: 242px;
           height: 551px;
           float: left;
           &:after{
               content:'';
               display:block;
               clear:both;
           }
           div:first-child{
               width: 242px;
               height: 141px;
               background-color: #e9e9e9;
               img{
                   margin-top: 9px;
                   margin-left: 70px;
               }span{
                   display: block;
                   margin-left: 70px;
               }
           }div:last-child{
               margin-top: 9px;
               width: 242px;
               height: 376px;
               overflow: hidden;
               background-color: #f7f7f7;
               li{
                   width: 242px;
                   height: 50px;
                   img{
                       vertical-align: middle;
                   }span{
                       font-size: 18px;
                       line-height: 50px;
                       padding-left: 12px;
                   }
               }li:first-child{
                   background-color: #e9e9e9;
                   text-align: center;
               }li:nth-child(2){
                   text-align: center;
               }li:nth-child(3){
                   text-align: center;
               }
               
           }
       }
       div:last-child{
           width: 935px;
           float: right;
           &:after{
               content:'';
               display:block;
               clear:both;
           }
           div:first-child{
               width: 935px;
               height: 31px;
               float: left;
               border-bottom: 2px solid #e9e9e9;
               a{
                   color: #2693d4;
                   font-size: 14px;
                   width: 112px;
                   float: left;
                   line-height: 31px;
                   border-bottom: 2px solid #2693d4;
                   text-align: center;
               }
           }div:nth-child(2){
               width: 935px;
               height: 114px;
               overflow: hidden;
               li:first-child{
                   width: 935px;
                   height: 29px;
                   margin-top: 22px;
                   span{
                       float: left;
                       font-size: 14px;
                       margin-top: 5px;
                   }
                   input{
                       width: 263px;
                       height: 23px;
                       float: left;
                       margin-left: 24px;
                       border: 1px solid #b0b0b0;
                   }a{
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
               }li:last-child{
                   width: 935px;
                   height: 25px;
                   margin-top: 20px;
                   span{
                       float: left;
                   }.rili_one{
                       border: 1px solid #b0b0b0;
                       float: left;
                   }.rili_two{
                       float: left;
                       margin-left: 16px;
                       border: 1px solid #b0b0b0;
                   }
               }
           }
       }
   }
   .info_list{
       width: 935px;
       height: 34px;
       background-color: #f7f7f7;
       overflow: hidden;
       li strong{
           font-size: 12px;
           line-height: 34px;
       }strong:nth-child(2){
            margin-left: 275px;
       }strong:nth-child(3){
            margin-left: 89px;
       }strong:nth-child(1){
            margin-left: 25px;
       }strong:nth-child(4){
            margin-left: 89px;
       }strong:nth-child(5){
            margin-left: 93px;
       }strong:nth-child(6){
            margin-left: 86px;
       }
   }
   .order_num{
       width: 933px;
       height: 37px;
       background-color: #f7f7f7;
       border: 1px solid #e8e8e8;
       overflow: hidden;
       margin-top: 12px;
       li span{
           font-size: 12px;
           color: #4a4a4a;
           line-height: 37px;
           margin-left: 34px;
           float: left;
       }span:last-child{
           margin-left: 25px;
       }
   }
   li{list-style: none;}
   a{text-decoration: none;}
//    .my_order{
//        display: none;
//    }
</style>