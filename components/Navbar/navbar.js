import {
    homeHtml,
    experienceHtml,
    projectsHtml
} from "../../constants.js"



const main = document.getElementById('main');
const cbox = document.querySelectorAll('.nav-item > .nav-item-link');

for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("click", (ev) => {

        ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
        const linkHref = ev.currentTarget.href; // Almacenamos la URL en una constante

        if (linkHref.includes('/home'))
            main.innerHTML = homeHtml;
        else if (linkHref.includes('/experiencias'))
            main.innerHTML = experienceHtml;
        else if (linkHref.includes('/proyectos'))
            main.innerHTML = projectsHtml;

    });
}