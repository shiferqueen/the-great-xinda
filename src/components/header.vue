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
            <li><a href="#/Home" class="blue-border">全部产品</a></li>
            <li><a href="">财税服务</a></li>
            <li><a href="">公司工商</a></li>
            <li><a href="">加盟我们</a></li>
            <li><a href="">店铺</a></li>
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
           font-size:14px;
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
         a{
           font-size: 18px;
           text-align: center;
           width:80px;
           display: block;
           padding-bottom:10px;
           color: #333;
           margin: 0 60px; 
           &:hover{
             .blue;
           }
         }
       }
     }
    }
  }
}
</style>
