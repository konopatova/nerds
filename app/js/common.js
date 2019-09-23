$(document).ready(function(){
  $('.slider').slick({
		infinite: true,
		dots: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: false,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					dots: true,
					arrows: false,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					dots: true,
					arrows: false,
				}
			},
			{
				breakpoint: 720,
				settings: {
					dots: false,
					arrows: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					dots: false,
					arrows: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
						dots: false,
						arrows: true,
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
  });
});
