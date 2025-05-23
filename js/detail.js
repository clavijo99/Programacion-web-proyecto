const params = new URLSearchParams(window.location.search);
const siteId = params.get("id");

async function cargarInformacionSitio(id) {
  // const infoDiv = document.getElementById("info");
  // try {
  //   const response = await fetch(`https://tu-servidor.com/api/sitios/${id}/`);
  //   if (!response.ok) throw new Error("Error al consultar el servidor");

  //   const data = await response.json();

  //   infoDiv.classList.remove("loading", "error");
  //   infoDiv.innerHTML = `<H2>hello</H2>`; // Aquí puedes personalizar cómo mostrar la información del sitio
  // } catch (error) {
  //   infoDiv.classList.remove("loading");
  //   infoDiv.classList.add("error");
  //   infoDiv.textContent = "Error al cargar la información del sitio.";
  //   console.error(error);
  // }
}

cargarInformacionSitio(siteId);