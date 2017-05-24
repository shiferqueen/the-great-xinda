<template>
  <div>
    <router-view></router-view>
    <afoot></afoot>
  </div>
</template>

<script>
import afoot from '../components/afoot'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    afoot
  }
}

</script>


<style>

</style>
