$(window)
  .on( "resize", function() {
    var $main = $("#main-content"),
      mainTop = Math.floor( ( $(window).height() - $main.height() ) / 2 );

    $main.css( "padding-top", mainTop );
  })
  .trigger("resize");

$(".popover-content p.file-icon img").on( "load", function() {
  $(window).trigger("resize");
});
