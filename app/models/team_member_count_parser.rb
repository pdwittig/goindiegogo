require 'nokogiri'
class TeamMemberCountParser
  def initialize
    @team_selector = '.i-team-members > li'
  end

  def parse(campaign)
    team_member_count = get_team_member_count(campaign.html_home)
    metric = campaign.metrics.find_or_create_by(metric_type: "team_member_count")
    metric.update_attributes(value: team_member_count)
  end

  private
  def get_team_member_count(campaign_html)
    campaign_html.css(@team_selector).length
  end
end