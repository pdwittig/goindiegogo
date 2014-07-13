window.onload = function(){
  var chartController = new Chart.Controller();
  var appController = new App.Controller(chartController);
  appController.bindEvents();
}