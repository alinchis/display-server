<template>
  <div id="workarea-box">
    <div class="workarea"></div>
    <footer>
      <settings-button class="settings-button" @buttonClick="openSettings" title="Dataset Stage Settings"></settings-button>
    </footer>
  </div>
</template>

<script>
import settingsButton from '../assets/stage-footer-settings-button'

export default {
  name: 'app-project-stage-view-dataset-workarea',
  components: {
    settingsButton
  },
  methods: {
    openSettings () {
      console.log('@project_stage.writer.rightPalette: OPEN settings')
    }
  },
  mounted () {
    // load stuff on mounted
    console.log('dataset workarea load stuff...')
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
.workarea {
  background-color: rgb(60, 60, 60);
  height: 100%;
  width: 100%;
}
#workarea-box {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
</style>
