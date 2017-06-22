<template>
  <div id="app">
    <top></top>
    <popups></popups>
    <router-view></router-view>
    <bottom></bottom>
    <myfoot v-if="getbodywidth < 768"></myfoot>
  </div>
</template>

<script>
import myfoot from './components/footer';
import top from './components/top'
import bottom from './components/bottom'
import popups from '@/components/popups'
import { mapActions,mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
    top,
    bottom,
    popups,
    myfoot
  },
  data() {
    return {
    }
  },
  methods:{
    ...mapActions(['setbodywidth'])
  },
  computed:{
    ...mapGetters(['getbodywidth'])
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.setbodywidth(document.body.scrollWidth);
      })()
    }
  }
}

</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 320px;
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
                                                                              