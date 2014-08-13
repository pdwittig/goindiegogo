window.onload = function(){
  var appController = new App.Controller();
  appController.bindEvents();
  
  var chartView = new Chart.View();
  var chartController = new Chart.Controller(chartView);
  chartController.bindMetricToggles()
  appController.registerChartController(chartController)
}