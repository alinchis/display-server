<template>
  <div id="stage-visualization-right">
    <footer>
      <settings-button class="settings-button" @buttonClick="openSettings" title="Writing Sources Settings"></settings-button>
    </footer>
  </div>
</template>

<script>
// import settings-button
import settingsButton from '../assets/stage-footer-settings-button'

export default {
  name: 'app-project-stage-view-visualization-right',
  components: {
    settingsButton
  },
  methods: {
    openSettings () {
      console.log('@project_stage.dataset.rightPalette: OPEN settings')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/css">
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
.panel-title {
  color: gray;
  font-family: sans-serif;
  font-size: 0.8em;
  text-align: center;
  padding-top: 10px;
}
#stage-visualization-right {
  background-color: rgb(55, 55, 55);
  border-left: 1px solid rgb(50, 50, 50);
  border-top: 1px solid rgb(50, 50, 50);
  display: flex;
  flex: none;
  flex-direction: column;
  justify-content: space-between;
  min-width: 160px;
}
</style>
