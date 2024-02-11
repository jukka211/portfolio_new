$(document).ready(function() { 
  $('.box1').hover(function() {
    // When the mouse enters the .hover-element, change the flex of .box1 and the opacity of .box2
    $(this).css('flex', '3');
    $('.box0').css('flex', '0');
    $('.box2').css('flex', '0');
  }, function() {
    // When the mouse leaves the .hover-element, reset the flex of .box1 and the opacity of .box2
    $(this).css('flex', '1');
    $('.box0').css('flex', '1');
    $('.box2').css('flex', '1');
  });
});

