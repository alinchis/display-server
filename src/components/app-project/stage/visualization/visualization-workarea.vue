<template>
  <div id="visualization-workarea">
    <workarea-map></workarea-map>
    <footer>
      <settings-button class="settings-button" @buttonClick="openSettings" title="Dataset Stage Settings"></settings-button>
    </footer>
  </div>
</template>

<script>
import workareaMap from './workarea-map'
import settingsButton from '../../stage-misc/stage-footer-settings-button'

export default {
  name: 'visualization-workarea',
  components: {
    workareaMap,
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
#visualization-workarea {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
</style>
