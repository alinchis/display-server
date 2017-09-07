<template>
  <div id="project_view">
    <stage-tablist @setActiveTab="changeStage" :current_view="this.currentStage"></stage-tablist>
    <component v-bind:is="currentStage" class="stage_view"></component>
  </div>
</template>

<script>
// import tablist component
import StageTablist from './app-project-stage-tablist'

// import view components
import ViewQuestions from './app-project-stage-view-questions'
import ViewDataset from './app-project-stage-view-dataset'
import ViewAquisition from './app-project-stage-view-aquisition'
import ViewProcessing from './app-project-stage-view-processing'
import ViewVisualization from './app-project-stage-view-visualization'
import ViewWriting from './app-project-stage-view-writing'
import ViewSharing from './app-project-stage-view-sharing'
import ViewMessaging from './app-project-stage-view-messaging'

export default {
  name: 'app-project',
  components: {
    'stage-tablist': StageTablist,
    'questions': ViewQuestions,
    'dataset': ViewDataset,
    'aquisition': ViewAquisition,
    'processing': ViewProcessing,
    'visualization': ViewVisualization,
    'writing': ViewWriting,
    'sharing': ViewSharing,
    'messaging': ViewMessaging
  },
  computed: {
    currentProject () {
      return this.$store.getters.current_project
    },
    currentStage () {
      return this.$store.getters.project_selected_stage
    }
  },
  methods: {
    changeStage (value) {
      console.log(`@project_view: SET active stage - ${value.stage}`)
      this.$store.dispatch('CHANGE_STAGE_TAB', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/css">
#project_view {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}
</style>
