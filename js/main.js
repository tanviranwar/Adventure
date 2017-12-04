jQuery(document).ready(function($){
	$('#nav').slicknav();
	$("#responsive-video").fitVids();
	$(".client_crousel").owlCarousel({
		items: 6,
		itemsDesktop: [1199,6],
		
		itemsDesktopSmall: [991,4],
		pagination: false,
		theme: "rrf-angle-only",
		navigation: true,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});
	$(".testimonial_list").owlCarousel({
		singleItem: true,
		pagination: true,
		theme: "rrf-angle-paged"
	});
	
	
	$(function(){
	  $.scrollUp({
	  
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-up"></i>',
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'	
	  });
	});	
});
