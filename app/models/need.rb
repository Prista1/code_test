class Need < ActiveRecord::Base
  has_and_belongs_to_many :patients
  attr_accessible :name
end
