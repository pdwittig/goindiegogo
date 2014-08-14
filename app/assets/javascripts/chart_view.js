Chart.View = function() {
  this.chartSelector = '.chart'
}

Chart.View.prototype = {
  render: function(data, metrics, campaignID) {
    this.data = data;
    this.campaignID = campaignID;
    this.setSizing();
    this.setXScale();
    this.setYScale();
    this.createXAxis(data,metrics);
    this.createYAxis();
    this.createChart();
    // this.appendLabel();
    this.appendXAxis(metrics.metric_x);
    this.appendYAxis(metrics.metric_y);
    this.populateWithData();
  },

  clearChart: function() {
    $(this.chartSelector).empty();
  },  

  setSizing: function() {
    this.margin = {top: 10, right: 30, bottom: 30, left: 100};
    this.width = $('.chart').width() - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  },

  setXScale: function(data,metrics) {
    this.xScale = d3.scale.linear()
        .range([0, this.width])
        .domain([0, d3.max(this.data, function(d){ return d.metric_x })]);
  },

  setYScale: function(){
    this.yScale = d3.scale.sqrt()
        .range([this.height, 0])
        .domain([0, d3.max(this.data, function(d) { return d.metric_y })]);
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

  appendXAxis: function(xLabel) {
    this.chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + this.height + ")")
        .call(this.xAxis)
      .append("text")
        .attr("x", this.width)
        .attr("dy", "-1em")
        .style("text-anchor", "end")
        .text(xLabel);
  },

  appendYAxis: function(yLabel) {
    this.chart.append("g")
        .attr("class", "y axis")
        .call(this.yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "1em")
        .style("text-anchor", "end")
        .text(yLabel);
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
        .attr("cx", function(d){ return this.xScale(d.metric_x); }.bind(this))
        .attr("cy", function(d){ return this.yScale(d.metric_y); }.bind(this))
        .attr("r", "4")
      .filter(function(d) { return d.campaign_id === this.campaignID; }.bind(this))
        .attr("class", "current-campaign")
        .attr("r", "6");
  }
}