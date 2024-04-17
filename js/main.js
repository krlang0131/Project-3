// start play button
$(".play-button").click( function() {
    $("#interact-box").removeClass();
    $("#interact-box").toggleClass("show-spring");
  })
  // spring
$(".spring-off").click( function() {
    $("#interact-box").removeClass();
    $("#season-buttons").removeClass();
    $("#interact-box").toggleClass("show-spring");
    $("#season-buttons").toggleClass("spring-on-viewed");
    $("#season-buttons").toggleClass("spring-off-invis");
  })
  // summer
$(".summer-off").click( function() {
    $("#interact-box").removeClass();
    $("#season-buttons").removeClass();
    $("#interact-box").toggleClass("show-summer");
    $("#season-buttons").toggleClass("summer-on-viewed");
    $("#season-buttons").toggleClass("summer-off-invis");
  })
  // fall
$(".fall-off").click( function() {
    $("#interact-box").removeClass();
    $("#season-buttons").removeClass();
    $("#interact-box").toggleClass("show-fall");
    $("#season-buttons").toggleClass("fall-on-viewed");
    $("#season-buttons").toggleClass("fall-off-invis");
  })
  // winter
$(".winter-off").click( function() {
    $("#interact-box").removeClass();
    $("#season-buttons").removeClass();
    $("#interact-box").toggleClass("show-winter");
    $("#season-buttons").toggleClass("winter-on-viewed");
    $("#season-buttons").toggleClass("winter-off-invis");
  })
  // volcano
  $(".volcano-off").click( function() {
    $("#interact-box").removeClass();
    $("#season-buttons").removeClass();
    $("#interact-box").toggleClass("show-volcano");
    $("#season-buttons").toggleClass("volcano-on-viewed");
    $("#season-buttons").toggleClass("volcano-off-invis");
  })
  // umbrella
  $(".umbrella-button").click( function() {
    $("#interact-box").toggleClass("show-umbrella");
  })
  // rain/snow
  $(".rain-button").click( function() {
    if (
      $("#interact-box").hasClass("show-spring") ||
      $("#interact-box").hasClass("show-summer") ||
      $("#interact-box").hasClass("show-fall")
      ) {
        $("#interact-box").toggleClass("show-rain");
      } else if ($("#interact-box").hasClass("show-winter")) {
        $("#interact-box").toggleClass("show-snow");
      } else if ($("#interact-box").hasClass("show-volcano")) {
      $("#interact-box").toggleClass("show-lava");
      }
  })

