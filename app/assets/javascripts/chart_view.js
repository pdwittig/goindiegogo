Chart.View = function() {

}

Chart.View.prototype = {
  render: function(data) {
    this.chartData = data
    this.setSizing();
    this.setXScale();
    this.setYscale();   
  },

  setSizing: function() {
    this.margin = {top: 20, right: 30, bottom: 30, left: 40};
    this.width = 960 - thi.margin.left - this.margin.right;
    this.height = 500 - margin.top - margin.bottom;
  },

  setXScale: function()

  },

  setYScale: function(){
    this.yScale = d3.scale.linear()
        .range([this.height, 0])
        .domain([0, d3.max(this.data, function(d) { return d.perk_count })]);
  }
}