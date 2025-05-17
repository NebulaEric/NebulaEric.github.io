//Removes header when scrolling down
let lastScrollDirection = 0; // Scroll Diection
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    let currentScroll = window.pageYOffset || this.document.documentElement.scrollTop;

    if (currentScroll > lastScrollDirection) {
        header.style.top = "-100px"
    } else {
        header.style.top = "0"
    }

    lastScrollDirection = currentScroll <= 0 ? 0 : currentScroll;
});


function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".navLinks");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });


// Find the button and the message paragraph
//const button = document.getElementById("myButton");
//const message = document.getElementById("message");

// Add a click event listener to the button
// button.addEventListener("click", function () {
//     message.textContent = "Hello! You clicked the button!";
//     button.style.backgroundColor = "blue"; // Change button color after click
// });



// document.addEventListener("DOMContentLoaded", () => {
//     const buttons = document.querySelectorAll(".button");

//     // Get the current page URL
//     const currentPage = window.location.pathname.split("/").pop();

//     buttons.forEach(button => {
//         // Highlight the button that matches the current page
//         if (button.getAttribute("href") === currentPage) {
//             button.classList.add("active");
//         }

//         button.addEventListener("click", function() {
//             buttons.forEach(button => button.classList.remove("active"));
//             this.classList.add("active");
//         });
//     });
// });



