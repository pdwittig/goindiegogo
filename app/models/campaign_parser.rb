require 'nokogiri'
require 'open-uri'

class CampaignParser
  def initialize(campaign)
    @campaign = campaign
    @parse_tasks = []
    load_tasks
  end

  def parse
    read_html
    parse_metrics
  end

  private
  def read_html
    @campaign.html = Nokogiri::HTML(open(@campaign.url))
  end

  def parse_metrics
    @parse_tasks.each { |task| task.parse(@campaign) }
  end

  def load_tasks
    @parse_tasks << PerkCountParser.new
    @parse_tasks << FundingPercentParser.new
  end
end