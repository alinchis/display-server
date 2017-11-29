<template>
  <div id="questions_right">
    <h2>Formulate Research Questions</h2>
    <p>Please provide three to five questions that your work must provide answers to. These can be edited if needed at any time. For your reference please find below the Data Science questions typology, arranged in order of difficulty.</p>

    <h3>1. Descriptive</h3>
    <p>Used to describe a dataset. The results can't be generalised and are usually applied to census data.</p>

    <h3>2. Exploratory</h3>
    <p>Used to determine unknown relations. They do not provide a definitive answer and are not used alone for generalisations /forecasts.</p>

    <h3>3. Inferential</h3>
    <p>Use a small population to describe characteristics about the entire population. It's the purpose of the statistical models, estimates both quantity and uncertainty.</p>

    <h3>4. Predictive</h3>
    <p>Refers to the use of data on some objects to make value predictions for other objects. Prediction does not imply causality. Works well for simple models with large quantity of data.</p>

    <h3>5. Causal</h3>
    <p>Used to determine change in a variable by changing another variable. It's refered as a golden rule in data science for analysing data. The result represents medium effects, not representative for all individuals in chosen population.</p>

    <h3>6. Mechanistic</h3>
    <p>The most complex type of question, tries to understand exact changes in variables that lead to changes in other variables for individual objects. They are very hard to infer, except the simple cases. Usually, they are modelled from a set of deterministic equations, and the random data component represents the measuring error. If the equations are known, and the parametern are not, these can be inferred by data analysis.</p>

    <questions-box :questions="this.questions"></questions-box>

  </div>
</template>

<script>
// import the questions component
import questionsBox from './right-questionlist'

export default {
  name: 'questions-right',
  props: ['stage_data'],
  components: {
    'questions-box': questionsBox
  },
  computed: {
    questions () {
      return this.$props.stage_data.questions
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/css">
h2 {
  font-size: 1.3em;
  margin-bottom: 0.5em;
  margin-top: 1.5em;
}
h3 {
  font-size: 1em;
  margin-bottom: 0.2em;
  margin-top: 1em;
}
p {
  margin: 0px;
  line-height: 1.5;
}
.question-container {
  background-color: #3162a3;
  margin-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
}
.text-input {
  padding: 0px;
  width: 100%;
}
#questions_right {
  border-left: 1px solid rgb(70, 70, 70);
  display: block;
  flex: 1;
  text-align: justify;
  text-justify: inter-word;
  min-height: 0px;
  padding: 0 20px 30px 10px;
  overflow-y: scroll;
  width: 50%;
}
::-webkit-scrollbar {
  width: 0px;  /* remove scrollbar space */
  background: transparent;  /* optional: just make scrollbar invisible */
}
</style>
