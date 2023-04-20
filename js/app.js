import data from "./data.js";
import dom from "./dom.js"

/* const lugares = dom.$('#lugares') */


const datos = await data.getData()

const ciudades = data.cityUnica(datos)

const gGuests = data.getGuests(datos)

console.log(gGuests)

dom.allCiudades(ciudades);

datos.forEach(element => {
    const card = dom.nCards(element);

    lugares.appendChild(card);
});



const addCiudad = [...dom.$('#lista').children];

let active1 = 0;

const location1 = dom.$('#location1');
const addCity = dom.$('#addCity');
const place = dom.$('#place');

let filCiudad=null;
let filtrito="";
addCiudad.forEach((lista, index) => {
  
  lista.addEventListener('click', () => {
  
    if (lista.classList.contains('local1')) return;

    lista.classList.add('local1');

    location1.textContent=lista.textContent;
    addCity.textContent = lista.textContent;
    place.textContent = lista.textContent;

    let pass = addCiudad[active1];

    pass.classList.remove('local1');

    active1 = index;

    let [filtro] = lista.textContent.split(",");
    filtrito=filtro
    console.log(filtro)
    
   /*  console.log(filCiudad)
     */
    dom.mCards(filCiudad)
  });
})
dom.mCards(datos)

const busqueda = dom.$('#buscar')

busqueda.addEventListener('click', () => {

  console.log('hola')
  if (filtrito != "" && total !=0){
    filCiudad = data.filted(datos, filtrito);
    
    let fitro2 = data.filGuests (filCiudad)
    dom.mCards(fitro2)

  }else if (total > 0){
    filCiudad = data.filGuests(datos, total)
    dom.mCards(fitro2)
  }
 /*  dom.mCiudad(filCiudad) */
 conAdult = 0;
 conChild = 0;

 adult.innerHTML = conAdult; 
 child.innerHTML = conChild;

})

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

menosA.addEventListener('click', () => {
  if(conAdult > 0){
    conAdult = conAdult -1;
    adult.textContent = conAdult;

    addGuests.textContent=menosA.textContent;
    guests2.textContent=menosA.textContent;
  }
});

masA.addEventListener('click', () => {
  if(conAdult <= 10){
    conAdult = conAdult +1;
    adult.textContent = conAdult

    addGuests.textContent=masA.textContent;
    guests2.textContent=masA.textContent;

  }
})

menosC.addEventListener('click', () => {
  if(conChild> 0){
    conChild = conChild -1;
    child.textContent = conChild;

    addGuests.textContent=menosC.textContent;
    guests2.textContent=menosC.textContent;
  }
});

masC.addEventListener('click', () => {
  if(conChild <= 10){
    conChild = conChild +1;
    child.textContent = conChild;

    addGuests.textContent=masc.textContent;
    guests2.textContent=masC.textContent;
  }
})