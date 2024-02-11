const movableElement = document.getElementById('movableElement');

document.addEventListener('mousemove', (event) => {
  // Calculate the 60% of the screen height
  const screenHeight60Percent = 0.6 * window.innerHeight;

  // Update the position of the movable element based on mouse coordinates and scroll position
  const x = event.clientX + window.scrollX - movableElement.clientWidth / 2;
  let y = event.clientY + window.scrollY - movableElement.clientHeight / 2;

  // Ensure the y coordinate is within 60% of the screen height
  y = Math.max(0, Math.min(y, screenHeight60Percent - movableElement.clientHeight));

  // Set the new position of the element
  movableElement.style.left = x + 'px';
  movableElement.style.top = y + 'px';
});




















$(document).ready(function() {
  // Add a hover event handler to the .hover-element
  $('.trigger').hover(function() {
    // When the mouse enters the .hover-element, change the opacity of .change-element
    $('.change').css('opacity', '1');
  }, function() {
    // When the mouse leaves the .hover-element, reset the opacity of .change-element
    $('.change').css('opacity', '0');
  });
});

$(document).ready(function() {
  var colors = ['#0000ff'];
  // Add a hover event handler to the .hover-element
  $('.trigger').hover(function() {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    // When the mouse enters the .hover-element, change the opacity of .change-element
    $('.change').css('position', 'relative');  
  }, function() {
    // When the mouse leaves the .hover-element, reset the opacity of .change-element
    $('.change').css('position', 'absolute');
  });
});

$(document).ready(function() {
  var colors = ['#0000ff'];
  // Add a hover event handler to the .hover-element
  $('.trigger00').hover(function() {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    // When the mouse enters the .hover-element, change the opacity of .change-element
    $('.change00').css('opacity', '1');$('.change00').css('position', 'relative'); 
  }, function() {
    // When the mouse leaves the .hover-element, reset the opacity of .change-element
    $('.change00').css('opacity', '0');$('.change00').css('position', 'absolute'); 
  });
});

$(document).ready(function() {
  var colors = ['#0000ff'];
  // Add a hover event handler to the .hover-element
  $('.trigger2').hover(function() {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    // When the mouse enters the .hover-element, change the opacity of .change-element
    $('.change2').css('opacity', '1'); $('.change2').css('position', 'relative'); 
  }, function() {
    // When the mouse leaves the .hover-element, reset the opacity of .change-element
    $('.change2').css('opacity', '0'); $('.change2').css('position', 'absolute'); 
  });
});

$(document).ready(function() {
  var colors = ['#0000ff'];
  // Add a hover event handler to the .hover-element
  $('.trigger3').hover(function() {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    // When the mouse enters the .hover-element, change the opacity of .change-element
    $('.change3').css('opacity', '1');$('.change3').css('position', 'relative'); 
  }, function() {
    // When the mouse leaves the .hover-element, reset the opacity of .change-element
    $('.change3').css('opacity', '0');$('.change3').css('position', 'absolute');
  });
});

$(document).ready(function() {
  var colors = ['#0000ff'];
  // Add a hover event handler to the .hover-element
  $('.trigger4').hover(function() {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    // When the mouse enters the .hover-element, change the opacity of .change-element
    $('.change4').css('opacity', '1');$('.change4').css('position', 'relative'); 
  }, function() {
    // When the mouse leaves the .hover-element, reset the opacity of .change-element
    $('.change4').css('opacity', '0');$('.change4').css('position', 'absolute'); 
  });
});
$(document).ready(function() {
  var colors = ['#0000ff'];
  // Add a hover event handler to the .hover-element
  $('.trigger5').hover(function() {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    // When the mouse enters the .hover-element, change the opacity of .change-element
    $('.change5').css('opacity', '1');$('.change5').css('position', 'relative'); 
  }, function() {
    // When the mouse leaves the .hover-element, reset the opacity of .change-element
    $('.change5').css('opacity', '0');$('.change5').css('position', 'absolute'); 
  });
});
$(document).ready(function() {
  var colors = ['#0000ff'];
  // Add a hover event handler to the .hover-element
  $('.trigger6').hover(function() {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    // When the mouse enters the .hover-element, change the opacity of .change-element
    $('.change6').css('opacity', '1');$('.change6').css('position', 'relative'); 
  }, function() {
    // When the mouse leaves the .hover-element, reset the opacity of .change-element
    $('.change6').css('opacity', '0');$('.change6').css('position', 'absolute'); 
  });
});





$(document).ready(function() {
  var colors = ['#0000ff'];

  // Add a click event handler to the .trigger element
  $('.custom-icon-button').click(function() {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    // Change the opacity of .change-element on click
    $('.info').css('opacity', '1');
  });

  // Add a click event handler to the document to reset the opacity when clicking outside the .trigger element
  $(document).click(function(event) {
    if (!$(event.target).closest('.custom-icon-button').length) {
      // Reset the opacity of .change-element when clicking outside the .trigger element
      $('.info').css('opacity', '0');
    }
  });
});






  