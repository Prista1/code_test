class WelcomeController < ApplicationController

  def index
    @patients = Patient.all.sort_by{|p| p.name.downcase}
    @needs = Need.all.sort_by{|p| p.name.downcase}
  end

  def set_care_need
  end

end
