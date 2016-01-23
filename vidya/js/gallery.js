$(document).ready(function() {

    //Focus to Add Class
  $('#auto-complete').on('focus', function() {
    $('.gallery-heading').addClass('is-focussed')

    // Chains removeClass
  }).on("blur", function(){
    $('.gallery-heading').removeClass('is-focussed')
  });

});
