/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
    .then(response => response.json())
    .then( json => json)

  return data;

}

const cityUnica = (data) => {
  let only = data.map( elem => elem.city);
 
  // Convertimos a SET para obtener las categorias sin valores repetidos
  only = new Set(only);

  // Convertimos el SET a un Array
  only = [...only];

  return only
};


const filtrar = (arr, filtro) => {
  if (!Array.isArray(arr)) {
    return []; 
  }

  let filtered = arr.filter( elem => elem.city === filtro);
  
  return filtered;
}

const filGuests = (arr, filtro) => {
  let filtered = arr.filter( elem => elem.maxGuests >= filtro)
  
  return filtered 
  }


export default {
  getData,
  filtrar,
  cityUnica,
  filGuests
}