// This javascript file initiates slick using slick.min.js.
// To customize the pagination style, read Slick's documentation: http://kenwheeler.github.io/slick/

$(document).ready(function(){
  // Initialize slick
  $('.slick-container').slick({
    infinite: false,
    edgeFriction: 0,
    prevArrow: false,
    nextArrow: $('.button-right'),
    dots: true,
    customPaging : function() {
      return '<span class="slick-dot"></span>'
    }
  });

  // Initially hide the "GOT IT" button until you reach the last slide
  $('.button-center').hide();
  // This event listener changes the footer buttons.  When the modal reaches the last slide, 
  // it hides the "SKIP" and "NEXT" buttons and displays the "GOT IT!" button
  $('.slick-container').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var lastSlide = slick.slideCount-1
    var secondToLastSlide = slick.slideCount-2
    if (slick.slideCount >= 2) {
      if (currentSlide === secondToLastSlide && nextSlide == lastSlide) {
        $('.button-left').hide();
        $('.button-right').hide();
        $('.button-center').show();
      } else if (currentSlide === lastSlide && nextSlide == secondToLastSlide) {
        $('.button-left').show();
        $('.button-right').show();
        $('.button-center').hide();
      };
    };
  });
});
