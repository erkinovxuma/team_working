// Navbar

let burger = document.querySelector('.nav__burger');
let hamburger = document.querySelector('.hamburger');
let list = document.querySelector('.nav__list');
let close = document.querySelector('.close');
let body = document.querySelector('.body');

hamburger.onclick = function(){
    list.style.display = "flex";
    hamburger.style.display = "none";
    close.style.display = "block";
}

close.onclick = function(){
    list.style.display = "none";
    hamburger.style.display = "block";
    close.style.display = "none";
}