<template>
  <div class="width1200">
     <goods></goods>
     <hotService></hotService>
  </div>
</template>

<script>

import goods from '@/widgets/shopping/goods'
import hotService from '@/widgets/shopping/hotService'

export default {
  name: 'shopping',
  components:{
    goods,
    hotService
  }
}


</script>


<style scoped>
div{
  margin-top:25px;
  font-family: '微软雅黑';
}
.width1200{
    width:1200px;
    margin:0 auto;
}
</style>
