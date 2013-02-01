$(document).ready(function() {
	var height = $(window).height();
	var scrollTop = $(window).scrollTop();

	$(document).scroll(function(){
		scrollTop = $(window).scrollTop()+1;
		$('.logo').css("background-position", "2px " + scrollTop + "px");
	});
	
	$('.logo').click(function(){
        $('html, body').animate({scrollTop:14}, 'slow');
        return false;
    });
    
    $(".scroll").click(function(event){
		event.preventDefault();
		
		if(this.hash=='#about'){
			$('html,body').animate({scrollTop:$(this.hash).offset().top-204}, 'slow');
		}
		else if(this.hash=='#whowedo'){
			$('html,body').animate({scrollTop:$(this.hash).offset().top-201}, 'slow');
		}
		else if(this.hash=='#whatwedo'){
			$('html,body').animate({scrollTop:$(this.hash).offset().top-190}, 'slow');
		}
		else if(this.hash=='#contact'){
			$('html,body').animate({scrollTop:$(this.hash).offset().top-190}, 'slow');
		}
		else if(this.hash=='#mobile'){
			$('html,body').animate({scrollTop:$(this.hash).offset().top-186}, 'slow');
		}
		else if(this.hash=='#web'){
			$('html,body').animate({scrollTop:$(this.hash).offset().top-184}, 'slow');
		}
		else if(this.hash=='#games'){
			$('html,body').animate({scrollTop:$(this.hash).offset().top-180}, 'slow');
		}
		else {
			$('html,body').animate({scrollTop:$(this.hash).offset().top-200}, 'slow');
		}
	});
});