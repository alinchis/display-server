<template>
  <div class="right-statictools">
    <section class="tools-bar">
      <div class="tool-tabs">
        <div class="tool-tab" title="character">C</div>
        <div class="tool-tab" title="paragraph">¶</div>
        <div class="tool-tab" title="list">L</div>
        <div class="tool-tab" title="section">S</div>
        <div class="tool-tab" title="page">P</div>
        <div class="tool-tab" title="table">T</div>
      </div>
      <settings-button></settings-button>
    </section>

    <div class="tools-panels"></div>

  </div>
</template>

<script>
// import settings-button
import settingsButton from '../../stage-misc/stage-footer-settings-button'

export default {
  name: 'right-statictools',
  components: {
    settingsButton
  }
}
</script>

<style scoped>
.right-statictools {
  display: flex;
  flex-direction: row-reverse;
}
.tab-selected {
  background: rgb(55, 55, 55);
}
.tools-bar {
  display: flex;
  background-color: rgb(40, 40, 40);
  border-top: 1px solid rgb(50, 50, 50);
  display: flex;
  display: -webkit-flex; /* Safari */
  -webkit-flex-direction: column;
  flex-direction: column;
  flex-grow: 0;
  justify-content: space-between;
  min-height: 256px;
  width: 35px;
}
.tool-tabs {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.tool-tab {
  align-items: center;
  border-bottom: 1px solid rgb(50, 50, 50);
  color: gray;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  font-family: sans-serif;
  font-size: 1.8em;
  justify-content: center;
  min-height: 24px;
  padding: 0px;
  min-width: 24px;
}
.tools-footer {
  background-color: rgb(35, 35, 35);
  height: 20px;
  padding-left: 10px;
}
.tools-footer-button {
  width: 16px;
  height: 16px;
  padding: 0px;
  margin-left, margin-right: 12px;
  margin-top, margin-bottom: 6px;
}
.tools-panels {
  display: flex;
  flex: 1;
  min-height: 256px;
  width: 120px;
}
.panel-view {
  flex: 1;
}
</style>
