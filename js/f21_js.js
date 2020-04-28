
$(function(){
	/* Mobile Slide Menu */
	$(".icon_menu").on("click",function() {
		$("body, .c_container, .mobile_overlay, .l_container, .signup_wrapper").addClass("open");
	});
	$(".mobile_overlay").on("click",function() {
		$("body, .c_container, .mobile_overlay, .l_container, .signup_wrapper").removeClass("open");
	});

	/* Mobile left Menu start  */
	$(".icon_menu,.top_new_menu").on("click", function () {
		$('.slider_close, .m_menu_cover, .container.clearfix.bg_white').removeClass('hide').addClass('show');
		$('.l_container').addClass("open");
		$('#left_menu').hide();
		$("html").addClass('noscroll');
		$('#ihKeyword, #txtBloomreachSearch').val('');
	});

	/* Test */
	$(".inline .outline").on("click",function() {
		$(".r_container").addClass("open");
	});

	/* Quick View Slide*/
	$(".qv a, .mybag div a, #want a").on("click",function() {
		$("body, .r_container, .desktop_overlay").addClass("open");
	});
	$(".r_container .icon_close, .desktop_overlay").on("click",function() {
		$("body, .r_container, .desktop_overlay").removeClass("open");
	});

	/* Mobile Search Box */
	$(".m_header .nav_secondary .icon_search").on("click",function(){
		$(".m_search_container").slideToggle();
	});
	$(".m_search_container .icon_close").on("click",function(){
   		$(".m_search_container").slideToggle();
   	});
	

	/* Desktop Search Box */
	$(".show_desktop .icon_search").click(function(){
   		$(".d_search_container").animate({width: 'toggle'});
   	});
   	$(".d_search_container .icon_close").click(function(){
   		$(".d_search_container").animate({width: 'toggle'});
   	});
	
	/* Scroll */
	$(window).scroll(function () {
	    if ($(this).scrollTop() > 800) {
	        $('.scrollToTop').fadeIn();
	    } else {
	        $('.scrollToTop').fadeOut("fast");
	    }
	});
	$('.scrollToTop').click(function () {
	    $('html, body').animate({
	        scrollTop: 0
	    }, 400);
	    return false;
	});

	/* Mobile Left Menu */
	$('.l_container .mega_menu').each(function () {
	    $(this).click(function () {
	        $(this).toggleClass('active');
	        $(this).find('.mega_sub').slideToggle();
	    });
	});

	/* Dropdown */
	$('.drop_p').each(function () {
	    $(this).click(function () {
	        $(this).next().addClass('open');
	    });
	});

	/* Checkout Slide */
	$('.expand_p').each(function () {
	    $(this).click(function () {
	        $(this).toggleClass('active');
	        $(this).next().slideToggle();
	    });
	});

	/* Checkout Input*/
	$('.input_label').each(function () {
		$(this).click(function (){
			$(this).addClass('focus');
		});
	});

	$('.tab_title').each(function () {
	    $(this).click(function () {
	        $(this).find('.tab_content').slideToggle();
	    });
	});

	/* Mobile Dropmenu */
	if (window.devicePixelRatio > 1 ) {
	  $('h1').click(function(){
			$('.nav_c').slideToggle();
			$('.side_left_menu').slideToggle();
		})
	}

	/* Filter Dropdown */
	$('.m_filer').click(function(){
		$('.side_menu').slideToggle();
	});

	/* 500 Under */
	$('.want_free').click(function(){
		$('#want').slideToggle();
	});

	/* tab Menu*/
	if(window.innerWidth >= 768) {
		$(".tab_m > div").click(function(){
			var tabGroup = $(this).parent().parent();
			var tabMenuGroup = tabGroup.find(".tab_m > div");
									
			tabMenuGroup.removeClass("active");
			$(this).addClass("active");
			
			var index = tabMenuGroup.index(this); 

			tabGroup.find(".tab_c > div").addClass("hide");	
			tabGroup.find(".tab_c > div:eq(" + index + ")").css('display','none').removeClass("hide").fadeIn(500);
			
		});	
	} else {
		$(".tab_m > div").mouseenter(function(){
			var tabGroup = $(this).parent().parent();
			var tabMenuGroup = tabGroup.find(".tab_m > div");
									
			tabMenuGroup.removeClass("active");
			$(this).addClass("active");
			
			var index = tabMenuGroup.index(this); 

			tabGroup.find(".tab_c > div").addClass("hide");	
			tabGroup.find(".tab_c > div:eq(" + index + ")").css('display','none').removeClass("hide").fadeIn(500);
			
		});	
	}
	
})



	
