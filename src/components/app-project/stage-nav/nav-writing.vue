<template>
  <div class="button" v-on:click="tabClick" v-bind:class="{active_class: this.selected === this.$props.current_tab}" title="writing">
    <!-- Generated by IcoMoon.io -->
    <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 32 32">
      <title></title>
      <g id="stats-dots"></g>
      <path d="M31.818 9.122l-8.939-8.939c-0.292-0.292-0.676-0.226-0.855 0.146l-1.199 2.497 8.35 8.35 2.497-1.199c0.372-0.178 0.438-0.563 0.146-0.855z"></path>
      <path d="M19.231 4.231l-8.231 0.686c-0.547 0.068-1.002 0.184-1.159 0.899-0 0.001-0 0.001-0.001 0.002-2.232 10.721-9.84 21.183-9.84 21.183l1.793 1.793 8.5-8.5c-0.187-0.392-0.293-0.83-0.293-1.293 0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3c-0.463 0-0.902-0.105-1.293-0.293l-8.5 8.5 1.793 1.793c0 0 10.462-7.608 21.183-9.84 0.001-0 0.001-0 0.002-0.001 0.714-0.157 0.831-0.612 0.898-1.159l0.686-8.231-8.538-8.539z"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'tab-writing',
  data () {
    return {
      selected: `this.$props.current_tab`
    }
  },
  props: ['current_tab'],
  methods: {
    tabClick: function () {
      console.log('@tab_button.writing: tabClick')
      this.selected = 'writing'
      this.$emit('tabClick', {stage: 'writing'})
    }
  }
}
</script>

<style scoped>
.active_class {
  background-color: rgb(55, 55, 55);
}
.button {
  display: block;
  float: right;
  height: 36px;
  margin: 0;
  stroke-width: 0;
  width: 40px;
}
.button {
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}
.button:hover {
  background-color: yellow;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}
.button:active {
  background-color: rgb(55, 55, 55);
}
.icon {
  display: block;
  fill: gray;
  height: 20px;
  margin: 8px 10px;
  stroke: rgb(80,80,80);
  stroke-width: 0;
  width: 20px;
}
</style>
