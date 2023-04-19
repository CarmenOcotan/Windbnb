import data from "./data.js";
import dom from "./dom.js"

/* const lugares = dom.$('#lugares') */

const datos = await data.getData()

const ciudades = data.cityUnica(datos)

dom.allCiudades(ciudades);

datos.forEach(element => {
    const card = dom.nCards(element);

    lugares.appendChild(card);
});



const addCiudad = [...dom.$('#lista').children];

let active1 = 0;

addCiudad.forEach((lista, index) => {

  lista.addEventListener('click', () => {
  
    if (lista.classList.contains('local1')) return;

    lista.classList.add('local1');

    let pass = addCiudad[active1];

    pass.classList.remove('local1');

    active1 = index;

    let filtro = lista.textContent;

    const filCiudad = data.filtrar(datos, filtro);
    console.log(filCiudad)
    
    dom.mCards(filCiudad)
  });
})
dom.mCards(datos)

//AGREGANDO EL CONTADOR 

/* const addGuests = [...dom.$('#mostrar').children]; */
