async function getSites() {
  const sites = document.getElementById("sites");

  // Crear y mostrar el loader
  const loader = document.createElement("div");
  loader.id = "loader";
  loader.style.position = "fixed";
  loader.style.top = "50%";
  loader.style.left = "50%";
  loader.style.transform = "translate(-50%, -50%)";
  loader.style.zIndex = "9999";
  loader.innerHTML = `<div style="padding: 20px; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); font-size: 1.2em;">Cargando...</div>`;
  document.body.appendChild(loader);

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) {
    console.error("No site ID provided in the URL.");
    loader.remove();
    return;
  } else {
    console.log("Site ID:", id);
  }

  const response = await fetch(`https://programacion-web-backend.onrender.com/api/sites/${id}`);
  const site = await response.json();

  // Quitar el loader
  loader.remove();

  const container = document.createElement("div");
  container.classList.add("site");

  container.innerHTML = `
    <div class="site-header">
        <div class="site-title">título</div>
        <div class="site-rating">calificación ★${site.calificacion}</div>
    </div>
    <div class="site-content">
        <div class="site-info">
            <div class="site-name">${site.nombre}</div>
            <div class="description-text">${site.descripcion}</div>
            <div class="location-info">
                <p><strong>Ciudad:</strong> ${site.ciudad}</p>
                <p><strong>Barrio:</strong> ${site.barrio}</p>
                <p><strong>Ubicación:</strong> Lat ${site.latitud}, Lng ${site.longitud}</p>
            </div>
        </div>
        <div class="site-image">
            <img src="${site.imagen}" alt="${site.nombre}" />
        </div>
    </div>
  `;

  sites.appendChild(container);
}

getSites();