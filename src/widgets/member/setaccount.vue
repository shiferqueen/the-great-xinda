<template>
    <div>
        <Row style="position:inherit">
            <Col :xs="0" :sm="24">
            <div class="setaccount">
                <div class="wangzhe">
                    <a :class="{active:zhang}" v-on:click="set()">账户设置</a>
                    <a :class="{active:password}" v-on:click="alter()">修改密码</a>
                </div>
                <div v-show="zhang">
                    <li class="now-img">
                        <span>当前头像：</span>
                        <img src="/static/img/huiyuan.cad76df.png" />
                    </li>
                    <div class="username">
                        <span>姓名：</span>
                        <input class="c-t" v-model="uesrname" placeholder="请输入姓名" />
                    </div>
                    <div class="sex">
                        <span>性别：</span>
                        <span class="radio-1">
                            <input type="radio" name="radios" value="1" v-model="picked">男</span>
                        <span class="radio-2">
                            <input type="radio" name="radios" value="2" v-model="picked">女</span>
                    </div>
                    <div class="youxiang">
                        <span>邮箱：</span>
                        <input class="c-t" placeholder="请输入邮箱" v-model="com" />
                    </div>
                    <div class="bj-hz">
                        <span>所在地区：</span>
                        <select name="province" v-model="selectedProvince">
                            <option v-for="(item, index) in provinces" v-if="item.level === 1" :value="item">
                                {{ item.name }}
                            </option>
                        </select>
                        <select name="city" v-model="selectedCity">
                            <option v-for="(item, index) in cities" :value="item">
                                {{ item.name }}
                            </option>
                        </select>
                        <select name="block" v-model="selectedBlock">
                            <option v-for="(item, index) in blocks" :value="item">
                                {{ item.name }}
                            </option>
                        </select>
                    </div>
                    <div class="save">
                        <p :style="{color:c}">{{one}}</p>
                        <a @click="saveOne()" v-text="save1">{{save1}}</a>
    
                    </div>
                </div>
                <ul class="passw" v-show="password">
                    <li>
                        <span>旧密码：</span>
                        <input class="ct1" type="password" v-model="oldword" placeholder="请输入旧密码" />
                    </li>
                    <li>
                        <span>新密码：</span>
                        <input class="ct1" type="password" v-model="newword" placeholder="请输入新密码" @click="prompt()" @input="p_len" />
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
                        <input type="password" v-model="newtext" placeholder="请确认新密码" />
                    </li>
                    <li class="msgli" style="height:50px;">
                        <p :style="{color:c,fontSize:f}">{{msg}}</p>
                    </li>
                    <li class="baocun">
                        <a @click="con()" v-text="save">{{save}}</a>
                    </li>
                </ul>
            </div>
            </Col>
            <!--移动端代码-->
            <Col :xs="24" :sm="0">
            <div class="">
                <Row class="head">
                    <Col :xs="3" class="icon" onclick="window.history.go(-1)">
                    <Icon type="ios-arrow-left"></Icon>
                    </Col>
                    <Col :xs="21" class="wo_dan"> 账户设置
                    </Col>
                </Row>
                <Row :xs="24" class="qw_1">
                    <a>账户设置</a>
                </Row>
                <ul>
                    <Row class="qw_2">
                        <Col :xs="6">
                        <span class="qw_3">当前头像：</span>
                        </Col>
                        <Col :xs="18">
                        <img class="qw_4" src="/static/img/huiyuan.cad76df.png" />
                        </Col>
                    </Row>
                    <Row class="qw_5">
                        <Col class="qw_6" :xs="6">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</Col>
                        <Col :xs="18">
                        <input class="qw_7" v-model="uesrname" placeholder="请输入姓名" />
                        </Col>
                    </Row>
                    <Row class="qw_8">
                        <Col class="qw_9" :xs="6">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</Col>
                        <Col class="qw_10" :xs="18">
                        <span class="">
                            <input type="radio" name="radiox" v-model="picked" value="1">男</span>
                        <span class="radio-2">
                            <input type="radio" name="radiox" v-model="picked" value="2" checked/>女</span>
                        </Col>
                    </Row>
                    <Row class="qw_11">
                        <Col :xs="6" class="qw_12">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</Col>
                        <Col :xs="18">
                        <input class="qw_13" placeholder="请输入邮箱" v-model="com" />
                        </Col>
                    </Row>
                    <Row class="qw_14">
                        <Col :xs="6" class="qw_15">所在地区：</Col>
                        <Col :xs="18" class="qw_16">
                        <select name="province" v-model="selectedProvince">
                            <option v-for="(item, index) in provinces" v-if="item.level === 1" :value="item">
                                {{ item.name }}
                            </option>
                        </select>
                        <select name="city" v-model="selectedCity">
                            <option v-for="(item, index) in cities" :value="item">
                                {{ item.name }}
                            </option>
                        </select>
                        <select name="block" v-model="selectedBlock">
                            <option v-for="(item, index) in blocks" :value="item">
                                {{ item.name }}
                            </option>
                        </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col :xs="24" class="qw_20">
                        <a @click="saveOne()" v-text="save1">{{save1}}</a>
                        </Col>
                    </Row>
                </ul>
                <!--2-->
                <Row>
                    <Col :xs="24" class="qw_21">
                    <p>修改密码</p>
                    </Col>
                </Row>
                <ul class="">
                    <Row class="qw_22">
                        <Col :xs="6" class="qw_25">旧密码：</Col>
                        <Col :xs="18">
                        <input class="qw_26" type="password" v-model="oldword" placeholder="请输入旧密码" />
                        </Col>
                    </Row>
                    <Row class="qw_27">
                        <Col :xs="6" class="qw_28">新密码：</Col>
                        <Col :xs="18">
                        <input class="qw_29" type="password" v-model="newword" placeholder="请输入新密码" @click="prompt()" @input="p_len" />
                        </Col>
                    </Row>
                    <Row class="qw_30">
                        <Col :xs="8" class="qw_31">再次输入新密码：</Col>
                        <Col :xs="16">
                        <input class="qw_32" type="password" v-model="newtext" placeholder="请确认新密码" />
                        </Col>
                    </Row>
                    <Row class="msgli">
                        <Col :xs="24" :style="{color:c,fontSize:f}">{{msg}}</Col>
                    </Row>
                    <Row class="qw_40">
                        <Col span="24" class="qw_41">
                        <div @click="con()">{{save}}</div>
                        </Col>
                    </Row>
                </ul>
            </div>
            </Col>
            <!--移动端代码结束-->
    
        </Row>
    </div>
</template>

<script>
import qs from 'qs'

import provinces from '../../provinces.js'
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'setaccount',
    data() {
        return {
            zhang: true,
            password: false,
            one: '',
            uesrname: '',
            com: '',
            picked: '1',//性别
            oldword: '',//旧密码
            newword: null,//新密码
            newtext: '',//确认新密码
            msg: '',//提示
            testpassword: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/,
            c: '#f00',//提示字体颜色
            f: '14px',//提示字体大小
            save: '保存',//按钮
            save1: '保存',//按钮
            pro: '',//新密码后的提示
            password_length: 0,
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
            textcom: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-]\w+)*$/,
            status: '',
        }

    },
    methods: {
        ...mapActions(['user','setmyurl']),
        set: function () {
            this.zhang = true,
                this.password = false
        },
        alter: function () {
            this.zhang = false,
                this.password = true
        },
        p_len: function () {
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
        saveOne() {
            let _this = this;
            if (_this.uesrname == '') {
                _this.$Message.warning('请填写姓名');
            } else if (_this.com == '') {
                _this.$Message.warning('请填写邮箱');
            } else if (_this.textcom.test(_this.com) == false) {
                _this.$Message.warning('邮箱格式不正确');
            } else {
                _this.ajax.post('/xinda-api/member/update-info', qs.stringify({
                    headImg: '/2016/10/28/152843b6d9a04abe83a396d2ba03675f',
                    name: _this.uesrname,
                    gender: _this.picked,
                    email: _this.com,
                    regionId: '110106',
                })).then(function (data) {
                    _this.status = data.data.status;
                    if (_this.status == 1) {
                        _this.$Message.success('保存成功');
                        _this.c = "#2494d4";
                        _this.user(_this.uesrname)
                    } else if (_this.status == -1) {
                        _this.$Message.error('保存失败');
                    }

                })
                _this.save1 = "修改"

            }

        },
        prompt: function () {
            this.$Message.info({
                content: '密码必须6-16位,包含大写字母、小写字母、数字',
                duration: 5,
                closable: true
            });
        },
        con: function () {
            let _this = this;
            if (_this.oldword == '') {
                _this.$Message.warning('请输入旧密码');

            } else if (_this.newword == '') {
                _this.$Message.warning('请输入新密码');
            } else if (_this.testpassword.test(_this.newword) == false) {
                _this.msg = "*密码格式不正确,必须6-16位,包含大写字母、小写字母、数字"
            } else if (_this.newtext == '') {
                _this.$Message.warning('请填写姓名');
            } else if (_this.newword != _this.newtext) {
                _this.$Message.warning('两次输入的密码不一致');
            } else {
                _this.ajax.post('/xinda-api/sso/change-pwd', qs.stringify({
                    oldPwd: _this.md5(_this.oldword),
                    newPwd: _this.md5(_this.newword)
                })).then(function (data) {
                    _this.$Message.success('修改成功');
                });
                _this.save = "修改";
                _this.c = "#2494d4";
                _this.oldword = '';
                _this.newword = '';
                _this.newtext = '';
            }
        },

    },

    computed: {
        ...mapGetters(['getmyurl','getuser']),
        info() {
            return {
                province: this.selectedProvince,
                city: this.selectedCity,
                block: this.selectedBlock
            }
        }
    },

    created() {
        if (sessionStorage.getItem("login")) {
           sessionStorage.setItem('url','')
            let _this = this;
            _this.ajax.post('/xinda-api/member/info').then(function (data) {
                _this.picked = data.data.data.gender;
                _this.uesrname = data.data.data.name;
                _this.com = data.data.data.email
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
        } else {
            this.$Message.warning('当前未登录，自动跳转到登录页面');
            sessionStorage.setItem('url','member/setaccount')
            this.$router.push({ path: '/action/login' })
        }

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

}
</script>

<style scoped lang="less">
// 移动端代码
.head {
    height: 60px;
    background: #e8e8e8;
    div.icon {
        padding-left: 2%;
        i {
            line-height: 60px;
            font-size: 14px;
        }
    }
    .wo_dan {
        font-size: 14px;
        line-height: 77px;
        padding-left: 25%;
    }
}

.qw_1 {
    height: 40px;
    margin-top: 10px;
    border-bottom: 2px solid #2693d4;
    a {
        color: black;
        font-size: 14px;
        line-height: 40px;
        margin-left: 27px;
    }
}

.qw_2 {
    height: 128px;

    .qw_3 {
        font-size: 14px;
        text-align: center;
        display: block;
        line-height: 128px;
    }
    .qw_4 {
        margin-top: 3%;
    }
}

.qw_5 {
    height: 60px;
    .qw_6 {
        text-align: center;
        line-height: 60px;
        font-size: 14px;
    }
    .qw_7 {
        border: 1px solid #ccc;
        width: 180px;
        vertical-align: middle;
        margin-top: 10px;
        height: 43px;
        padding: 5px;
        border-radius: 5px;
    }
}

.qw_8 {
    height: 60px;
    .qw_9 {
        text-align: center;
        line-height: 60px;
        font-size: 14px;
    }
    .qw_10 {
        font-size: 14px;
        line-height: 60px;
        .radio-11 {}
    }
}

.qw_11 {
    height: 60px;
    .qw_12 {
        text-align: center;
        line-height: 60px;
        font-size: 14px;
    }
    .qw_13 {
        border: 1px solid #ccc;
        width: 180px;
        vertical-align: middle;
        margin-top: 10px;
        height: 43px;
        padding: 5px;
        border-radius: 5px;
    }
}

.qw_14 {
    height: 60px;
    .qw_15 {
        text-align: center;
        line-height: 60px;
        font-size: 14px;
    }
    .qw_16 {
        line-height: 60px;
        select {
            border: 1px solid #ccc;
            width: 70px;
            height: 35px;
        }
    }
}

.qw_20 {
    height: 60px;
    border-bottom: 2px solid #dfdfdf;
    line-height: 34px;
    p {
        margin-left: 3%;
        height: 30px;
        font-size: 14px;
        margin-left: 26%;
    }
    a {
        width: 60px;
        height: 27px;
        display: inline-block;
        border: 1px solid #2693d4;
        border-radius: 8%;
        line-height: 28px;
        color: #2693d4;
        text-align: center;
        font-size: 14px;
        margin-left: 25%;
    }
}

.qw_21 {
    height: 60px;
    border-bottom: 2px solid #2693d4;
    font-size: 14px;
    line-height: 70px;
    p {
        margin-left: 27px;
    }
}

.qw_22 {
    height: 60px;
    margin-top: 10px;
    .qw_25 {
        text-align: center;
        line-height: 60px;
        font-size: 14px;
    }
    .qw_26 {
        border: 1px solid #ccc;
        width: 180px;
        vertical-align: middle;
        margin-top: 10px;
        height: 43px;
        padding: 5px;
        border-radius: 5px;
        margin-left: 10%;
    }
}

.qw_27 {
    height: 60px;
    .qw_28 {
        text-align: center;
        line-height: 60px;
        font-size: 14px;
    }
    .qw_29 {
        border: 1px solid #ccc;
        width: 180px;
        vertical-align: middle;
        margin-top: 10px;
        height: 43px;
        padding: 5px;
        border-radius: 5px;
        margin-left: 10%;
    }
}

.qw_30 {
    height: 60px;
    .qw_31 {
        text-align: center;
        line-height: 60px;
        font-size: 12px;
    }
    .qw_32 {
        border: 1px solid #ccc;
        width: 180px;
        vertical-align: middle;
        margin-top: 10px;
        height: 43px;
        padding: 5px;
        border-radius: 5px;
    }
}

.qw_40 {
    height: 170px;
    border-bottom: 6px solid #dfdfdf;
    text-align: center;
    .qw_41 {
        width: 60px;
        height: 27px;
        border: 1px solid #2693d4;
        border-radius: 8%;
        line-height: 28px;
        color: #2693d4;
        text-align: center;
        font-size: 14px;
        margin-left: 34%;
        margin-top: 10px;
    }
}

// 移动端代码结束
.setaccount {
    margin-top: -34%;
    margin-left: 31%;
}

.wangzhe {
    width: 948px;
    border-bottom: 2px solid #ccc;
    .active {
        color: #2693d4;
        border-bottom: 2px solid #2693d4;
    }
    a:first-child {
        padding: 2px 20px;
    }
    a:last-child {
        margin-left: 10px;
        padding: 2px 20px;
    }
}

.now-img {
    margin-top: 25px;
    &:after {
        content: '';
        display: block;
        clear: both;
    }
    span {
        float: left;
        line-height: 103px;
    }
    img {
        float: left;
        margin-left: 30px;
    }
}

.sex {
    margin-top: 2%;
}

.radio-1 {
    margin-left: 30px;
}

.radio-2 {
    margin-left: 30px;
}

.username {
    margin-top: 1%;
}

.youxiang {
    margin-top: 2%;
}

.c-t {
    border: 1px solid #ccc;
    margin-left: 30px;
    height: 20px;
    padding: 5px;
    border-radius: 5px;
}

.bj-hz {
    margin-top: 2%;
    select {
        border: 1px solid #ccc;
        width: 75px;
        height: 23px;
    }
}

.save {
    margin-top: 40px;
    margin-left: -2%;
    a {
        width: 68px;
        height: 24px;
        display: inline-block;
        border: 1px solid #2693d4;
        border-radius: 8%;
        line-height: 24px;
        color: #2693d4;
        text-align: center;
        margin-left: 93px;
        width: 68px;
        height: 24px;
        display: inline-block;
        border: 1px solid #2693d4;
        border-radius: 8%;
        line-height: 24px;
        color: #2693d4;
        text-align: center;
        margin-left: 93px;
    }
    p {
        font-size: 14px;
        margin-bottom: 10px;
    }
} // 修改密码
.passw {
    margin-left: 33%;
    li {
        margin-top: 37px;
        margin-left: -49%;
        input {
            border: 1px solid #ccc;
            margin-left: 15px;
            width: 180px;
            height: 25px;
            padding: 5px 5px;
            border-radius: 5px;
        }
        ;
        .prompt {
            font-size: 14px;
            color: #f00;
            float: right;
            margin-right: 310px;
            line-height: 36px;
        }
    }
    .msgli {
        margin: 20px 0px -10px 124px;
    }
    .ct1 {
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
        margin-top: -13%;
        margin-left: 39px;
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
            margin-left: -15px;
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
}

.baocun a {
    width: 68px;
    height: 24px;
    display: inline-block;
    border: 1px solid #2693d4;
    border-radius: 8%;
    line-height: 24px;
    color: #2693d4;
    text-align: center;
    margin-left: 130px;
    cursor: pointer;
}
</style>