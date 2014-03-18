$(function(){
  // Tumblr Background Imager
  TumblrImager.init({
    json: tumblr_api_read,
    containerSelector: '#main'
  });


  // common variables
  var mainHeight;
  var headerHeight;


  // #main window resize
  $(window).on("ready resize", function(){
    headerHeight = $("#header").outerHeight()
    mainHeight = $(window).height() - headerHeight;

    $("#main").css({
      "width" : $(window).width(),
      "height" : mainHeight
    });
  });


  // main logo random
  var array = [
    "images/logo-01.svg",
    "images/logo-02.svg",
    "images/logo-03.svg",
    "images/logo-04.svg"
  ];
  var l = array.length;
  var r = Math.floor(Math.random()*l);
  var imgurl = array[r];
  $("#site-logo img").attr({"src":imgurl});


  // main overlay
  // Special Thanks: http://sanographix.github.io/gifanime/love-lab/
  setInterval(function(){
    var delay = 450;
    $("#overlay")
    .transition({ "background-color" : "#f8b500"}, delay) // 穂乃果
    .transition({ "background-color" : "#6fc8e5"}, delay) // 絵里
    .transition({ "background-color" : "#c7c7c7"}, delay) // ことり
    .transition({ "background-color" : "#4c6cb3"}, delay) // 海未
    .transition({ "background-color" : "#00ccbb"}, delay) // 凛
    .transition({ "background-color" : "#fd8029"}, delay) // 真姫
    .transition({ "background-color" : "#e792f6"}, delay) // 希
    .transition({ "background-color" : "#349934"}, delay) // 花陽
    .transition({ "background-color" : "#ff60bf"}, delay) // にこ
  }, 0);


  // header fixed
  var mainVisualHeight;
  var scroll;

  $(window).scroll(function(){
    scroll = $(this).scrollTop();

    if ( scroll > mainHeight ) {
      $("#header").addClass("fixed").removeAttr("style");
      $("#backtop").addClass("show");
    }
    else {
      $("#header").removeClass("fixed").css({ "top" : mainHeight });
      $("#backtop").removeClass("show");
    }
  });


  // header sp toggle
  $("#toggle").on("click", function(){
    $("header").toggleClass("open");
  });
  $("#nav a").on("click", function(){
    $("header").removeClass("open");
  });


  // gobottom
  $("#gobottom").on("click", function(){
    $("html, body").stop().animate({ scrollTop : mainHeight + 1 }, 1000, "easeInOutCubic");
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