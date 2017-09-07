<template>
  <div id="stage_questions_left">
    <h2>Paper Title</h2>
    <p>Provide a title for your work. Try to keep it short and avoid being to general. Do not worry, it can be modified at any time.</p>
    <div class="textarea-container">
      <textarea class="text-input" placeholder="Write your title" rows="2">
        {{this.title}}
      </textarea>
      <div class="textarea-counter">{{this.countWords(this.title)}} words / {{this.countChars(this.title)}} characters</div>
    </div>

    <h2>Research Idea</h2>
    <p>Try to describe your starting idea in a short, concise manner.
    <div class="textarea-container">
      <textarea class="text-input" placeholder="Write your idea" rows="10">
        {{this.abstract}}
      </textarea>
      <div class="textarea-counter">{{this.countWords(this.abstract)}} words / {{this.countChars(this.abstract)}} characters</div>
    </div>

    <h2>Keywords</h2>
    <p>Please use keywords to provide information about your work for searching and indexing purposes.</p>
    <keywords-box :keywords="this.$props.stage_data.keywords"></keywords-box>
  </div>
</template>

<script>
// import keyword component
import KeywordsBox from '../assets/stage-view-questions-keywords'

export default {
  name: 'app-project-stage-view-questions-left',
  props: ['stage_data'],
  components: {
    'keywords-box': KeywordsBox
  },
  methods: {
    countChars (s) {
      return s.replace(/\s/g, '').length
    },
    countWords (s) {
      s = s.replace(/(^\s*)|(\s*$)/gi, '')
      s = s.replace(/[ ]{2,}/gi, ' ')
      s = s.replace(/\n /, '\n')
      if (s.length === 0) {
        return 0
      } else {
        return s.split(' ').length
      }
    }
  },
  computed: {
    title () {
      return this.$props.stage_data.title
    },
    abstract () {
      return this.$props.stage_data.abstract
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
p {
  margin: 0px;
  line-height: 1.5;
}
.textarea-container {
  background-color: #3162a3;
  margin-top: 10px;
  padding: 10px;
}
.textarea-counter {
  border-top: 1px solid black;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.011em;
  line-height: 20px;
  text-align: right;
}
.text-input {
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
  white-space:
  ;
}
#stage_questions_left {
  border-right: 1px solid rgb(70, 70, 70);
  display: block;
  flex: 1;
  text-align: justify;
  text-justify: inter-word;
  min-height: 0px;
  padding: 0 10px 30px 20px;
  overflow-y: scroll;
  width: 50%;
}
</style>
