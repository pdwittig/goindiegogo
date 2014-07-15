Chart.View = function() {

}

Chart.View.prototype = {
  render: function(data) {
    this.data = data;
    this.setSizing();
    this.setXScale();
    this.setYScale();
    this.createChart();
    this.populateWithData();  
  },

  setSizing: function() {
    this.margin = {top: 20, right: 30, bottom: 30, left: 40};
    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  },

  setXScale: function() {
    this.xScale = d3.scale.linear()
        .range([0, this.width])
        .domain([0, d3.max(this.data, function(d){ return d.perk_count })]);
  },

  setYScale: function(){
    this.yScale = d3.scale.linear()
        .range([this.height, 0])
        .domain([0, d3.max(this.data, function(d) { return d.funding_percent })]);
  },

  createChart: function() {
    this.chart = d3.select('.chart')
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append('g')
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  },

  populateWithData: function() {
    this.chart.selectAll('.point')
        .data(this.data)
      .enter().append('circle')
        .attr("class", "point")
        .attr("cx", function(d){ return this.xScale(d.perk_count); }.bind(this))
        .attr("cy", function(d){ return this.yScale(d.funding_percent); }.bind(this))
        .attr("r", "4");
  }
}