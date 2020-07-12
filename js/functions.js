$(document).ready(function() { 	
	HeaderNavMobile();
 });

function HeaderNavMobile()
{
	$('a.header-nav-mobile').on('click', function()
	{
		$("a.search-mobile").removeClass("active");
		$('form.search').fadeOut("fast");

		$('.header-nav ul').fadeToggle("fast");
		$(this).toggleClass("active");
	});

	$('a.search-mobile').on('click', function()
	{
		$("a.header-nav-mobile").removeClass("active");
		if ( $('.header-nav ul').css('position')=='absolute' ) {
			$('.header-nav ul').fadeOut("fast");
		}

		$('form.search').fadeToggle("fast").toggleClass("mobile-active");
		$(this).toggleClass("active");
		$('.searchtext').focus();
	});
}