(function(){
	window.sNotify = {
		event: function(){
			$('.sNotify').animate({'bottom': '10px', 'display':'block'}, 1500, function(){
			})
			$('.sNotify_close').click(function(){
				sNotify.autoClose();
			})
		},
		clear: function(){
			$('.sNotify').remove();
		},
		applyCSS: function(){
			$('.sNotify').css({'bottom': -($('.sNotify').outerHeight() + 60)+'px'});
		},
		autoClose: function(){
			$('.sNotify').animate({'bottom': -($('.sNotify').outerHeight() + 60)+'px'}, 1500, function(){
			})
		},
		init: function(arg){
			console.log('-- sNotify loaded --');
			sNotify.clear();
			$('body').append(''
				+'<div class="sNotify">'
					+'<div class="sNotify_header">'
						+'<span class="sNotify_close">&#10006</span>'
						+''+arg.title+''
					+'</div>'
					+'<div class="sNotify_body">'
						+'<div class="sNotify_content">'+arg.body+'</div>'
						+'<div style="background:url('+arg.image+')" class="sNotify_thumb"></div>'
					+'</div>'
					+'<div class="sNotify_footer">'
						+'sNotify'
					+'</div>'
				+'</div>'
			+'');
			sNotify.applyCSS();
			setTimeout(function(){
				sNotify.event();
				if(arg.config.autoClose){
					setTimeout(function(){
						sNotify.autoClose();
					}, 1000*arg.config.timeOut);
				}
			}, 1000*arg.config.delay);
		}
	}
})();