class WelcomeController < ApplicationController

  def index
    @patients = Patient.all
    @needs = Need.all
  end

  def set_care_need
    @patient = Patient.find(params[:patient_id])
    @need = Need.find(params[:need_id])
    # Only assign a need to a patient once
    unless @patient.needs.include?(@need)
      @patient.needs.push(@need)
    end
    render :nothing => true
  end
  
  def unset_care_need
    @patient = Patient.find(params[:patient_id])
    @need = Need.find(params[:need_id])
    # Make sure this need is already assigned
    if @patient.needs.include?(@need)
      @patient.needs.delete(@need)
    end
    render :nothing => true
  end

end
