<template>
  <div id="question-item">
    <div id="question-text"
      contentEditable=true
      data-text="Enter Keyword"
      @keyup.enter="addKeyword"
      @keyup.esc="clearInput"
      >{{this.questionText}}
    </div>
    <clear-text @clickButton="clearQuestion" @dblclickButton="deleteQuestion"></clear-text>
  </div>
</template>

<script>
// import clear item component
import clearText from './stage-view-questions-questions-item-clear'

export default {
  name: 'stage-view-questions-textarea',
  components: {
    'clear-text': clearText
  },
  computed: {
    questionIndex () {
      return this.$props.qindex
    },
    questionText () {
      return this.$store.getters.current_project.stages[0].questions[this.questionIndex]
    }
  },
  props: ['qindex'],
  methods: {
    clearQuestion () {
      console.log('@stage_questions.questions.item: clearQuestion', this.questionIndex)
      this.$emit('clearQuestion', this.questionIndex)
    },
    deleteQuestion () {
      console.log('@stage_questions.questions.item: deleteQuestion', this.questionIndex)
      this.$emit('deleteQuestion', this.questionIndex)
    }
  }
}
</script>

<style scoped>
[contentEditable=true]:empty:not(:focus):before {
    content:attr(data-text)
}
#add-question {
  background-color: #3162a3;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  padding: 10px;
  text-align: center;
}
#add-question:active {
  background-color: gray;
}
#add-question:hover {
  cursor: pointer;
}
#questions-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
}
#question-item {
  background-color: #3162a3;
  color: white;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  padding: 10px;
}
#question-text {
  background-color: #3162a3;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  overflow: auto;
  resize: vertical;
  text-align: justify;
  text-indent: 0px;
  width: 100%;
  white-space: normal;
}
</style>
