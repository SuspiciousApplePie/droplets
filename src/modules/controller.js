import { searchBar } from "./constant";
import { fetchWeatherData } from "./weather";
import {
  createLoadingSpinner,
  renderLoadingSpinner,
  removeLoading,
} from "./ui";

let currentWeatherData;
/* Submit listener */

export function setUpSumbitListener() {
  const searchElement = document.querySelector(`.${searchBar.CLASS_NAME}`);
  if (!searchElement) throw new Error("Element not found");

  searchElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = event.target.querySelector(`#${searchBar.INPUT_ID}`);
    if (!input.validity.valid) {
      validateSearchInput(input);
      return;
    }

    new Promise((resolve) => {
      const loading = createLoadingSpinner(input.value);
      renderLoadingSpinner(loading);
      resolve();
    })
      .then(() => {
        return fetchWeatherData(input.value);
      })
      .then((weatherData) => {
        currentWeatherData = weatherData;
        console.log(currentWeatherData);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        removeLoading();
      });
  });
}

export function setUpInputListener() {
  const searchElement = document.querySelector(`.${searchBar.CLASS_NAME}`);
  if (!searchElement) throw new Error("Element not found");

  searchElement.addEventListener("input", (event) => {
    const input = event.target;
    if (!input.validity.valid) {
      validateSearchInput(input);
      return;
    }
  });
}

function validateSearchInput(input) {
  if (input.validity.valueMissing) {
    input.setCustomValidity("Search for place");
  } else {
    input.setCustomValidity("");
  }
  input.reportValidity();
}
