$( document ).ready(function() {

  $(".main-video-placeholder").click(function(){
    $(this).hide();
  });

  $('#play-video').on('click', function(ev) {
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();

  });
});
