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
    <simple-list :itemlist="itemsList" @clickItem="toggleView"></simple-list>
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
      var maplist = this.$store.getters.visualizing_getmaplist.reverse()
      return maplist
    }
  },
  methods: {
    toggleView (value) {
      console.log(`@project_visualizing: toggle item show - ${value}`)
      this.$store.dispatch('VISUALIZING_ITEM_TOGGLE', value)
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
