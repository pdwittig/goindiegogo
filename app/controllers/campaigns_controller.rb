class CampaignsController < ApplicationController

  def new
    @campaign = Campaign.new
  end

  def create
    @campaign = Campaign.find_or_create_by(url: params[:campaign][:url])

    if @campaign.save
      @campaign_parser = CampaignParser.new(@campaign)
      @campaign_parser.parse
      redirect_to campaign_path(@campaign.id)
    else
      render json: { errors: @campaign.errors.messages }
    end
  end

  def show
    @campaign = Campaign.find(params[:id])
    render json: {status: "ok"}
  end

end