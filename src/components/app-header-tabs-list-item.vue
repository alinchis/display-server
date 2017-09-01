<template>
  <div id="projects_tab_item">
    <div id="tab_name">{{project_name}}</div>
    <tab-cancel></tab-cancel>
  </div>
</template>

<script>
import TabCancel from './app-header-tabs-list-item-close'

export default {
  name: 'app-header-tabs-list-item',
  components: {
    'tab-cancel': TabCancel
  },
  props: ['project_name']
}
</script>

<style scoped>
#projects_tab_item {
  background-color: rgb(90, 90, 90);
  border-radius: 2px 10px 0 0;
  color: white;
  display: inline-flex;
  height: 26px;
  margin-top: 4px;
}
#projects_tab_item:hover {
  cursor: pointer;
  background-color: rgb(120, 120, 120);
}
#tab_name {
  display: inline-block;
  margin: 3px 10px 0px 10px;
}
</style>
