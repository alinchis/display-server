<template>
  <div id="stage_questions">
    <div id="questions_container">
      <left-side :stage_data="stageData"></left-side>
      <right-side :stage_data="stageData"></right-side>
    </div>
    <footer>
      <settings-button class="settings-button" @buttonClick="openSettings" title="Questions Stage Settings"></settings-button>
    </footer>
  </div>
</template>

<script>
// import components
import LeftSide from './app-project-stage-view-questions-left'
import RightSide from './app-project-stage-view-questions-right'

// import settings button
import SettingsButton from '../assets/stage-footer-settings-button'

export default {
  name: 'app-project-stage-view-questions',
  components: {
    'left-side': LeftSide,
    'right-side': RightSide,
    'settings-button': SettingsButton
  },
  computed: {
    stageData () {
      return this.$store.getters.current_project.stages[0]
    }
  },
  methods: {
    openSettings () {
      console.log('@project_stage.questions: OPEN settings')
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
#stage_questions {
  background-color: rgb(55, 55, 55);
  color: rgb(200, 200, 200);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 0;
  width: 100%;
}
#questions_container {
  display: flex;
  flex-direction: row;
}
</style>
