<template>
  <div id="stage-nav">
    <ol id="nav-tabs">
      <tab-questions @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-questions>
      <tab-dataset @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-dataset>
      <tab-aquisition @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-aquisition>
      <tab-processing @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-processing>
      <tab-visualization @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-visualization>
      <tab-writing @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-writing>
      <tab-sharing @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-sharing>
      <tab-messaging @tabClick="setActiveTab" :current_tab="this.$props.current_view"></tab-messaging>
    </ol>
    <footer class="nav-footer">
      <settings-button @buttonClick="openSettings" title="Stage Nav Settings"></settings-button>
    </footer>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

// import stage tabs
import TabQuestions from './stage-nav/nav-questions'
import TabDataset from './stage-nav/nav-dataset'
import TabAquisition from './stage-nav/nav-aquisition'
import TabProcesssing from './stage-nav/nav-processing'
import TabVisualization from './stage-nav/nav-visualization'
import TabWriting from './stage-nav/nav-writing'
import TabSharing from './stage-nav/nav-sharing'
import TabMessaging from './stage-nav/nav-messaging'

// import settings button
import SettingsButton from './stage-misc/stage-footer-settings-button'

export default {
  name: 'stage-nav',
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
#stage-nav {
  border-right: 1px solid rgb(60, 60, 60);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40px;
}
::-webkit-scrollbar {
  width: 0px;  /* remove scrollbar space */
  background: transparent;  /* optional: just make scrollbar invisible */
}
#nav-tabs {
  background-color: rgb(40, 40, 40);
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0;
}
.nav-footer {
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
