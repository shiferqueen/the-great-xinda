<template>
<Row>
    <Col id="dd" style="background: #f5f5f5;" span="24">
        <div class="logged">
            <img src="/static/img/huiyuan.cad76df.png"/>
        </div>
        <div class="username">
            <p>小明明</p>
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
                <a>账户设置</a>
                <span>＞</span>
            </div>
        </div>
        <div class="exit">
            <button>退出登录</button>
        </div>
    </Col>
</Row>
</template>

<script>
export default {
  created(){
      document.body.style.background ='#f5f5f5';
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
.exit{
    height: 230px;
    text-align: center;
    button{
        background: #169bd5;
        width: 290px;
        height: 35px;
        color: #fff;
        border-radius: 5px;
        margin-top: 15px;
    }
}
</style>
