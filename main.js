const navbar_toggler = document.querySelector(".navbar-toggler");
const navbar_nav = document.querySelector(".navbar-nav");
const navbar_collapse = document.querySelector(".navbar-collapse");
navbar_toggler.addEventListener("click", ()=>{
    navbar_toggler.classList.toggle("active");
    navbar_nav.classList.toggle("active");
    navbar_collapse.classList.toggle("active");
})
