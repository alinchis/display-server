<template>
  <div id="app-header">
    <projects-tablist></projects-tablist>
    <div id="app-control_bar">
      <button-overview></button-overview>
      <button-settings></button-settings>
      <button-login @buttonClick="loadTabs()"></button-login>
    </div>
  </div>
</template>

<script>
import ButtonLogin from './app-header/button-login.vue'
import ButtonSettings from './app-header/button-settings.vue'
import ButtonOverview from './app-header/button-overview.vue'
import TabsList from './app-header/tablist.vue'

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
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track-piece {
  background-color: transparent;
  -webkit-border-radius: 6px;
}
#app-header {
  background-color: rgb(40,40,40);
  border-bottom: 2px solid rgb(80, 80, 80);
  display: flex;
  flex-direction: row;
  min-height: 30px;
  width: 100%;
  z-index: 100;
}

#app-control_bar {
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
