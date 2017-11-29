<template>
  <div id="questions-textarea-container">
    <div id="questions-textarea">{{project_name}}</div>
    <div id="textarea-counter"></div>
  </div>
</template>

<script>
export default {
  name: 'stage-view-questions-textarea',
  computed: {
    currentSelection () {
    }
  },
  data () {
    return {
    }
  },
  props: ['project_name', 'project_id', 'selected', 'tab_index'],
  methods: {
  }
}
</script>

<style scoped>
</style>
