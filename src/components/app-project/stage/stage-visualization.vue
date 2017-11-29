<template>
  <div id="stage-visualization">
    <left-palette></left-palette>
    <workarea></workarea>
  </div>
</template>

<script>
import leftPalette from './visualization/visualization-leftpalette'
// import rightPalette from './app-project-stage-view-visualization-right'
import workarea from './visualization/visualization-workarea'

export default {
  name: 'stage-visualization',
  components: {
    leftPalette,
    // rightPalette,
    workarea
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/css">
#stage-visualization {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}
</style>
