namespace :campaign do
  desc "Parse all exisiting campaigns"
  task parse_all: :environment do
    campaigns = Campaign.all
    campaigns.each do |campaign|
      p campaign.url
      campaign_parser = CampaignParser.new(campaign)
      campaign_parser.parse
    end
  end
end