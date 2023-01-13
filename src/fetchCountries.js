const BASE_URL = 'https://restcountries.com/v3.1/';
const filters = 'name,capital,population,flags,languages'


function fetchCountries(name){
    return fetch(`${BASE_URL}/name/${name}fields=${filters}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}
console.log(fetchCountries)

export { fetchCountries };




