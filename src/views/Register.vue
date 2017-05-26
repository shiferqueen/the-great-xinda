<template>
  <div>
    <p>这是注册页面,传过来的参数为{{feiqiu}}</p>
  </div>
</template>

<script>
export default {
  name: 'register',
  data(){
    return {
      feiqiu:''
    }
  },
  created(){
    this.feiqiu = this.$route.params.test;
  }
  }


</script>


<style scoped>

</style>
