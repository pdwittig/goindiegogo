class CampaignsController < ApplicationController

  def new
    @campaign = Campaign.new
  end

  def create
    @campaign = Campaign.find_or_create_by(url: params[:campaign][:url])

    if @campaign.save
      @campaign_parser = CampaignParser.new(@campaign)
      @campaign_parser.parse
      render json: {status: "ok"}
    else
      render json: {status: "fail"}
    end
  end

end