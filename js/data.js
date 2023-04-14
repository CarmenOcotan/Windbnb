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
const cities = (data) =>{
  let ciudades = data.map( elem => elem.city);

  ciudades = new Set(ciudades);

  return ciudades
};

const filtro = (filt) => {
  let filtered = city.filter(elem => elem.city === filt);

  return filtered
}

export default {
  getData,
  cities,
  filtro
}