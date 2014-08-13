App.Controller = function() {
  this.campaign_form_selector = ".new_campaign";
  this.chartController = {};
}

App.Controller.prototype = {
  bindEvents: function(){
    $(document).on('ajax:success', this.campaign_form_selector, this.handleCampaignResponse.bind(this));
    $(document).on('ajax:error', this.campaign_form_selector, this.handleErrors.bind(this));
  },

  handleCampaignResponse: function(e, data){
    $('.error-msg').text('') 
    this.chartController.load();  
  },

  handleErrors: function(e, data) {
    var error = JSON.parse(data.responseText).errors;
    $('.error-msg').text(error);
  },

  registerChartController: function(controller) {
    this.chartController = controller;
  }
}


