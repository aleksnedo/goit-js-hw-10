import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

function onInputCountriesSearch(evt) {
  evt.preventDefault();
}

refs.inputRef.addEventListener(
  'input',
  debounce(onInputCountriesSearch, DEBOUNCE_DELAY)
);
