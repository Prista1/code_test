# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)

Patient.create(:name => 'Bob')
Patient.create(:name => 'Carol')
Patient.create(:name => 'Ted')
Patient.create(:name => 'Alice')

Need.create(:name => 'Aspirin')
Need.create(:name => 'Acetaminophen')
Need.create(:name => 'Ibuprofen')
Need.create(:name => 'Codeine')
Need.create(:name => 'Morphine')
