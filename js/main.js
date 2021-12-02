// Scroll to top button appear

let scrollToTopVisible = false;

document.addEventListener('scroll', () => {
	const scrollToTop = document.body.querySelector('.scroll-to-top');
	if (document.documentElement.scrollTop > 100) {
		if (!scrollToTopVisible) {
			fadeIn(scrollToTop);
			scrollToTopVisible = true;
		}
	} else {
		if (scrollToTopVisible) {
			fadeOut(scrollToTop);
			scrollToTopVisible = false;
		}
	}
})


function fadeOut(el) {
	el.style.opacity = 1;
	(function fade() {
		if ((el.style.opacity -= .1) < 0) {
			el.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}
	})();
};

function fadeIn(el, display) {
	el.style.opacity = 0;
	el.style.display = display || "block";
	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += .1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
};
