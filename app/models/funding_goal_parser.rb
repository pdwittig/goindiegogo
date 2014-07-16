require 'nokogiri'
class FundingGoalParser
 def initialize
    @goal_selector = '.i-raised > .currency > span'
  end

  def parse(campaign)
    funding_goal = get_funding_goal(campaign.html_base)
    metric = campaign.metrics.find_or_create_by(metric_type: "funding_goal")
    metric.update_attributes(value: funding_goal)
  end

  private
  def get_funding_goal(campaign_html)
    campaign_html.css(@goal_selector).text.gsub(/[^\d]/,'').to_i
  end
end