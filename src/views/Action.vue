<template>
  <div>
    <router-view></router-view>
    <myfoot v-if="show >=768"></myfoot>
  </div>
</template>

<script>
  import myfoot from '../components/footer';

export default {
  name: 'hello',
  data() {
    return {
      show: document.body.scrollWidth
    }
  },
  components:{
    myfoot
  },

}

</script>


<style>

</style>
