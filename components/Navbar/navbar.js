import {
    homeHtml,
    experienceHtml,
    projectsHtml
} from "../../constants.js";

import {
    init
}
from "../ProjectCard/ProjectCard.js"



const main = document.getElementById('main');
const cbox = document.querySelectorAll('.nav-item > .nav-item-link');
const cboxHamburger = document.querySelectorAll('.nav-item-hamburger > .nav-item-hamburger-link');

const hWrap = document.querySelector('.header-container');
hWrap.style.background = "";
main.innerHTML = homeHtml;


let link = sessionStorage.getItem("ref");
if (link) {
    if (link.includes('/home')) {
        main.innerHTML = homeHtml;
    } else if (link.includes('/experiencias')) {
        main.innerHTML = experienceHtml;
    } else if (link.includes('/proyectos')) {
        main.innerHTML = init();
    }
}


for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("click", (ev) => {
        ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
        const linkHref = ev.currentTarget.href; // Almacenamos la URL en una constante
        hWrap.style.background = "";

        if (linkHref.includes('/home')) {
            main.innerHTML = homeHtml;
        } else if (linkHref.includes('/experiencias'))
            main.innerHTML = experienceHtml;
        else if (linkHref.includes('/proyectos')) {
            main.innerHTML = init();
            // hWrap.style.background = 'linear-gradient(to right, #1e1e1e 50%, #08bdbd 50%';
        }

    });
}

for (let i = 0; i < cboxHamburger.length; i++) {
    cboxHamburger[i].addEventListener("click", (ev) => {
        ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
        const linkHref = ev.currentTarget.href; // Almacenamos la URL en una constante

        hWrap.style.background = "";
        if (linkHref.includes('/home')) {
            main.innerHTML = homeHtml;
        } else if (linkHref.includes('/experiencias')) {
            main.innerHTML = experienceHtml;
        } else if (linkHref.includes('/proyectos')) {
            main.innerHTML = init();
        }
        location.reload();
        sessionStorage.setItem("ref", linkHref);

    });
}