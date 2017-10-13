<template>
  <div class="buttons-bar">
    <add-button @clickButton="addItem"></add-button>
    <delete-button @clickButton="deleteItem"></delete-button>
    <edit-button @clickButton="editItem"></edit-button>
    <import-button @clickButton="importItem"></import-button>
    <export-button @clickButton="exportItem"></export-button>
  </div>
</template>

<script>
import addButton from './stage-sides-buttonsbar-add'
import deleteButton from './stage-sides-buttonsbar-delete'
import editButton from './stage-sides-buttonsbar-edit'
import importButton from './stage-sides-buttonsbar-import'
import exportButton from './stage-sides-buttonsbar-export'

export default {
  name: 'stage-view-dataset-left-keywords',
  components: {
    addButton,
    deleteButton,
    editButton,
    importButton,
    exportButton
  },
  methods: {
    addItem: function () {
      console.log('@stage-sides.buttonsBar: addItem')
      this.$emit('addItem')
    },
    deleteItem: function () {
      console.log('@stage-sides.buttonsBar: deleteItem')
      this.$emit('deleteItem')
    },
    editItem: function () {
      console.log('@stage-sides.buttonsBar: editItem')
      this.$emit('editItem')
    },
    importItem: function () {
      console.log('@stage-sides.buttonsBar: importItem')
      this.$emit('importItem')
    },
    exportItem: function () {
      console.log('@stage-sides.buttonsBar: exportItem')
      this.$emit('exportItem')
    }
  }
}
</script>

<style scoped>
.buttons-bar {
  background-color: transparent;
  align-items: left;
  display: block;
  height: 20px;
  margin: 0 0 2px 5px;
}
</style>
