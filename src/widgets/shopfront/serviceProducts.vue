<template>
    <div>
        <!--<Row>-->
            <!--<Col :xs="0" :sm="24">-->
                <div class="shopfront-content-right-service-list">
                    <ul class="clear">
                        <li v-for="(lispages,index) in listpage_ajax">
                            <nobr>
                                <p>{{lispages.serviceName}}</p>
                            </nobr>
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                            <span>{{lispages.serviceInfo}}</span>
                            </br>
                            <span>销量：{{lispages.buyNum}}</span>
                            </br>
                            <strong>￥ {{lispages.price}}</strong>
                            <br>
                            <s>原价：￥{{lispages.marketPrice}}</s>
                            <a :href="'#/secondproduct/'+lispages.id" @click="storeid(lispages.id)">查看详情>>></a>
                        </li>
                    </ul>
                </div>
                <div class="shopfront-content-change clear">
                    <div @click="goto(1)">首页</div>
                    <div v-show="current != 1" @click="current-- && goto(current--)">上一页</div>
                    <div v-for="index in pages" @click="goto(index)" :class="{'active':current == index}">{{index}}</div>
                    <div v-show="allpage != current && allpage != 0" @click="current++ && goto(current++)">下一页</div>
                    <div @click="goto(3)">尾页</div>
                </div>
            <!--</Col>-->
            <!--<Col :xs="24" :sm="0">-->
                <!--<div v-for="(liscon,index) in listpage_ajax_new">
                    <Row>
                        <Col span="5" offset="1">aaa<img :src="'http://115.182.107.203:8088/xinda/pic' + liscon.providerImg"></Col>
                        <Col span="17" offset="1">
                            <Row>aaa</Row>
                            <Row>aaa</Row>
                            <Row>aaa</Row>
                            <Row>aaa</Row>                        
                        </Col>
                    </Row>
                </div>
            </Col>    
        </Row>-->
    </div>
</template>
<script>
import qs from 'qs'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'serviceProducts',
    data() {
        return {
            lispage_ajax: [],
            listpage_ajax: [],
            listpage_ajax_new:[],
            name: {},
            number: 0,
            current: 1,
            allpage: 3,
            showItem: 3,
        }
    },
    computed: {
        // ...mapGetters(['getshopid']),
        pages: function () {
            let _this = this;
            var pag = [];
            var i = _this.showItem;
            while (_this.showItem) {
                pag.unshift(_this.showItem--);
            }
            return pag
        }
    },
    methods: {
        ...mapActions(['setstoreid']),
        goto: function (index) {
            let _this = this
            if (index == this.current) return;
            _this.current = index
            if (index == 4) {
                index = 3
            }
            _this.number = (index - 1) * 6
            _this.listpage_ajax = _this.listpage_ajax_new.slice(_this.number, _this.number + 6)
        },
        storeid(index) {
            this.setstoreid(index);
        }
    },
    created() {
        let _this = this;
        this.ajax.post('/xinda-api/provider/detail', qs.stringify({ id: _this.$route.params.shopfrontID })).then(function (res) {
            let data = res.data.data
            _this.name = data.name
            // console.log(res.data.data.name)
            
        }),
            this.ajax.post("/xinda-api/product/package/grid", qs.stringify({     //接口（电脑端和手机端）
                limit: 18,
                start: _this.number,
                // Sid:_this.getshopid,
        
            })).then(function (res) {
                _this.listpage_ajax_new = res.data.data;
                // console.log(res.data.data)
                // console.log(_this.listpage_ajax_new)
                _this.number = 0
                _this.isA = false
                _this.listpage_ajax = _this.listpage_ajax_new.slice(_this.number, _this.number + 6)
                // console.log(_this.listpage_ajax)
            })

    },
}
</script>

<style lang="less" scoped>
.shopfront-content-right-service-list {
    padding-top: 20px;
    border: 1px solid gray;
    li {
        width: 260px;
        height: 245px;
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

.shopfront-content-change {
    margin-top: 40px;
    margin-left: 270px;
    div {
        width: 37px;
        height: 34px;
        border: 1px solid gray;
        font-size: 12px;
        float: left;
        text-align: center;
        line-height: 34px;
        margin: 0 5px;
        cursor: pointer;
    }
    // 分页器背景颜色
    .active {
        border: 1px solid #2693d4;
        color: #2693d4;
    }
    div:nth-child(1),
    div:nth-child(2),
    div:nth-last-child(1),
    div:nth-last-child(2) {
        width: 55px;
        height: 34px;
    }
} 
</style>
