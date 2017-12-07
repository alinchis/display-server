<template>
  <div id="simple-list">
    <div
      class="list-item"
      v-for="(item, index) in this.itemsList"
      :class="{ selected: item.visible === true}"
      :key="item.name"
      :ref="index"
      v-on:click="clickItem(item)">
      {{item.name}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'stage-sides-simplelist',
  props: ['itemlist', 'selected'],
  computed: {
    itemsList () {
      return this.$props.itemlist
    }
  },
  methods: {
    clickItem (item) {
      console.log('@simpleList: clickItem', item)
      this.$emit('clickItem', item.index)
    }
  }
}
</script>

<style scoped>
.list-item {
  cursor: pointer;
  font-size: 12px;
  padding: 2px;
  text-align: left;
}
.selected {
  background-color: rgb(250, 250, 250);
}
#simple-list {
  background-color: rgb(200, 200, 200);
  color: black;
  flex-grow: 1;
  height: 100%;
  padding: 5px;
}
</style>
