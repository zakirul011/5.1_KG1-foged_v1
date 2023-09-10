(function ($) {
	"use strict";

	// custom js

	//change the active class
	addRemoveClass(document.querySelectorAll('.product-size-box span'));
	addRemoveClass(document.querySelectorAll('.lugs-item span'));
	addRemoveClass(document.querySelectorAll('.product-size-item span'));
	function addRemoveClass(items) {
		items.forEach(item => {
			item.addEventListener('click', ()=>{
				for (let i = 0; i < items.length; i++) {
					items[i].classList.remove('active')
				}
				item.classList.add('active')
			})
		});
	}

	//toogle class
	activeToggle(document.querySelectorAll('.color-panel-list ul li'))

	function activeToggle(items) {
		items.forEach(item => {
			item.addEventListener('click', ()=>{
				item.classList.toggle('active')
			})
		});
	}

	document.querySelectorAll('.shop-menu-title h5').forEach(header => {
		header.addEventListener('click', ()=>{
			header.parentElement.classList.toggle('active')
		})
	});


	//when click 3d btn reload the 3d img
	const imgModalWrap = document.querySelector('.img-modal-wrap')
	const threeD = document.querySelectorAll('.absolute-circle-icons a:first-child, .procuct-details-play a:first-child')
	
	threeD.forEach(btn => {
		btn.addEventListener('click', ()=>{
			// modalItem.src = 'cap_XR.297.html'
			if (imgModalWrap.contains(document.querySelector('.img-modal-wrap iframe'))) {
				
			}else{
				imgModalWrap.insertAdjacentHTML('beforeend','<iframe src="cap_XR.297.html" allowfullscreen style="position: absolute; top: 0px; left: 0px; height: 100%; width: 1px; min-width: 100%; *width: 100%;" frameborder="0" scrolling="no"></iframe>');
			}
	
			const modalItem = document.querySelector('.img-modal-wrap iframe')
			modalItem.addEventListener('load',()=>{
				document.querySelector('.img-modal-wrap .preloader2').style.display = 'none';
			})
			
		})
	});


	// resonsive-menu
	const openMenuIcon = document.querySelector('.header-icons a:nth-child(5)')
	const menuLink = document.querySelectorAll('.main-menu ul li a')
	const header = document.querySelector('.header-area')
	const overlay = document.querySelector('.overlay-menu');
	openMenuIcon.addEventListener('click', () => {
		if (header.classList.contains('active-menu')) {
			header.classList.remove('active-menu')
		} else {
			header.classList.add('active-menu')
		}
	})
	overlay.addEventListener('click', () => {
		header.classList.remove('active-menu')
	})
	menuLink.forEach(link => {
		link.addEventListener('click', () => {
			header.classList.remove('active-menu')
		})
	});

	//input-number style 
	(function() {
 
		window.inputNumber = function(el) {
	 
		  var min = el.attr('min') || false;
		  var max = el.attr('max') || false;
	 
		  var els = {};
	 
		  els.dec = el.prev();
		  els.inc = el.next();
	 
		  el.each(function() {
			 init($(this));
		  });
	 
		  function init(el) {
	 
			 els.dec.on('click', decrement);
			 els.inc.on('click', increment);
	 
			 function decrement() {
				var value = el[0].value;
				value--;
				if(!min || value >= min) {
				  el[0].value = value;
				}
			 }
	 
			 function increment() {
				var value = el[0].value;
				value++;
				if(!max || value <= max) {
				  el[0].value = value++;
				}
			 }
		  }
		}
	 })();
	 
	 inputNumber($('.input-number'));


	// ANOTHER-SERVICE-JS
	$('.single-concave-slider:nth-child(odd)').addClass('');
	$('.single-concave-slider:nth-child(even)').addClass('push-down');

	// Add minus icon for collapse element which is open by default
	window.addEventListener('load', ()=>{

		$(".collapse.show").each(function () {
			$(this).prev(".card-header").find(".fa-plus").css("opacity", "0");
			$(this).prev(".card-header").find(".fa-minus").css("opacity", "1");
			$(this).prev(".card-header").parent('.card').addClass('active-aco')
		});
	
		// Toggle plus minus icon on show hide of collapse element
		$(".collapse").on('show.bs.collapse', function () {
			$(this).prev(".card-header").find(".fa-plus").css("opacity", "0");
			$(this).prev(".card-header").find(".fa-minus").css("opacity", "1");
			$(this).prev(".card-header").parent('.card').addClass('active-aco')
		}).on('hide.bs.collapse', function () {
			$(this).prev(".card-header").find(".fa-plus").css("opacity", "1");
			$(this).prev(".card-header").find(".fa-minus").css("opacity", "0");
			$(this).prev(".card-header").parent('.card').removeClass('active-aco')
		});
	})

	// sticky
	var wind = $(window);
	var sticky = $('.header-area');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});

	//active wheel feature dots box
	wheelFeatureBox(document.querySelectorAll('.wheel-feature-dots a'), document.querySelectorAll('.wheel-feature-box'))
	function wheelFeatureBox(links, items) {
		links.forEach((link,index) =>{
			link.addEventListener('click', ()=>{
				for (let i = 0; i < items.length; i++) {
					items[i].classList.remove('active')
				}
				items[index].classList.add('active')
			})
		})
	}

	//get active all previous item when click
	activePrevItem(document.querySelectorAll('.ratting-comment .ratting.review-ratting i'))
	function activePrevItem(items) {
		items.forEach((item, index) =>{
			item.addEventListener('click', ()=>{
				for (let i = 0; i < items.length; i++) {
					items[i].classList.remove('active')
					
				}
				for (let i = 0; i < index + 1; i++) {
					items[i].classList.add('active')
				}
			})
		})
	}


	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 100;
	$('.main-menu ul, .sidebar-menu ul').onePageNav({
		scrollOffset: top_offset,
	});

// smooth-scroll
	$('.product-menu ul li a, .wheel-feature-dots a').bind('click', function(event){
		var $anchor = $(this);
		var headerH = '100';
		$('html, body').stop().animate({
			 scrollTop  : $($anchor.attr('href')).offset().top - headerH + "px"
		}, 700, 'easeInSine');
		event.preventDefault();
  });
		/*=========================
	hero-active-slider
	===========================*/

	function mainSlider() {
		var BasicSlider = $('.hero-active-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.signle-hero-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.signle-hero-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
			responsive: [{
				breakpoint: 767,
			}]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();
/*=========================
	product-details-active-slider
	===========================*/
	$('.product-details-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product-details-nav'
	 });
	 
	 $('.product-details-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product-details-active',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-up"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-down"></i></button>',
		vertical: true,
		centerPadding: '0px',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				vertical: false,
				prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				vertical: false,
				prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				vertical: false,	
				prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
			}
		}
	]
	 });


	/*=========================
	testimonial-active-slider
	===========================*/
	$('.testimonial-active-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

	});

	/*=========================
	dually-active-slider
	===========================*/

	$('.dually-slide-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.dually-active-slider'
	});

	$('.dually-active-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		asNavFor: '.dually-slide-for',
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	/*=========================
	active-shop-product-slider
	===========================*/

	$('.active-shop-product-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: true,
				}
			}
		]
	});
	/*=========================
	stun-feature-img-wrap
	===========================*/

	$('.stun-feature-img-wrap').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					arrows: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					arrows: true,
				}
			}
		]
	});


	/*=========================
	concave-active-slider
	===========================*/

	$('.concave-active-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					arrows: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					arrows: true,
				}
			}
		]
	});


	/*=========================
	legend-active-slider
	===========================*/

	$('.legend-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});


	/*=========================
	gallery-active-slider
	===========================*/

	$('.gallery-active-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});
	/*=========================

	/*=========================
	wheel-active-slider
	===========================*/

	$('.wheel-active-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '0px',
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

		responsive: [{
				breakpoint: 1500,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	/*=========================

	BRAND SLIDER
	===========================*/
	$('.service-slider-active').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	//tooltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	 })


	/*=========================
	magnificPopup image JS
	===========================*/
	$('.faq-img-wrap a, .popup-videoo, .popup-image, .product-intro-content a, .play-video').magnificPopup({
		type: 'iframe'
	});



	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});




	/*=========================
	AOS JS
	===========================*/
	AOS.init({
		disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 900, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
	});

})(jQuery);