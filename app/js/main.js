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
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
