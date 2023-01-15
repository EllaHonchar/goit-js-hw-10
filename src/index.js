import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

countryInput.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));

function onCountryInput () {
    const newName = countryInput.value.trim();

    if(newName === '') {
        return (countryList.innerHTML = ''),
        (countryInfo.innerHTML = '');
    }


fetchCountries(newName)
.then(country => {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  if(country.length > 10) {
    manyMatchesAlert();
  }
  else if(country.length >=2 && country.length <= 10) {
    countryList.insertAdjacentHTML('beforeend', markupCountryList(country));
  } else {
    countryInfo.insertAdjacentHTML('beforeend', markupCountryInfo(country));
  }  
})
  .catch(wrongNameAlert);
}



function manyMatchesAlert() {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
}

function markupCountryList(country) {
    const layoutCountryList = country.map(({flags, name}) => {
        const layout = `
          <li>
              <img src="${flags.svg}" alt="Flag of ${name.official} width="250" height="200"">
              <h2>${name.official}</h2>
          </li>
          `;
      return layout;
    })
    .join('');
  return layoutCountryList;
    }
    
function markupCountryInfo(country) {
    const layoutCountryInfo = country.map(({flags, name, capital, population, languages}) => {
        const layout = `
        <ul>
            <li>
              <img src="${flags.svg}" alt="Flag of ${name.official} width="250" height="200"">
              <h2>${name.official}</h2>
            </li>
            <li><span>Capital: </span>${capital}</li>
            <li><span>Population: </span>${population}</li>
            <li>Languages: </span>${Object.values(languages,).join(', ')}</li>
        </ul>
        `;
      return layout;
    })
    .join('');
  return layoutCountryInfo;
}


function wrongNameAlert() {
    Notiflix.Notify.failure("Oops, there is no country with that name");
}
