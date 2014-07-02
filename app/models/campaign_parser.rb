require 'nokogiri'
require 'open-uri'

class CampaignParser
  def initialize campaign
    @campaign = campaign
    @parse_tasks = []
    load_tasks
  end

  def process_campaign
    read_campaign_html
    parse_campaign_metrics
  end

  private
  def read_campaign_data
    @campaign.html = Nokogiri::HTML(open(@campaign.url))
  end

  def parse_campaign_data
    @parsing_tasks.each { |task| task.parse }
  end

  def load_tasks
    @parsing_tasks << SocialImpactParser.new
  end
end