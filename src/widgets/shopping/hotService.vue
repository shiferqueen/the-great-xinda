<template>
    <div v-if="getbodywidth >=768">
        <Row class="headcol">
            <Col span='23' offset="1">热门服务</Col>
        </Row>
    
        <Row class="hotrow" type="flex" justify="center" align="middle">
            <Col class="hotcol">
                <nobr>
                    <p>商标快速注册通道（5个小时就不知道了）</p>
                </nobr>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <span>工作日内5个小时提交申报，次日拿到</span>
                </br>
                <span>销量：</span>
                </br>
                <strong>￥ 1400.00</strong>
                <br>
                <s>原价：￥2000.00</s>
                <a>查看详情>>></a>
            </Col>  
            <Col class="hotcol">
                <nobr>
                    <p>商标快速注册通道（5个小时就不知道了）</p>
                </nobr>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <span>工作日内5个小时提交申报，次日拿到</span>
                </br>
                <span>销量：</span>
                </br>
                <strong>￥ 1400.00</strong>
                <br>
                <s>原价：￥2000.00</s>
                <a>查看详情>>></a>
            </Col>
            <Col class="hotcol">
                <nobr>
                    <p>商标快速注册通道（5个小时就不知道了）</p>
                </nobr>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <span>工作日内5个小时提交申报，次日拿到</span>
                </br>
                <span>销量：</span>
                </br>
                <strong>￥ 1400.00</strong>
                <br>
                <s>原价：￥2000.00</s>
                <a>查看详情>>></a>
            </Col>
            <Col class="hotcol">
                <nobr>
                    <p>商标快速注册通道（5个小时就不知道了）</p>
                </nobr>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <span>工作日内5个小时提交申报，次日拿到</span>
                </br>
                <span>销量：</span>
                </br>
                <strong>￥ 1400.00</strong>
                <br>
                <s>原价：￥2000.00</s>
                <a>查看详情>>></a>
            </Col>
    
        </Row>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'hotService',
    computed:{
        ...mapGetters(['getbodywidth'])
    }
}
</script>

<style lang="less" scoped>
.headcol {
    color: #74b1dd;
    font-size: 14px;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 7px;
}

.hotrow {
    height: 260px;
}
.hotcol{
    width: 267px;
    height: 191px;
    border: 1px solid #b6b6b6;
    margin: 35px 15px;
    padding-top: 20px;
    padding-left: 15px;
    nobr {
        font-size: 18px;
        p {
            width: 230px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    div {
        span:nth-child(1) {
            display: inline-block;
            background: #2793d3;
            width: 6px;
            height: 6px;
            border-radius: 50%;
        }
        span:nth-child(2) {
            display: inline-block;
            width: 200px;
            height: 1px;
            background-image: -webkit-linear-gradient(to right, #2793d3, #fff);
            background-image: linear-gradient(to right, #2793d3, #fff);
            vertical-align: middle;
            margin-top: 1px;
        }
    }
    s,
    a,
    span {
        font-size: 14px;
        color: #868686;
        line-height: 25px;
    }
    strong {
        font-family: '黑体';
        color: #2792d6;
        font-size: 30px;
        line-height: 45px;
    }
    a {
        margin-left: 40px;
        color: #74b3df;
    }
}
</style>