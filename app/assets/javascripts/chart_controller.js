Chart.Controller = function(view){
  this.metrics = { metric_values: { metric_x: "perk_count",
                                    metric_y: "funding_percent"},
                   metric_labels: { metric_x: "Perk Count",
                                    metric_y: "Percent of Goal Raised"}};
  this.view = view
  this.campaignID = null 
}

Chart.Controller.prototype = {

  bindMetricToggles: function() {
    $('.chart-options').on('click', '.x-metric-toggle', this.handleXMetricToggle.bind(this))
    $('.chart-options').on('click', '.y-metric-toggle', this.handleYMetricToggle.bind(this))
  },

  load: function(campaignID) {
    if (campaignID) { this.campaignID = campaignID };
    this.clearChart();
    this.fetchMetricData();
  },

  fetchMetricData: function() {
    var options = {
      type: 'get',
      url: '/campaigns',
      data: this.metrics
    };
    var request = $.ajax(options);
    request.done(this.renderChart.bind(this));
  },

  renderChart: function(data) {
    $('.chart-example').empty()
    this.view.render(data, this.metrics.metric_labels, this.campaignID)
  },

  clearChart: function() {
    this.view.clearChart();
  },

  handleXMetricToggle: function(event) {
    event.preventDefault();
    this.metrics.metric_values.metric_x = event.target.dataset.metricValue;
    this.metrics.metric_labels.metric_x = event.target.dataset.metricLabel;
    this.updateToggleValue('#metric-x-dropdown > .dropdown-value', this.metrics.metric_labels.metric_x);
    this.load();
  },

  handleYMetricToggle: function(event) {
    event.preventDefault();
    this.metrics.metric_values.metric_y = event.target.dataset.metricValue;
    this.metrics.metric_labels.metric_y = event.target.dataset.metricLabel;
    this.updateToggleValue('#metric-y-dropdown > .dropdown-value', this.metrics.metric_labels.metric_y);
    this.load();
  },

  updateToggleValue: function(selector, label) {
    $(selector).text(label);
  }


}