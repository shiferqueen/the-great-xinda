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
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    myhead,
    myfoot
  }

}

</script>


<style scoped>

</style>
