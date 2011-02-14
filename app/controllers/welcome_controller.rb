class WelcomeController < ApplicationController

  def index
    # Load all patients
    @patients = Patient.all.sort_by{|p| p.name.downcase}
    # Load all needs
    @needs = Need.all.sort_by{|p| p.name.downcase}
  end

  def set_care_need
    #find patient
    @patient = Patient.find_by_id(params[:patient_id])
    #find id
    @need = Need.find_by_id(params[:need_id])
    # creates need for patient
    @patient.needs << @need
  end
  
end