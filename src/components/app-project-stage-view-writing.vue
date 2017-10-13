<template>
  <div id="stage-writing">
    <left-palette></left-palette>
    <workarea></workarea>
    <right-palette></right-palette>
  </div>
</template>

<script>
import leftPalette from './app-project-stage-view-writing-left'
import rightPalette from './app-project-stage-view-writing-right'
import workarea from './app-project-stage-view-writing-workarea'

export default {
  name: 'app-project-stage-view-writing',
  components: {
    leftPalette,
    rightPalette,
    workarea
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#stage-writing {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}
</style>
