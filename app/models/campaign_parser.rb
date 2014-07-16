require 'nokogiri'
require 'open-uri'

class CampaignParser
  def initialize(campaign)
    @campaign = campaign
    @show_url_extension = '/show_tab/home'
    @base_url_patten = /.+www.indiegogo.com\/projects\/[^\/]+/
    @parse_tasks = []
    load_tasks
  end

  def parse
    read_html
    parse_metrics
  end

  private
  def read_html
    @campaign.html_base = Nokogiri::HTML(open(extract_base_url(@campaign.url)))
    @campaign.html_home = Nokogiri::HTML(open(extract_base_url(@campaign.url) + @show_url_extension))
  end

  def extract_base_url(url)
    @base_url_patten.match(url).to_s
  end

  def parse_metrics
    @parse_tasks.each { |task| task.parse(@campaign) }
  end

  def load_tasks
    @parse_tasks << FundingPercentRaisedParser.new
    @parse_tasks << FundingCurrencyRaisedParser.new
    @parse_tasks << FundingGoalParser.new
    @parse_tasks << TeamMemberCountParser.new
    @parse_tasks << PerkCountParser.new
  end
end