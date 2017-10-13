<template>
  <svg width="500" height="300"></svg>
</template>

<script>
const d3 = require('d3');
const topojson = require('topojson')
export default {
  mounted: function() {
    var v = this;
    var svg = d3.select(this.$el);
    var width = +svg.attr('width');
    var height = +svg.attr('height');
    var projection = d3.geoAlbersUsa();
    var path = d3.geoPath().projection(projection);
    d3.json("https://github.com/markmarkoh/datamaps/blob/master/dist/datamaps.usa.min.js", function(error, us) {
      var g = svg.append('g');
        g
          .selectAll('.state')
          .data(topojson.feature(us, us.objects.usStates).features)
          .enter()
          .append("path")
          .attr("class", "state")
          .attr("d", path)
          .on('mouseover', function(d) {
            v.$emit('stateSelected', d.properties.STATE_ABBR)
      		})
          .on('mouseout', function(d) {
            v.$emit('stateDeselected', d.properties.STATE_ABBR)
          })
      g.attr('transform', 'scale(0.57)')
    });
  }
}
</script>

<style>
.state {
  fill: #ccc;
  stroke: #fff;
}
.state:hover {
  fill: steelblue;
}
</style>
