<template>
 <div class="setaccount">
     <div class="my_evalu">
         <a :class="{active:zhang}" v-on:click="set()" >账户设置</a>
         <a :class="{active:password}" v-on:click="alter()" >修改密码</a>
     </div>
     <ul  v-show="zhang">
        <li class="now-img">
            <span>当前头像：</span>
            <img src="/static/img/huiyuan.cad76df.png"/>
        </li>
        <li class="username">
            <span>姓名：</span>
            <input class="c-t" value=""/>
            <input class="c-t" v-model="uesrname" placeholder="请输入姓名"/>
        </li>
        <li class="sex">
            <span>性别：</span>
            <span class="radio-1"><input type="radio" name="sex" checked/>男</span>
            <span class="radio-2"><input type="radio" name="sex"/>女</span>
        </li>
        <li class="username">
            <span>邮箱：</span>
            <input class="c-t" placeholder="请输入邮箱" v-model="com"/>
        </li>
        <li class="bj-hz">
            <span>所在地区：</span>
            <select name="province" v-model="selectedProvince">
                <option v-for="(item, index) in provinces"
                            v-if="item.level === 1"
                            :value="item">
                            {{ item.name }}
                </option>
            </select>
            <select name="city" v-model="selectedCity">
                <option v-for="(item, index) in cities"
                            :value="item">
                            {{ item.name }}
                </option>
            </select>
            <select name="block" v-model="selectedBlock">
                <option v-for="(item, index) in blocks"
                            :value="item">
                            {{ item.name }}
                </option>
            </select>
        </li>
        <li class="save">
            <p :style="{color:c}">{{one}}</p>
            <a href="javascript:void(0)" @click="saveOne()" v-text="save1">{{save1}}</a>
           
        </li>
     </ul>
     <ul class="passw" v-show="password">
         <li>
             <span>旧密码：</span>
             <input class="ct1" type="password"  v-model="oldword" placeholder="请输入旧密码"/>
         </li>
         <li>
             <span>新密码：</span>
             <input  class="ct1" type="password" v-model="newword" placeholder="请输入新密码" @click="prompt()" @input="p_len"/>
             <span v-bind:class="{ valid_password_length: valid_password_length , show_password_length: typed}" class="password_length">{{password_length}}</span>
             <p class="prompt">{{pro}}</p>
             <div class="lnu_container">
                <p v-bind:class="{ lovercase_valid: contains_lovercase }">小写字母</p>
                <p v-bind:class="{ number_valid: contains_number }">数字</p>
                <p v-bind:class="{ uppercase_valid: contains_uppercase }">大写字母</p>
            </div>
         </li>
         
         <li>
             <span>再次输入新密码：</span>
             <input type="password" v-model="newtext" placeholder="请确认新密码"/>
         </li>
         <li class="msgli">
             <p :style="{color:c,fontSize:f}">{{msg}}</p>
         </li>
         <li class="baocun">
             <a @click="con()" v-text="save">{{save}}</a>
         </li>
     </ul>
 </div>
</template>

<script>
import qs from 'qs'

import provinces from '../../provinces.js'
import Vue from 'vue'

 export default {
        name: 'setaccount',
        data(){
            return{
                zhang:true,
                password:false,
                one:'',
                uesrname:'',
                com:'',
                oldword:'',//旧密码
                newword:null,//新密码
                newtext:'',//确认新密码
                msg:'',//提示
                testpassword:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/,
                c:'#f00',//提示字体颜色
                f:'14px',//提示字体大小
                save:'保存',//按钮
                save1:'保存',//按钮
                pro:'',//新密码后的提示
                password_length:0,
                typed: false,
                valid_password_length: false,
                contains_lovercase: false,
                contains_number: false,
                contains_uppercase: false,
                selectedProvince: provinces[0],//省
                selectedCity: 0,//市
                selectedBlock: 0,//区
                cities: 0,
                provinces,
                blocks: 0,
                textcom:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-]\w+)*$/,
                status:'',
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
            },
            p_len:function(){
                this.password_length = this.newword.length;
                if (this.password_length >= 6) {
                    this.valid_password_length = true;
                } else {
                    this.valid_password_length = false;
                }

                if (this.password_length > 0) {
                    this.typed = true;
                } else {
                    this.typed = false;
                }

                this.contains_lovercase = /[a-z]/.test(this.newword);
                this.contains_number = /\d/.test(this.newword);
                this.contains_uppercase = /[A-Z]/.test(this.newword);
    
            },
            saveOne:function(){
               let _this = this;
               if(_this.uesrname==''){
                   
                 _this.one = "请填写姓名"  
                 _this.c="#f00"
               }else if(_this.com==''){
                 _this.one = "请填写邮箱"
                  _this.c="#f00"
               }else if(_this.textcom.test(_this.com)==false){
                _this.one = "邮箱格式不正确"
                 _this.c="#f00"
               }else{
                _this.ajax.post('/xinda-api/member/update-info',qs.stringify({
                headImg:'/2016/10/28/152843b6d9a04abe83a396d2ba03675f',
                name:_this.uesrname,
                gender:1,
                email:_this.com,
                regionId:'110106',
                
                })).then(function(data){
                    // _this.one = data.data.msg;
                    _this.status = data.data.status;
                    if(_this.status==1){
                        _this.one = "*保存成功*",
                        _this.c="#2494d4"
                    }else if(_this.status==-1){
                        _this.one = "保存失败"
                    }
                    
                })
                    _this.save1="修改"
                
               }
                
            },
            prompt:function(){
                this.pro = "密码必须6-16位,包含大写字母、小写字母、数字"
            },
            con:function(){
                let _this = this;
                
                if(_this.oldword==''){
                    _this.msg="*请输入旧密码"
                }else if(_this.newword==''){
                    _this.msg="*请输入新密码"
                }else if(_this.testpassword.test(_this.newword)==false){
                    _this.msg="*密码格式不正确,必须6-16位,包含大写字母、小写字母、数字"
                }else if(_this.newtext==''){
                    _this.msg="*请确认新密码"
                }else if(_this.newword!=_this.newtext){
                    _this.msg="*两次输入的密码不一致"
                }else{
                    _this.ajax.post('/xinda-api/sso/change-pwd',qs.stringify({
                        oldPwd:_this.md5(_this.oldword),	 
                        newPwd:_this.md5(_this.newword)
                    })).then(function(data){
                        // console.log(data)
                        _this.msg=data.data.msg;
                    });
                    _this.save="修改",
                    _this.c="#2494d4"
                }
            }
        },
        created() {
            let _this = this;
            _this.ajax.post('/xinda-api/member/info').then(function(data){
                 console.log(data)
                 _this.uesrname=data.data.data.name
                 _this.com=data.data.data.email
            })
            // 数据初始化,默认选中北京市,默认选中第一个;北京市数据为总数据的前18个
            let beijing = this.provinces.slice(0, 19)
            this.cities = beijing.filter(item => {
                if (item.level === 2) {
                    return true
                }
            })
            this.selectedCity = this.cities[0]
            this.blocks = beijing.filter(item => {
                if (item.level === 3) {
                    return true
                }
            })
            this.selectedBlock = this.blocks[0]
        },
        watch: {
            selectedProvince(newVal, oldVal) {
                // 港澳台数据只有一级,特殊处理
                if (newVal.sheng === '71' || newVal.sheng === '81' || newVal.sheng === '82') {
                    this.cities = [newVal]
                    this.blocks = [newVal]
                } else {
                    this.cities = this.provinces.filter(item => {
                        if (item.level === 2 && item.sheng && newVal.sheng === item.sheng) {
                            return true
                        }
                    })
                }
                var _this = this
                    // 此时在渲染DOM,渲染结束之后再选中第一个
                Vue.nextTick(() => {
                    _this.selectedCity = _this.cities[0]
                    _this.$emit('input', _this.info)
                })
            },
            selectedBlock() {
                var _this = this
                Vue.nextTick(() => {
                    _this.$emit('input', _this.info)
                })
            },
            selectedCity(newVal) {
                // 选择了一个市,要选择区了 di是城市的代表,sheng
                if (newVal.sheng === '71' || newVal.sheng === '81' || newVal.sheng === '82') {
                    this.blocks = [newVal]
                    this.cities = [newVal]
                } else {
                    this.blocks = this.provinces.filter(item => {
                        if (item.level === 3 && item.sheng && item.sheng == newVal.sheng && item.di === newVal.di && item.name !== '市辖区') {
                            return true
                        }
                    })
                }
                var _this = this
                Vue.nextTick(() => {
                    _this.selectedBlock = _this.blocks[0]
                        // 触发与 v-model相关的 input事件
                    _this.$emit('input', _this.info)
                })
            }
        },
        computed: {
            info() {
                return {
                    province: this.selectedProvince,
                    city: this.selectedCity,
                    block: this.selectedBlock
                }
            }
        },
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
        height: 20px;
        padding: 5px;
        border-radius: 5px;
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
        p{
            font-size:14px;
            margin-bottom: 10px;
        }
    }
    // 修改密码
    .passw{
        li{
            margin-top: 37px;
            input{
                border: 1px solid #ccc;
                width: 180px;
                height: 25px;
                padding: 5px 5px;
                border-radius: 5px;
            };
            .prompt{
                font-size:14px;
                color:#f00;
                float:right;
                margin-right: 310px;
                line-height: 36px;
            }
        } 
        .msgli{
            margin:20px 0px -10px 124px;
        }
        .ct1{
            margin-left: 62px;
            position: relative;
            overflow: hidden;
            outline: none;
            -webkit-transition: all .1s;
            transition: all .1s;
        }
        .password_length {
            // padding: 2px 10px;
            position: absolute;
            top: 384px;
            left: 760px;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            background: #FBD490;
            color: rgba(71, 87, 98, 0.8);
            border-radius: 4px;
            font-size: 13px;
            display: none;
            -webkit-transition: all .1s;
            transition: all .1s;
        }
        .valid_password_length {
            background: #00AD7C;
            color: rgba(255, 255, 255, 0.9);
            }

            .show_password_length {
            display: block;
            }

            .lnu_container {
            display: block;
            margin: 10px 130px;
            width: 320px;
            height: auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            p {
                width: 100px;
                height: auto;
                font-size: 12px;
                line-height: 1.2;
                text-align: center;
                border-radius: 2px;
                color: rgba(71, 87, 98, 0.8);
                background: -webkit-linear-gradient(left, #00AD7C 50%, #eee 50%);
                background: linear-gradient(to right, #00AD7C 50%, #eee 50%);
                background-size: 201% 100%;
                background-position: right;
                -webkit-transition: background .3s;
                transition: background .3s;
                }
            }

           

            .lovercase_valid,
            .number_valid,
            .uppercase_valid {
            background-position: left !important;
            color: rgba(255, 255, 255, 0.9) !important;
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
        cursor:pointer
    }
    // 修改密结束
</style>
                                                                              