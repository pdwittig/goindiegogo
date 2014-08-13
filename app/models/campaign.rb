class Campaign < ActiveRecord::Base
  has_many :metrics, dependent: :destroy
  validates :url, format: { with: /.+www.indiegogo.com\/projects\/.+/,
                            message: "Please enter a valid Indiegogo campaign url" }                     
  attr_accessor :html_base, :html_home

  def self.find_exisiting_or_create_new(url)
    @campaign = self.find_by_url(url)
    @campaign ? @campaign : Campaign.new(url: url)
  end

  def self.generate_chart_data(metrics)
    transform_data(self.includes(:metrics).
      where("metrics.metric_type = ? OR metrics.metric_type = ?",
      metrics[:metric_x], metrics[:metric_y]).
      references(:metrics), 
      metrics)
  end

  private
  def self.transform_data(data, metrics)
    data.map! { |campaign| self.extract_metrics(campaign, metrics) }
  end

  def self.extract_metrics(campaign, metrics)
    metric_data = {}
    campaign.metrics.each do |metric| 
      if metric.metric_type == metrics[:metric_x]
        metric_data[:metric_x] = metric.value
      elsif metric.metric_type == metrics[:metric_y]
        metric_data[:metric_y] = metric.value
      end
    end
    metric_data[:campaign_id] = campaign.id
    return metric_data
  end
end
