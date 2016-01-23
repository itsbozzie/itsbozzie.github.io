$(document).ready(function() {
  // On Focus
  $('#auto-complete').on('focus', function() {
    $('.gallery-heading').addClass('is-focussed')
  // On Blur (non-focus)
  }).on("blur", function(){
    $('.gallery-heading').removeClass('is-focussed')
  // On Hover
}).on('mouseenter', function(){
    $('.gallery-heading').addClass('is-hovered'
  // On MouseLeave
  )}).on('mouseleave', function(){
    $('.gallery-heading').removeClass('is-hovered')
  });

});
