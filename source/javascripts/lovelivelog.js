$(function(){
  /*
  // Tumblr Background Imager
  TumblrImager.init({
    json: tumblr_api_read,
    containerSelector: '#main'
  });
*/

  // #main window resize
  var mainHeight;
  $(window).on("ready resize", function(){
    mainHeight = $(window).height() * 0.8;
    $("#main").css({
      "width" : $(window).width(),
      "height" : mainHeight
    });
  });

  // gobottom
  $("#gobottom").on("click", function(){
    $("html, body").stop().animate({ scrollTop : mainHeight }, 500, "easeInOutCubic");
  });

  // backtop
  $("#backtop").on("click", function(){
    $("html, body").stop().animate({ scrollTop : 0 }, 1500, "easeOutCubic");
  });
});