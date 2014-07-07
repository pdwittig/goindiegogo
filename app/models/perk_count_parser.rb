require 'nokogiri'
class PerkCountParser

  def initialize
    @perk_selector = '.perk'
  end

  def parse(campaign)
    perk_count = get_perk_count(campaign.html)
    metric = campaign.metrics.find_or_create_by(metric_type: "perk_count")
    metric.update_attributes(value: perk_count)
  end

  private
  def get_perk_count(campaign_html)
    campaign_html.css(@perk_selector).length
  end
end