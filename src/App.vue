<template>
  <div id="app">
    <div class="list-wrapper" v-loading="loading">
      <ul>
        <li v-for="(item, index) in data" :key="index">{{ item.name }}</li>
      </ul>
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
      data: [],
      title: 'Loading...'
    }
  },
  computed: {
    loading() {
      return !this.data.length
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

  .list-wrapper {
    .ul {
      width: 600px;
      height: 500px;

      li {
        list-style: none;
      }
    }
  }
}
</style>
