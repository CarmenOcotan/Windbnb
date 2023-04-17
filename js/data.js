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

//Voy a pedir los datos de las ciudades

const filtroCiudad = (arr, filtro) => {
  let filtered = arr.filter(elem => elem.city.name === filtro);

  return filtered

  
}

const cityUnica = (data) => {
  let only = data.map( elem => elem.city.name);
 
  // COnvertimos a SET para obtener las categorias sin valores repetidos
  only = new Set(only);

  // Convertimos el SET a un Array
  only = ['a',...only];

  return only
};


export default {
  getData,
  filtroCiudad,
  cityUnica
}