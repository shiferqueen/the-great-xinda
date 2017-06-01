<template>
  <div>
      <p>bbb</p>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  name:'certification',
  created(){
            this.ajax.post('/xinda-api/provider/detail',qs.stringify({id: '9080f0c120a64eb3831d50ba93c33e78'})).then(function(res){
                console.log(res)
            })
        },
}

</script>
<style lang="less" scoped>

</style>