const navbar_toggler = document.querySelector(".navbar-toggler");
const navbar_nav = document.querySelector(".navbar-nav");
const navbar_collapse = document.querySelector(".navbar-collapse");
const card_image_container = document.querySelectorAll(".card-image-container");
navbar_toggler.addEventListener("click", ()=>{
    navbar_toggler.classList.toggle("active");
    navbar_nav.classList.toggle("active");
    navbar_collapse.classList.toggle("active");
})

card_image_container.forEach((e)=> e.addEventListener("click", ()=>{
    e.classList.toggle("active");
}))