CodeTest::Application.routes.draw do
  
  root :to => "welcome#index"
  #post  'set_patient_need/:patient_id/:need_id' => "welcome#set_care_need"
  match 'set_patient_need/:patient_id/:need_id', :to => 'welcome#set_care_need'
end
