async function getSites() {
  // const data = [
  //   {
  //     "id": 1,
  //     "nombre": "Bioparque Los Ocarros",
  //     "descripcion": "Parque zoológico con fauna nativa de los Llanos Orientales.",
  //     "imagen": "../public/images/prueba.png",
  //     "calificacion": "4.5",
  //     "latitud": "4.142500",
  //     "longitud": "-73.597000",
  //     "ciudad": "Villavicencio",
  //     "barrio": "Vía a Restrepo"
  //   },
  //   {
  //     "id": 2,
  //     "nombre": "Parque La Vida Cofrem",
  //     "descripcion": "Centro recreativo con lagos, zonas verdes y piscina.",
  //     "imagen": "../public/images/prueba.png",
  //     "calificacion": "4.3",
  //     "latitud": "4.135800",
  //     "longitud": "-73.620000",
  //     "ciudad": "Villavicencio",
  //     "barrio": "Catama"
  //   },
  //   {
  //     "id": 3,
  //     "nombre": "Mirador Matapalo",
  //     "descripcion": "Mirador natural con vistas impresionantes de los Llanos.",
  //     "imagen": "../public/images/prueba.png",
  //     "calificacion": "4.7",
  //     "latitud": "4.160000",
  //     "longitud": "-73.590000",
  //     "ciudad": "Villavicencio",
  //     "barrio": "Alto Pompeya"
  //   },
  //   {
  //     "id": 4,
  //     "nombre": "Catedral Nuestra Señora del Carmen",
  //     "descripcion": "Iglesia histórica ubicada en el centro de Villavicencio.",
  //     "imagen": "../public/images/prueba.png",
  //     "calificacion": "4.6",
  //     "latitud": "4.148000",
  //     "longitud": "-73.635000",
  //     "ciudad": "Villavicencio",
  //     "barrio": "Centro"
  //   },
  //   {
  //     "id": 5,
  //     "nombre": "Parque Fundadores",
  //     "descripcion": "Parque público ideal para caminar, hacer ejercicio y descansar.",
  //     "imagen": "../public/images/prueba.png",
  //     "calificacion": "4.4",
  //     "latitud": "4.134000",
  //     "longitud": "-73.640000",
  //     "ciudad": "Villavicencio",
  //     "barrio": "Porfía"
  //   }
  // ];

const response = await fetch("https://programacion-web-backend.onrender.com/api/sites");
const site = await response.json();

  const sites = document.getElementById("sites");

  site.forEach(site => {
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
                        <img src="${site.imagen}" alt="${site.nombre}" 
                      </div>
                            
    `;

    sites.appendChild(container);
  });
}

getSites();