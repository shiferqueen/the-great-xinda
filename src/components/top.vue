<template>
    <Row>
    <Col :xs="{span:0}" :sm="{span:24}">
    <div class="top-welcome">
      <div class="top-containter">
        <span class="fl pdr" v-show="getuser==''?false:true" @click="member">{{getuser}}</span>
        <p class="fl">欢迎来到信达!</p>
        <p class="fl cr" v-show="getuser==''?false:true"  @click="logout()">【退出】</p>
        <span class="fl">
          <a href="#/action/login" class="blue" v-show="getuser==''?true:false">登录</a>
        </span>
        <span class="fl">
          <a href="#/action/register" class="blue" v-show="getuser==''?true:false">快速注册</a>
        </span>
        <span class="fr">
          <a href="#/shoplist" class="blue">服务商入口</a>
        </span>
        <span v-show=true class="fr top-myorder">
          <a href="#/member" v-show="getuser?true:false">我的订单</a>
        </span>
        <a href="#/shopping" class="fr top-shoppingcar" @click.prevent="goshopping(getuser)">购物车
          <span class="marg0">{{getCartNum}} </span>件</a>
      </div>
    </div>

    </Col>
  
    </Row>
</template>
<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'

    export default {
        name: 'top',
        data() {
            return {
                sum: 0,
                status: '', //登录状态
            }
        },
        computed: {
            ...mapGetters(['getCartNum', 'getuser'])

        },
        mounted() {
            let _this = this;
            this.ajax.post("/xinda-api/sso/login-info").then(function(res) { //获取登录信息
                //   console.log(typeof res.data.data);
                _this.status = res.data.status;
            });
            //   console.log(this.user)
            this.user();
            this.refCartNum();
        },
        methods: {
            ...mapActions(['popups']),
            logout() {
                let _this = this;
                this.popups({
                    headers: '确定要退出登录吗？',
                    content: '退出后将无法继续购买物品',
                    ok() {
                        _this.ajax.post("/xinda-api/sso/logout").then(function(res) { //退出登录信息
                            if (res.data.status == 1) {
                                _this.user('');
                                _this.refCartNum('');
                                _this.$Message.success('退出成功');
                                sessionStorage.clear();
                                _this.$router.push({path:'/home'})
                                
                            }
                        })
                    }
                })
            },
            ...mapActions(['refCartNum', 'user']),
            //  ...mapActions([])
            goshopping(uname) {
                if (uname != '') {
                    
                    this.$router.push({
                        name: 'shopping'
                    });
                } else {
                    this.$Message.warning('当前尚未登录，自动跳转到登录页面');
                    this.$router.push({
                        name: 'login'
                    });
                }
            },
            member() {
                this.$router.push({
                    name: 'myorder'
                });
            }
        },
    }
</script>

<style lang="less" scoped>
    .fl {
        float: left;
    }
    
    .pdr {
        padding-right: 20px;
    }
    
    .fr {
        float: right;
    }
    
    .cr {
        cursor: pointer;
        &:hover {
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
.top-p{
    width:100%;
    height:40px;
    text-align: center;
    font-size:20px;
    font-family: "Hiragino Sans GB";
    background-color: #e5e5e5;
    
}
</style>