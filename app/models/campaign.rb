class Campaign < ActiveRecord::Base
  has_many :metrics
  validates :url, format: { with: /.+www.indiegogo.com\/projects\/.+/,
                            message: "Please enter a valid Indiegogo campaign url" }
  attr_accessor :html

  def self.find_exisiting_or_create_new(url)
    @campaign = self.find_by_url(url)
    @campaign ? @campaign : Campaign.new(url: url)
  end

  def self.generate_chart_data(metrics)
    campaign = transform_data(self.includes(:metrics).
      where("metrics.metric_type = ? OR metrics.metric_type = ?", metrics[:metric_x], metrics[:metric_y]).
      references(:metrics))
    p campaign
    campaign.to_json
  end

  private
  def self.transform_data(data)
    data.map! do |campaign|
      self.extract_metrics(campaign)
    end
    return data
  end

  def self.extract_metrics(campaign)
    metrics = {}
    campaign.metrics.each do |metric|
      metrics[metric.metric_type] = metric.value
    end
    return metrics
  end
end
