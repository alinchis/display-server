<template>
  <div id="map">
    <v-map :zoom="zoom" :center="center">
      <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
      <v-marker :lat-lng="marker"></v-marker>
    </v-map>
  </div>
</template>

<script>
import vue2Leaflet from 'vue2-leaflet'

export default {
  name: 'stage-view-visualization-workarea-map',
  data () {
    return {
      zoom: 13,
      center: [47.413220, -1.219482],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
    }
  },
  components: {
    vMap: vue2Leaflet.Map,
    vTilelayer: vue2Leaflet.TileLayer,
    vMarker: vue2Leaflet.Marker
  },
  computed: {},
  methods: {}
}
</script>
<style>
@import "~leaflet/dist/leaflet.css";

#map {
  background-color: rgb(60, 60, 60);
  height: 100%;
  margin: 0;
  width: 100%;
}
</style>
