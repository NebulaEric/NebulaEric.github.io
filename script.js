//Removes header when scrolling down
// let lastScrollDirection = 0; // Scroll Diection
// const header = document.querySelector("header");

// window.addEventListener("scroll", function(){
//     let currentScroll = window.pageYOffset || this.document.documentElement.scrollTop;

//     if (currentScroll > lastScrollDirection) {
//         header.style.top = "-100px"
//     } else {
//         header.style.top = "0"
//     }

//     lastScrollDirection = currentScroll <= 0 ? 0 : currentScroll;
// });

// Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".navLinks");
    const links = document.querySelectorAll(".navLinks a");

    // Toggle nav menu on hamburger click
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close nav menu when any nav link is clicked
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  });




