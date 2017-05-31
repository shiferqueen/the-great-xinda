<template>
  <div>

    <div class="top-welcome">
      <div class="top-containter">
        <span class="fl pdr" v-if="status==1">{{username}}</span>
        <p class="fl">欢迎来到信达!</p>
        <p class="fl cr" v-if="status==1"  @click="logout()">【退出】</p>
        <span class="fl">
          <a href="#/action/login" class="blue" v-if="status!=1">登录</a>
        </span>
        <span class="fl">
          <a href="#/action/register" class="blue" v-if="status!=1">快速注册</a>
        </span>
        <span class="fr">
          <a href="#/shopfront" class="blue">服务商入口</a>
        </span>
        <span v-show=true class="fr top-myorder">
          <a href="#/member" v-if="status==1">我的订单</a>
        </span>
        <a href="#/shopping" class="fr top-shoppingcar">购物车
          <span class="marg0">{{getCartNum}} </span>件</a>
      </div>
    </div>
  </div>
</template>

<script>
 import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'top',
  created(){
      this.refCartNum();
  },
  data() {
    return{
      sum:0,
      status:'',//登录状态
      username:'',//会员账号
    }
  },
  methods:{
    ...mapActions(['refCartNum'])
  },
   computed:{
         ...mapGetters(['getCartNum'])
  },
  created(){
      let _this = this;
      this.ajax.post("/xinda-api/sso/login-info").then(function(res){//获取登录信息
          console.log(res.data);
           _this.status=res.data.status;
           _this.username=res.data.data.name;
      }) 
  },
  methods: {
    logout(){
        let _this = this;
        this.ajax.post("/xinda-api/sso/logout").then(function(res){//退出登录信息
        console.log(res.data);
        if(res.data.status==1){
              _this.status=0;
          }else{
              _this.status=1;
         }
       })
    },
  },
}

</script>

<style lang="less" scoped>
    .fl {
        float: left;
    }
    .pdr{
        padding-right: 20px;
    }
    .fr {
        float: right;
    }
    .cr{
        cursor:pointer;
        &:hover{
             color: #2494d4!important;
        } 
    }
    .marg0 {
        margin: 0!important;
        padding: 0!important;
    }
    
    .blue {
        color: #2494d4!important;
    }
    
    .top-welcome {
        width: 100%;
        height: 35px;
        background-color: #f2f2f2;
        .top-containter {
            width: 1200px;
            height: 35px;
            margin: 0 auto;
            font-size: 14px;
            line-height: 35px;
            p {
                color: #2b2b2b;
            }
            span {
                .blue;
                padding-left: 19px;
                cursor: pointer;
            }
            #user-phonenum {
                margin-right: 15px;
            }
            .top-myorder {
                background: url(../images/index/u619.png) no-repeat left 4px;
                margin-left: 15px;
            }
            .top-shoppingcar {
                padding-left: 26px;
                background: url(../images/index/u607.png) no-repeat left 6px;
            }
        }
    }
</style>