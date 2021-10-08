$(window).on('load', function () {
  $('#status').delay(800).fadeOut(800);
  $('#preloader').delay(1000).fadeOut(1000);
});

$(document).ready(function() {
  $('#first').lightSlider({
      autoWidth:true,
      loop: true,
      auto:true,
      controls: false,
      pauseOnHover:true,
      pause:2000,
      onSliderLoad: function() {
          $('#first').removeClass('first');
      } 
  });  
});

$(document).ready(function() {
  $('#second').lightSlider({
      autoWidth:true,
      
      auto:true,
      controls: false,
      pause:2500,
      onSliderLoad: function() {
          $('#second').removeClass('second');
      } 
  });  
});

$(document).ready(function() {
  $('#third').lightSlider({
      autoWidth:true,
      
      auto:true,
      controls: false,
      pause:2300,
      onSliderLoad: function() {
          $('#third').removeClass('third');
      } 
  });  
});

$(document).ready(function() {
  $('#fourth').lightSlider({
      autoWidth:true,
      
      auto:true,
      controls: false,
      pause:2000,
      onSliderLoad: function() {
          $('#fourth').removeClass('fourth');
      } 
  });  
});

$(document).ready(function() {
  $('#fourthend').lightSlider({
      autoWidth:true,
      
      auto:true,
      controls: false,
      pause:2000,
      onSliderLoad: function() {
          $('#fourthend').removeClass('fourthend');
      } 
  });  
});





