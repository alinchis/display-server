<template>
  <div id="processing-code">
    <code-editor></code-editor>
    <code-console></code-console>
  </div>
</template>

<script>
import codeEditor from './code-editor'
import codeConsole from './code-console'

export default {
  name: 'processing-code',
  components: {
    codeEditor,
    codeConsole
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/css">
#processing-code {
  background-color: red;
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
}
</style>
