$(function(){
  $('body').bind('keydown',function(e){ 
    // observe the O key
    if(e.which==79){
      var item = $('.hovered-stream-item');
      item.css({'background':'yellow'});
      var url = $('.hovered-stream-item .tweet-text a').attr('href');
      if(url)
	window.open(url);
    }
  });
});
