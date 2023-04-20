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
const location1 = dom.$('#location1');
const addCity = dom.$('#addCity');
const place = dom.$('#place');
let active1 = 0;

addCiudad.forEach((lista, index) => {

  lista.addEventListener('click', () => {
  
    if (lista.classList.contains('local1')) return;

    location1.textContent=lista.textContent;
    addCity.textContent = lista.textContent;
    place.textContent = lista.textContent;

    lista.classList.add('local1');

    let pass = addCiudad[active1];

    pass.classList.remove('local1');

    active1 = index;

    let [filtro] = lista.textContent.split(",")

    const filCiudad = data.filtrar(datos, filtro);
    console.log(filCiudad)
    
    dom.mCards(filCiudad)
  });
})
dom.mCards(datos)

/* const busqueda = dom.$('#buscar')

busqueda.addEventListener('click', () => {

  console.log('hola')
  if (addCiudad != "" && total !=0){
    filCiudad = data.filter(datos,);
    
    let fitro2 = data.filGuests (filCiudad)
    dom.mCards(fitro2)

  }else if (total > 0){
    filCiudad = data.filGuests(datos, total)
    dom.mCards(fitro2)
  }
 
 conAdult = 0;
 conChild = 0;

 adult.innerHTML = conAdult; 
 child.innerHTML = conChild;

})
 */

//AGREGANDO EL CONTADOR 
const addGuests = dom.$('#addGuests');
const guests2 = dom.$('#guests2');
const menosA = dom.$('#menosA');
const masA = dom.$('#masA');
const adult = dom.$('#adult');
const child = dom.$('#child');
const menosC = dom.$('#menosC');
const masC = dom.$('#masC');

let conAdult = 0;
let conChild = 0;
let total = 0;

//Creo una Funcion para mandar a llamar el resultado
function insertarTotal() {
  total = conAdult + conChild;
  addGuests.textContent = total;
  guests2.textContent = total;
}

menosA.addEventListener('click', () => {
  if(conAdult > 0){
    conAdult = conAdult - 1;
    adult.textContent = conAdult;
    insertarTotal();
  }
});

masA.addEventListener('click', () => {
  if(conAdult < 10){
    conAdult = conAdult + 1;
    adult.textContent = conAdult;
    insertarTotal();
  }
});

menosC.addEventListener('click', () => {
  if(conChild > 0){
    conChild = conChild - 1;
    child.textContent = conChild;
    insertarTotal();
  }
});

masC.addEventListener('click', () => {
  if(conChild < 10){
    conChild = conChild + 1;
    child.textContent = conChild;
    insertarTotal();
  }
});

//MODO OSCURO

const html = document.querySelector("html");

const Dark = document.querySelector('#switch');

Dark.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme == "light" ? "dark" : "light";
})