<template>
  <div>
    <myhead></myhead>
    <router-view></router-view>
    <myfoot></myfoot>
  </div>

  
</template>

<script>
import myhead from '../components/header'
import myfoot from '../components/footer'

export default {
  name: 'common',
  components:{
    myhead,
    myfoot
  }

}

</script>


<style scoped>

</style>
