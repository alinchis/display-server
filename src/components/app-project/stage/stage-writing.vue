<template>
  <div id="stage-writing">
    <left-palette></left-palette>
    <workarea></workarea>
    <right-palette></right-palette>
  </div>
</template>

<script>
import leftPalette from './writing/writing-left'
import rightPalette from './writing/writing-right'
import workarea from './writing/writing-workarea'

export default {
  name: 'stage-writing',
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
