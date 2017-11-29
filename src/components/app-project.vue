<template>
  <div id="app-project">
    <stage-nav @setActiveTab="changeStage" :current_view="this.currentStage"></stage-nav>
    <component v-bind:is="currentStage" class="stage_view"></component>
  </div>
</template>

<script>
// import tablist component
import StageNav from './app-project/stage-nav'

// import view components
import ViewQuestions from './app-project/stage/stage-questions'
import ViewDataset from './app-project/stage/stage-dataset'
import ViewAquisition from './app-project/stage/stage-aquisition'
import ViewProcessing from './app-project/stage/stage-processing'
import ViewVisualization from './app-project/stage/stage-visualization'
import ViewWriting from './app-project/stage/stage-writing'
import ViewSharing from './app-project/stage/stage-sharing'
import ViewMessaging from './app-project/stage/stage-messaging'

export default {
  name: 'app-project',
  components: {
    'stage-nav': StageNav,
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
#app-project {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}
</style>
