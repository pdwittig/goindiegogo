class Campaign < ActiveRecord::Base
  has_many :metrics
  validates :url, format: { with: /.+www.indiegogo.com\/projects\/.+/,
                            message: "Please enter a valid Indiegogo campaign url" }
  attr_accessor :html

  def self.find_exisiting_or_create_new(url)
    @campaign = self.find_by_url(url)
    @campaign ? @campaign : Campaign.new(url: url)
  end
end