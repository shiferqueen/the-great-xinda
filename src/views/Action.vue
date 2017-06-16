<template>
  <div>
    <router-view></router-view>
    <myfoot v-if="show"></myfoot>
  </div>
</template>

<script>
  import myfoot from '../components/footer';

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
    show(){
      if(document.body.scrollWidth<768){
        return true;      
      }else{
        return false;
      }
    }
  }
}

</script>


<style>

</style>
