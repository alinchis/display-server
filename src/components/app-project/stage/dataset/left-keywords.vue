<template>
  <div id="left-keywords">
    <p>keywords</p>
    <buttons-bar
      @addItem=""
      @deleteItem=""
      @editItem=""
      @importItem=""
      @exportItem="">
    </buttons-bar>
    <simple-list :itemlist="itemsList"></simple-list>
  </div>
</template>

<script>
import buttonsBar from '../../stage-misc/stage-sides-buttonsbar'
import simpleList from '../../stage-misc/stage-sides-simplelist'

export default {
  name: 'left-keywords',
  components: {
    buttonsBar,
    simpleList
  },
  computed: {
    itemsList () {
      return this.$store.getters.current_project.stages[0].keywords
    }
  }
}
</script>

<style scoped>
#left-keywords {
  height: 100%;
  margin: 5px;
}
p {
  color: gray;
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  text-align: left;
}
</style>
