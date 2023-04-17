/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/
const $ = (selector) => document.querySelector(selector);

//Traemos el elemento de html por su id
const elem = tag => document.createElement(tag);

const lugares = $('#lugares');

//Creamos el elemento
const nCards = (obj) => {
    const div = elem('div');

    div.className = 'card1';

    //Insertar al card los elementos
    div.innerHTML =`
    <div class="card1 col" > 
        <div class="lugar1">
            <img src="${obj.photo}" class="w-100 h-100 rounded-4 " alt="${obj.title}">
        </div>
        <div class=" d-flex justify-content-between justify-content-evely flex-wrap mt-2 w-100">
            <div class="d-flex gap-3">
                <p class="${!obj.superHost ? 'd-none' : ''} host px-2 d-flex flex-wrap align-content-center">SUPER HOST</p>
                <p>
                    <span class="tipo">${obj.type}</span>
                    <span class="camas ${obj.beds ? '' : 'd-none'}">.${obj.beds || ''}</span>
                </p>
            </div>
            <div class="valoracion d-flex  ">
                <span class="material-symbols-outlined">star</span>
                <span class="ms-1 puntuacion">${obj.rating}</span>
            </div>
        </div>
        <div>
            <p class="titulo text-start">${obj.title}</p>
        </div>
    </div>`
    
    return div

}

const mCards = (arr) => {

    lugares.innerHTML = '';
  
    arr.forEach( element => {
      // Creamos el card con la informacion del elemento
      const card = nCards(element);
    
      // Agregamos el card al elemento products
      lugares.appendChild(card);
    })
  }

const listaCiudades = $('#filtrarCiudad');

const allCiudades = (ciudades) => {

const city1 = ciudades.map(elem => {

    const a = document.createElement('a');

    a.className = 'city';

    a.innerHTML = `
      <a href="place" id="${elem}" class="list-group-item " ">
        <span class="material-symbols-outlined city">location_on ${elem.city}</span>
      </a>`;
    return a;
  });
  return city1;
  
};

const nCiudad = (cdad) => {

    listaCiudades.innerHTML = '';

const city2 = allCiudades(cdad);

    city2.forEach(elem => {

    listaCiudades.appendChild(elem);
  });

  console.log(nCiudad)
    
};


export default {
    nCards,
    mCards,
    nCiudad,
    $
}


