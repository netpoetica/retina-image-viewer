var App = function($){
  //console.log("-> App::new()");

  // Save reference to App object scope
  var _this = this;
  var IMAGE_URL = 'static/images/';

  // IDs of various elements requiring JS attention.
  var ElementsVO = [
    'non-retina-img',
    'retina-img',
    'non-retina-bg',
    'retina-bg'
  ];

  var resizeBgContainer = function(){
    var _this = this;
    var selector = $(this).attr('id');

    // Resize all containers to the same size as original. This is the point of
    // high res images.
    if(selector == 'non-retina-img'){
      $.each(ElementsVO, function(){
        if(this.indexOf('bg') > -1){
          // It's a background image, div w a bg img
          var opts = {
            width: $(_this).width(),
            height: $(_this).height()
          };

          // If it's CSS bg and retina it needs a background-size.
          if(this.indexOf('retina') > -1){
            opts['background-size'] = $(_this).width() + 'px ' + $(_this).height() + 'px'
          }

          $('#' + this).css(opts);

        } else {
          // Otherwise it's an image tag.
          $('#' + this).attr({
            width: $(_this).width(),
            height: $(_this).height()
          });
        }
      });
    }
  };

  // Single point of entry - called immediately after instantiation
  function _init(){
     //console.log("-> App::init()");

     $.getJSON('/config.json', function(res){
       $.each(ElementsVO, function(){
         var fullPath = IMAGE_URL + res.fileName;

         if(this.indexOf('non-retina') == -1){
           // This one should not be "@2x'
           fullPath += '@2x';
         }

         // Add the fileType extension.
         fullPath += ('.' +  res.fileType);

         if(this.indexOf('img') != -1){
           // Not a background image
           $('#' + this)
           .load(resizeBgContainer)
           .attr('src', fullPath);
         } else {
           $('#' + this).css('background-image', 'url(' + fullPath + ')')
         }
       });
     });

  }

  // Application methods

  /* ************************************************************************** */
  /* At the end of App instantiation, call the init function of the App object. */
  /* ************************************************************************** */
  _init.call(this);
};

// Override the toString method for more productive error reporting.
App.prototype.toString = function(){
  return '[object App]';
};

// Instantiate application in $(document).ready()
$(document).ready(function(){
  window.app = new App(window.jQuery);
});
