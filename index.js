  const openMenu = document.getElementById("menuOpen");
  const closeMenu = document.getElementById("menuClose");
  const showNav = document.getElementById("myNav");


  const openNav = () => {
      showNav.style.width = "100%";
  }

  const closeNav = () => {
      showNav.style.width = 0;
  }

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  let texts = document.getElementsByClassName("slide-text");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < texts.length; i++) {
    texts[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";  
  texts[slideIndex-1].style.display = "block";
  
}

  // Keyboard navigation for slideshow controls (previous and next buttons)
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  // Set focus when tabbing
  prevButton.setAttribute("tabindex", "0");
  nextButton.setAttribute("tabindex", "0");

  // Function to trigger the slideshow using keyboard
  prevButton.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      plusSlides(-1);  // Move to previous slide
    }
  });

  nextButton.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      plusSlides(1);  // Move to next slide
    }
  });

  openMenu.setAttribute("aria-expanded", "false");

  openMenu.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openNav();  // Open menu
    }
  });

  closeMenu.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closeNav();  // Close menu
    }
  });

  // Add keyboard navigation to the menu items
  const menuLinks = document.querySelectorAll(".menu-list a");
  menuLinks.forEach(link => {
    link.setAttribute("tabindex", "0");

    link.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.href = this.href;  // Navigate to the link
      }
    });
  });


