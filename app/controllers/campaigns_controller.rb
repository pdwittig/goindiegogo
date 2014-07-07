class CampaignsController < ApplicationController

  def new
    @campaign = Campaign.new
  end

  def create
    render json: { status: "ok" }
  end

end