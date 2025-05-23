const params = new URLSearchParams(window.location.search);
// mientras se define la logica del params.get, se le asigna un siteId a mano

// const siteId = params.get('id');
const siteId = "detail"

const ejemploData = [
  {
    titulo: "Parque los Fundadores",
    descripcion: "Un parque icónico de Villavicencio, ideal para caminatas y relajarse en familia.",
    imagen: "/public/images/prueba.png"
  },
  {
    titulo: "Parque los Fundadores",
    descripcion: "Un parque icónico de Villavicencio, ideal para caminatas y relajarse en familia.",
    imagen: "/public/images/prueba.png"
  },
  {
    titulo: "Parque los Fundadores",
    descripcion: "Un parque icónico de Villavicencio, ideal para caminatas y relajarse en familia.",
    imagen: "/public/images/prueba.png"
  },
  {
    titulo: "Parque los Fundadores",
    descripcion: "Un parque icónico de Villavicencio, ideal para caminatas y relajarse en familia.",
    imagen: "/public/images/prueba.png"
  }
];



    async function cargarInformacionSitio(id) {
      const infoDiv = document.getElementById('info');
      try {
        // Mientras terminan el backend, voy a usar un json de ejemplo
        // const response = await fetch(https://tu-servidor.com/api/sitios/${id}/);
        // if (!response.ok) throw new Error('Error al consultar el servidor');
        // const data = await response.json();
        const data = ejemploData;

    infoDiv.classList.remove('loading', 'error');
    infoDiv.innerHTML = '';

    data.forEach((sitio) => {
      const tarjeta = document.createElement('div');
      tarjeta.className = 'contenido-sitio';
      tarjeta.innerHTML = `
        <h2>${sitio.titulo}</h2>
        <p>${sitio.descripcion}</p>
        <img src="${sitio.imagen}" alt="${sitio.titulo}">
      `;
      infoDiv.appendChild(tarjeta);
    });

  } catch (error) {
    infoDiv.classList.remove('loading');
    infoDiv.classList.add('error');
    infoDiv.textContent = 'Error al cargar la información del sitio.';
    console.error(error);
  }
    }

    if (siteId) {
        // alert(siteId); es mas comodo si es un console.log
        console.log(siteId);
        cargarInformacionSitio(siteId);
    } else {
      document.getElementById('info').textContent = 'No se proporcionó un ID de sitio válido.';
    }

    