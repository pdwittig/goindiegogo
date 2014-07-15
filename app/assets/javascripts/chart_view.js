Chart.View = function() {

}

Chart.View.prototype = {
  render: function(data) {
    this.data = data;
    this.setSizing();
    this.setXScale();
    this.setYScale();
    this.createXAxis();
    this.createYAxis();
    this.createChart();
    this.appendLabel();
    this.appendXAxis();
    this.appendYAxis();
    this.populateWithData();  
  },

  setSizing: function() {
    this.margin = {top: 40, right: 30, bottom: 30, left: 100};
    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  },

  setXScale: function() {
    this.xScale = d3.scale.linear()
        .range([0, this.width])
        .domain([0, d3.max(this.data, function(d){ return d.perk_count })]);
  },

  setYScale: function(){
    this.yScale = d3.scale.sqrt()
        .range([this.height, 0])
        .domain([0, d3.max(this.data, function(d) { return d.funding_percent })]);
  },

  createXAxis: function() {
    this.xAxis = d3.svg.axis()
        .scale(this.xScale)
        .orient("bottom")
        .ticks(10);
  },

  createYAxis: function() {
    this.yAxis = d3.svg.axis()
        .scale(this.yScale)
        .orient("left")
        .ticks(10);
  },

  createChart: function() {
    this.chart = d3.select('.chart')
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append('g')
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  },

  appendLabel: function() {
    this.chart.append("text")
        .attr("x", this.width / 2)
        .attr("y", 0 - this.margin.top / 2)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("fill", "#A5A7AA")
        .text("Perk Count v. Funding Percent")
  },

  appendXAxis: function() {
    this.chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + this.height + ")")
        .call(this.xAxis)
      .append("text")
        .attr("x", this.width)
        .attr("dy", "-1em")
        .style("text-anchor", "end")
        .text("Perk Count");
  },

  appendYAxis: function() {
    this.chart.append("g")
        .attr("class", "y axis")
        .call(this.yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "1em")
        .style("text-anchor", "end")
        .text("Funding Percent");
  },

  populateWithData: function() {
    this.chart.selectAll('.point')
        .data(this.data)
      .enter().append('circle')
        .attr("class", "point")
        .attr("cx", this.width / 2)
        .attr("cy", this.height / 2)
        .transition(30)
        .delay(500)
        .attr("cx", function(d){ return this.xScale(d.perk_count); }.bind(this))
        .attr("cy", function(d){ return this.yScale(d.funding_percent); }.bind(this))
        .attr("r", "4");
  }
}