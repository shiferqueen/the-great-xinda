<template>
<div>
  <headd></headd>
  <div class="width1200" style="margin-top:25px;">
     <goods></goods>
     <hotService></hotService>
  </div>
  <foot></foot>
</div>
</template>

<script>

import goods from '@/widgets/shopping/goods'
import hotService from '@/widgets/shopping/hotService'
import headd from '@/components/header'
import foot from '@/components/footer'

export default {
  name: 'shopping',
  components:{
    goods,
    hotService,
    headd,
    foot,
  }
}


</script>


<style scoped>

.width1200{
    width:1200px;
    margin:0 auto;
}
</style>
