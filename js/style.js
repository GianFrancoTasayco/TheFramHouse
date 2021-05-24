const flechaDerecha = document.querySelector(".icon-chevrons-right");
const flechaIzquierda = document.querySelector(".icon-chevrons-left");
const containerSlide = document.querySelector(".container-S");

flechaDerecha.addEventListener("click", () =>{
    "use strict";
    containerSlide.classList.add("img2");
});
flechaIzquierda.addEventListener("click", () =>{
    "use strict";
    containerSlide.classList.remove("img2");
});