<template>
  <div id="projects_tab_item"
    v-on:click="clickTab"
    :class="[this.$props.tab_index === this.currentSelection ? 'active_class' : 'idle_class']">
    <div id="tab_name">{{project_name}}</div>
    <tab-cancel @clickButton="closeTab"></tab-cancel>
  </div>
</template>

<script>
import TabCancel from './header-tablist-item-close'

export default {
  name: 'header-tablist-item',
  components: {
    'tab-cancel': TabCancel
  },
  computed: {
    currentSelection () {
      return this.$store.getters.project_selected_tab_index
    }
  },
  props: ['project_name', 'project_id', 'selected', 'tab_index'],
  methods: {
    clickTab () {
      console.log(`@tab_item: clickTab project ${this.$props.project_id}`)
      this.$emit('clickTab', {id: this.$props.project_id, index: this.$props.tab_index})
    },
    closeTab () {
      console.log(`@tab_item: closeTab ${this.$props.tab_index}`)
      this.$emit('closeTab', this.$props.tab_index)
    },
    isSelected () {
      console.log('!!!tab_index ', this.$props.tab_index)
      return this.$props.tab_index === this.currentSelection
    }
  }
}
</script>

<style scoped>
.active_class {
  background-color: rgb(80, 80, 80);
}
.idle_class {
  background-color: rgb(80, 80, 80);
  opacity: 0.55;
}
#projects_tab_item {
  border-radius: 2px 10px 0 0;
  color: white;
  display: inline-flex;
  height: 26px;
  margin: 0 0 0 5px;
}
#projects_tab_item:hover {
  cursor: pointer;
  opacity: 1;
}
#tab_name {
  display: inline-block;
  margin: 3px 10px 0px 10px;
}
</style>
