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
              <div><span>{{massage.price}}</span>{{massage.unit}}</div>
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
              <div><span>{{mas.price}}</span>{{mas.unit}}</div>
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
  <Col :xs="{ span: 24}" :sm="{ span: 0}">
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
  <Col :xs="{ span: 24}" :sm="{ span: 0}">
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
    <div class="phone_coin">
      <ul>
        <li>
          <a href="javascript:void(0)">
            <div class="bg1">
              财
            </div>
            <p>财税服务</p>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="bg2">
            创
            </div>
            <p>开公司</p>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="bg3">
            更
            </div>
            <p>公司变更</p>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="bg4">
            社
            </div>
            <p>个人社保</p>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="bg5">
            保
            </div>
            <p>公司社保</p>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="bg6">
            专
            </div>
            <p>知识产权</p>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <div class="bg7">
              <Icon type="navicon-round"></Icon>
            </div>
            <p>全部服务</p>
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
              <img :src="imgsrcfront+mas.providerImg">
              <h4>{{mas.providerName}}</h4>
              <p>{{mas.serviceInfo}}</p>
              <div><span>{{mas.price}}</span>{{mas.unit}}</div>
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
import{
  swiper,
  swiperSlide
}from 'vue-awesome-swiper'
import {mapActions} from "vuex" 
import {mapGetters} from "vuex"
 export default {
   name: 'home',
   components: {
     swiper,
     swiperSlide
   },
   data(){
     return{
       swiperOption: {
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true
      },
      da:[],
      dat:[],
      imgsrcfront:'http://115.182.107.203:8088/xinda/pic',//图片地址前缀
    }
  },
  created(){
    let _this = this;
    //-------------相关推荐的数据获取
     this.ajax.post('/xinda-api/recommend/list',{}).then(function(data) {
       _this.da = data.data.data.hq;
     });
     this.ajax.post('/xinda-api/recommend/list',{}).then(function(data) {

       _this.dat = data.data.data.product;
      // console.log(_this.dat);
     });
     _this.user();
    //  console.log(this.getuser())
   },
   methods:{
      ...mapActions(["user"]),
       ...mapGetters(["getuser"])
   }
 }

</script>

<style scoped lang="less">
.fl{
  float: left;
}
.fr{
  float: right;
}
// 广告轮播
.advertisment {
  height: 400px;
  width:100%;
  .swiper-container{
    width:1200px;
    height: 400px;
    margin: 0 auto;
    .swiper-pagination{
      width:100%;
      height: 20px;
      // .swiper-pagination-bullet{
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
.label{
  width:100%;
  .lab-containt{
    width:1200px;
    margin: 0 auto;
    height: 78px;
    border-bottom: 2px solid #2494d4;
    position: relative;
    margin-bottom: 47px;
    div{
      float:left;
      font-size: 16px;
      color:#2494d4;
      padding-top: 50px;
      padding-left: 6px;
      padding-right: 20px;
    }
    p{
      float:left;
      font-size: 16px;
      color:#000;
      padding-top: 50px;
      padding-left: 6px;
    }
    span{
      border: 6px solid transparent;
      border-bottom: 8px solid #2494d4;
      display:block;
      position: absolute;
      top:64px;
      left: 35px;
    }
  }
}
// 明星产品推荐
.recommend{
  width:100%;
  height: 420px;
  .mar18{
    margin: 0 19px;
  }
  .recom-containt{
    width: 1200px;
    height: 420px;
    margin:0 auto;
    ul{
      width: 100%;
      height: 420px;
      li{
        width: 270px;
        height: 400px;
        border: 1px solid #e8e8e8;
        margin: 0 19px;
        &:first-child{
          margin-left: 0;
          margin-right: 18px;
        }
        &:last-child{
          margin-right: 0;
          margin-left: 18px;
        }
        &:hover{
						box-shadow:5px 5px 10px #83a3de;
						transform:translate3d(0px,-2px,0px);
						transition-duration:1s;
				 }
        a{
          width: 254px;
          height: 382px;
          display: block;
          background: #fafafa;
          margin: 9px;
          text-align: center;
          position: relative;
          img{
            width: 110px;
            height: 110px;
            border-radius:50%;
            margin: 50px 65px 10px;
          }
          h4{
            line-height: 60px;
          }
          p{
            line-height: 20px;
            font-size: 15px;
            color: #a0a0a0;
            margin-bottom: 20px;
          }
          div{
            position: absolute;
            top:305px;
            left:35%;
            span{
              font-size: 30px;
              color:#2494d4;
            }
          }
        }
      }
    }
  }
}
// 初创企业必备
.startbusiness{
  width:100%;
  height: 460px;
  .stabus-containt{
    width: 1200px;
    margin:0 auto;
    ul{
      width: 100%;
      li{
        width: 270px;
        height: 450px;
        border: 1px solid #e8e8e8;
        position: relative;
        margin: 0 19px;
        &:first-child{
          margin-left: 0;
          margin-right: 18px;
        }
        &:last-child{
          margin-right: 0;
          margin-left: 18px;
        }
        &:hover{
						box-shadow:5px 5px 10px #83a3de;
						transform:translate3d(0px,-2px,0px);
						transition-duration:1s;
				 }
        a{
          width: 254px;
          height: 450px;
          display: block;
          margin: 9px;
          text-align: center;
          img{
            width: 124px;
            height: 125px;
          margin: 30px 65px 10px;
          }
          h4{
            line-height: 40px;
          }
          p{
            line-height: 30px;
            font-size: 14px;
            margin-bottom: 10px;
          }
          div{
            position: absolute;
            left:35%;
            bottom:100px;
            span{
              font-size: 30px;
              color:#2494d4;
              padding-right: 10px;
            }
          }
          button{
            top: 370px;
            left:60px;
            width: 160px;
            height: 48px;
            border-radius:6px;
            position: absolute;
            border:1px solid #2494d4;
            color: #2494d4;
            background: #fff;
          }
        }
      }
    }
  }
}
// 知识产权
.intellproperty{
  width:100%;
  height: 660px;
  .intprop-containt{
    width:1200px;
    height: 660px;
    margin:0 auto;
    .image1{
      width:326px;
      height: 485px;
      margin-bottom: 10px;
    }
    .image2{
      width:415px;
      height: 240px;
      margin: 0 17px 10px;
    }
    .image3{
      width:415px;
      height: 240px;
      margin: 0 0 10px 10px;
    }
    .image4{
      width: 855px;
      height: 240px;
      margin: 10px 0 0 18px;
    }
    .image5{
      width: 100%;
    }
  }
}
// 推荐服务商
.providers{
  width:100%;
  height: 460px;
  .prov-containt{
    width: 1200px;
    margin:0 auto;
    .padbot{
      margin-top: 20px;
    }
    .fz15{
      font-size: 16px;
    }
    .fz18{
      font-size: 17px;
    }
    ul{
      width: 100%;
      li{
        width: 270px;
        height: 455px;
        border: 1px solid #e8e8e8;
        margin: 0 19px;
        &:first-child{
          margin-left: 0;
          margin-right: 18px;
        }
        &:last-child{
          margin-right: 0;
          margin-left: 18px;
        }
        &:hover{
						box-shadow:5px 5px 10px #83a3de;
						transform:translate3d(0px,-2px,0px);
						transition-duration:1s;
				 }
        a{
          width: 254px;
          height: 435px;
          display: block;
          margin: 9px;
          text-align: center;
          img{
            width: 124px;
            height: 125px;
            margin: 50px 65px 10px;
          }
          h4{
            line-height: 40px;
            font-size: 18px;
          }
          p{
            line-height: 25px;
          }
          button{
            width: 120px;
            margin: 0 4px 15px 3px;
            border-radius:6px;
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
.partner{
  width:100%;
  height: 200px;
  .partner-containt{
    width:1200px;
    margin: 0 auto;
    img{
      width:100%;
    }
  }
}
// 以下为手机端样式
.phone_head{
    width: 100%;
    height: 72px;
    .ph_head_left{
        text-align: center;
        font-size: 20px;
        line-height: 70px; 
    }
    .ph_head_right{
        text-align: center;
        h1 {
            width: 140px;
            height: 60px;
            font-size: 35px;
            margin: 0 25%;
            line-height: 70px;
            padding-left: 60px;
            background: url(../images/logos/xinda-logo.png) no-repeat left 3px;
        }
    }
}
.swiper-container_phone{
    width:100%;
    height: 250px;
    .swiper-pagination{
      width:100%;
      height: 20px;
    }
}
.phone_coin{
  width:100%;
  height: 280px;
  .bg1{
    background-color: #79c4fd;
  }
  .bg2{
    background-color: #fd7879;
  }
  .bg3{
    background-color: #ba73fd;
  }
  .bg4{
    background-color: #79a0fb;
  }
  .bg5{
    background-color: #fba479;
  }
  .bg6{
    background-color: #53ff8f;
  }
  .bg7{
    background-color: #737cff;
  }
  ul{
    width:100%;
    li{
      height: 110px;
      width: 15%;
      float: left;
      margin: 5% 5% 0;
      a{
        width: 100%;
        height: 100%;
        div{
          width: 100%;
          height: 80%;
          line-height: 90px;
          text-align: center;
          border-radius: 20px;
          color:#fff;
          font-size:40px;
        }
        P{
          text-align: center;
          font-size: 17px;
          line-height: 21px;
        }
      } 
    }
  }
}
// 手机端小标题公共样式
.phone-containt{
    width:100%;
    height: 50px;
    border-bottom: 2px solid #2494d4;
    position: relative;
    margin-bottom: 10px;
    p{
      float:left;
      font-size: 16px;
      position: absolute;
      color:#000;
      top: 20px;
      left: 15px;
    }
    span{
      border: 6px solid transparent;
      border-bottom: 8px solid #2494d4;
      display:block;
      position: absolute;
      top:36px;
      left: 40px;
    }
  }
.phone_business{
  width:100%;
  .stabus-containt{
    width: 100%;
    ul{
      width: 100%;
      li{
        width: 98%;
        margin: 0 auto;
        height: 200px;
        border-bottom: 1px solid #e8e8e8;
        a{
          width: 95%;
          height: 200px;
          display: block;
          img{
            float: left;
            width: 25%;
            height: 60%;
            margin:5% 0 5% 3%;
            border: 1px solid #e8e8e8;
          }
          h4{
            line-height: 60px;
            font-size: 16px;
            float: left;
            margin-left: 10%;
          }
          p{
            line-height: 25px;
            width: 60%;
            float: right;
            font-size: 14px;
          }
          div{
            float: right;
            width: 60%;
            span{
              font-size: 30px;
              color:#fe1415;
              padding-right: 10px;
            }
          }
        }
      }
    }
  }
}
.home_bottom{
  width:100%;
 height: auto;
 text-align: center;
 padding-top: 30px;
 padding-bottom: 100px;
 p{
   width: 100%;
   color: #aeaeae;
   font-size: 16px;
 }
}
</style>
