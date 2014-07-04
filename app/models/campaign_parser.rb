require 'nokogiri'
require 'open-uri'

class CampaignParser
  def initialize(campaign)
    @campaign = campaign
    @parse_tasks = []
    load_tasks
  end

  def process_campaign
    read_campaign_html
    parse_campaign_metrics
  end

  private
  def read_campaign_html
    @campaign.html = Nokogiri::HTML(open(@campaign.url))
  end

  def parse_campaign_metrics
    @parse_tasks.each { |task| task.parse(@campaign) }
  end

  def load_tasks
    @parse_tasks << PerkCountParser.new
  end
end