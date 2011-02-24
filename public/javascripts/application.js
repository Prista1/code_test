// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function $div(c){
  return $('<div class="' + c + '"></div>')
}

jQuery(function($) {

  // set up default ajax error handling
  $.ajaxSetup({
    error: function(){
      alert('Sorry, but an error occurred. Please inform technical support.')
    }
  })

  $('table#patients_needs td.clickable').each(function(){
    this.need =       $(this).attr('data-need')
    this.need_id =    $(this).attr('data-need-id')
    
    this.patient =    $(this).attr('data-patient')
    this.patient_id = $(this).attr('data-patient-id')
    
    this.active =     $(this).attr('data-active') == 'True'
    
    this.addNeed = function(){
      // cache a reference to the parent funciton
      t = this
      // cache a reference to the jQuery selector of this element
      $this = $(this)
      
      $this.text('True')

      // send the post request to rails
      var post_url = '/set_patient_need/' + this.patient_id + '/' + this.need_id
      $.post(post_url, {
        success: function(){
          $this
            .addClass('happy')
            .attr('data-active', 'True')
          t.active = true
        }
      })
    }
    
    this.removeNeed = function(){
      t = this
      $this = $(this)

      $this.text('')
    
      // send the post request to rails
      var post_url = '/unset_patient_need/' + this.patient_id + '/' + this.need_id
      $.post(post_url, {
        success: function(){
          $this
            .removeClass('happy')
            .attr('data-active', 'False')
          t.active = false
        }
      })
    }

    
    // assign click handlers
    $(this).click(function(e){
      e.preventDefault()
      if (this.active) {
        this.removeNeed()
      } else {
        this.addNeed()
      }
    })
    
  }) // end each
  
  
  // slant table headings
  var th_widths = []
  $('table#patients_needs th.need').each(function(){
    th_widths.push($(this).width())
  })
  
  // find max width of table headings
  var th_height = Math.max.apply(Math, th_widths)
  
  $('table#patients_needs th.need')
    .each(function(){
      this.slanty = $div('slanty')
      this.text = $(this).text()
      this.w = $(this).width()
      this.h = $(this).height()
      this.lh = parseInt($(this).css('line-height').slice(0, -2))
      $(this).text('')
      $(this).parents('thead').append(this.slanty)
      this.pos = $(this).position()
      this.padding = ($(this).width() - this.lh) / 2
      this.slanty
        .text(this.text)
        .css('position', 'absolute')
        .css('left', (this.pos.left - this.w) + this.h)
        .css('top', this.pos.top + th_height - this.h)
        .css('-webkit-transform', 'rotate(70deg)')
        .css('-webkit-transform-origin', '100% 100%')
        .css('-moz-transform', 'rotate(70deg)')
        .css('-moz-transform-origin', '100% 100%')
    })
    .css('height', th_height)
    .css('-webkit-transform', 'skewX(20deg)')
    .css('-webkit-transform-origin', '100% 100%')
    .css('-moz-transform', 'skewX(20deg)')
    .css('-moz-transform-origin', '100% 100%')
    // not perfect, but hey
  

});
