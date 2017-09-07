<template>
  <div id="project-stage-tablist">
    <ol id="stage-tablist">
      <tab-questions @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-questions>
      <tab-dataset @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-dataset>
      <tab-aquisition @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-aquisition>
      <tab-processing @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-processing>
      <tab-visualization @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-visualization>
      <tab-writing @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-writing>
      <tab-sharing @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-sharing>
      <tab-messaging @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-messaging>
    </ol>
    <footer class="tablist-footer">
      <settings-button @buttonClick="openSettings" title="Stage Tablist Settings"></settings-button>
    </footer>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

// import stage tabs
import TabQuestions from '../assets/stage-tablist-tab-questions'
import TabDataset from '../assets/stage-tablist-tab-dataset'
import TabAquisition from '../assets/stage-tablist-tab-aquisition'
import TabProcesssing from '../assets/stage-tablist-tab-processing'
import TabVisualization from '../assets/stage-tablist-tab-visualization'
import TabWriting from '../assets/stage-tablist-tab-writing'
import TabSharing from '../assets/stage-tablist-tab-sharing'
import TabMessaging from '../assets/stage-tablist-tab-messaging'

// import settings button
import SettingsButton from '../assets/stage-footer-settings-button'

export default {
  name: 'app-project-stage-tablist',
  props: ['current_view'],
  components: {
    'tab-questions': TabQuestions,
    'tab-dataset': TabDataset,
    'tab-aquisition': TabAquisition,
    'tab-processing': TabProcesssing,
    'tab-visualization': TabVisualization,
    'tab-writing': TabWriting,
    'tab-sharing': TabSharing,
    'tab-messaging': TabMessaging,
    'settings-button': SettingsButton
  },
  methods: {
    setActiveTab (value) {
      console.log(`@project_stage.tablist: SET active stage - ${value.stage}`)
      this.$emit('setActiveTab', {stage: value.stage})
      // this.$store.dispatch('SET_PROJECT_STAGE_ACTIVE', {id: value.id, index: value.index})
      // this.$router.push({
      //   path: '/project/' + value.id
      // })
    },
    openSettings () {
      console.log('@project_stage.tablist: OPEN settings')
    }
  }
}
</script>

<style scoped>
#project-stage-tablist {
  border-right: 1px solid rgb(60, 60, 60);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40px;
}
#stage-tablist {
  background-color: rgb(40, 40, 40);
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0;
}
.tablist-footer {
  align-items: center;
  background-color: rgb(35, 35, 35);
  border-top: 1px solid rgb(60, 60, 60);
  display: flex;
  flex-direction: row;
  max-height: 20px;
  min-height: 20px;
  justify-content: center;
}
</style>
