Chart.View = function() {

}

Chart.View.prototype = {
  render: function(data) {
    this.chartData = data
    this.setSizing();
    this.setXScale();
    this.setYscale();
    this.createChart();
    this.populateWithData();  
  },

  setSizing: function() {
    this.margin = {top: 20, right: 30, bottom: 30, left: 40};
    this.width = 960 - thi.margin.left - this.margin.right;
    this.height = 500 - margin.top - margin.bottom;
  },

  setXScale: function()
    this.xScale = d3.scale.linear()
        .range([0, width])
        .domain([0, d3.max(this.data, function(d){ return d.perk_count })]);
  },

  setYScale: function(){
    this.yScale = d3.scale.linear()
        .range([this.height, 0])
        .domain([0, d3.max(this.data, function(d) { return d.funding_percent })]);
  },

  creatChart: function() {
    this.chart = d3.select('.chart')
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append('g')
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  },

  populateWithData: function() {
    chart.selectAll('.point')
        .data(data)
      .enter().append('circle')
        .attr("class", "point")
        .attr("x", function(d){ return x(d.perk_count); })
        .attr("y", function(d){ return y(d.funding_percent); })
        .attr("r". "2")
  }
}