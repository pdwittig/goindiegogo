App.Controller = function(chartController) {
  this.campaign_form_selector = ".new_campaign";
  this.chartController = chartController;
}

App.Controller.prototype = {
  bindEvents: function(){
    $(document).on('ajax:success', this.campaign_form_selector, this.handleCampaignResponse.bind(this));
  },

  handleCampaignResponse: function(e, data){
    this.chartController.load();  
  }
}


