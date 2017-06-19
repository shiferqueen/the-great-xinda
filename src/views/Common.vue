<template>
  <div>
    <myhead></myhead>
    <router-view></router-view>
  </div>

  
</template>

<script>
import myhead from '../components/header'

export default {
  name: 'common',
  components:{
    myhead,
  }

}

</script>


<style scoped>

</style>
