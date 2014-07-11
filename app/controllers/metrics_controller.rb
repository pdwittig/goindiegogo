class MetricsController < ApplicationController

  def index
    metrics = Metric.where(metric_type: params[:metric_type])
    render json: metrics.to_json
  end

end