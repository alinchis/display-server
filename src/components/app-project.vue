<template>
  <div class="project_view">
    <h1>{{ msg }}</h1>
    <ol v-for="project in projects">
      <li>{{project.name}}</li>
    </ol>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-project',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapState([
    'projects'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
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
</style>
