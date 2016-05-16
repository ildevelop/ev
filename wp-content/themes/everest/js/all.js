jQuery(document).ready(function($){		
	
	//== menu 	
	$('.menu-item-has-children').click(function(){
		$("ul.sub-menu").slideToggle(200);
	});
	
		
	$('.menutoggle').click(function(){
		$("#menu-header, #menu-headeren").slideToggle(200);
	});
	$('.menutoggle2').click(function(){
		$("#menu-catmenu, #menu-catmenuen").slideToggle(200);
	});
	
	
	$(window).scroll(function(){
		$('.headbtm').toggleClass('sticky', $(document).scrollTop() >= 31);
		$('.scrlbtn').toggleClass('show', $(document).scrollTop() >= 150);
	});
	
	// Resize Event
	$(window).on('resize', function(){	
		if($(window).width() > 1040 && $('nav .menu').is(':hidden')){
			$('nav .menu').removeAttr('style'); 
			$("nav.catnav .menu").removeAttr('style'); 
		}	
		
		$('.recentpost2 li img').css('height', $('.recentpost2 li').width());
		var h = $('.clients .imgholder div').width();
		$('.clients .imgholder div').css('height', h + 40);
		$('.clients .imgholder div').css('line-height', h + 40 + 'px');
		var ih = $('.memimg').width();
		$('.memimg img').css('height', ih);	
					
	}).trigger('resize');	
	
	$('.frmbtn').click(function(){
		$('.sidecontact').toggleClass('inout');
	});
	
	$('.frmpop, .ffrm').click(function(e){
		//e.preventDefault();
		e.stopPropagation();
		//return false;
	});
	$('.packs a, .spn2, .spn1, .mobfrm, .footfrm').click(function(e){
		//e.preventDefault();
		e.stopPropagation();
		return false;
	});
	
	$('.spn1').click(function(e){
		$('#frmpop2').slideToggle(200);
	});
	
	$('.spn2').click(function(e){
		$('#frmpop1').slideToggle(200);
	});
	   
	$('.close').click(function(){
		$(this).parent('.frmpop').slideUp(200);
		$('.ffrm').parent('.contactpop').fadeOut(100);
	});
	$('.closeffrm').click(function(){
		$('.scrlbtn .ffrm').fadeOut(100);
	});	
	
	$('.packs a, .mobfrm').click(function(e){
		$(".contactpop").fadeIn(100);
	});
	
	$('.footfrm').click(function(){
		$(".ffrm").fadeToggle(200);
	});
	
	$(document).click(function(){
		$('.contactpop').fadeOut(100);
		$('.scrlbtn .ffrm').fadeOut(100);
		$('.frmpop').slideUp(200);
	});	
	$(".actbut").click(function(){
		$(this).toggleClass('actclose');		
		$(this).next(".main_acdetail").slideToggle(300);
	});
	//== Pop up
	
	$('.playbtn').click(function(e){
		e.preventDefault();
		$('.popup').fadeIn(0);
		$('.overlay').fadeIn(0);
		var linkSrc = $(this).attr('rel');
		$('.popcontent').find('iframe').attr('src', linkSrc);
	});
	$('.b-close').click(function(){
		$('.popup').fadeOut(0);
		$('.overlay').fadeOut(0);
		$('.popcontent').find('iframe').attr('src', '');							
	});
	
	//------------- URL post state --------------//
	var url=$("#pageslug").val();
	$("#portfolio-filter li a").click(function(){
		var slug=$(this).data('slug');
		//alert(slug);
		var newpath=url+ "#!"+ slug;
		window.history.pushState('page2', 'Title', newpath);
	});
	//------------------------------------------//
	/*==// Sticky header */
	
	/*$(window).scroll(function(){
	$('header').toggleClass('fixed', $(document).scrollTop() >= $('header').outerHeight());
	$('.moheader').toggleClass('fixed', $(document).scrollTop() >= $('.moheader').outerHeight());
	//$('.switch').toggleClass('blueicon', $(document).scrollTop() >= 100);
	//$('.switch').removeClass('closenav', $(document).scrollTop() >= 100);

	});*/
	
	//== TABS
	$('.tabs').hide();
	$('.tabmenu a').bind('click', function(e){
		$('.tabmenu a.active').removeClass('active');
		$('.tabs:visible').hide();
		$(this.hash).fadeIn(200);
		$(this).addClass('active');
		e.preventDefault();
	//}).filter(':nth(1)').click();
	}).filter(':first').click();
	
	//== Accordion
	$(".faq .faqitem h4").click(function() {
		//$(this).closest('.faqs').find('.active').removeClass('active');
		//$(this).addClass('active');
		//$(".qacont").slideUp(0);
		$(this).toggleClass('active');
		$(this).next("div").slideToggle(600);
	});			
	$(".faq .faqitem h4:first").click();
	$('.faq .faqitem h4:first').addClass('active');
		
	$('.gotop').click(function() {
		$('html,body').animate({ scrollTop: 0 }, 300);
	});
	
	$('.postdesc ul').children('li').each(function(index){
		$(this).addClass(index % 2 ? 'even' : 'odd');
	});	
	
});

(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);

jQuery(document).ready(function($){		
$('.countnum').counterUp({
	delay: 100,
	time: 3000
});
});