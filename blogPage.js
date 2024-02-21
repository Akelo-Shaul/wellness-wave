const navLinks = document.querySelector(".nav-links");
const toggleBtn = document.querySelector(".toggle-button");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  //   console.log(navLinks.classList);
});
