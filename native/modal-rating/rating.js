// Initiates rating by filling in the amount of stars you would like to begin with and binding a mouseover action to each star.
$.fn.start = function(rating) {
  var length = $(this).children().length;
  var children = $(this).children();
  // init rating index
  var current_rating_index = rating - 1;

  // fill in initial stars
  if (current_rating_index > 0) {
    for (var j = 0; j <= current_rating_index; j++) {
      $(children[j]).removeClass('empty-star').addClass('star');
    }
  }

  // bind mouseover to each star
  for (var i = 0; i < length; i++) {
    $(children[i]).bind('mouseover', function() {
      var star_index = $(this).index(children[i]);

      for (var j = 0; j <= star_index; j++) {
        $(children[j]).removeClass('empty-star star').addClass('star');
      }
      for (var j = star_index + 1; j < length; j++) {
        $(children[j]).removeClass('empty-star star').addClass('empty-star');
      }
    });
  }
}

// Gets the current rating displayed in the In-App Message.
$.fn.getCurrentRating = function(){
  var length = $(this).children().length;
  var children = $(this).children();
  var result = 0;

  for (var i = 0; i < length; i++) {
    if($(children[i]).hasClass('star')){
      result +=1;
    }else{
      break;
    }
  }
  return result;
}

$(function() {
  // Modify the parameter to change the number of stars that are initially shown in the modal
  $('.stars').start(0);

  // Modify this event listener to record the user's star rating!
  $('.button-center').on('click',function(){
    console.log($('.stars').getCurrentRating());

    // Close the modal
    window.open("appboy://close");
  });
});
