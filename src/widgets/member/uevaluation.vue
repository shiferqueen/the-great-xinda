<template>
<div class="uevaluation">
    <div class="my_evalu">
        <a>评价</a>
    </div>
    <li class="server-num">
        <p>服务单号：B1623060</p>
        <p>购买内容：test</p>
        <p>购买时间：2016-10-22</p>
    </li>
    <li class="hot-1">
        <span>评价：</span>
        <span><input type="radio" name="radio"/>好评</span>
        <span><input type="radio" name="radio"/>中评</span>
        <span><input type="radio" name="radio" checked/>差评</span>
    </li>
    <li class="score">
        <span>评分：</span>
        <Row>
            <i-col span="12">
                <Rate show-text v-model="valueText"></Rate>
            </i-col>
        </Row>
    </li>
    <li class="feel">
        <span>感受：</span>
        <textarea class="ganshou"></textarea>
    </li>
    <div class="submit">
        <a href="">提交</a>
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
        a{
            font-size: 20px;
            color: #2693d4;
            border-bottom: 2px solid #2693d4;
            padding: 0px 20px;
        }
    }
    .server-num{
        width: 935px;
        margin-top: 21px;
        &:after{
            content:'';
            display: block;
            clear:both;
        }
        p{
            float: left;
        }
        p:nth-child(2){
            margin-left:96px;
        }
        p:nth-child(3){
            margin-left:73px;
        }
    }
    .hot-1{
        margin-top: 30px;
        span:nth-child(2){
            margin-left:29px;
        }
        span:nth-child(3){
            margin-left:29px;
        }
        span:nth-child(4){
            margin-left:29px;
        }
    }
    .score{
        margin-top: 30px;
        img{
            margin-left: 43px;
        }
    }
    .ganshou{
        border: 1px solid #ccc;
        width: 684px;
        height: 128px;
        float:left;
    }
    .feel{
        margin-top: 30px;
        span{
            margin-top: 10px;
            float:left;
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
            margin-left: 630px;
        }
    }
</style>
