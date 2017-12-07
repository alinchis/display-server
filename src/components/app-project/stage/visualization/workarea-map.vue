<template>
  <div id="workarea-map">
    <v-map :zoom="zoom" :center="center">

      <v-geojson-layer
        v-for="(item, index) in this.itemsList"
        v-if="item.visible"
        :geojson="baseMap[item.index]"
        :options="options"
      ></v-geojson-layer>
      <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
    </v-map>
  </div>
</template>

<script>
import vue2Leaflet from 'vue2-leaflet'
import axios from 'axios'

export default {
  name: 'workarea-map',
  data () {
    return {
      show: true,
      zoom: 7,
      center: [45.991, 25.154],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      options: {
        style: function () {
          return {
            weight: 2,
            color: '#888',
            opacity: 1,
            fillColor: '#eeefff',
            fillOpacity: 0.5
          }
        }
      }
    }
  },
  components: {
    vMap: vue2Leaflet.Map,
    vTilelayer: vue2Leaflet.TileLayer,
    vGeojsonLayer: vue2Leaflet.GeoJSON
  },
  computed: {
    itemsList () {
      return this.$store.getters.visualizing_getmaplist
    },
    baseMap () {
      return this.$store.getters.dataset_getmaps
    }
  },
  methods: {},
  created () {
    // axios.get("https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson").then(response => {
    //   this.geotest = response.data;
    // })
  }
}

</script>
<style>
@import "~leaflet/dist/leaflet.css";

#workarea-map {
  background-color: rgb(60, 60, 60);
  height: 100%;
  margin: 0;
  width: 100%;
}
</style>
