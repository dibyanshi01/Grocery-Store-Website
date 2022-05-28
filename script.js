let searchForm = document.querySelector('.search-bar');

document.querySelector('#search-btn').onclick = () =>{
     shoppingCart.classList.remove('active');
     searchForm.classList.toggle('active');
     loginForm.classList.remove('active');
     menuForm.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    menuForm.classList.remove('active');
}
let loginForm = document.querySelector('.login-bar');

document.querySelector('#login-btn').onclick = () =>{
     loginForm.classList.toggle('active');
     searchForm.classList.remove('active');
     menuForm.classList.remove('active');
     shoppingCart.classList.remove('active');
}
let menuForm = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
     menuForm.classList.toggle('active');
     searchForm.classList.remove('active');
     loginForm.classList.remove('active');
     shoppingCart.classList.remove('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    menuForm.classList.remove('active');
    shoppingCart.classList.remove('active');}


var swiper = new Swiper(".review-slider", {
     loop:true,
     spaceBetween: 20,
     autoplay: {
          delay: 3500,
          disableOnInteraction: false,
     },
     centeredSlides: true,
     breakpoints: {
       0: {
         slidesPerView: 1,
         
       },
       768: {
         slidesPerView: 2,
        
       },
       1020: {
         slidesPerView: 3,
    
       },
     },
});