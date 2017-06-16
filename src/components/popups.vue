<template>
    <div>
        <div class="mask"  v-if="getpopups.status">
                <div class="popup" v-show="getpopups.status" >
                    <div class="popup-header">{{getpopups.headers}}</div>
                    <div class="popup-conter">{{getpopups.content}}</div>
                    <div class="popup-btn">
                        <button class='btnyes' @click="getpopups.confirm">{{getpopups.conbtn}}</button>
                        <button class='btnno' @click="closePopups">{{getpopups.cancelbtn}}</button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex'
    export default {
        name: 'popups',
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters(['getpopups'])
        },
        methods: {
            ...mapActions(['closePopups'])
        }
    }
</script>

<style lang="less" scoped>
    .mask {
        width: 100%;
        position: fixed;
        top: 0;
        right: 0;
        background-color: rgba(55, 55, 55, .6);
        height: 100%;
        z-index: 1000;
    }
    
    .popup {
        min-width: 360px;
        background: #fff;
        border-radius: 6px;
        position: absolute;
        padding: 16px;
        top: 200px;
        left: 38.75%;
    }
    
    .popup-header {
        font-size: 14px;
    }
    
    .popup-conter {
        font-size: 13px;
        padding: 15px 0 20px;
    }
    
    .popup-btn {
        text-align: center;
        button {
            color: #fff;
            margin: 0 6px;
            padding: 5px 15px;
            border-radius: 3px;
        }
    }
    
    .btnyes {
        background-color: #66b6ff;
        border: 1px solid #66b6ff;
        &:hover {
            background-color: #118adb;
            border: 1px solid #118adb;
        }
    }
    
    .btnno {
        background-color: #6c6c6c;
        border: 1px solid #6c6c6c;
        &:hover {
            background-color: #3c3c3c;
            border: 1px solid #3c3c3c;
        }
    }
    @media screen and (max-width: 768px) {
        .popup{
            min-width: 88%;
            left:6%;
        }
    }
</style>