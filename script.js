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

//Copy Button
document.querySelectorAll(".copy").forEach(copyButton => {
  copyButton.addEventListener("click", ()=> {
    const targetElement = document.querySelector(copyButton.dataset.copy);
    const textToCopy = targetElement.textContent.replace(/\s+/g, " ").trim();

    navigator.clipboard.writeText(textToCopy).then(() =>{
      const label = copyButton.querySelector(".copy-label");
      const originalText = label.textContent;

      copyButton.disabled = true;
      label.textContent = "Copied";

      setTimeout(() => {
        copyButton.disabled = false;
        label.textContent = originalText;
      }, 1000);
    });
  });
});



