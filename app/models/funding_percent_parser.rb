require 'nokogiri'
class FundingPercentParser
 def initialize
    @perk_selector = '.i-percent'
  end

  def parse(campaign)
    funding_percent = get_funding_percent(campaign.html_base)
    metric = campaign.metrics.find_or_create_by(metric_type: "funding_percent")
    metric.update_attributes(value: funding_percent)
  end

  private
  def get_funding_percent(campaign_html)
    campaign_html.css(@perk_selector).text.gsub(/[^\d]/,'').to_i
  end
end