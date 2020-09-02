<template>
  <div id="app">
    <Header/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: mapActions(['getData']),
  mounted() {
    this.getData('BTCUSDT')
  },
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
