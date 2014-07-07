class Campaign < ActiveRecord::Base
  has_many :metrics
  attr_accessor :html

  def self.find_exisiting_or_create_new(url)
    @campaign = self.find_by_url(url)
    @campaign ? @campaign : Campaign.new(url: url)
  end
end