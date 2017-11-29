<template>
  <div id="stage-dataset">
    <left-palette></left-palette>
    <workarea></workarea>
    <right-palette></right-palette>
  </div>
</template>

<script>
import leftPalette from './dataset/dataset-left'
import rightPalette from './dataset/dataset-right'
import workarea from './dataset/dataset-workarea'

export default {
  name: 'stage-dataset',
  components: {
    leftPalette,
    rightPalette,
    workarea
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/css">
#stage-dataset {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}
</style>
