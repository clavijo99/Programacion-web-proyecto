
async function getSites() {

const sites = document.getElementById("sites")

const response = await fetch("https://programacion-web-backend.onrender.com/api/sites");
const data = await response.json();

data.forEach(site => {
  const container = document.createElement("div");

  container.innerHTML = `<div class="card">
  <img src="${site.imagen}" alt="Imagen del sitio">
  <div class="card-content">
    <h3>${site.nombre}</h3>
    <p>${site.descripcion}</p>
    <div class="stars">
      ★${site.calificacion}
    </div>
  </div>
</div>`;


  sites.appendChild(container);
});


}
getSites();



