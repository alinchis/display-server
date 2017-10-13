<template>
  <div id="code-editor">
    <codemirror
      v-if=true
      :value="code"
      :options="editorOption"
      ref="myEditor"
      @change="yourCodeChangeMethod">
    </codemirror>
  </div>
</template>

<script>
  // import codemirror component
  import { codemirror } from 'vue-codemirror-lite'
  // import codemirror modes
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/vue/vue')
  require('codemirror/mode/julia/julia')
  require('codemirror/mode/dockerfile/dockerfile')
  require('codemirror/mode/yaml/yaml')
  require('codemirror/mode/sql/sql')
  require('codemirror/mode/shell/shell')
  require('codemirror/mode/python/python')
  // import codemirror addons
  require('codemirror/addon/hint/show-hint.js')
  require('codemirror/addon/hint/show-hint.css')
  require('codemirror/addon/hint/javascript-hint.js')
  require('codemirror/theme/monokai.css')

  export default {
    components: {
      codemirror
    },
    data () {
      return {
        code: 'const str = "hello world"',
        editorOption: {
          mode: 'javascript',
          extraKeys: {'Ctrl-Space': 'autocomplete'},
          theme: 'monokai',
          lineNumbers: true
        }
      }
    },
    computed: {
      editor () {
        // get current editor object
        return this.$refs.myEditor.editor
      }
    },
    methods: {
      yourCodeChangeMethod () {
        console.log('chage code ...')
      }
    },
    mounted () {
      // use editor object...
      this.editor.focus()
      console.log('this is current editor object', this.editor)
    }
  }

</script>

<style>
#code-editor {
  background-color: red;
  display: inline-block;
  flex: 1 1 auto;
  width: 0;
}
.CodeMirror {
  height: 100%;
  width: 100%;
}
.CodeMirror-lines {
  text-align: left;
}
.CodeMirror-linenumbers {
  background-color: rgb(50, 50, 50);
}
</style>
