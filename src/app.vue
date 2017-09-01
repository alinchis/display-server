<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/app-header.vue'

export default {
  name: 'app',
  components: {
    'app-header': AppHeader
  }
  // mounted: function () {
  //   this.$store.dispatch('LOAD_PROJECT_LIST')
  //   console.log(JSON.stringify(this.$store.projects))
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  display: block;
  margin: 0;
  padding: 0;
}
p {
  margin: 0px;
}
h1 {
  margin: 0px;
}
h2 {
  margin: 0px;
}
h3 {
  margin: 0px;
}
</style>
