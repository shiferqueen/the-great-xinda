<template>
  <div class="width1200" style="margin-top:25px;">
     <forms></forms>
     <pay></pay>
  </div>
</template>

<script>

import forms from '@/widgets/form/forms'
import pay from '@/widgets/form/pay'


export default {
  name: 'form',
  components:{
    forms,
    pay,
  }
}


</script>


<style scoped>
div{
  font-family: '微软雅黑';
  font-size: 14px;
}
.width1200{
    width:1200px;
    margin:0 auto;
}

</style>
