<template>
  <div class="">
      <div class="shopfront-content-right-service-list">
                    <ul>
                        <li>
                            <nobr><p>{{name}}</p></nobr>
                            <div>
                                <span></span><span></span>
                            </div>
                            <span>工作日内5个小时提交申报，次日拿到</span></br>
                            <span>销量：</span></br>
                            <strong>￥ 1400.00</strong><br>
                            <s>原价：￥2000.00</s><a>查看详情>>></a>
                        </li>
                        <li>
                            <nobr><p>商标快速注册通道（5个小时就不知道了）</p></nobr>
                            <div>
                                <span></span><span></span>
                            </div>
                            <span>工作日内5个小时提交申报，次日拿到</span></br>
                            <span>销量：</span></br>
                            <strong>￥ 1400.00</strong><br>
                            <s>原价：￥2000.00</s><a>查看详情>>></a>
                        </li>
                        <li>
                            <nobr><p>商标快速注册通道（5个小时就不知道了）</p></nobr>
                            <div>
                                <span></span><span></span>
                            </div>
                            <span>工作日内5个小时提交申报，次日拿到</span></br>
                            <span>销量：</span></br>
                            <strong>￥ 1400.00</strong><br>
                            <s>原价：￥2000.00</s><a>查看详情>>></a>
                        </li>
                        <li>
                            <nobr><p>商标快速注册通道（5个小时就不知道了）</p></nobr>
                            <div>
                                <span></span><span></span>
                            </div>
                            <span>工作日内5个小时提交申报，次日拿到</span></br>
                            <span>销量：</span></br>
                            <strong>￥ 1400.00</strong><br>
                            <s>原价：￥2000.00</s><a>查看详情>>></a>
                        </li>
                        <li>
                            <nobr><p>商标快速注册通道（5个小时就不知道了）</p></nobr>
                            <div>
                                <span></span><span></span>
                            </div>
                            <span>工作日内5个小时提交申报，次日拿到</span></br>
                            <span>销量：</span></br>
                            <strong>￥ 1400.00</strong><br>
                            <s>原价：￥2000.00</s><a>查看详情>>></a>
                        </li>
                        <li>
                            <nobr><p>商标快速注册通道（5个小时就不知道了）</p></nobr>
                            <div>
                                <span></span><span></span>
                            </div>
                            <span>工作日内5个小时提交申报，次日拿到</span></br>
                            <span>销量：</span></br>
                            <strong>￥ 1400.00</strong><br>
                            <s>原价：￥2000.00</s><a>查看详情>>></a>
                        </li>
                    </ul>
                </div>
  </div>
</template>
<script>
import qs from 'qs'
import { mapActions, mapGetters } from 'vuex'
    export default {
        name:'serviceProducts',
        data() {
            return {
                lispage_ajax:[],
                name:{}
            }
        },
        computed: {
            ...mapGetters(['getshopid']),
        },
        created(){
            let _this = this;
            this.ajax.post('/xinda-api/provider/detail',qs.stringify({id: _this.$route.params.shopfrontID})).then(function(res){
                let data = res.data.data
                _this.name = data.name
                // console.log(res.data.data.name)
            })
        },
    }
</script>

<style lang="less" scoped>
 .shopfront-content-right-service-list {
        padding-top: 20px;
        li {
            width: 250px;
            border: 1px solid gray;
            float: left;
            border: 1px solid #b6b6b6;
            margin: 0px 12px 20px;
            padding: 20px 0px 10px 15px;
            /*padding-left: 15px;
            padding-bottom: 10px;*/
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
    }
</style>
