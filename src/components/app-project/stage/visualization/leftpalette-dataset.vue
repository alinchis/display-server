<template>
  <div id="leftpalette-dataset">
    <p>dataset</p>
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
  name: 'leftpalette-dataset',
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
#leftpalette-dataset {
  height: 400px;
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
