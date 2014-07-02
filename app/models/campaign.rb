class Campaign < ActiveRecord::Base
  has_many :metrics
  attr_accessor :html
end