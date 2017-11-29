<template>
  <div id="map">
    <vl-map>
      <vl-view :center="center" :zoom="zoom" :rotation="rotation" @change="updateMapView"/>
      <vl-geoloc @change="updateGeoloc"/>

      <!-- base layers -->
      <vl-layer-tile id="osm" :visible="layers.osm">
        <vl-source-osm/>
      </vl-layer-tile>
      <!--// base layers -->

      <!-- Tile WMS -->
      <vl-layer-tile id="wms" :visible="layers.wms">
        <vl-source-wms url="https://ahocevar.com/geoserver/wms" layers="topp:states"
                       :ext-params="{ TILED: true }" server-type="geoserver" />
      </vl-layer-tile>
      <!--// Tile WMS -->

      <!-- WMTS -->
      <vl-layer-tile id="wmts" :visible="layers.wmts">
        <vl-source-wmts
          url="https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/"
          layer-name="0" matrix-set="EPSG:3857" format="image/png" style-name="default"/>
      </vl-layer-tile>
      <!--// WMTS -->

      <!-- countries vector -->
      <vl-layer-vector id="countries" v-if="countries.length" :visible="layers.countries">
        <!-- layer level style defined as style function for complex styling  -->
        <vl-style-func :factory="countriesStyleFunc">
          <!-- fallback styles -->
          <vl-style-container>
            <vl-style-stroke color="#8856a7" :width="2"/>
            <vl-style-fill :color="[158, 188, 218, 0.5]"/>
          </vl-style-container>
          <!--// fallback styles -->
        </vl-style-func>
        <!--// layer level style -->

        <!-- pass features as array for the huge or server loading datasets -->
        <vl-source-vector :features="countries"/>
      </vl-layer-vector>
      <!--// countries vector -->

      <!-- pacman, use vl-style-func for advanced styling -->
      <vl-layer-vector id="pacman" v-if="pacman.length" :visible="layers.pacman">
        <vl-style-func :factory="pacmanStyleFunc"/>

        <vl-source-vector>
          <vl-feature v-for="feature in pacman" :key="feature.id" :id="feature.id" :data="feature.properties">
            <component :is="geometryTypeToCompName(feature.geometry.type)" :coordinates="feature.geometry.coordinates"/>
          </vl-feature>
        </vl-source-vector>
      </vl-layer-vector>
      <!--// pacman -->

      <!-- current position overlay -->
      <vl-layer-vector v-if="position.length" id="position-layer" :z-index="100" :overlay="true">
        <vl-style-container>
          <vl-style-icon src="../../static/img/marker.png" :scale="0.3" :anchor="[0.5, 1]"/>
        </vl-style-container>

        <vl-source-vector>
          <vl-feature id="my-position" :z-index="999">
            <vl-geom-point :coordinates="position"/>
          </vl-feature>
        </vl-source-vector>
      </vl-layer-vector>
      <!--// current position overlay -->
    </vl-map>
  </div>
</template>

<script>
import { kebabCase, forEach, get, set } from 'lodash/fp'

export default {
  name: 'stage-view-visualization-workarea-map',
  data () {
    return {
      zoom: 2,
      center: [ 0, 0 ],
      rotation: 0,
      selected: [],
      countries: [],
      pacman: require('../../static/GIS/gis.json').features,
      position: [],
      layers: {
        osm: false,
        countries: false,
        pacman: true,
        wms: false,
        wmts: false
      },
      sourceCode: false
    }
  },
  computed: {
    // vectorMap () {
    //   var data = require('../../static/GIS/gis.osm_transport_free_1.geojson')
    //   console.log('geojson: ', data)
    //   return data
    // }
  },
  methods: {
    geometryTypeToCompName (type) {
      return 'vl-geom-' + kebabCase(type)
    },
    updateMapView ({ center, zoom, rotation }) {
      this.center = center
      this.zoom = zoom
      this.rotation = rotation
    },
    updateGeoloc ({ position }) {
      this.position = position
    },
    toggleLayer (layer) {
      this.layers[ layer ] = !this.layers[ layer ]
    },
    async loadData () {
      const res = await fetch('https://openlayers.org/en/latest/examples/data/geojson/countries.geojson')
      const geomCollection = await res.json()
      this.countries = geomCollection.features.map((feature, i) => {
        feature.properties = {
          ...feature.properties,
          color: i % 2 === 0 ? [ 49, 163, 84, 0.35 ] : [ 166, 100, 255, 0.35 ],
          selectColor: (i + 1) % 2 !== 0 ? [ 221, 28, 119, 0.5 ] : undefined
        }

        return feature
      })

      return this.countries
    },
    countriesStyleFunc (s) {
      // first argument is an style helper. See https://github.com/ghettovoice/vuelayers/blob/master/src/ol-ext/style.js
      const stroke = s.stroke({
        strokeColor: '#8856a7',
        strokeWidth: 1
      })
      const styleName = 'default'
      const styleByFeature = {}

      return function __countriesStyleFunc ({ id, properties }) {
        let styles = false // get([ id, styleName ], styleByFeature)
        if (!styles) {
          styles = [
            s.style({
              stroke,
              fillColor: properties.color
            })
          ]

          Set([ id, styleName ], styles, styleByFeature)
        }

        return styles
      }
    },
    pacmanStyleFunc (s) {
      // first argument is an style helper. See https://github.com/ghettovoice/vuelayers/blob/master/src/ol-ext/style.js
      const pacman = [
        s.style({
          strokeColor: '#DE9147',
          strokeWidth: 3,
          fillColor: [ 222, 189, 36, 0.8 ]
        })
      ]
      const path = [
        s.style({
          strokeColor: 'blue',
          strokeWidth: 1
        }),
        s.style({
          imageRadius: 5,
          imageFillColor: 'orange',
          geom ({ geometry }) {
            // geometry is an LineString, convert it to MultiPoint to style vertex
            // use turf.js for complex work with geometries
            return {
              ...geometry,
              type: 'MultiPoint'
            }
          }
        })
      ]
      const eye = [
        s.style({
          imageRadius: 6,
          imageFillColor: '#444444'
        })
      ]

      return function __pacmanStyleFunc (feature) {
        switch (feature.id) {
          case 'pacman':
            return pacman
          case 'pacman-path':
            return path
          case 'pacman-eye':
            return eye
        }
      }
    }
  },
  created () {
    this.loadData()
  }
}
</script>
<style>
/* CSS file needs to be imported separately. */
/* @import "~vuelayers/dist/vuelayers."; */
@import "https://unpkg.com/vuelayers@latest/dist/vuelayers.umd.min.css";

#map {
  background-color: rgb(60, 60, 60);
  height: 100%;
  width: 100%;
}
</style>
