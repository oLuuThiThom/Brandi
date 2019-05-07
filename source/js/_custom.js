$(document).ready(function () {
  $('.js-product').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    // autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $('.js-meet-team').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
});
// show menu
$(document).on('mouseup', function (element) {
  if (document.getElementsByClassName('js-menu')[0].contains(element.target)) {
    $('.js-sidebar').toggleClass('sidebar-show');
  }
  else {
    var container2 = $('.js-sidebar');
    if (!container2.is(element.target) && container2.has(element.target).length === 0) {
      $('.js-sidebar').removeClass('sidebar-show');
    }
  }
});

$(window).on('load resize', function(){
  var width = $(window).width();
  if(width >= 786) {
    $('.js-sidebar').removeClass('sidebar-show');
  }
});