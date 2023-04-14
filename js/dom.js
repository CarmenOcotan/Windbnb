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
            <p class="${!obj.superHost ? 'd-none' : ''} host px-2 d-flex flex-wrap align-content-center">SUPER HOST</p>
            <p>
                <span class="tipo">${obj.type}</span>
                <span class="${obj.beds === null ? 'd-none' : '.'} camas"></span>
            </p>
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

export default {
    nCards,
    mCards,
    $
}


