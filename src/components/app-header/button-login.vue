<template>
  <div class="button" v-on:click="loadProjects" title="user menu">
    <!-- Generated by IcoMoon.io -->
    <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
    <title></title>
    <g id="icomoon-ignore">
    </g>
    <path d="M288 353.306v-26.39c35.249-19.864 64-69.386 64-118.916 0-79.529 0-144-96-144s-96 64.471-96 144c0 49.53 28.751 99.052 64 118.916v26.39c-108.551 8.874-192 62.21-192 126.694h448c0-64.484-83.449-117.82-192-126.694z"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'button-login',
  methods: {
    loadProjects: function () {
      console.log('@login_button: clickButton')
      this.$emit('buttonClick')
    }
  }
}
</script>

<style scoped>
.button {
  background-color: rgb(90,90,90);
  border-radius: 2px;
  display: inline-block;
  float: right;
  height: 24px;
  margin: 3px 5px;
  stroke-width: 0;
  width: 50px;
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
}
.button:active {
  background-color: gray;
}
.icon {
  display: inline-block;
  fill: rgb(0,0,0);
  height: 24px;
  stroke: rgb(80,80,80);
  stroke-width: 0;
  width: 24px;
}
</style>
