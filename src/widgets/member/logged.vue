<template>
    <div id="logged">
        <Row>
            <Col id="dd" span="24">
            <div class="logged">
                <img src="/static/img/huiyuan.cad76df.png" />
            </div>
            <div class="username">
                <p>{{getuser}}</p>
            </div>
            <div class="myorder">
                <div class="mse" @click="href(1)">
                    <img src="../../images/logos/110-2.jpg" />
                    <a>我的订单</a>
                    <span>＞</span>
                </div>
            </div>
            <div class="myorder">
                <div class="mse" @click="href(2)">
                    <img src="../../images/logos/1231.jpg" />
                    <a>账户设置</a>
                    <span>＞</span>
                </div>
            </div>
            <div class="exit">
                <button @click="logout">退出登录</button>
            </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex'
export default {
    data(){
        return{
            bgc:''
        }
    },
    created() {
        setTimeout(function(){
            document.getElementById('logged').style.height = window.screen.height + 'px';
            document.getElementById('logged').style.background = '#f6f6f6';
        },0)
        
    },
    methods: {
        ...mapActions(['popups']),
        logout() {
            let _this = this;
            this.popups({
                headers: '确定要退出登录吗？',
                content: '退出后将无法继续购买物品',
                ok() {
                    _this.ajax.post("/xinda-api/sso/logout").then(function (res) { //退出登录信息
                        if (res.data.status == 1) {
                            sessionStorage.clear();
                            _this.$Message.success('退出登录成功');
                            _this.$router.push({ path: '/home' })
                        }
                    })
                }
            })
        },
        href(i) {
            switch (i) {
                case 1:
                    this.$router.push({ path: '/member/myorder' });
                    break;

                case 2:
                    this.$router.push({ path: '/member/setaccount' });
                    break;

            }
        }
    },
    computed: {
        ...mapGetters(['getuser'])
    }
}
</script>
<style scoped lang="less">
.logged {
    height: 150px;
    background: #f5f5f5;
    text-align: center;
    line-height: 284px;
    img {
        height: 80px;
        width: 80px;
    }
}

.username {
    text-align: center;
    background: #f5f5f5;
}

.myorder {
    height: 50px;
    background: #f5f5f5;
    margin-top: 20px;

    .mse {
        background: #e9e9e9;
        width: 290px;
        height: 29px;
        margin: 0 auto;
        position: relative;
        img {
            width: 15px;
            height: 15px;
            position: absolute;
            top: 50%;
            left: 5%;
            transform: translate(-50%, -50%)
        }
        a {
            color: #9d9b9a;
            margin-left: 30px;
            line-height: 29px;
        }
        span {
            margin-left: 57%;
        }
    }
}

.exit {
    height: 230px;
    text-align: center;
    button {
        background: #169bd5;
        width: 290px;
        height: 35px;
        color: #fff;
        border-radius: 5px;
        margin-top: 15px;
    }
}
</style>
