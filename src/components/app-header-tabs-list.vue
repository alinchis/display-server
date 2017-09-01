<template>
  <div id="projects_tab_container">
    <ol id="projects_tab_list" v-for="project in projects">
      <list-tab-item :project_name="project.name"></list-tab-item>
    </ol>
    <list-tab-item-add @click="addProject()"></list-tab-item-add>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ListTabItem from './app-header-tabs-list-item'
import ListTabItemAdd from './app-header-tabs-list-item-add'

export default {
  name: 'app-header-tabs-list',
  components: {
    'list-tab-item': ListTabItem,
    'list-tab-item-add': ListTabItemAdd
  },
  computed: mapState(['projects']),
  methods: {
    addProject () {
      this.$store.dispatch('ADD_NEW_PROJECT')
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

#new_project_tab {
  font-size: 18px;
  margin-left: 5px;
}

#projects_tab_container {
  background-color: rgb(45,45,45);
  display: inline-flex;
  height: 30px;
  justify-content: flex-start;
  margin: auto;
  padding: 0;
  width: 100%;
}

#projects_tab_list {
  list-style-type: none;
  height: 24px;
  margin: 0 0 0 5px;
  padding: 0;
}
</style>
