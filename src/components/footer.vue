<template>
  <div>
    <div class="tail">
      <div class="aboutus clear">
        <div class="ab-left fl">
          <p class="title">关于我们</p>
          <p class="containt">联系我们：contact@xinkeher.com</p>
          <p class="containt">公司地址：北京市朝阳区大望路soho现代城</p>
          <p class="containt">官方客服电话：010-83421842</p>
        </div>
        <div class="ab-right fr">
          <img src="../images/index/u265.png" class="fl">
          <div class="fl wenzi">
            <p>扫描二维码</p>
            <span>关注我们</span>
          </div>
        </div>
      </div>
    </div>
    <!--<p>这是尾部</p>-->
  </div>
</template>

<script>
export default {
  name: 'myfoot'
}
</script>

<style lang="less" scoped>
.fl{
  float: left;
}
.fr{
  float: right;
}
  .tail{
    width:100%;
    height:200px;
    background-color: #f8f8f8;
    .aboutus{
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      color:#000;
      .ab-left{
        width: 700px;
        height: 100%;
        .title{
          color:#000;
          padding: 35px 0;
          font-size: 16px;
        }
        .containt{
          color:#BCBCBC;
          font-size: 14px;
          line-height: 22px;
        }
      }
      .ab-right{
        width: 330px;
        height: 80%;
        padding-top: 50px;
        .wenzi{
          width: 150px;
          height: 100%;
          color:#BCBCBC;
          font-size: 15px;
          line-height: 28px;
          p{
            padding-top: 50px;
          }
        }
      }
    }
  }
</style>
