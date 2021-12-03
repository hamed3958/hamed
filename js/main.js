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



// tool tip

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



// dark mode

!function () {
  var t,
    e = document.getElementById("darkSwitch");
  if (e) {
    t = null !== localStorage.getItem("darkSwitch") && "dark" === localStorage.getItem("darkSwitch"),
      (e.checked = t) ? document.body.setAttribute("data-theme", "dark") : document.body.removeAttribute("data-theme"),
      e.addEventListener("change", function (t) {
        e.checked ? (document.body.setAttribute("data-theme", "dark"),
          localStorage.setItem("darkSwitch", "dark")) : (document.body.removeAttribute("data-theme"),
            localStorage.removeItem("darkSwitch"))
      })
  }
}();
