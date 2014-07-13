App.Controller = function(chartController) {
  this.campaign_form_selector = ".new_campaign"
  this.chartController = chartController
}

App.Controller.prototype = {
  bindEvents: function(){
    $(document).on('ajax:success', this.campaign_form_selector, this.handleCampaignResponse)
  },

  handleCampaignResponse: function(e, data){
    $('.container').append('<h3>Test</h3>')
    console.log(data)
}


