/*jshint asi: false, bitwise: false, boss: false, browser: true,
  camelcase: true, curly: true, debug: false, devel: true, eqeqeq: true,
  eqnull: false, evil: false, forin: false, immed: true, indent: 4,
  laxbreak: true, newcap: true, noarg: true, noempty: false, nomen: false,
  nonew: false, onevar: false, passfail: false, plusplus: false,
  quotmark: 'double', regexp: false, shadow: false, strict: false, sub: true,
  trailing: true, undef: true, white: false */
/*global window: false, $: false, _: false */


var S = window.S || {};

// The resize handler.
S.onResize = function(evt) {
  var viewportHeight = $(window).height();

  $("#download-details .img-rounded").css(
    "max-height",
    Math.floor( viewportHeight - S.nominalHeightBox - 20 )
  );

  $("#main-content").css(
    "padding-top",
    Math.floor( ( viewportHeight - $("#shared-file").height() ) / 2 )
  );
};


// Attach resize handler.
$(window)
  .on( "resize", S.onResize )
  .on( "load", S.onResize );


$(document).ready( function() {
  S.pageTitle = $.trim( $(".popover-title").text() );
  S.nominalHeightBox = $("#shared-file").height() - $("#download-details .img-rounded").height();
  S.onResize();

  // Reset the details box position when the file is image and it has finished
  // loading.  Also, mark the box as containing an image.
  $("#download-details").filter(":has(.img-rounded)")
    .addClass("type-image")
    .find(".img-rounded").on( "load", S.onResize );

  // Show "Shared using Servus for Mac." on mouse hovering over sharing
  // button.
  $("#sharing, #shared-by")
    .on( "mouseenter", function() {
      $("#shared-by").addClass("s-visible").css( "visibility", "visible" );
    })
    .on( "mouseleave", function() {
      $("#shared-by").removeClass("s-visible");
    });

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
      window.open( this.href, "Share to Twitter", "toolbar=0,status=0,resizable=1,width=550,height=420" );
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
      window.open( this.href, "Share to Facebook", "toolbar=0,status=0,resizable=1,width=626,height=436" );
    });

  // Generate Google+ sharing link and attach click handler
  $(".share-gplus")
    .attr( "href", "https://plus.google.com/share?url=" + encodeURIComponent(document.location.href) )
    .on( "click", function(evt) {
      evt.preventDefault();
      window.open( this.href, "Share to Google+", "width=600,height=460,menubar=no,location=no,status=no" );
    });
});
