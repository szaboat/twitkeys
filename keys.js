$(function(){
  $('body').bind('keydown',function(e){ 
		
		var url;
		var item = $('.hovered-stream-item');
		var links = $('.hovered-stream-item .tweet-text a');

		// check links function
		if (links.length == 1){
			if (links.attr('href').indexOf('twitter') == -1) {
				url = links.attr('href')
			}
		} else {
			links.each(function() {
				if(this.href.indexOf('twitter') == -1){
					url = this.href;
				}
			});
		}

		if( url && e.which==79 && e.shiftKey ) { 
				window.open(url);
				item.css({'background':'yellow'});
    } else if ( url && e.which == 79 ) {
				var msg = {"url": url};
				chrome.extension.connect().postMessage(msg);
				item.css({'background':'yellow'});
		}
  });
});
