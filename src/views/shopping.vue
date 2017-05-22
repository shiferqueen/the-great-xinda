<template>
  <div class="width1200">
     <goods></goods>
  </div>
</template>

<script>

import goods from '@/widgets/shopping/goods'

export default {
  name: 'shopping',
  components:{
    goods
  }
}


</script>


<style scoped>
.width1200{
    width:1200px;
    margin:0 auto;
}
</style>
