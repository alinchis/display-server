<template>
  <div class="keyword">
    <p class="keywords-text">{{this.$props.key_text}}</p>
    <item-delete @clickButton="deleteKeyword"></item-delete>
  </div>
</template>

<script>
// import close icon for keyword items
import ItemDelete from './stage-view-questions-keywords-item-delete'

export default {
  name: 'stage-view-questions-keywords',
  props: ['key_text', 'key_index'],
  components: {
    'item-delete': ItemDelete
  },
  computed: {
    currentSelection () {
    }
  },
  methods: {
    deleteKeyword () {
      this.$emit('deleteKey', this.$props.key_index)
      console.log(`@stage_questions.keywords.item: deleteKey ${this.$props.key_index}`)
    }
  }
}
</script>

<style scoped>
.keyword {
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  margin: 3px;
  position: relative;
}
.keywords-text {
  color: white;
  display: inline-block;
  font-size: 16px;
  padding-left: 5px;
  padding-top: 2px;
}
</style>
