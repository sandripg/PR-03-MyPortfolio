import {
    cleanPage
}
from "../../utils/cleanPage.js";

const homeHTML = `<section class="content-container">
        <div id="text-float-home" class="text-focus-in">
          <h1 class="text-hello">Hola, mi nombre es:</h1>
          <h2 class="text-name">Sandra Pompido</h2>
          <div class="text-description-container-home">
            <h3 class="text-description-home">Soy Diseñadora Gráfica y mi objetivo es ser
              FullStack Developer.
              Actualmente me encuentro estudiando programación en el máster de formación de Rock {The Code}.<br>
              <br>
              Aunque, ya había realizado webs para empresas, con CMS como Prestashop y Wordpress, aplicando
              modificaciones de código, en este programa de formación estoy aprendiendo tecnologías como HTML 5, CSS 3,
              JavaScript, React, TypeScript, Node, y muchas más...
              <br>
              <br>
              Espero que les guste mi portfolio y si tienen alguna pregunta, no duden en ponerse en contacto conmigo.
            </h3>
          </div>
        </div>
        <section class="home">
          <div class="scale-in-right">
            <img src="./public/yotrans.png" alt="">
          </div>
        </section>`;


const main = document.getElementById('main');
const cbox = document.querySelectorAll('.nav-item > .nav-item-link');

for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("click", (ev) => {
        ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
        const linkHref = ev.currentTarget.href; // Almacenamos la URL en una constante

        cleanPage(main);
        main.innerHTML = homeHTML;

    });
}