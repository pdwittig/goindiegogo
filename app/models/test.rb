class Test

  def run
    c = Campaign.joins(:metrics).where(metrics: { metric_type: "perk_count", metric_type: "funding_percent" })
    c.map! do |camp|
      metrics = {}
      camp.metrics.each do |metric|
        metrics[metric.metric_type] = metric.value
      end
      metrics
    end
    return c.to_json
  end


end