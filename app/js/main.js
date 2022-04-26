document.addEventListener("DOMContentLoaded", () => {
	const communitySlider = new Swiper(".block-community__slider", {
		freeMode: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		slidesPerView: 1,
		spaceBetween: 0,
		breakpoints: {
			567: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
		},
	});
});

//ACCORDION

var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
	acc[i].onclick = function () {
		var setClasses = !this.classList.contains('active');
		setClass(acc, 'active', 'remove');
		setClass(panel, 'show', 'remove');

		if (setClasses) {
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		}
	}
}

function setClass(els, className, fnName) {
	for (var i = 0; i < els.length; i++) {
		els[i].classList[fnName](className);
	}
}
