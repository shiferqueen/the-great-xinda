<template>
  <div>
    <goods class="width1200"></goods>
    <hotService class="width1200"></hotService>
  </div>
</template>

<script>

import goods from '@/widgets/shopping/goods'
import hotService from '@/widgets/shopping/hotService'

export default {
  name: 'shopping',
  components: {
    goods,
    hotService,
  },

}


</script>


<style scoped>
.width1200{
  min-width:320px;
}
@media screen and (min-width: 1200px) {
  .width1200 {
    width: 1200px;
    margin: 0 auto;
    margin-top:25px;
  }
}
</style>
