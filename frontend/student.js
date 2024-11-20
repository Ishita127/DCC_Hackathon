document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navbar = document.getElementById("navbar");
    const backdrop = document.getElementById("backdrop");
  
    hamburgerMenu.addEventListener("click", () => {
      navbar.classList.toggle("active");
      backdrop.classList.toggle("hidden");
    });
  
    backdrop.addEventListener("click", () => {
      navbar.classList.remove("active");
      backdrop.classList.add("hidden");
    });
  });
  