<template>
  <div>
    <!--<p>这是顶部<a href="#/action/register/123">请注册</a></p>-->
    <p>这是顶部<a @click="toEnroll">请注册</a></p>
  </div>
</template>

<script>
export default {
  name: 'top',
  methods:{
    toEnroll(){
      this.$router.push({name:'register',params:{test:456}});
    }
  }
}
</script>

<style>

</style>
