<template>
  <div id="app_header">
    <projects-tabs-container></projects-tabs-container>
    <div id="app_control_bar">
      <button-overview></button-overview>
      <button-settings></button-settings>
      <button-login @buttonClick="loadProjects()"></button-login>
    </div>
  </div>
</template>

<script>
import ButtonLogin from './app-header-button-login.vue'
import ButtonSettings from './app-header-button-settings.vue'
import ButtonOverview from './app-header-button-overview.vue'
import TabsList from './app-header-tabs-list.vue'

export default {
  name: 'app-header',
  components: {
    'button-login': ButtonLogin,
    'button-settings': ButtonSettings,
    'button-overview': ButtonOverview,
    'projects-tabs-container': TabsList
  },
  methods: {
    loadProjects: function () {
      this.$store.dispatch('LOAD_PROJECT_LIST')
      console.log(JSON.stringify(this.$store.projects))
    }
  }
}
</script>

<style scoped>
#app_header {
  background-color: rgb(45,45,45);
  border-bottom: 2px solid rgb(117,117,117);
  display: flex;
  height: 30px;
  width: 100%;
  z-index: 100;
}

#app_control_bar {
  background-color: transparent;
  color: rgb(117,117,117);
  display: inline-flex;
  float: right;
  height: 30px;
  justify-content: center;
  padding: auto;
  right: 0px;
  min-width: 240px;
}
</style>
