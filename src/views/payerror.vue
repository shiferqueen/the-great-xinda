<template>
<div>
    <div class="pay-error">
        <div class="per-containt">
            <p class="pre-title">首页/支付</p>
            <p class="pre-subtitle">支付失败</p>
            <div class="pre-cont">
                <div class="pre-co clear">
                    <img src="../images/logos/zhifu1.png" class="fl">
                    <div class="pre-right fr">
                        <h2>支付失败 !</h2>
                        <h4 class="fl">支付未成功：让我们再试一次吧</h4>
                        <a href="#/form" class="fl">返回支付页</a>
                        <br>
                        <span>如有问题，请联系客服:</span><h3>010-83421842</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <afoot></afoot>
</div>

</template>

<script>

import afoot from '../components/afoot'
 export default {
   name: 'payerror',
   components: {
     afoot
   },
 }
</script>

<style scoped lang="less">
.fl{
  float: left;
}
.fr{
  float: right;
}
.pay-error{
    width: 100%;
    .per-containt{
        width:1200px;
        height: 500px;
        margin: 0 auto;
        .pre-title{
            font-size: 15px;
            padding: 10px 0;
        }
        .pre-subtitle{
            font-size: 15px;
            padding: 10px 0;
            color:#2494d4;
        }
        .pre-cont{
            width:100%;
            height: 500px;
            border-top: 1px solid #bdbdbd;
            .pre-co{
                 width:100%;
                 height: 380px;
                 margin: 20px 0 50px 0;
                 background: #f7f7f7;
                 img{
                     width: 160px;
                     height: 160px;
                     margin: 100px 50px 0 200px;
                 }
                 .pre-right{
                     margin: 80px 340px 0 20px;
                     h2{
                         font-size: 34px;
                         color:#2494d4;
                         margin: 20px 0;
                     }
                     h4{
                         font-size: 18px;
                          margin: 20px 10px 20px 0px;
                     }
                    a{
                         font-size: 16px;
                         width:120px;
                         height: 24px;
                         border: 1px solid #2494d4;
                         border-radius:5px;
                         text-align:center; 
                         padding: 4px 10px;
                         background: #f7f7f7;
                         margin: 20px 0;
                         color:#2494d4;
                     }
                     span{
                         font-size: 15px;
                         margin: 20px 0;
                         line-height: 25px;
                     }
                     h3{
                         float:right;
                         margin-right:90px;
                         font-size: 22px;
                     }
                 }

            }
        }
    }
}

</style>