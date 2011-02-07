class Patient < ActiveRecord::Base
  has_and_belongs_to_many :needs
  attr_accessible :name
end
