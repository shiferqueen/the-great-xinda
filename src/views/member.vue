<template>
  <Row class="main">
    <Col :xs="0" :sm="24">
        <p>首页/公司工商</p>
    </Col>
    <div class="person_main">
        <Col :xs="0" :sm="24" class="container">
            <Col class="xx_1">
                <img src="../images/logos/huiyuan.png"/>
                <span>{{getuser}}</span>
            </Col>
            <Col class="xx_2">
                <router-link to="/member" active-class="active" exact>
                    <li class="xx_3">
                        <img src="../images/logos/110-2.jpg"/>
                        <span><a>我的订单</a></span>
                    </li>
                </router-link>
                <router-link to="/member/evaluation" active-class="active">
                    <li class="xx_4">
                        <img src="../images/logos/111-1.jpg"/>
                        <span><a>用户评价</a></span> 
                    </li>
                </router-link>
                <router-link to="/member/setaccount" active-class="active">
                    <li class="xx_5">
                        <img src="../images/logos/1231.jpg"/>
                        <span><a>账户设置</a></span> 
                    </li>
                </router-link>
            </Col>
        </Col>
        <router-view></router-view>
    </div> 
  </Row>
</template>
<script>
 import {mapGetters} from 'vuex'
export default {
  data() {
    return{
    }
  },
   computed:{
         ...mapGetters(['getuser'])
  },

}
</script>
<style scoped lang="less">
.active{
    background: #e9e9e9;
    display: block;
    }
   .main{
       margin: 0 auto;
       &:after{
           content:'';
           display:block;
           clear:both;
       }
       p{
           font-size: 14px;
           color: #252525;
           margin-top: 25px;
           width: 90px;
           margin-left: 15%;
       }
   }
       .container{
           width: 242px;
           height: 551px;
           float: left;
           margin-left: 15%;
           &:after{
               content:'';
               display:block;
               clear:both;
           }
           .xx_1{
               width: 242px;
               height: 141px;
               background-color: #e9e9e9;
               img{
                   margin-top: 9px;
                   margin-left: 70px;
               }span{
                   display: block;
                   text-align: center;
               }
           }
           .xx_2{
               margin-top: 9px;
               width: 242px;
               height: 376px;
               overflow: hidden;
               background-color: #f7f7f7;
               li{
                   width: 242px;
                   height: 50px;
                   img{
                       vertical-align: middle;
                   }
                   a{
                       color: black;
                   }
                   span{
                       font-size: 18px;
                       line-height: 50px;
                       padding-left: 12px;
                   }
               }
               .xx_3{
                   text-align: center;
               }
               .xx_4{
                   text-align: center;
               }
               .xx_5{
                   text-align: center;
               }
               
           }
       }
   li{list-style: none;}
   a{text-decoration: none;}
</style>
