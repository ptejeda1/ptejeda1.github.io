/*------------------------------------*\
    = FIX FOR IPAD LANDSCAPE
\*------------------------------------*/

// Code below fixes ipad 5.1, 5.0 scaling issue when switch to landscape

if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) ) {
var viewportmeta = document.querySelector('meta[name="viewport"]');
  if (viewportmeta) {
      viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
      jQuery(document).ready(function() {
          document.body.addEventListener('gesturestart', function () {
              viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
          }, false);
      });
  }
}
