App.View = function() {
  this.campaign_form_selector = ".new_campaign"
  this.eventDelegate = {}
}

App.View.prototype = {
  bindEvents: function(){
    $(document).on('ajax:success', this.campaign_form_selector, this.handleCampaignResponse)
  },

  handleCampaignResponse: function(e, data){
    $('.container').append('<h3>Test</h3>')
    console.log(data)
  }
}