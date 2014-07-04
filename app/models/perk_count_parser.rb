require 'nokogiri'
class PerkCountParser

  def initialize
    @perk_selector = '.i-perks > a'
  end

  def parse(campaign)
    perk_count = get_perk_count(campaign.html)
    campaign.metrics.create metric_type: "perk_count", value: perk_count
  end

  private
  def get_perk_count(campaign_html)
    p campaign_html.css(@perk_selector).length
  end
end