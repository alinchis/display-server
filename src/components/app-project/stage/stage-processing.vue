<template>
  <div id="stage-processing">
    <workflow-container></workflow-container>
    <code-container></code-container>
  </div>
</template>

<script>
import workflowContainer from './processing/processing-workflow'
import codeContainer from './processing/processing-code'

export default {
  name: 'stage-processing',
  components: {
    workflowContainer,
    codeContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/css">
#stage-processing {
  background-color: rgb(55, 55, 55);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>
