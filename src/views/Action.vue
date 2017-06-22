<template>
  <div>
    <router-view></router-view>
    <myfoot v-if="getbodywidth >=768"></myfoot>
  </div>
</template>

<script>
  import myfoot from '../components/footer';
  import {mapGetters} from 'vuex'

export default {
  name: 'hello',
  data() {
    return {
    }
  },
  components:{
    myfoot
  },
  computed:{
    ...mapGetters(['getbodywidth'])
  }
}

</script>


<style>

</style>
