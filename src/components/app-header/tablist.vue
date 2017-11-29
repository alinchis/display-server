<template>
  <div id="tablist">
    <ol id="tablist-list">
      <tablist-item
        v-for="(project, index) in tabsList"
        :project_name="project.name"
        :project_id="project.id"
        :selected="project.selected"
        :tab_index="index"
        :key="project.id"
        @clickTab="setActiveTab"
        @closeTab="closeProject">
      </tablist-item>
    </ol>
    <tablist-item-add @click="addProject"></tablist-item-add>
  </div>
</template>

<script>

import TablistItem from './tablist-item'
import TablistItemAdd from './tablist-item-add'

export default {
  name: 'tablist',
  components: {
    'tablist-item': TablistItem,
    'tablist-item-add': TablistItemAdd
  },
  computed: {
    tabsList () {
      return this.$store.getters.projects_tablist
    }
  },
  methods: {
    addProject () {
      console.log('@app_header.tab_list: LOAD projects in tabs list')
      this.$store.dispatch('ADD_NEW_PROJECT')
    },
    closeProject (value) {
      console.log('@app_header.tab_list: CLOSE project ' + value)
      this.$store.dispatch('CLOSE_PROJECT_TAB', {index: value})
      if (this.$store.getters.projects_tablist.length === 0) {
        this.$router.push('/')
      }
    },
    setActiveTab (value) {
      console.log('@app_header.tab_list: SET active tab')
      this.$store.dispatch('SET_PROJECT_TAB_ACTIVE', {id: value.id, index: value.index})
      this.$router.push({
        path: '/project/' + value.id
      })
    }
  }
}
</script>

<style scoped>
#tablist {
  align-items: flex-end;
  background-color: rgb(40,40,40);
  display: flex;
  height: 100%;
  justify-content: flex-start;
  margin: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0;
  width: 100%;
}

#tablist-list {
  list-style-type: none;
  height: 24px;
  margin: 0 0 0 5px;
  padding: 0;
}
</style>
