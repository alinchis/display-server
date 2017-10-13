<template>
  <div id="workarea">
    <quill-editor
      class="qeditor"
      ref="myQuillEditor"
      :content="this.paperContent"
      :options="editorOption"
      @change="onEditorChange($event)">
    </quill-editor>
    <footer>
      <settings-button class="settings-button" @buttonClick="openSettings" title="Writing Stage Settings"></settings-button>
    </footer>
  </div>
</template>

<script>
import settingsButton from '../assets/stage-footer-settings-button'
// load the Quill Editor
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'app-project-stage-view-writing-workarea',
  components: {
    settingsButton,
    quillEditor
  },
  data () {
    return {
      content: this.paperContent,
      editorOption: {
        // some quill options
        modules: {
        },
        theme: 'snow'
      }
    }
  },
  // if you need to manually control the data synchronization, parent component needs to explicitly emit an event instead of relying on implicit binding
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange ({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
      this.content = html
    },
    openSettings () {
      console.log('@project_stage.writer.rightPalette: OPEN settings')
    }
  },
  // get the current quill instace object.
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    },
    paperContent () {
      return this.$store.getters.current_project.stages[5].paper[0].text
    }
  },
  mounted () {
    // you can use current editor object to do something(quill methods)
    console.log('this is current quill instance object', this.editor)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  align-items: center;
  background-color: rgb(35, 35, 35);
  border-top: 1px solid rgb(60, 60, 60);
  display: flex;
  flex-direction: row;
  max-height: 20px;
  min-height: 20px;
  justify-content: left;
  width: 100%;
  z-index: 70;
}
.settings-button {
  margin-left: 15px;
}
.qeditor {
  background-color: white;
  height: 100%;
  margin: 20px 0;
  width: 744px;
}
#workarea {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
</style>
