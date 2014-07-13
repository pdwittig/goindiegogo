Chart.Controller = function(view){
  this.defaultMetrics = { metrics: { metric_x: "perk_count",
                                     metric_y: "funding_percent"}};
  this.view = view 
}

Chart.Controller.prototype = {
  load: function() {
    console.log("Chart.Controller.Load()");
    this.fetchMetricData(this.defaultMetrics);
  },

  fetchMetricData: function(metrics) {
    var options = {
      type: 'get',
      url: '/campaigns',
      data: metrics
    }
    var request = $.ajax(options)
    request.done(this.renderChart.bind(this))
  },

  renderChart: function(data) {
   debugger
  }
}