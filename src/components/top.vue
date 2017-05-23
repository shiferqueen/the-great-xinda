<template>
  <div>
    <div class="top-welcome">
      <div class="top-containter">
        <span id="user-phonenum"></span>
        <p class="fl">欢迎来到信达!</p>
        <p class="fl" v-show=false>【退出】</p>
        <span class="fl"><a href="" class="blue">登录</a></span>
        <span class="fl"><a href="" class="blue">快速注册</a></span>
        <span class="fr"><a href="" class="blue">服务商入口</a></span>
        <span v-show=false class="fr top-myorder"><a href="">我的订单</a></span> 
        <a href="##" class="fr top-shoppingcar">购物车<span class="marg0">0</span>件</a>       
      </div>
    </div>
    <!--<p>这是顶部<a href="#/action/register">请注册</a></p>-->
  </div>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style lang="less" scoped>
.fl{
  float: left;
}
.fr{
  float: right;
}
.marg0{
  margin: 0!important;
  padding:0!important;
}
.blue{
  color:#2494d4!important;
}
.top-welcome{
  width: 100%;
  height: 35px;
  background-color: #f2f2f2;
  .top-containter{
    width: 1200px;
    height: 35px;
    margin:0 auto;
    font-size: 14px;
    line-height: 35px;
    p{
      color:#2b2b2b;
    }
    span{
      .blue;
      padding-left:19px;
      cursor: pointer;
    }
    #user-phonenum{
      margin-right: 15px;
    }
    .top-myorder{
      background: url(../images/index/u619.png) no-repeat left 4px;
      margin-left: 15px;
    }
    .top-shoppingcar{
      padding-left:26px;
      background: url(../images/index/u607.png) no-repeat left 6px;
    }
  }
}
</style>
