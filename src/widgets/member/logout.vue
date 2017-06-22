<template>
<Row id ='logged'>
    <Col id="dd" style="background: #f5f5f5;" span="24">
        <div class="logged">
            <img src="/static/img/huiyuan.cad76df.png"/>
        </div>
        <div class="username">
            <button class="reg" @click="href(1)">注册</button>
            <button class="reg" @click="href(2)">登录</button>
        </div>
        <div class="myorder">
            <div class="mse">
                <img src="../../images/logos/110-2.jpg"/>
                <a>我的订单</a>
                <span>＞</span>
            </div>
        </div>
        <div class="myorder">
            <div class="mse">
                <img src="../../images/logos/1231.jpg"/>
                <span>＞</span>
            </div>
        </div>
    </Col>
</Row>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  created(){
      setTimeout(function(){
            document.getElementById('logged').style.height = window.screen.height + 'px';
            document.getElementById('logged').style.background = '#f6f6f6';
    },0)
  },
  computed:{
         ...mapGetters(['getuser'])
  },
  methods:{
      href(i){
          switch(i){
              case 1:
                this.$router.push({path:'/action/register'});
                break;
              case 2:
                this.$router.push({path:'/action/login'});
                break;
          }
      }
  }
}
</script>
<style scoped lang="less">
.logged{
    height: 150px;
    background: #f5f5f5;
    text-align: center;
    line-height: 284px;
    img{
        height: 80px;
        width: 80px;
    }
}
.username{
    text-align: center;
    background: #f5f5f5;
    margin-top: 20px;
    .reg{
        color: #fff;
        background-color: #2d8cf0;
        border-radius: 7px;
        padding:4px 20px;
        margin:0 15px 50px;
    }
}
.myorder{
    height: 50px;
    background: #f5f5f5;
    margin-top: 20px;
    .mse{
        background: #e9e9e9;
        width: 290px;
        height: 29px;
        margin: 0 auto;
        position: relative;
        img{
            width: 15px;
            height:15px;
            position: absolute;
            top:50%;
            left: 5%;
            transform: translate(-50%,-50%)
        }
        a{
            color: #9d9b9a;
            margin-left: 30px;
            line-height: 29px;
        }
        span{
            margin-left: 57%;
        }
    }
}
</style>
