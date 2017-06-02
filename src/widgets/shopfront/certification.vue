<template>
  <div>
      <p><img :src="'http://115.182.107.203:8088/xinda/pic'+getShop.providerImg"></p>
  </div>
</template>
<script>
import qs from 'qs'
import { mapActions, mapGetters } from 'vuex'
    export default {
        name:'certification',
        data() {
            return {
                
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