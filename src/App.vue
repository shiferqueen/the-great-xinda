<template>
  <div id="app">
    
    <top></top>
    <popups></popups>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import top from './components/top'
import bottom from './components/bottom'
import popups from '@/components/popups'
export default {
  name: 'app',
  components: {
    top,
    bottom,
    popups
  }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}

* {
  padding: 0;
  margin: 0;
  border: 0;
}

li {
  list-style: none;
}

a:visited,
a:link {
  color: #000;
  text-decoration: none;
}

.clear:after {
  content: '';
  display: block;
  clear: both;
}
</style>
                                                                              