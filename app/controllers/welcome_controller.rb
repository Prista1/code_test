class WelcomeController < ApplicationController

  def index
    # Load patients
    @patients = Patient.all
    # Load needs
    @needs = Need.all
  end

  def set_care_need
    patient = Patient.find(params[:patient_id])
    need = Need.find(params[:need_id])
    patient.needs << need
    head :ok
  end

end
