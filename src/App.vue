<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
    import top from './components/top'
    import bottom from './components/bottom'
    export default {
    name: 'app',
    components:{
        top,
        bottom
    }
    }
</script>

<style>

</style>
                                                                              