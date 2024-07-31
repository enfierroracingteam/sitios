
document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById("menu-icon");
    var navbar = document.getElementById("navbar");

    menuIcon.addEventListener('click', function () {
        // Cambia la transformación basada en la posición actual
        if (navbar.style.transform === "translateX(0px)") {
            navbar.style.transform = "translateX(-250px)";
        } else {
            navbar.style.transform = "translateX(0px)";
        }
    });
});

let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n === undefined) { n = ++slideIndex }
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Agrega automatización
setInterval(showSlides, 3000); // Cambia slides cada 3 segundos

//SLIDESHOW MARCAS
document.addEventListener('DOMContentLoaded', function() {
    var currentSlide = 0;
    var slides = document.querySelectorAll('.brands-slide');
    var totalSlides = slides.length;

    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });

    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    // Auto-play functionality
    setInterval(function() {
        changeSlide(1);
    }, 3000); // Change slide every 3 seconds
});



