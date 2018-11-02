$(document).ready(function() {
  $('#open').click(function() {
    $(this).css('visibility', 'hidden');
    $("#open,#logo-open").css('visibility', 'hidden');
    $('#close,#overlay-logo-open').css('visibility', 'visible');
    $('#overlay').toggleClass('open');
    //$('#overlay-logo-open').css('visibility','visible');
  });

  $('#close').click(function() {
    $(this).css('visibility', 'hidden');
    $('#close,#overlay-logo-open').css('visibility', 'hidden');
    $("#open,#logo-open").css('visibility', 'visible');
    $('#overlay').toggleClass('open');
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
      $(".c-header").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".c-header").removeClass("active");
    }
  });

  //not an elegant solution, but want to prevent capturing first scroll event that is pre-done by some browsers when we refresh an already scrolled page
  $(window).scroll(function() {
    $('.llazy[data-loaded="false"').each(function() {
      var llazy = $(this);
      if (llazy[0].getBoundingClientRect().top - window.innerHeight < 0) {
        $(this).attr("data-loaded", "true");
        $(this).attr("src", $(this).attr("data-src"));
      }
    });
  });


});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0,
  }, 800);
}
