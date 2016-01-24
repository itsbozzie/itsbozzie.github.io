$(document).ready(function() {
  // On Focus
  $('#auto-complete').on('focus', function() {
    $('.gallery-header-text').addClass('is-focussed')
  // On Blur (non-focus)
  }).on("blur", function(){
    $('.gallery-header-text').removeClass('is-focussed')
  // On Hover
}).on('mouseenter', function(){
    $('.gallery-header-text').addClass('is-hovered')
  // On MouseLeave
  }).on('mouseleave', function(){
    $('.gallery-header-text').removeClass('is-hovered')
  });

});
