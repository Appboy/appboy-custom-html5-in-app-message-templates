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

  // This event listener changes the footer buttons.  When the modal reaches the last slide, it changes the buttons to "GOT IT!"
  // Otherwise, the footer has buttons "SKIP" and "NEXT"
  $('.slick-container').on('beforeChange', function(event, slick, direction) {
    var footer;
    if (slick.slideCount >= 2) {
      if (slick.currentSlide === slick.slideCount-2 && slick.currentDirection == 0) {
        footer = "<div class='button-center'>"+
                   "<a href='appboy://close'><p>GOT IT!</p></a>"+
                 "</div>"
      } else if (slick.currentSlide === slick.slideCount-1 && slick.currentDirection == 1) {
        footer = "<div class='button-left'>"+
                   "<a href='appboy://close'><p>SKIP</p></a>"+
                 "</div>"+
                 "<div class='button-right'>"+
                   "<a href=''><p>NEXT</p></a>"+
                 "</div>"
      };
      $('footer').html(footer);
    };
  })
});
