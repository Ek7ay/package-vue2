<template>
  <div id="app">

    <img width="200" :src="'data:image/png;base64,' + src" alt="">

    <!-- <div class="list-wrapper" v-loading="loading">
      <ul>
        <li v-for="(item, index) in data" :key="index">{{ item.name }}</li>
      </ul>
    </div> -->
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
      title: 'Loading...',
      src: 'iVBORw0KGgoAAAANSUhEUgAAALcAAAC3CAYAAABQbs+fAAAElElEQVR42u3dUY4iMQwFQO5/6d0zoEn8nkNZmi9gFNKVlow7zuefEI/GxxQIuIWAWwi4hYBbCLiFgFvALcTruD+fz+jf8S85PP6/ft9vX//r/J0eb4sPuOGGG2644YYb7s24b+Nrw316vN9+Pj3+2/NxywfccMMNN9xwww33S7inE6jbWLZ9vv39qZsJ3HDDDTfccMMNN9xzuG8nPNOL8a+L5XYRCG644YYbbrjhhhvu93FPJ1BtD15N44cbbrjhhhtuuOGG+z7u6QRsejFsL9psT9jhhhtuuOGGG264fxF3+4ZZr2dft/sdbrjhhgduuL0O9/e40zH9oM/t8bYnsK8E3HDDDTfccMMN9ybc0wnFNKbXixrpxpypRqhwww033HDDDTfcm3GnH7a/Pfm3E962m8HpxdNys4AbbrjhhhtuuOHehHu6SDOdYN0uikw3s29vHDpVZIMbbrjhhhtuuOHehDt9QFI6QZnGN734002J4IYbbrjhhhtuuOHOHwraVkRoK0Ldnv90UyS44YYbbrjhhhtuuPuKLOkiSjpBbTs09unm83DDDTfccMMNN9yHcE9P7ulIN6Nva8qTPkBqKuCGG2644YYbbrg3405jPb3Yto237WbRtjkCbrjhhhtuuOGGeyPu6S9zu0iQfpAp/f/amuhUN8KEG2644YYbbrjhLvmdezqBa3sQ6vbn2zf4thWx4IYbbrjhhhtuuF/A3d48flujy+mmRen3TxXN4IYbbrjhhhtuuDfhbkuQ2hPS4xcp3HQoffOAG2644YYbbrjh/kXc04eUpg91bX0Y/9RiaNuscepmAzfccMMNN9xww70Zd1sRoH1zwm287YeqrtogDDfccMMNN9xwwx3CPZ0gbpm8qcV9OsFv2zBcvUEYbrjhhhtuuOGGewh328P26c0FbeN9LQFeXcSBG2644YYbbrjhPpRQth1I1P4gVdvi34YfbrjhhhtuuOGGG+785NwumqSLGtOLtf1mBTfccMMNN9xww/0i7rYmOa8VWW7jeS2hhhtuuOGGG2644YY73ziyffzbNm9sbRoEN9xwww033HDDvQl3OuF5vTFmukjUlsCfWkxwww033HDDDTfcm3CnH45PJ1TpizndCHR6PNHNCnDDDTfccMMNN9xLcLcVNW5jvo1jW7RghhtuuOGGG2644X4Z9/TFam/UeLuIdHu+XjkwC2644YYbbrjhhvtl3Oki0G0c6fG1bfidPuQWbrjhhhtuuOGG+0Xc24oE6cWV/nxbkWlVl1e44YYbbrjhhhvukt+5t23YTRd5bieQbYsxfb3ghhtuuOGGG264X8B9G8/05LVvqJ0qeqSKYLfGDzfccMMNN9xww/0S7vaLldqgOnWzaC9ypZr/ww033HDDDTfccMN9D/f0gUetF7c1oV1VxIEbbrjhhhtuuOGGO1I02F50eS1BhxtuuOGGG2644f4F3NNFjdbJTI03fWDV7esLN9xwww033HDD/Yu4pzcIpy9+OgHe1hy/JeGEG2644YYbbrjh3oRbiI0Bt4BbCLiFgFsIuIWAWwi4BdxCwC1EYfwHWtibYQ08HCcAAAAASUVORK5CYII=',
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
