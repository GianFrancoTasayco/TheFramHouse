const flechaDerecha = document.querySelector(".icon-chevrons-right");
const flechaIzquierda = document.querySelector(".icon-chevrons-left");
const containerSlide = document.querySelector(".container-S");
var slideUno = document.querySelector(".img2");
var slideDos = document.querySelector(".img3");

flechaDerecha.addEventListener("click", () =>{
    "use strict";
    containerSlide.classList.add("img2");
});
flechaIzquierda.addEventListener("click", () =>{
    "use strict";
    containerSlide.classList.remove("img2");
});