<template>
    <!--未评价开始-->
    <div class="my_evaluation">
        <div class="my_evalu">
            <a>我的评价</a>
        </div>
        <ul class="fou_evalu">
            <li class="zh_1">
                <a @click="get()" :class="{active:weiping}">未评价</a>
                <a @click="set()" :class="{active:yiping}">已评价</a>
            </li>
            <li v-show="weiping" class="zh_2">
                <div class="logo">
                    <img src="../../images/logos/xinda-logo.png" />
                </div>
                <div class="logo-right">
                    <h4>信达北京服务中心</h4>
                    <p>服务单号<span class="pink-color">B1823</span></p>
                    <span class="goumai">购买内容：test</span>
                </div>
                <div class="goumai-time">
                    <p>购买时间：2016-01-01 02:12:21</p>
                </div>
                <div class="go-evaluation">
                    <a href="#/member/uevaluation">去评价</a>
                </div>
            </li>
            <li class="evaluation-li" v-show="yiping">
                <div class="logo">
                    <img src="../../images/logos/xinda-logo.png" />
                </div>
                <div class="logo-right">
                    <h4>信达北京服务中心</h4>
                    <p>服务单号<span class="pink-color">B1823</span></p>
                    <span class="goumai">购买内容：test</span>
                </div>
                <div class="goumai-time">
                    <p>购买时间：2016-01-01 02:12:21</p>
                </div>
                <div class="go-evaluation">
                    <a href="javascript:void(0);">已评价</a>
                </div>
            </li>
        </ul>
        <div class="page_next">
            <span class="zh_4">上一页</span>
            <span class="zh_5">1</span>
            <span class="zh_6">下一页</span>
        </div>
    </div>
    <!--未评价结束-->
</template>
<script>
import qs from 'qs'
export default {
    name: 'evaluation',
    data() {
        return {
            weiping: true,
            yiping: false,
            evaluation:[]
        }
    },
    created (){
        this.evaluationlist();
    },
    methods: {
        evaluationlist() {
            let _this = this;
            this.ajax.post('/xinda-api/service/judge/grid',qs.stringify({
                start:'0',
                limit:'6',
                status:'2',
            })).then(function(data){
                _this.evaluation = data.data.data;
                console.log(data)
            })
        },
        get: function () {
            this.weiping = true,
            this.yiping = false
        },
        set: function () {
            this.weiping = false,
            this.yiping = true
        }
    },
}
</script>

<style scoped lang="less">
a {
    cursor: pointer
}
// 未评价开始
.logo {
    width: 98px;
    height: 98px;
    float: left;
    border: 1px solid #ccc;
}
.my_evalu {
    width: 948px;
    height: 21px;
    border-bottom: 2px solid #ccc;
    margin-top: 3%;
    margin-left: 31%;
    a{
        color: #2693d4;
        border-bottom: 2px solid #2693d4;
        padding: 3px 20px;
    }
}

.fou_evalu {
        width: 950px;
        height: 189px;
        border: 1px solid #ccc;
        margin-top: 24px;
        margin-left: 488px;
    .zh_1 {
        width: 948px;
        height: 41px;
        background-color: #f7f7f7;
        border-bottom: 1px solid #ccc;

        a {
            color: #3c3c3c;
            font-size: 14px;
            width: 106px;
            height: 41px;
            display: inline-block;
            text-align: center;
            line-height: 41px;
        }
    }
    .zh_2 {
        width: 939px;
        height: 100px;
        margin-top: 28px;
        margin-left: 8px;
        &:after {
            content: '';
            display: block;
            clear: both;
        }
        .logo {
            width: 98px;
            height: 98px;
            float: left;
            border: 1px solid #ccc;
            img {
                width: 96px;
                height: 96px;
            }
        }
        .logo-right {
            float: left;
            margin-left: 12px;
            p {
                margin-top: 20px;
                .pink-color {
                    color: #ff6b6c;
                }
            }
            .goumai {
                margin-top: 10px;
                float: left;
            }
        }
        .goumai-time {
            p {
                float: left;
                margin-top: 40px;
                margin-left: 46px;
                color: #242424;
            }
        }
        .go-evaluation {
            margin-right: 25px;
            a {
                width: 114px;
                height: 37px;
                margin-top: 30px;
                display: inline-block;
                border: 1px solid #2693d4;
                border-radius: 8%;
                line-height: 37px;
                color: #2693d4;
                text-align: center;
                float: right;
            }
        }
    }
}

.active {
    background-color: #2693d4;
    &:after {
        content:'';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px;
        border-color: #2693d4 transparent transparent;
        display: block;
        margin: 0 auto;
    }
}

.page_next {
    .zh_4 {
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
    .zh_5 {
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
    .zh_6 {
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

// 未评价结束
// 2
.evaluation-li {
    width: 939px;
    height: 100px;
    margin-top: 28px;
    margin-left: 8px;
    .logo {
        width: 98px;
        height: 98px;
        float: left;
        border: 1px solid #ccc;
        img {
            width: 96px;
            height: 96px;
        }
    }
    .logo-right {
        float: left;
        margin-left: 12px;
        p {
            margin-top: 20px;
            .pink-color {
                color: #ff6b6c;
            }
        }
        span {
            margin-top: 10px;
        }
    }
    .goumai-time {
        p {
            float: left;
            margin-top: 40px;
            margin-left: 46px;
            color: #242424;
        }
    }
    .go-evaluation {
        margin-right: 25px;
        a {
            width: 114px;
            height: 37px;
            margin-top: 30px;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 8%;
            line-height: 37px;
            color: #ccc;
            text-align: center;
            float: right;
        }
    }
}

// 2
</style>