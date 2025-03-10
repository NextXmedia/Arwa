
let splashScreen = document.getElementById('splash-screen');
let logoVar = document.getElementById('splash-logo');
document.addEventListener('DOMContentLoaded',
  function () {
    if (splashScreen) {
      setTimeout(function () {
        document.documentElement.style.overflow = "hidden";
        splashScreen.style.display = "flex"

        setTimeout(function () {
          document.documentElement.style.overflow = "unset";
          splashScreen.style.display = "none";

        }, 4000)

      }, 0)
    }
  }

)
// const sections = document.querySelectorAll('.section');
// let currentSectionIndex = 0;

// // Listen for scroll event
// window.addEventListener('wheel', (event) => {
//   const direction = event.deltaY > 0 ? 1 : -1;

//   // Calculate the next section index
//   const nextSectionIndex = currentSectionIndex + direction;

//   // Ensure the next section index is within bounds
//   if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
//     // Transition current section out
//     sections[currentSectionIndex].classList.remove('visible');
//     sections[currentSectionIndex].classList.add('hidden');

//     // Transition next section in
//     currentSectionIndex = nextSectionIndex;
//     sections[currentSectionIndex].classList.remove('hidden');
//     sections[currentSectionIndex].classList.add('visible');
//   }
// });


// splash Screen



// Navbar Code
// let navSec = document.querySelector('.navbar');
// let downScroll = window.pageYOffset;


//   window.onscroll = function () {
//     var activeScroll = window.pageYOffset;

//     if (downScroll > activeScroll) {
//       navSec.style.top = "0";
//       // navSec.style.opacity = "1";
//     }
//     else {
//       navSec.style.top = "-150px";
//       // navSec.style.opacity = "0";
//       navSec.style.transition = ".4s linear";
//     }

//     downScroll = activeScroll;
//   }



// dropDown Code
document.addEventListener("DOMContentLoaded", function () {
  function isMobile() {
    return window.innerWidth <= 992;
  }

  function setupDropdowns() {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      const dropdownToggle = dropdown.querySelector(".nav-link");
      const dropdownMenu = dropdown.querySelector(".dropdown-menu");

      if (isMobile()) {
        dropdownToggle.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          dropdownMenu.classList.toggle("show");
        });
      } else {
        dropdown.addEventListener("mouseenter", function () {
          dropdownMenu.classList.add("show");
        });
        dropdown.addEventListener("mouseleave", function () {
          dropdownMenu.classList.remove("show");
        });
      }
    });

    document.querySelectorAll(".dropdown-submenu").forEach((submenu) => {
      const submenuToggle = submenu.querySelector(".dropdown-item");
      const submenuMenu = submenu.querySelector(".dropdown-menu");

      if (isMobile()) {
        submenuToggle.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          submenuMenu.classList.toggle("show");
        });
      } else {
        submenu.addEventListener("mouseenter", function () {
          submenuMenu.classList.add("show");
        });
        submenu.addEventListener("mouseleave", function () {
          submenuMenu.classList.remove("show");
        });
      }
    });
  }

  function closeDropdownsOnClickOutside() {
    document.addEventListener("click", function (event) {
      document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
        if (!menu.contains(event.target)) {
          menu.classList.remove("show");
        }
      });
    });
  }

  setupDropdowns();
  closeDropdownsOnClickOutside();
  window.addEventListener("resize", setupDropdowns);
});

// Counter Code
document.querySelectorAll(".count").forEach((counter) => {
  let start = 0;
  const end = parseInt(counter.textContent.replace("+", "").replace(",", ""));
  const duration = 2000;
  const step = end / (duration / 16);

  setTimeout(function updateCount() {
    start += step;
    if (start >= end) {
      counter.textContent = `${end.toLocaleString()}+`;
    } else {
      counter.textContent = `${Math.floor(start).toLocaleString()}+`;
      requestAnimationFrame(updateCount);
    }
    // updateCount();  
  }, 3000);


});

// Req A Qoute Code Whatsapp Code
let formVar = document.querySelector('.containerabt');
let mainReqVar = document.querySelector('.reqAqoute');
let cBtnVar = document.querySelector('.contactBtn');
let wcBtnVar = document.querySelector('.fa-xmark');


function contactOpen() {
  mainReqVar.style.opacity = "1";
  mainReqVar.style.zIndex = "111111111";
  mainReqVar.style.transition = ".4s linear";
  formVar.style.transition = ".4s linear";
  formVar.style.transform = "scale(1)"
  formVar.style.opacity = "1"
  document.body.style.overflow = "hidden"
}

wcBtnVar.addEventListener('click',
  function () {
    mainReqVar.style.opacity = "0";
    mainReqVar.style.zIndex = "-11";
    mainReqVar.style.transition = ".4s linear";
    formVar.style.transition = ".4s linear";
    formVar.style.transform = "scale(0)"
    formVar.style.opacity = "0"
    document.body.style.overflow = "auto"
  }
)


function validateForm() {
  let isValid = true;
  const fields = ["name", "email", "phone", "city", "pincode", "country", "message"];

  fields.forEach(field => {
    const input = document.getElementById(field);
    const errorDiv = document.getElementById(`${field}-error`);
    if (!input.value.trim()) {
      input.classList.add("error");
      errorDiv.textContent = "This field is required.";
      isValid = false;
    } else {
      input.classList.remove("error");
      errorDiv.textContent = "";
    }
  });

  if (isValid) {
    sendWhatsAppMessage();
  }
}

function sendWhatsAppMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var city = document.getElementById("city").value;
  var pincode = document.getElementById("pincode").value;
  var country = document.getElementById("country").value;
  var message = document.getElementById("message").value;

  var whatsappMessage = `Hello, I would like to request a quote.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nPincode: ${pincode}\nCountry: ${country}\nMessage: ${message}`;

  var whatsappURL = `https://wa.me/+918098770708?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappURL);
}
// About Img Code
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.about-section img');

  images.forEach(image => {
    image.addEventListener('mouseenter', () => {
      image.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.5)';
    });
    image.addEventListener('mouseleave', () => {
      image.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
    });
  });
});

// Product Card Translate
function showProduct(index) {
  let products = document.querySelectorAll('.product-one');
  let navs = document.querySelectorAll('.pNav');

  products.forEach((product, i) => {
    product.classList.toggle('active', i === index);
  });

  navs.forEach((nav, i) => {
    nav.classList.toggle('active', i === index);
  });
}
