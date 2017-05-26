<template>
 <div class="setaccount">
     <div class="my_evalu">
         <a class="active" v-on:click="set()" >账户设置</a>
         <a v-on:click="alter()" >修改密码</a>
     </div>
     <ul  v-show="zhang">
        <li class="now-img">
            <span>当前头像：</span>
            <img src="/static/img/huiyuan.cad76df.png"/>
        </li>
        <li class="username">
            <span>姓名：</span>
            <input class="c-t"/>
        </li>
        <li class="sex">
            <span>性别：</span>
            <span class="radio-1"><input type="radio" name="sex" checked/>男</span>
            <span class="radio-2"><input type="radio" name="sex"/>女</span>
        </li>
        <li class="username">
            <span>邮箱：</span>
            <input class="c-t" placeholder="请输入邮箱"/>
        </li>
        <li class="bj-hz">
            <span>所在地区：</span>
            <select>
                <option>北京</option>
                <option>菏泽</option>
            </select>
            <select>
                <option>北京市</option>
                <option>菏泽市</option>
            </select>
            <select>
                <option>海淀区</option>
                <option>定陶区</option>
            </select>
        </li>
        <li class="save">
            <a href="">保存</a>
        </li>
     </ul>
     <ul class="passw" v-show="password">
         <li>
             <span>旧密码：</span>
             <input class="ct1"/>
         </li>
         <li>
             <span>新密码：</span>
             <input  class="ct1"/>
         </li>
         <li>
             <span>再次输入新密码：</span>
             <input/>
         </li>
         <li class="baocun">
             <a href="">保存</a>
         </li>
     </ul>
 </div>
</template>

<script>
 export default {
        name: 'setaccount',
        data(){
            return{
                zhang:true,
                password:false
            } 
        },
        methods:{
            set:function(){
                this.zhang = true,
                this.password = false
            },
            alter:function(){
                this.zhang = false,
                this.password = true
            }
        }
    }
    
</script>

<style lang="less">
    .my_evalu{
        width: 948px;
        border-bottom: 2px solid #ccc;
        .active{
            color: #2693d4;
            border-bottom: 2px solid #2693d4;
        }
        a:first-child{
            // color: #2693d4;
            // border-bottom: 2px solid #2693d4;
            padding: 0px 20px;
        }
        a:last-child{
            margin-left:10px;
        }
    }
    .now-img{
        margin-top:25px;
        &:after{
            content:'';
            display: block;
            clear: both;
        }
        span{
            float: left;
            line-height: 103px;
        }
        img{
            float: left;
        }
    }
    .sex{
        margin-top: 25px;
    }
    .radio-1{
        margin-left: 30px;
    }
    .radio-2{
        margin-left: 30px;
    }
    .username{
        margin-top: 27px;
    }
    .c-t{
        border: 1px solid #ccc;
        margin-left: 30px;
    }
    .bj-hz{
        margin-top: 25px;
        select{
            border: 1px solid #ccc;
            width: 75px;
            height: 23px;
        }
    }
    .save{
        margin-top: 40px;
        margin-left: 80px;
        a{
            width: 68px;
            height: 24px;
            display: inline-block;
            border: 1px solid #2693d4;
            border-radius: 8%;
            line-height: 24px;
            color: #2693d4;
            text-align: center;
        }
    }
    // 修改密码
    .passw{
        li{
            margin-top: 37px;
            input{
                border: 1px solid #ccc;
                width: 180px;
                height: 23px;
            }
        } 
        .ct1{
            margin-left: 62px;
        }
    }
    .baocun a{
        width: 68px;
        height: 24px;
        display: inline-block;
        border: 1px solid #2693d4;
        border-radius: 8%;
        line-height: 24px;
        color: #2693d4;
        text-align: center;
        margin-left: 130px;
    }
    // 修改密结束
</style>
                                                                              