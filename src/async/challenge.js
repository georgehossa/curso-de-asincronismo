const fecthData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';
// Se establece en mayúsculas si es un valor que nunca va a cambiar

const getInfo = async (url_api) => {
  try {
    const data = await fecthData(url_api),
          character = await fecthData(`${API}${data.results[0].id}`),
          origin = await fecthData(character.origin.url);
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (err) {
    console.log(err)
  }
}

console.log('Before')
getInfo(API);
console.log('After')