<template>
  <Row>
    <Col :xs="{ span: 0}" :sm="{ span: 24}">
    <!---------------轮播---------------------------->
    <div class="advertisment">
      <div class="swiper-container">
        <swiper :options="swiperOption">
          <swiper-slide>
            <a href="javascript:void(0)">
              <img src="../images/index/timg.jpg" width="100%" height="400" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript:void(0)">
              <img src="../images/index/timg (1).jpg" width="100%" height="400" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript:void(0)">
              <img src="../images/index/timg (2).jpg" width="100%" height="400" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript:void(0)">
              <img src="../images/index/timg (3).jpg" width="100%" height="400" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination">
          </div>
        </swiper>
        <!-- 如果需要分页器 -->
  
        <!-- 如果需要导航按钮 -->
        <!--<div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>-->
      </div>
    </div>
    <!------------ 明星产品推荐---------------------->
    <div class="label">
      <div class="lab-containt">
        <p>明星产品推荐</p>
        <span></span>
      </div>
    </div>
    <!------内容------>
    <div class="recommend">
      <div class="recom-containt">
        <ul class="clear">
          <li class="fl" v-for="(massage,index) in da">
            <a href="#/pagelist">
              <img :src="imgsrcfront+massage.providerImg">
              <h4>{{massage.providerName}}</h4>
              <p>{{massage.serviceName}}</p>
              <div>
                <span>{{massage.price}}</span>{{massage.unit}}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!------初创企业必备-------->
    <div class="label">
      <div class="lab-containt">
        <p>初创企业必备</p>
        <span></span>
      </div>
    </div>
    <!------内容------>
    <div class="startbusiness">
      <div class="stabus-containt">
        <ul class="clear">
          <li class="fl" v-for="(mas,index) in dat">
            <a href="#/pagelist">
              <img :src="imgsrcfront+mas.providerImg">
              <h4>{{mas.providerName}}</h4>
              <p>{{mas.serviceInfo}}</p>
              <div>
                <span>{{mas.price}}</span>{{mas.unit}}</div>
              <button>查看详情</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!------知识产权-------->
    <div class="label">
      <div class="lab-containt">
        <p>知识产权</p>
        <span></span>
      </div>
    </div>
    <!------内容------>
    <div class="intellproperty">
      <div class="intprop-containt">
        <img src="../images/index/u82.png" class="fl image1">
        <img src="../images/index/u84.png" class="fl image2">
        <img src="../images/index/u86.png" class="fl image3">
        <img src="../images/index/u88.png" class="fl image4">
        <img src="../images/index/u100.png" class="fl image5">
      </div>
    </div>
    <!------推荐服务商-------->
    <div class="label">
      <div class="lab-containt">
        <div>推荐服务商</div>
        <p>推荐服务</p>
        <span></span>
      </div>
    </div>
    <!------内容------>
    <div class="providers">
      <div class="prov-containt">
        <ul class="clear">
          <li class="fl" v-for="(mas,index) in dat">
            <a href="#/pagelist">
              <img :src="imgsrcfront+mas.providerImg">
              <h4>{{mas.providerName}}</h4>
              <p class="fz15">服务指数：五星</p>
              <p class="fz18">提供的服务：{{mas.serviceName}}</p>
              <button class="fl padbot">发明驳回复审</button>
              <button class="fl padbot">高新企业担保认定</button>
              <button class="fl">软件著作权登记</button>
              <button class="fl">商标快速注册</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!------合作伙伴-------->
    <div class="label">
      <div class="lab-containt">
        <p>合作伙伴</p>
        <span></span>
      </div>
    </div>
    <!------内容------>
    <div class="partner">
      <div class="partner-containt">
        <img src="../images/index/u246.png">
      </div>
    </div>
    </Col>
    <!--这是手机端首页-->
    <!--这是手机端头部-->
    <Col :xs="{ span: 24}" :sm="{ span: 0}" id="phone">
      <div class="phone_head">
        <Col class="ph_head_left" span="7">
        <Icon type="chevron-down"></Icon>
        <span>北京市</span>
        </Col>
        <Col class="ph_head_right" span="17">
        <h1 class="fl">信达</h1>
        </Col>
      </div>
    </Col>
    <transition name="ifrow">
      <div v-if="ifRow" class="ifrows">
        <Row>
          <Col span="8" class="phone_list">
          <Menu>
            <Submenu name="1">
              <template slot="title">
                财税服务
              </template>
              <Menu-group title="代理记账">
                <Menu-item name="1-1"><p  @click="chuan(1)">小规模记账</p></Menu-item>
                <Menu-item name="1-2"><p  @click="chuan(1)">一般纳税人记录</p></Menu-item>
              </Menu-group>
              <Menu-group title="税务代办">
                <Menu-item name="1-3"><p  @click="chuan(1)">国税地税报道</p></Menu-item>
                <Menu-item name="1-4"><p  @click="chuan(1)">代开增值税专用发票</p></Menu-item>
                <Menu-item name="1-5"><p  @click="chuan(1)">所得税汇算清缴</p></Menu-item>
                <Menu-item name="1-6"><p  @click="chuan(1)">一般纳税人资质申办</p></Menu-item>
              </Menu-group>
              <Menu-group title="审计报告">
                <Menu-item name="1-7">验资报告</Menu-item>
                <Menu-item name="1-8">财务审计报告</Menu-item>
                <Menu-item name="1-9">税审报告</Menu-item>
                <Menu-item name="1-10">企业注销清算报告</Menu-item>
              </Menu-group>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                公司工商
              </template>
              <Menu-group title="公司注册">
                <Menu-item name="2-1"><p  @click="chuan(4)">分公司注册</p></Menu-item>
                <Menu-item name="2-2"><p  @click="chuan(4)">合伙企业注册</p></Menu-item>
                <Menu-item name="2-3"><p  @click="chuan(4)">外商独资公司</p></Menu-item>
                <Menu-item name="2-4"><p  @click="chuan(4)">VIE架构</p></Menu-item>
                <Menu-item name="2-5"><p  @click="chuan(4)">股份公司注册</p></Menu-item>
                <Menu-item name="2-6"><p  @click="chuan(4)">有限责任公司注册</p></Menu-item>
                <Menu-item name="2-7"><p  @click="chuan(4)">一般纳税人注册地址</p></Menu-item>
              </Menu-group>
              <Menu-group title="公司变更">
                <Menu-item name="2-8"><p  @click="chuan(5)">公司股权变更</p></Menu-item>
                <Menu-item name="2-9"><p  @click="chuan(5)">公司名称变更</p></Menu-item>
                <Menu-item name="2-10"><p  @click="chuan(5)">公司注册地址变更</p></Menu-item>
                <Menu-item name="2-11"><p  @click="chuan(5)">内资公司注销</p></Menu-item>
                <Menu-item name="2-12"><p  @click="chuan(5)">法人、高管或注册资本变更</p></Menu-item>
                <Menu-item name="2-13"><p  @click="chuan(5)">公司经营范围变更</p></Menu-item>
              </Menu-group>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                知识产权
              </template>
              <Menu-group title="专利申请">
                <Menu-item name="3-1"><p  @click="chicked()">审查意见答复</p></Menu-item>
                <Menu-item name="3-2"><p  @click="chicked()">外观专利减缓（共同申请）</p></Menu-item>
                <Menu-item name="3-3"><p  @click="chicked()">发明不减缓</p></Menu-item>
                <Menu-item name="3-4"><p  @click="chicked()">发明减缓（个人）</p></Menu-item>
                <Menu-item name="3-5"><p  @click="chicked()">实用新型专利减缓</p></Menu-item>
                <Menu-item name="3-6"><p  @click="chicked()">专利申请复审</p></Menu-item>
                <Menu-item name="3-7"><p  @click="chicked()">外观设计专利（不减缓）</p></Menu-item>
                <Menu-item name="3-8"><p  @click="chicked()">办理实用新型检索报告</p></Menu-item>
                <Menu-item name="3-9"><p  @click="chicked()">实用新型专利</p></Menu-item>
                <Menu-item name="3-10"><p  @click="chicked()">外观专利减缓</p></Menu-item>
                <Menu-item name="3-11"><p  @click="chicked()">实用新型专科减缓（共同申请）</p></Menu-item>
              </Menu-group>
              <Menu-group title="商标注册">
                <Menu-item name="3-12"><p  @click="chicked()">LOGO设计+商标注册</p></Menu-item>
                <Menu-item name="3-13"><p  @click="chicked()">商标变更</p></Menu-item>
                <Menu-item name="3-14"><p  @click="chicked()">商标续展</p></Menu-item>
                <Menu-item name="3-15"><p  @click="chicked()">商标驳回复审</p></Menu-item>
                <Menu-item name="3-16"><p  @click="chicked()">商标快速注册</p></Menu-item>
                <Menu-item name="3-17"><p  @click="chicked()">著名商标认定</p></Menu-item>
              </Menu-group>
              <Menu-group title="版权保护">
                <Menu-item name="3-18"><p  @click="chicked()">电视剧作品登记</p></Menu-item>
                <Menu-item name="3-19"><p  @click="chicked()">美术著作权</p></Menu-item>
                <Menu-item name="3-20"><p  @click="chicked()">软件著作权</p></Menu-item>
                <Menu-item name="3-21"><p  @click="chicked()">音乐作品</p></Menu-item>
              </Menu-group>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                社保办理
              </template>
              <Menu-group title="企业社保">
                <Menu-item name="4-1"><p  @click="chuan(6)">社保/公积金账户注销</p></Menu-item>
                <Menu-item name="4-2"><p  @click="chuan(6)">社保开户</p></Menu-item>
                <Menu-item name="4-3"><p  @click="chuan(6)">社会公积金代缴</p></Menu-item>
                <Menu-item name="4-4"><p  @click="chuan(6)">公积金开户</p></Menu-item>
              </Menu-group>
              <Menu-group title="个人社保">
                <Menu-item name="4-5"><p  @click="chuan(6)">个人社保代理</p></Menu-item>
                <Menu-item name="4-6"><p  @click="chuan(6)">个人代理社保和公积金</p></Menu-item>
                <Menu-item name="4-7"><p  @click="chuan(6)">新参保（个人）</p></Menu-item>
                <Menu-item name="4-8"><p  @click="chuan(6)">个人代理公积金</p></Menu-item>
              </Menu-group>
            </Submenu>
          </Menu>
          </Col>
        </Row>
      </div>
    </transition>
    <Col :xs="{ span: 24}" :sm="{ span: 0}" id="iphone">
      <div class="swiper-container_phone">
        <swiper :options="swiperOption">
          <swiper-slide>
            <a href="javascript:void(0)">
              <img src="../images/index/timg.jpg" width="100%" height="250" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript:void(0)">
              <img src="../images/index/timg (1).jpg" width="100%" height="250" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript:void(0)">
              <img src="../images/index/timg (2).jpg" width="100%" height="250" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript:void(0)">
              <img src="../images/index/timg (3).jpg" width="100%" height="250" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination">
          </div>
        </swiper>
      </div>
      <div class="phone_coin clear">
        <ul class="phone_con">
          <li class="ph_coin">
            <a href="javascript:void(0)" class="icon_link" @click="chuan(3)">
              <div class="bg1 wenzi">
                财
              </div>
              <p class="shuoming">财税服务</p>
            </a>
          </li>
          <li class="ph_coin">
            <a href="javascript:void(0)" class="icon_link" @click="chuan(4)">
              <div class="bg2 wenzi">
                创
              </div>
              <p class="shuoming">开公司</p>
            </a>
          </li>
          <li class="ph_coin">
            <a href="javascript:void(0)" class="icon_link"  @click="chuan(5)">
              <div class="bg3 wenzi">
                更
              </div>
              <p class="shuoming">公司变更</p>
            </a>
          </li>
          <li class="ph_coin">
            <a href="javascript:void(0)" class="icon_link" @click="chuan(6)">
              <div class="bg4 wenzi">
                社
              </div>
              <p class="shuoming" >个人社保</p>
            </a>
          </li>
          <li class="ph_coin">
            <a href="javascript:void(0)" class="icon_link"  @click="chuan(6)">
              <div class="bg5 wenzi">
                保
              </div>
              <p class="shuoming">公司社保</p>
            </a>
          </li>
          <li class="ph_coin">
            <a href="javascript:void(0)" class="icon_link" @click="chuan(1)">
              <div class="bg6 wenzi">
                代
              </div>
              <p class="shuoming">代理记账</p>
            </a>
          </li>
          <li class="ph_coin" @click="ifRow=!ifRow">
            <a href="javascript:void(0)" class="icon_link">
              <div class="bg7 wenzi">
                <Icon type="navicon-round"></Icon>
              </div>
              <p class="shuoming">全部服务</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="phone-containt">
        <p>知识产权</p>
        <span></span>
      </div>
      <Row>
        <Col span="24">
        <img src="../images/phone/u8037.png" width="98%">
        </Col>
      </Row>
      <div class="phone-containt">
        <p>初创企业</p>
        <span></span>
      </div>
      <div class="phone_business">
        <div class="stabus-containt">
          <ul class="clear">
            <li v-for="(mas,index) in dat">
              <a href="#/pagelist">
              <div class="img">
                 <img :src="imgsrcfront+mas.providerImg">
              </div>
                <h4>{{mas.providerName}}</h4>
                <p>{{mas.serviceInfo}}</p>
                <div>
                  <span>{{mas.price}}</span>{{mas.unit}}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="home_bottom">
        <img src="../images/logos/logo.png">
        <p>一站式企业交流中心</p>
      </div>
    </Col>
  </Row>
</template>

<script>
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
import { mapActions,mapGetters } from "vuex"

export default {
  name: 'home',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
      },
      da: [],
      dat: [],
      imgsrcfront: 'http://115.182.107.203:8088/xinda/pic',//图片地址前缀
      ifRow: false,//左侧菜单栏
    }
  },
  created() {
    let height = document.getElementsByClassName('wenzi');
    // console.log(height)
    for (let i = 0, l = height.length; i < l; i++) {
      height[i].style.lineHeight = height[i].offsetWidth + 'px';
      // console.log(height[i].offsetWidth)
    }

    let _this = this;
    //-------------相关推荐的数据获取
    this.ajax.post('/xinda-api/recommend/list', {}).then(function (data) {
      _this.da = data.data.data.hq;
    });
    this.ajax.post('/xinda-api/recommend/list', {}).then(function (data) {

      _this.dat = data.data.data.product;
      // console.log(_this.dat);
    });
    _this.user();
    //  console.log(this.getuser())
  },
  computed:{
    ...mapGetters(["getuser","getindexnum",'getbodywidth']),
  },
  methods: {
    ...mapActions(["user","setindexnum"]),
    chuan:function(index){
            let _this = this;
            _this.setindexnum(index);
            
            _this.$router.push({ path: 'listpage' });
            
    },
    chicked:function(){
      let _this = this;
       _this.$router.push({ path: 'pagelist' });
    }
  },
  watch:{
    getbodywidth(val){
      if(val<768){
        let height = document.getElementsByClassName('wenzi');
        for (let i = 0, l = height.length; i < l; i++) {
          height[i].style.lineHeight = height[i].offsetWidth + 'px';
        }
      }
    }
  }
}

</script>

<style scoped lang="less">
.fl {
  float: left;
}

.fr {
  float: right;
}

// 广告轮播
.advertisment {
  height: 400px;
  width: 100%;
  .swiper-container {
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    .swiper-pagination {
      width: 100%;
      height: 20px; // .swiper-pagination-bullet{
      //   width:12px;
      //   height: 12px;
      //   background: #ccc;
      // }
      // .swiper-pagination-bullet-active{
      //   width:12px;
      //   height: 12px;
      //   background: #333;
      // }
    }
  }
}

// 小标题的公共样式
.label {
  width: 100%;
  .lab-containt {
    width: 1200px;
    margin: 0 auto;
    height: 78px;
    border-bottom: 2px solid #2494d4;
    position: relative;
    margin-bottom: 47px;
    div {
      float: left;
      font-size: 16px;
      color: #2494d4;
      padding-top: 50px;
      padding-left: 6px;
      padding-right: 20px;
    }
    p {
      float: left;
      font-size: 16px;
      color: #000;
      padding-top: 50px;
      padding-left: 6px;
    }
    span {
      border: 6px solid transparent;
      border-bottom: 8px solid #2494d4;
      display: block;
      position: absolute;
      top: 64px;
      left: 35px;
    }
  }
}

// 明星产品推荐
.recommend {
  width: 100%;
  height: 420px;
  .mar18 {
    margin: 0 19px;
  }
  .recom-containt {
    width: 1200px;
    height: 420px;
    margin: 0 auto;
    ul {
      width: 100%;
      height: 420px;
      li {
        width: 270px;
        height: 400px;
        border: 1px solid #e8e8e8;
        margin: 0 19px;
        &:first-child {
          margin-left: 0;
          margin-right: 18px;
        }
        &:last-child {
          margin-right: 0;
          margin-left: 18px;
        }
        &:hover {
          box-shadow: 5px 5px 10px #83a3de;
          transform: translate3d(0px, -2px, 0px);
          transition-duration: 1s;
        }
        a {
          width: 254px;
          height: 382px;
          display: block;
          background: #fafafa;
          margin: 9px;
          text-align: center;
          position: relative;
          img {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            margin: 50px 65px 10px;
          }
          h4 {
            line-height: 60px;
            font-size: 16px;
          }
          p {
            line-height: 20px;
            font-size: 15px;
            color: #a0a0a0;
            margin-bottom: 20px;
          }
          div {
            position: absolute;
            top: 305px;
            left: 35%;
            span {
              font-size: 30px;
              color: #2494d4;
            }
          }
        }
      }
    }
  }
}

// 初创企业必备
.startbusiness {
  width: 100%;
  height: 460px;
  .stabus-containt {
    width: 1200px;
    margin: 0 auto;
    ul {
      width: 100%;
      li {
        width: 270px;
        height: 450px;
        border: 1px solid #e8e8e8;
        position: relative;
        margin: 0 19px;
        &:first-child {
          margin-left: 0;
          margin-right: 18px;
        }
        &:last-child {
          margin-right: 0;
          margin-left: 18px;
        }
        &:hover {
          box-shadow: 5px 5px 10px #83a3de;
          transform: translate3d(0px, -2px, 0px);
          transition-duration: 1s;
        }
        a {
          width: 254px;
          height: 450px;
          display: block;
          margin: 9px;
          text-align: center;
          img {
            width: 124px;
            height: 125px;
            margin: 30px 65px 10px;
          }
          h4 {
            line-height: 40px;
            font-size: 16px;
          }
          p {
            line-height: 30px;
            font-size: 14px;
            margin-bottom: 10px;
          }
          div {
            position: absolute;
            left: 35%;
            bottom: 100px;
            span {
              font-size: 30px;
              color: #2494d4;
              padding-right: 10px;
            }
          }
          button {
            top: 370px;
            left: 60px;
            width: 160px;
            height: 48px;
            border-radius: 6px;
            position: absolute;
            border: 1px solid #2494d4;
            color: #2494d4;
            background: #fff;
          }
        }
      }
    }
  }
}

// 知识产权
.intellproperty {
  width: 100%;
  height: 660px;
  .intprop-containt {
    width: 1200px;
    height: 660px;
    margin: 0 auto;
    .image1 {
      width: 326px;
      height: 485px;
      margin-bottom: 10px;
    }
    .image2 {
      width: 415px;
      height: 240px;
      margin: 0 17px 10px;
    }
    .image3 {
      width: 415px;
      height: 240px;
      margin: 0 0 10px 10px;
    }
    .image4 {
      width: 855px;
      height: 240px;
      margin: 10px 0 0 18px;
    }
    .image5 {
      width: 100%;
    }
  }
}

// 推荐服务商
.providers {
  width: 100%;
  height: 460px;
  .prov-containt {
    width: 1200px;
    margin: 0 auto;
    .padbot {
      margin-top: 20px;
    }
    .fz15 {
      font-size: 16px;
    }
    .fz18 {
      font-size: 17px;
    }
    ul {
      width: 100%;
      li {
        width: 270px;
        height: 455px;
        border: 1px solid #e8e8e8;
        margin: 0 19px;
        &:first-child {
          margin-left: 0;
          margin-right: 18px;
        }
        &:last-child {
          margin-right: 0;
          margin-left: 18px;
        }
        &:hover {
          box-shadow: 5px 5px 10px #83a3de;
          transform: translate3d(0px, -2px, 0px);
          transition-duration: 1s;
        }
        a {
          width: 254px;
          height: 435px;
          display: block;
          margin: 9px;
          text-align: center;
          img {
            width: 124px;
            height: 125px;
            margin: 50px 65px 10px;
          }
          h4 {
            line-height: 40px;
            font-size: 18px;
          }
          p {
            line-height: 25px;
          }
          button {
            width: 120px;
            margin: 0 4px 15px 3px;
            border-radius: 6px;
            height: 40px;
            color: #000;
            background: #ffebb6;
          }
        }
      }
    }
  }
}

// 合作伙伴
.partner {
  width: 100%;
  height: 200px;
  .partner-containt {
    width: 1200px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}

// 以下为手机端样式
@media screen and (max-width:768px){
	#phone,{
		font-size:50px;
	}
}
@media screen and (max-width:768px){
	#iphone,{
		font-size:12px;
	}
}
.phone_head {
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #e8e8e8;
  .ph_head_left {
    text-align: center;
    font-size: 35%;
    line-height: 70px;
  }
  .ph_head_right {
    text-align: center;
    h1 {
      width: 140px;
      height: 60px;
      font-size: 65%;
      margin: 0 25%;
      line-height: 70px;
      padding-left: 60px;
      background: url(../images/logos/xinda-logo.png) no-repeat left 3px;
    }
  }
}

.swiper-container_phone {
  width: 100%;
  height: 250px;
  .swiper-pagination {
    width: 100%;
    height: 20px;
  }
}

//手机小图标
.phone_coin {
  width: 100%;
  display: block;
  .bg1 {
    background-color: #79c4fd;
  }
  .bg2 {
    background-color: #fd7879;
  }
  .bg3 {
    background-color: #ba73fd;
  }
  .bg4 {
    background-color: #79a0fb;
  }
  .bg5 {
    background-color: #fba479;
  }
  .bg6 {
    background-color: #53ff8f;
  }
  .bg7 {
    background-color: #737cff;
  }
  .phone_con {
    width: 100%;
    .ph_coin {
      height: 50%;
      width: 15%;
      float: left;
      margin: 5% 5% 0;
      .icon_link {
        width: 100%;
        height: 100%;
        .wenzi {
          width: 100%;
          text-align: center;
          border-radius: 10px;
          color: #fff;
          font-size: 280%;
        }
        .shuoming {
          text-align: center;
          font-size: 100%;
          line-height: 250%;
        }
      }
    }
  }
}

// 手机端小标题公共样式
.phone-containt {
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #2494d4;
  position: relative;
  margin-bottom: 10px;
  p {
    float: left;
    font-size: 10%;
    position: absolute;
    color: #000;
    top: 55%;
    left: 7%;
  }
  span {
    border: 6px solid transparent;
    border-bottom: 8px solid #2494d4;
    display: block;
    position: absolute;
    top: 75%;
    left: 12%;
  }
}

.phone_business {
  width: 100%;
  .stabus-containt {
    width: 100%;
    ul {
      width: 100%;
      li {
        width: 98%;
        margin: 0 auto;
        border-bottom: 1px solid #e8e8e8;
        a {
          width: 95%;
          height: 180px;
          display: block;
          .img {
            float: left;
            width: 25%;
            height: 60%;
            margin: 5% 0 5% 3%;
            border: 1px solid #e8e8e8;
            position: relative;
            img{
              width:100%;
              position: absolute;
              top:30%;
            }
          }
          h4 {
            line-height: 300%;
            font-size: 15px;
            float: left;
            margin-left: 10%;
          }
          p {
            line-height: 25px;
            width: 60%;
            float: right;
            font-size: 100%;
          }
          div {
            float: right;
            width: 60%;
            span {
              font-size: 230%;
              color: #fe1415;
              padding-right: 10px;
            }
          }
        }
      }
    }
  }
}

.home_bottom {
  width: 100%;
  height: auto;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 100px;
  p {
    width: 100%;
    color: #aeaeae;
    font-size: 16px;
  }
}

.phone_list {
  position: absolute;
  z-index: 99;
  width: 100%;
  top: 100%;
  left: 0;
}




//过渡动画
.ifrows {
  z-index: 9999;
}
.ifrow-enter-active {
  transition: all .3s ease;
}
.ifrow-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.ifrow-enter, .ifrow-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>
