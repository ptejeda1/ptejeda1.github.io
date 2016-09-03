// _______  _______  ______    ___   _______  _______  _______
// |       ||       ||    _ |  |   | |       ||       ||       |
// |  _____||       ||   | ||  |   | |    _  ||_     _||  _____|
// | |_____ |       ||   |_||_ |   | |   |_| |  |   |  | |_____
// |_____  ||      _||    __  ||   | |    ___|  |   |  |_____  |
// _____| ||     |_ |   |  | ||   | |   |      |   |   _____| |
// |_______||_______||___|  |_||___| |___|      |___|  |_______|


/*------------------------------------*\
    = Switch the content
\*------------------------------------*/

// Code below allows for content switching based on window width
function sizeUpdate() {

  var width = $(window).width(); // Get window width
  var height = $(window).height(); // Get window height

  $('#jqWidth').html(width); // Display width for testing puposes only
  $('#jqHeight').html(height); // Display height for testing puposes only

  // var block1 = $('.block-1');
  // var block2 = $('.block-2');

  // If window place content either below or above for testing puposes only
  // width <= 641 ? block1.insertAfter(block2) : block1.insertBefore(block2);
  // width <= 641 ? block3.insertAfter(block4) : block3.insertBefore(block4);

};

$(document).ready(sizeUpdate); // When the page first loads
$(window).resize(sizeUpdate); // When the browser changes size



(function(){
    var linkItem = document.getElementsByClassName('title'), i;

    for ( i = 0; i < linkItem.length; i++ ) {

          linkItem[i].onclick = function() {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle("show");

            return false;
          }
    }

})();
