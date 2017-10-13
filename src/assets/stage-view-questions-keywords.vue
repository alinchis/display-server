<template>
  <div class="keywords-box">
    <div id="text-input"
      contentEditable=true
      data-text="Enter Keyword"
      @keyup.enter="addKeyword"
      @keyup.esc="clearInput">
    </div>
    <div class="keywords-wrapper">
      <keyword-item
        v-for="(key, index) in this.$props.keywords"
        :key="key.id"
        :key_text="key"
        :key_index="index"
        @deleteKey="deleteKeyword">
      </keyword-item>
    </div>
  </div>
</template>

<script>
// import close icon for keyword items
import KeywordItem from './stage-view-questions-keywords-item'

export default {
  name: 'stage-view-questions-keywords',
  components: {
    'keyword-item': KeywordItem
  },
  props: ['keywords'],
  computed: {
    currentSelection () {
    }
  },
  methods: {
    addKeyword (event) {
      if (event.currentTarget.textContent.trim().length > 1) {
        this.keywords.push(event.currentTarget.textContent.trim())
        console.log('@stage-questions.keywords: ADD key > ', event.currentTarget.textContent.trim())
      } else {
        console.log('@stage-questions.keywords: ADD key fail, invalid word > ', event.currentTarget.textContent)
      }
      this.clearInput(event)
    },
    clearInput (event) {
      console.log('Clear keyword input')
      event.currentTarget.textContent = ''
    },
    deleteKeyword (index) {
      // this.$emit('deleteKeyword', index)
      this.keywords.splice(index, 1)
      console.log('@stage-view-questions.keywords: deleteKeyword at index ', index)
    }
  }
}
</script>

<style scoped>
[contentEditable=true]:empty:not(:focus):before {
    content:attr(data-text)
}
.keywords-box {
  background-color: #3162a3;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-top: 10px;
  padding: 10px;
}
.keywords-wrapper {
  border-top: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 10px;
}
#text-input {
  display: block;
  height: 22px;
  overflow: hidden;
}
</style>
