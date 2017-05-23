<template>
    <div>
        
        <dl class="hotdl clear">
            <dt>热门服务</dt>
            <dd>
                <nobr><p>商标快速注册通道（5个小时就不知道了）</p></nobr>
                <div>
                    <span></span><span></span>
                </div>
                <span>工作日内5个小时提交申报，次日拿到</span></br>
                <span>销量：</span></br>
                <strong>￥ 1400.00</strong><br>
                <s>原价：￥2000.00</s><a>查看详情>>></a>
            </dd>
            <dd>
                <nobr><p>商标快速注册通道（5个小时就不知道了）</p></nobr>
                <div>
                    <span></span><span></span>
                </div>
                <span>工作日内5个小时提交申报，次日拿到</span></br>
                <span>销量：</span></br>
                <strong>￥ 1400.00</strong><br>
                <s>原价：￥2000.00</s><a>查看详情>>></a>
            </dd>
            <dd>
                <nobr><p>商标快速注册通道（5个小时就不知道了）</p></nobr>
                <div>
                    <span></span><span></span>
                </div>
                <span>工作日内5个小时提交申报，次日拿到</span></br>
                <span>销量：</span></br>
                <strong>￥ 1400.00</strong><br>
                <s>原价：￥2000.00</s><a>查看详情>>></a>
            </dd>
            <dd>
                <nobr><p>商标快速注册通道（5个小时就不知道了）</p></nobr>
                <div>
                    <span></span><span></span>
                </div>
                <span>工作日内5个小时提交申报，次日拿到</span></br>
                <span>销量：</span></br>
                <strong>￥ 1400.00</strong><br>
                <s>原价：￥2000.00</s><a>查看详情>>></a>
            </dd>

        </dl>
    </div>
</template>
<script>
    export default {
        name: 'hotService'
    }
</script>

<style lang="less" scoped>
    * {
        margin: 0;
        padding: 0;
        border: 0
    }
    
    .clear:after {
        content: '';
        display: block;
        clear: both;
    }
    
    li {
        list-style: none;
    }
    
    .hotdl {
        dt {
            padding-left: 60px;
            color: #74b1dd;
            font-size: 14px;
            width: 1140px;
            border-bottom: 1px solid #bdbdbd;
            padding-bottom: 7px;
        }
        dd {
            float: left;
            width: 250px;
            height: 170px;
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
                    margin-top: .4px;
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
    }
</style>