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


function initMap() {
	var o = {
			lat: 59.9387942,
			lng: 30.3208946
	}, 
	e = new google.maps.Map(document.getElementById("map"),{
			zoom: 17,
			center: o,
			styles: 
[ { "featureType": "water", "stylers": [ { "color": "#19a0d8" } ] }, { "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [ { "color": "#ffffff" }, { "weight": 6 } ] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#e85113" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#efe9e4" }, { "lightness": -40 } ] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "color": "#efe9e4" }, { "lightness": -20 } ] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [ { "lightness": 100 } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "lightness": -100 } ] }, { "featureType": "road.highway", "elementType": "labels.icon" }, { "featureType": "landscape", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape", "stylers": [ { "lightness": 20 }, { "color": "#efe9e4" } ] }, { "featureType": "landscape.man_made", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [ { "lightness": 100 } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "lightness": -100 } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "hue": "#11ff00" } ] }, { "featureType": "poi", "elementType": "labels.text.stroke", "stylers": [ { "lightness": 100 } ] }, { "featureType": "poi", "elementType": "labels.icon", "stylers": [ { "hue": "#4cff00" }, { "saturation": 58 } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "visibility": "on" }, { "color": "#f0e4d3" } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#efe9e4" }, { "lightness": -25 } ] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "color": "#efe9e4" }, { "lightness": -10 } ] }, { "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "simplified" } ] }]			});
	new google.maps.Marker({
			position: o,
			map: e,
			icon: "./img/map-marker.png",
			draggable: !0,
			animation: google.maps.Animation.DROP,
			position: {
					lat: 59.938862,
					lng: 30.323509
			},
			title: "Nёrds",
	})
}

/*document.getElementById('btn__write-us').addEventListener('click', 
function() {
document.querySelector('.modal__callback').style.display = 'block';});*/

$(document).ready(function(){
  // Feedback form
		var modal = document.querySelector('.modal__callback');
		var showModalBtn = document.querySelector('#btn__write-us');
		var open = document.querySelector('.open');
		var closeBtn = document.querySelector('#close');
		var login = document.querySelector('[name=login]');
		var storage = localStorage.getItem('login');
		var password = document.querySelector('[name=password]');
		var form = document.querySelector('form');
		var filledLogin = form.querySelector ('[name=login].filled');
		var filledPassword = form.querySelector ('[name=password].filled');
		var emptyLogin = form.querySelector('[name=login].empty');
		var emptyPassword = form.querySelector('[name=password].empty');

// Form opening, closure and animation for error indication
		showModalBtn.onclick = function(event) {
  	event.preventDefault();
    modal.classList.add('open');
    login.focus();
  
      if (storage) {
          login.value = storage
          password.focus();
      } else {
          login.focus();
      }
};
		closeBtn.onclick = function(close) {
		modal.classList.toggle('open');
};

 // Form closure with Esc
window.addEventListener('keydown', function(esc) {
	if (esc.keyCode===27) {
			modal.classList.remove('open');
	}
});

// Form closure when clicking outside of its borders
$('body').click(function(e) {
	if (modal.hasClass('open')
	&& ($(e.target).closest(modal).length===0) && (!$(e.target).hasClass('btn__write-us'))) {
		modal.removeClass('open');
	}
});



});