
async function getSites() {

const sites = document.getElementById("sites")

const response = await fetch("");
const data = await response.json();

sites.array.forEach(site => {
  const container = document.createElement("div");

  container.innerHTM = ``;


  sites.appendChild(container);
});

}

