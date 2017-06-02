<template>
  <div>
      <p>工作时间：{{getShop.workTime}}</p>
      <p>手机号：{{getShop.cellphone}}</p>
      <p>QQ号：{{getShop.qq}}</p>
  </div>
</template>
<script>
import qs from 'qs'
import { mapActions, mapGetters } from 'vuex'
    export default {
        name:'customService',
        data() {
            return {
                data:{},
                
            }
        },
        computed: {
            ...mapGetters(['getShop']),
        },
        created(){
            
        },
    }
</script>
<style lang="less" scoped>

</style>
