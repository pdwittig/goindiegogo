require 'nokogiri'
class FundingCurrencyRaisedParser
 def initialize
    @funding_total_selector = '.i-balance > .currency > span'
  end

  def parse(campaign)
    funding_total = get_funding_total(campaign.html_base)
    metric = campaign.metrics.find_or_create_by(metric_type: "funding_total")
    metric.update_attributes(value: funding_total)
  end

  private
  def get_funding_total(campaign_html)
    campaign_html.css(@funding_total_selector).text.gsub(/[^\d]/,'').to_i
  end
end