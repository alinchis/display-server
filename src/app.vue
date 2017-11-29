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
  },
  mounted: function () {
    this.$store.dispatch('LOAD_DATASET')
    console.log(JSON.stringify(this.$store.projects))
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
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
html, body {
  height: 100%;
}
html {
  background-image: linear-gradient(rgb(85, 136, 204) 0%, rgb(49, 98, 163) 100%);

}
body {
  background-image: linear-gradient(0deg, transparent 0%, transparent 9px, rgba(255, 255, 255, 0.2) 9px, rgba(255, 255, 255, 0.2) 10px, transparent 10px, transparent 19px, rgba(255, 255, 255, 0.0980392) 19px, rgba(255, 255, 255, 0.0980392) 20px, transparent 20px, transparent 29px, rgba(255, 255, 255, 0.0980392) 29px, rgba(255, 255, 255, 0.0980392) 30px, transparent 30px, transparent 39px, rgba(255, 255, 255, 0.0980392) 39px, rgba(255, 255, 255, 0.0980392) 40px, transparent 40px, transparent 49px, rgba(255, 255, 255, 0.0980392) 49px, rgba(255, 255, 255, 0.0980392) 50px), linear-gradient(-90deg, transparent 0%, transparent 9px, rgba(255, 255, 255, 0.2) 9px, rgba(255, 255, 255, 0.2) 10px, transparent 10px, transparent 19px, rgba(255, 255, 255, 0.0980392) 19px, rgba(255, 255, 255, 0.0980392) 20px, transparent 20px, transparent 29px, rgba(255, 255, 255, 0.0980392) 29px, rgba(255, 255, 255, 0.0980392) 30px, transparent 30px, transparent 39px, rgba(255, 255, 255, 0.0980392) 39px, rgba(255, 255, 255, 0.0980392) 40px, transparent 40px, transparent 49px, rgba(255, 255, 255, 0.0980392) 49px, rgba(255, 255, 255, 0.0980392) 50px);
  background-size: 50px 50px;
}
body {
  transform: perspective(1400px) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transform-style: preserve-3d;
  background-color: transparent;
}
::-webkit-scrollbar {
  width: 0px;  /* remove scrollbar space */
  background: transparent;  /* optional: just make scrollbar invisible */
}
</style>
