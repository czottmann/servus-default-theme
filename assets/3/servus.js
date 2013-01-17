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

$(document).ready( function() {
  S.pageTitle = $(".popover-title").text();

  // Generate Twitter sharing link and attach click handler
  $(".share-twitter")
    .attr( "href", [
        "https://twitter.com/intent/tweet?original_referer=",
        "text=" + encodeURIComponent(S.pageTitle),
        "url=" + encodeURIComponent(S.pageLink),
        "via=servusio"
      ].join("&")
    )
    .on( "click", function(evt) {
      evt.preventDefault();
      window.open(
        this.href,
        "Share to Twitter",
        "toolbar=0,status=0,resizable=1,width=550,height=420"
      );
    });

  // Generate Facebook sharing link and attach click handler
  $(".share-facebook")
    .attr( "href", [
        "https://www.facebook.com/sharer/sharer.php?src=bm&v=4&i=1358444826&u=" + encodeURIComponent(S.pageLink),
        "name=" + encodeURIComponent(S.pageTitle)
      ].join("&")
    )
    .on( "click", function(evt) {
      evt.preventDefault();
      window.open(
        this.href,
        "Share to Facebook",
        "toolbar=0,status=0,resizable=1,width=626,height=436"
      );
    });

  // Generate Google+ sharing link and attach click handler
  $(".share-gplus")
    .attr( "href", "https://plus.google.com/share?url=" + encodeURIComponent(document.location.href) )
    .on( "click", function(evt) {
      evt.preventDefault();
      window.open(
        this.href,
        "Share to Google+",
        "width=600,height=460,menubar=no,location=no,status=no"
      );
    });
});
