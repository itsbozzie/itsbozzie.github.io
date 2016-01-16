$(document).ready(function(){
  //fades out all elements in the body
  $('.coin-button').on('click', function(){
    $(this).addClass('animated bounce');
    $('body *').fadeOut(2000);
    //delays the redirect to new URL so that the fadeOut animation can play
    setTimeout(function() { window.location.href = "page-2.html";}, 5000);
  });
});
