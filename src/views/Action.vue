<template>
  <div>
    <ahead></ahead>
    <router-view></router-view>
    <afoot></afoot>
  </div>
</template>

<script>
import afoot from '../components/afoot'
import ahead from '../components/ahead'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    ahead,
    afoot
  }
}

</script>


<style>

</style>
