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



// card slider

['load', 'resize'].forEach(function (event) { window.addEventListener(event, checkWidth); });

var container = document.getElementById('contain')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('slider-btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

function checkWidth() {
  containerWidth = container.offsetWidth;
  buttons[0].classList.add('inactive');
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else if (w < 901) {
    slidesPerPage = 2;
  } else if (w < 1101) {
    slidesPerPage = 3;
  } else {
    slidesPerPage = 4;
  }

  slidesCount = slides - slidesPerPage;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  };
  currentMargin = - currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + '%';
  if (currentPosition > 0) {
    buttons[0].classList.remove('inactive');
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive');
  }
  if (currentPosition >= slidesCount) {
    buttons[1].classList.add('inactive');
  }
}

setParams();

function slideRight() {
  if (currentPosition != 0) {
    slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
    currentMargin += (100 / slidesPerPage);
    currentPosition--;
  };
  if (currentPosition === 0) {
    buttons[0].classList.add('inactive');
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive');
  }
};

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
    currentMargin -= (100 / slidesPerPage);
    currentPosition++;
  };
  if (currentPosition == slidesCount) {
    buttons[1].classList.add('inactive');
  }
  if (currentPosition > 0) {
    buttons[0].classList.remove('inactive');
  }
};