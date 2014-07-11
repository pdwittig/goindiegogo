class MetricsController < ApplicationController

  def index
    metrics = Metrics.all
    render json: metrics.to_json
  end

end