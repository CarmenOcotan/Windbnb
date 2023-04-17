import data from "./data.js";
import dom from "./dom.js"

const lugares = dom.$('#lugares')

const datos = await data.getData()
/*  */


datos.forEach(element => {
    const card = dom.nCards(element);

    lugares.appendChild(card);
});

const addCiudad = dom.$('#filtrarCiudad');

addCiudad.addEventListener('click', () => {
    
  let filtro = addCiudad.value;
  const filCiudad = filtro === '' ? datos : data.filtroCiudad(datos, filtro);
  dom.nCiudad(filCiudad);
});


