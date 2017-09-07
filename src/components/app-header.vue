<template>
  <div id="app_header">
    <projects-tablist></projects-tablist>
    <div id="app_control_bar">
      <button-overview></button-overview>
      <button-settings></button-settings>
      <button-login @buttonClick="loadTabs()"></button-login>
    </div>
  </div>
</template>

<script>
import ButtonLogin from '../assets/header-button-login.vue'
import ButtonSettings from '../assets/header-button-settings.vue'
import ButtonOverview from '../assets/header-button-overview.vue'
import TabsList from './app-header-tablist.vue'

export default {
  name: 'app-header',
  components: {
    'button-login': ButtonLogin,
    'button-settings': ButtonSettings,
    'button-overview': ButtonOverview,
    'projects-tablist': TabsList
  },
  methods: {
    loadTabs: function () {
      // this.$router.push({ path: '/project/' + this.currentProject.id })
      console.log('@app-header: loadDataset')
    }
  }
}
</script>

<style scoped>
#app_header {
  background-color: rgb(40,40,40);
  border-bottom: 2px solid rgb(80, 80, 80);
  display: flex;
  flex-direction: row;
  min-height: 30px;
  width: 100%;
  z-index: 100;
}

#app_control_bar {
  background-color: transparent;
  color: rgb(117,117,117);
  display: flex;
  float: right;
  height: 100%;
  justify-content: center;
  right: 0px;
  min-width: 240px;
}
</style>
