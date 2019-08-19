$("#clickAway").hide()
windowSize = "Large"
resizeHandler()

// Resizes the about window to accommodate smaller screens
function resizeHandler() {
  /* console.clear()
  console.log($(window).width()) */

  windowWidth = $(window).width()
  textHeight = $("#aboutContent").height()
  textWidth = $("#aboutContent").width()
  photoWidth = $("#aboutPhoto").width()
  photoLeft = (textWidth - photoWidth) * 0.5

  if (windowWidth < 485) {
    if (windowSize == "Large") {
      $("#sidebar").hide()
      $("#menu").show()
      $("#sidebar a").css({"font-size":"24pt", "border":"1px solid black","width":"4em"})
      $("#sidebar a:hover").css({"width":"4em", "z-index":"10001"})
      $("h2").css("width","70vw")
      $("h1").css("width","70%")
      windowSize = "Small"
    }
    $("#aboutMain").css("left", "2%")
    $("#aboutContent").css({"font-size":"100%", "margin-top":"1%"})
    $("#sidebar").css({"position":"absolute", "left":"-220%", "top":"0%", "width":"4em", "z-index":"10000"})
    $("#aboutPhoto").css({"height":"auto", "width":0.75 * textWidth, "left":photoLeft, "top":textHeight, "display":"block", "position":"relative"})
  } else {
    if (windowSize = "Small") {
      hideMenu()
      $("#menu").hide()
      $("#aboutMain").css("left", "8em")
      $("#sidebar a").css({"font-size":"18pt", "border":"none","width":"4em"})
      $("#sidebar").show()
      $("#aboutMain").before($("#sidebar"))
      windowSize = "Large"
      $("h1").css("width","100%")
    }
    $("#aboutContent").css({"font-size":"120%", "margin-top":"0%"})
    screenWidth = windowWidth/parseFloat($("body").css("font-size"));
    mainWidth = (0.70 * (screenWidth - 35));
    h2Width = (0.4 * (screenWidth - 6)).toString() + "em";
    if (windowWidth > 1000) {
      $("#aboutPhoto").css("left", ((mainWidth * 1.3) + 1).toString() + "em")
      $("#aboutContent").css("width", mainWidth.toString() + "em")
      $("#aboutMain").append($("#aboutContent"))
      $("#aboutPhoto").css({"width":"auto", "height":"20em","top":"0.5em", "display":"block", "position":"relative"})

    } else {
      $("#aboutContent").css({"width":"80%", "display":"block"})
      $("#aboutPhoto").before($("#aboutContent"))
      $("#aboutPhoto").css({"height":"auto", "width":"310px", "left":photoLeft, "top":textHeight+5, "display":"block", "position":"relative"})
    }
    $("h2").css("width", h2Width)
    $("#sidebar").css({"position":"relative", "left":"1em", "top":"250%", "width":"4em", "z-index":"9999"})
  }
}
