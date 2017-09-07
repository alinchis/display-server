<template>
  <div id="questions-container">
    <questions-item
      v-for="(question, index) in questionList"
      :key="index"
      :qindex="index"
      :question_text="question"
      @clearQuestion="clearQuestionItem"
      @deleteQuestion="deleteQuestionItem">
    </questions-item>
    <div v-if="this.maxQuestions" id="add-question" v-on:click="addQuestion">+</div>
  </div>
</template>

<script>
// import clear item component
import questionsItem from './stage-view-questions-questions-item'

export default {
  name: 'stage-view-questions-textarea',
  components: {
    'questions-item': questionsItem
  },
  computed: {
    questionList () {
      return this.$props.questions
    },
    maxQuestions () {
      return this.questionList.length < 5
    }
  },
  props: ['questions'],
  methods: {
    addQuestion () {
      console.log('@stage_questions.questions: addQuestion')
      this.$store.dispatch('ADD_QUESTION_ITEM')
    },
    clearQuestionItem (value) {
      console.log('@stage_questions.questions: clearQuestionItem', value)
      this.$store.dispatch('CLEAR_QUESTION_ITEM', {index: value})
    },
    deleteQuestionItem (value) {
      console.log('@stage_questions.questions: deleteQuestionItem', value)
      this.$store.dispatch('DELETE_QUESTION_ITEM', {index: value})
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
