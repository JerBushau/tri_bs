
// "roll up" header
var didScroll;
var lastScrollTop = 0;
var minScroll = 25;
var navbarHeight = $('.nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

// Every 250 miliseconds check didScroll
setInterval(function() {
  // If true call hasScrolled() & reset
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  
  // Make sure they scroll more than minScroll
  if(Math.abs(lastScrollTop - st) <= minScroll)
    return;

  // If st is greater than 100 show b2t
  if (st > 100) {
    $('.b2t').css('margin', '0');
    // Else hide it
  } else {
    $('.b2t').css('margin', '-60px');
  }
  
  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    $('.nav').removeClass('nav-down').addClass('nav-up');
      
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('.nav').removeClass('nav-up').addClass('nav-down');
    }
  }
 
  lastScrollTop = st;
}

// Google maps stuff 
function initMap() {
  var uluru = {lat: 38.2847077, lng: -85.7217259};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    scrollwheel: false,
    disableDefaultUI: true,
    center: uluru
  });
  var marker = new google.maps.Circle({
    center: uluru,
    radius: 800 * 140,
    strokeColor: '#1521c5',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.159,
    map: map
  });
}
