$(function(){
  /*
  // Tumblr Background Imager
  TumblrImager.init({
    json: tumblr_api_read,
    containerSelector: '#main'
  });
*/


  // common variables
  var mainHeight;
  var headerHeight;


  // #main window resize
  $(window).on("load resize", function(){
    headerHeight = $("#header").outerHeight()
    mainHeight = $(window).height() - headerHeight;

    $("#main").css({
      "width" : $(window).width(),
      "height" : mainHeight
    });
  });


  // header fixed
  var mainVisualHeight;
  var scroll;

  $(window).scroll(function(){
    scroll = $(this).scrollTop();

    if ( scroll > mainHeight ) {
      $("#header").addClass("fixed");
      $("#header").removeAttr("style");
    }
    else {
      $("#header").removeClass("fixed");
      $("#header").css({ "top" : mainHeight });
    }
  });


  // gobottom
  $("#gobottom").on("click", function(){
    $("html, body").stop().animate({ scrollTop : mainHeight }, 1000, "easeInOutCubic");
  });


  // backtop
  $("#backtop").on("click", function(){
    $("html, body").stop().animate({ scrollTop : 0 }, 1500, "easeInOutCubic");
  });


  // smooth scroll
  $("a[href^=#]").on("click", function() {
    var speed = 600;
    var easing = "easeInOutCubic";
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var offset = target.offset().top;

    $("html, body").animate({ scrollTop : offset - headerHeight - 20 }, speed, easing);

    return false;
  });
});