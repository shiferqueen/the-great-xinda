<template>
<div class="uevaluation">
    <div class="my_evalu">
        <a>评价</a>
    </div>
    <li class="server-num">
        <p>服务单号：B1623060</p>
        <p class="zh_8">购买内容：test</p>
        <p class="zh_9">购买时间：2016-10-22</p>
    </li>
    <li class="hot-1">
        <span>评价：</span>
        <span class="xh_10"><input type="radio" name="radio"/>好评</span>
        <span class="xh_11"><input type="radio" name="radio"/>中评</span>
        <span class="xh_12"><input type="radio" name="radio" checked/>差评</span>
    </li>
    <li class="score">
            <Row style="position:inherit">
                <i-col span="12">
                    评分：<Rate show-text v-model="valueText" style="margin-left:27px;"></Rate>
                </i-col>
            </Row>
    </li>
    <li class="feel">
        <span>感受：</span>
        <textarea class="ganshou"></textarea>
    </li>
    <div class="submit">
        <a href="javascript:(0);">提交</a>
    </div>
</div>
</template>

<script>
 export default {
        data () {
            return {
                valueText: 3
            }
        }
    }
</script>


<style scoped lang="less">
    .my_evalu{
        width: 948px;
        border-bottom: 2px solid #ccc;
        margin-left: 488px;
        a{
            font-size: 20px;
            color: #2693d4;
            border-bottom: 2px solid #2693d4;
            padding: 4px 20px;
        }
    }
    .server-num{
        width: 935px;
        margin-top: 21px;
        margin-left: 32%;
        &:after{
            content:'';
            display: block;
            clear:both;
        }
        p{
            float: left;
        }
        .zh_8{
            margin-left:96px;
        }
        .zh_9{
            margin-left:73px;
        }
    }
    .hot-1{
            margin-top: -29%;
            margin-left: 32%;
        .xh_10{
            margin-left:29px;
        }
        .xh_11{
            margin-left:29px;
        }
        .xh_12{
            margin-left:29px;
        }
    }
    .score{
        margin-top: 20px;
        margin-left: 32%;
        img{
            margin-left: 43px;
        }
    }
    .ganshou{
        border: 1px solid #ccc;
        width: 684px;
        height: 128px;
        float:left;
        margin-top: -1%;


    }
    .feel{
        margin-top: -23%;
        margin-left: 32%;
        span{
            margin-top: -1%;
            float: left;
            margin-left: 0%;
        }
    }
    .submit{
        margin-top: 180px;
        a{
            width: 140px;
            height: 40px;
            display: inline-block;
            background-color: #169bd5;
            text-align: center;
            line-height: 40px;
            border-radius:6%;
            margin-left: 38%;
            color: #fff;

        }
    }
</style>
