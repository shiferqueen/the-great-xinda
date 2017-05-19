<template>
  <div>
    <a-head></a-head>
    <router-view></router-view>
    <afoot></afoot>
  </div>
</template>

<script>
import afoot from '../components/afoot'
import aHead from '../components/ahead'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    aHead,
    afoot
  }
}

</script>


<style scoped>

</style>
