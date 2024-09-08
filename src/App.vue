<template>
  <div id="app">
    <ul class="box">
      <li v-for="(item,index) in data" :key="index">{{ item.name }}</li>
    </ul> 
    <div class="loading-wrapper">
      <Loading v-show="data.length === 0"></Loading>
    </div>
  </div>
</template>

<script>
import Loading from './directives/loading'

export default {
  name: 'App',
  components: {
    Loading
  },
  data() {
    return {
      data: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.data = [{
        name: 'Welcome to Your Vue.js App'
      }, {
        name: 'Welcome to Vue.js App'
      }, {
        name: 'Welcome to Vue.js App'
      }, {
        name: 'Welcome Your Vue.js App'
      }, {
        name: 'Welcome to Your Vue.js App'
      }]
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .box {
    width: 600px;
    height: 500px;
    li {
      list-style: none;
    }
  }

  .loading-wrapper {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
