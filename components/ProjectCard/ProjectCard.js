 const projects = [{
     title: 'Tienda Estática',
     status: 'Despliegue ✅',
     description: 'Tienda inventada de ventas de Perfumes',
     tech: ['HTML 5', 'CSS 3'],
     github: 'https://github.com/sandripg/PR-01-Web-Responsive',
     link: 'https://moonarome.netlify.app/',
     img: '../public/moonarome_static.jpg'
   }, {
     title: 'Tienda Dinámica 2',
     status: 'Despliegue ✅',
     description: 'Tienda Dinámica con filtro de búsqueda',
     tech: ['HTML 5', 'CSS 3', 'JS'],
     github: 'https://github.com/sandripg/PR-02-Dynamic-Web',
     link: 'https://moonarome-dynamic.netlify.app',
     img: './public/moonarome_dinamic.jpg'
   },

   {
     title: 'Color Flipper',
     status: 'Despliegue ✅',
     description: 'Aplicación dinámica cambios de color',
     tech: ['HTML 5', 'CSS 3', 'JS', 'Node JS'],
     github: 'https://github.com/sandripg/Color-Flipper-San',
     link: 'https://color-flipper-san.netlify.app',
     img: './public/colorflipper.jpg'
   },

   {
     title: 'Rick & Morty',
     status: 'Despliegue ✅',
     description: 'Api Rest Rick & Morty',
     tech: ['HTML 5', 'CSS 3', 'JS', 'Node JS', 'Api Rest'],
     github: 'https://github.com/sandripg/rickandmorty',
     link: 'https://rick-and-morty-san.netlify.app',
     img: './public/rickandmorty.jpg'
   },

   {
     title: 'Currículum Dinámico',
     status: 'Despliegue ✅',
     description: 'Currículum Dinámico con Skills',
     tech: ['HTML 5', 'CSS 3', 'JS', 'Node JS', 'Boostrap'],
     github: 'https://github.com/sandripg/sandracv',
     link: 'https://sandra-pompido-cv.netlify.app/',
     img: './public/cv.jpg'
   },

   {
     title: 'Portfolio',
     status: 'Despliegue ✅',
     description: 'Portfolio Personal de trabajo Dinámico',
     tech: ['HTML 5', 'CSS 3', 'JS', 'Node JS'],
     github: 'https://github.com/sandripg/PR-03-MyPortfolio',
     link: 'https://portfoliosandrapompido.netlify.app/',
     img: './public/portfolio.jpg'
   },
 ];


 const projectMainHtml = (projects) => {
   return `<section class="projects-container">
        <div id="text-float-projects" class="text-focus-in">
          <div class="text-name-container">
            <h2 class="text-name-projects">3. Proyectos Realizados</h2>
          </div>
          </div>
            ${projects}
        </section>`
 };

 const projectHtml = (project) => {
   var techs = getTechHtml(project.tech);
   return `<div class="projects">
           <div class="project-element-content">
             <h3 class="project-title">${project.title}</h3>
             <p class="project-status">${project.status}</p>
             <div class="project-description">
               <p>${project.description}</p>
             </div>
             <ul class="project-technologies">
                ${techs}    
             </ul>
             <div class="project-links">
               <a href="${project.github}" target="_blank">
                 <img src="./public/icons8-github-100.svg" alt="">
               </a>
               <a href="${project.link}" target="_blank">
                 <img src="./public/icons8-link-100.png" alt="">
               </a>
             </div>
           </div>
           <div class="project-element-img">
             <div class="project-element-img-container">
               <img src="${project.img}" alt="">
             </div>
           </div>


         </div>`
 };

 const getTechHtml = (techs) => {
   var result = '';
   for (let index = 0; index < techs.length; index++) {
     const tech = techs[index];
     result += '<li>' + tech + '</li>'
   }
   return result;
 };

 export function init() {
   var result = '';

   for (let index = 0; index < projects.length; index++) {
     const project = projects[index];
     result += projectHtml(project);
   }

   return projectMainHtml(result);;
 }