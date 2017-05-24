<template>
  <div>
    <div class="header">
      <div class="header-containter">
        <div class="hdcon-top">
          <div class="hdcon-top-l fl">
              <h1 class="fl">信达</h1>
              <p class="fr">北京市</p>
              <a href="" class="fr">[切换城市]</a>
          </div>
          <div class="hdcon-top-m fl">
            <a href="" class="blue goods fl">产品</a>
            <a href="" class="server fl">服务商</a>
            <input type="text" placeholder="搜索您需要的服务或服务商" class="fl">
            <button class="fl">搜索</button>
            <span class="fl">热门服务：</span>
            <span class="fl hand">社保开户</span>
            <span class="fl hand">公司注册</span>
          </div>
          <div class="hdcon-top-r fr">
            <span>010-83421842</span>
          </div>
        </div>
        <div class="hdcon-bot">
          <ul class="clear">
            <li>
              <a href="#/home" class="blue-border loader" id="all-produce">全部产品</a>
              <!----多级列表------>
              <div class="allproduces" id="allproduces">
                <div class="addpro-left">
                    <div class="addpro-list" id="add-l1">
                      <img src="../images/index/u283.png" class="fl">
                      <div class="fl addpro-li" >
                        <p class="p1">财税服务</p>
                        <span class="span1">代理记账</span>
                        <span class="span1">税务代办</span>
                        <span class="span1">审计报告</span>
                        <div id="add-r1" class="addpro-right">
                            <p>
                              <span>代理记账  ></span>
                              <a href="">小规模记账</a>
                              <a href="">一般纳税人记录</a>
                            </p><br><br>
                            <p>
                              <span>税务代办  ></span>
                              <a href="">国税地税报道</a>
                              <a href="">代开增值税专用发票</a>
                              <a href="">所得税汇算清缴</a>
                              <a href="">一般纳税人资质申办</a>
                            </p><br><br>
                            <p>
                              <span>审计报告  ></span>
                              <a href="">验资报告</a>
                              <a href="">财务审计报告</a>
                              <a href="">税审报告</a>
                              <a href="">企业注销清算报告</a>
                            </p>
                        </div>
                      </div>
                    </div>
                    <div class="addpro-list" id="add-l2">
                      <img src="../images/index/u293.png" class="fl">
                      <div class="fl addpro-li">
                        <p class="p1">公司工商</p>
                        <span class="span1">公司注册</span>
                        <span class="span1">公司变更</span>
                        <div id="add-r2" class="addpro-right">
                            <p>
                              <span>公司注册  ></span>
                              <a href="">分公司注册</a>
                              <a href="">合伙企业注册</a>
                              <a href="">外商独资公司</a>
                              <a href="">VIE架构</a>
                              <a href="">股份公司注册</a>
                              <a href="">有限责任公司注册</a>
                              <a href="">一般纳税人注册地址</a>
                            </p><br><br>
                            <p>
                              <span>公司变更  ></span>
                              <a href="">公司股权变更</a>
                              <a href="">公司名称变更</a>
                              <a href="">公司注册地址变更</a>
                              <a href="">内资公司注销</a>
                              <a href="">法人、高管或注册资本变更</a>
                              <a href="">公司经营范围变更</a>
                            </p>
                        </div>
                      </div>
                    </div>
                    <div class="addpro-list" id="add-l3">
                      <img src="../images/index/u293.png" class="fl">
                      <div class="fl addpro-li">
                        <p class="p1">知识产权</p>
                        <span class="span1">专利申请</span>
                        <span class="span1">商标注册</span>
                        <span class="span1">版权保护</span>
                        <div id="add-r3" class="addpro-right">
                            <p>
                              <span>专利申请  ></span>
                              <a href="">审查意见答复</a>
                              <a href="">外观专利减缓（共同申请）</a>
                              <a href="">发明不减缓</a>
                              <a href="">发明减缓（个人）</a>
                              <a href="">实用新型专利减缓</a>
                              <a href="">专利申请复审</a>
                              <a href="">外观设计专利（不减缓）</a>
                              <a href="">办理实用新型检索报告</a>
                              <a href="">实用新型专利</a>
                              <a href="">外观专利减缓</a>
                              <a href="">实用新型专科减缓（共同申请）</a>
                            </p><br><br>
                            <p>
                              <span>商标注册  ></span>
                              <a href="">LOGO设计+商标注册</a>
                              <a href="">商标变更</a>
                              <a href="">商标续展</a>
                              <a href="">商标驳回复审</a>
                              <a href="">商标快速注册</a>
                              <a href="">著名商标认定</a>
                            </p><br><br>
                            <p>
                              <span>版权保护  ></span>
                              <a href="">电视剧作品登记</a>
                              <a href="">美术著作权</a>
                              <a href="">软件著作权</a>
                              <a href="">音乐作品</a>
                            </p>
                        </div>
                      </div>
                    </div>
                    <div class="addpro-list" id="add-l4">
                      <img src="../images/index/u311.png" class="fl">
                      <div class="fl addpro-li">
                        <p class="p1">社保办理</p>
                        <span class="span1">企业社保</span>
                        <span class="span1">个人社保</span>
                        <div id="add-r4" class="addpro-right">
                            <p>
                              <span>企业社保  ></span>
                              <a href="">社保/公积金账户注销</a>
                              <a href="">社保开户</a>
                              <a href="">社会公积金代缴</a>
                              <a href="">公积金开户</a>
                            </p><br><br>
                            <p>
                              <span>个人社保  ></span>
                              <a href="">个人社保代理</a>
                              <a href="">个人代理社保和公积金</a>
                              <a href="">新参保（个人）</a>
                              <a href="">个人代理公积金</a>
                            </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </li>
            <li><a href="#/listpage" class="loader">财税服务</a></li>
            <li><a href="#/listpage" class="loader">公司工商</a></li>
            <li><a href="#/us" class="loader">加盟我们</a></li>
            <li><a href="#/shoplist" class="loader">店铺</a></li>
          </ul>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myhead'
}
</script>

<style lang="less" scoped>
.fl{
  float: left;
}
.fr{
  float: right;
}
.blue{
  color:#2494d4!important;
}
.blue-border{
  color:#2494d4!important;
  border-bottom:2px solid #2494d4; 
}
.hand{
  cursor:pointer;
}
.header{
  width:100%;
  height: 150px;
  border-bottom: 1px solid #2494d4;
  .header-containter{
     width:1200px;
     height: 150px;
     margin: 0 auto;
     .hdcon-top{
       height: 110px;
       width:100%;
       .hdcon-top-l{
         width:320px;
         height: 60px;
         margin-top: 30px;
         h1{
           width:80px;
           height: 60px;
           font-size:30px;
           line-height: 65px;
           padding-left:70px;
           background:  url(../images/logos/xinda-logo.png) no-repeat left 4px;
         }
         p{
           margin-top: 18px;
           font-size: 13px;
           padding-left:10px;
           padding-right:117px;
         }
         a{
           margin-top: 5px;
           padding-right:100px;
           font-size: 14px;
           .blue;
         }
       }
     .hdcon-top-m{
         width:590px;
         margin-top: 25px;
         .goods{
           border-right:1px solid #2494d4;
           padding-right:10px;
           font-size: 14px; 
         }
         .server{
           padding-left:10px; 
           font-size: 14px;
           margin-right:20px;
         }
         input{
           width:81%;
           padding: 0 0 0 2%;
           height: 40px;
           font-size: 15px;
           border:2px solid #2494d4;
           margin-top:5px;
         }
         button{
           margin-top:5px; 
           width:16%;
           height: 44px;
           background-color: #2494d4;
           text-align: center;
           line-height: 33px;
           font-size: 15px;
           color:#fff;
         }
         span{
           font-size:13px;
           line-height: 21px;
           color: #c7c7c7;
           padding: 0 5px;
         }
     }
     .hdcon-top-r{
         width:147px;
         height: 80px;
         margin-top: 25px;
         span{
           width:109px;
           padding-left:38px; 
           display: block;
           height:80px;
           line-height:80px;
           color: #a3a3a3;
           font-size: 15px;
           background: url(../images/index/u649.png) no-repeat left center;
           font-weight: bold;
         }
     }
   }
   .hdcon-bot{
     width:100%;
     
     ul{
       width:100%;
       li{
         .fl;
         position: relative;
         &:hover{
           .allproduces{
              display: block;
              
            }
         }
         >div{
           z-index: 999;
           display: none;
         }
         .loader{
           font-size: 18px;
           text-align: center;
           padding: 5px 0;
           width:80px;
           display: block;
           color: #333;
           margin: 0 60px; 
           &:hover{
             .blue;
           }
         }
        .allproduces{
          position: absolute;
          left:0;
          top:37px;
          width:100%;
          height: 400px;
          .addpro-left{
            float: left;
            width:200px;
            height: 400px;
            .addpro-list{
              width:100%;
              height: 25%;
              display: block;
              background:rgba(169, 169, 169, 1);
              cursor: pointer;
              color: #fff;
              img{
                width:35px;
                height: 35px;
                padding-left: 5px;
                }
              .addpro-li{
                width:160px;
                height: 100%;
                position: relative;
                &:hover{
                  .addpro-right{
                    display: block;
                    z-index: 999;
                  }
                }
                .p1{
                  height: 40px;
                  line-height: 40px;
                  margin:0 10px;
                  font-size: 17px;
                 }
                .span1{
                   float:left;
                  font-size: 15px;
                  padding:5px 5px 0px 5px;
                }
                .addpro-right{
                  display: none;
                  position: absolute;
                  width:1000px;
                  background: #ccc;
                  height: 100px;
                  top:0px;
                  left:160px;
                  opacity: 0.7;
                  color: #fff;
                  p{
                    width:98%;
                   
                    line-height: 19px;
                    padding:0% 0 0 1%;
                      span{
                         float:left;
                          font-size: 15px;
                          margin: 3px 2px;
                          padding: 0px 10px 0 5px;
                          border-left: 2px solid #2494d4;
                        }
                      a{
                        float:left;
                        color: #fff;
                        margin: 2px 0;
                        padding: 0px 10px;
                        border-left: 1px solid #fff;
                        font-size: 15px;
                      }
                  }
                }
              } 
            }
          }
        }
       }
     }
    }
  }
}

</style>
