(function ($) {
  $(document).ready(function() {
    function init() {
      window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 140,
          body = $("body");
        if (distanceY > shrinkOn) {
          body.addClass("smaller");
        } else {
          if (body.hasClass("smaller")) {
            body.removeClass("smaller");
          }
        }
      });
    }
    window.onload = init();
  });
})(jQuery);

