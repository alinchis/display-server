<template>
  <div id="writing-right">
    <div class="writing-tools">visual sources</div>
    <static-tools></static-tools>
    <dynamic-tools></dynamic-tools>
    <footer>
      <settings-button class="settings-button" @buttonClick="openSettings" title="Writing Sources Settings"></settings-button>
    </footer>
  </div>
</template>

<script>
import staticTools from './right-statictools'
import dynamicTools from './right-dynamictools'
// import settings-button
import settingsButton from '../../stage-misc/stage-footer-settings-button'

export default {
  name: 'writing-right',
  components: {
    staticTools,
    dynamicTools,
    settingsButton
  },
  methods: {
    openSettings () {
      console.log('@project_stage.writer.rightPalette: OPEN settings')
    }
  },
  computed: {}
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
.sources-bar {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
}
.sources-item {
  margin-top: 12px;
  padding: 0px;
  text-align: left;
  width: 140px;
}
.sources-item > img {
  border: 1px solid rgb(50, 50, 50);
  color: gray;
  height: 98px;
  padding: 0px;
  width: 138px;
}
.sources-item > p {
  color: rgb(200, 200, 200);;
  font-family: sans-serif;
  font-size: 0.5em;
  margin: 0px;
}
.sources-title {
  color: gray;
  font-family: sans-serif;
  font-size: 0.8em;
  text-align: center;
  padding-top: 10px;
}
#writing-right {
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
