App.View = function() {
  this.campaign_form_selector = ".campaign_new"

}

App.View.prototype = {
  bindEvents: function(){
    $(document).on('ajax:success', this.handleCampaignResponse)
  },

  handleCampaignResponse: function(e, data){
    $('.container').append('<h3>Test</h3>')
    console.log(data)
  }

}