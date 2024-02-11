





$(document).ready(function() { 
  $('.box1').hover(function() {
    // When the mouse enters the .hover-element, change the opacity of .change-element
 
    $('.box1').css('flex', '3'); 
  }, function() {
    // When the mouse leaves the .hover-element, reset the opacity of .change-element
    $('.box1').css('flex', '1');
  });
});

$(document).ready(function() { 
  $('.box1').hover(function() {
    // When the mouse enters the .hover-element, change the opacity of .change-element
 
    $('.box0').css('flex', '0'); $('.box2').css('opacity', '0'); $('.box2').css('margin-right', '20px'); $('.box2').css('padding-left', '0');
  }, function() {
    // When the mouse leaves the .hover-element, reset the opacity of .change-element
    $('.box0').css('flex', '1');$('.box2').css('opacity', '1'); $('.box2').css('margin-right', '20px'); $('.box2').css('padding-left');
  });
});
$(document).ready(function() { 
  $('.box1').hover(function() {
    // When the mouse enters the .hover-element, change the opacity of .change-element
 
    $('.box2').css('flex', '0'); $('.box2').css('opacity', '0'); $('.box2').css('margin-right', '20px'); $('.box2').css('padding-left', '0');
  }, function() {
    // When the mouse leaves the .hover-element, reset the opacity of .change-element
    $('.box2').css('flex', '1');$('.box2').css('opacity', '1'); $('.box2').css('margin-right', '20px'); $('.box2').css('padding-left');
  });
});

// Get references to the two divs
const div1 = document.querySelector('.text-container');
const div2 = document.querySelector('.box2');

// Function to update div1's width to match div2's width
function updateDiv1Width() {
    const div2Width = getComputedStyle(div2).width;
    div1.style.width = div2Width;
}

// Initial update when the page loads
updateDiv1Width();

// Update the width when the window is resized
window.addEventListener('resize', updateDiv1Width);




function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  timeElement.textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the clock
updateTime();

const toggleButton = document.getElementById('toggleButton');
const targetDiv = document.getElementById('targetDiv');

toggleButton.addEventListener('click', function() {
    if (targetDiv.style.display === 'none' || targetDiv.style.display === '') {
        targetDiv.style.display = 'block'; // Show the div
    } else {
        targetDiv.style.display = 'none'; // Hide the div
    }
});