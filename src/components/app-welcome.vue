<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'app-welcome',
  data () {
    return {
      title: 'Mjollnir SWS',
      msg: 'one tool for working with spatial data'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/css">
h1 {
  font-size: 5em;
  margin-top: 150px;
}
h2 {
  font-size: 1.65em;
}
html {
    overflow: scroll;
    overflow-x: hidden;
}
</style>
