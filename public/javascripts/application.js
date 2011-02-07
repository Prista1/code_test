// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

jQuery(function($) {
  $('.patient_need').click(function() {
    var el = $(this);
    var patient_id = el.attr('id').split('_')[1]; 
    var need_id = el.attr('id').split('_')[2]; 
    jQuery.post('/set_patient_need/' + patient_id + '/' + need_id, function(data) {
      el.html('true');
    });
  });
});
