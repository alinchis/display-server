<template>
  <div id="code-container">
    <code-editor></code-editor>
    <code-console></code-console>
  </div>
</template>

<script>
import codeEditor from '../assets/stage-view-processing-code-editor'
import codeConsole from '../assets/stage-view-processing-code-console'

export default {
  name: 'app-project-stage-view-processing-code',
  components: {
    codeEditor,
    codeConsole
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/css">
#code-container {
  background-color: red;
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
}
</style>
