import { searchBar } from "./constant";
import { fetchWeatherData } from "./weather";
import {
  createLoadingSpinner,
  renderLoadingSpinner,
  removeLoading,
  WeatherCard,
  getWeatherWrapper,
  clearContent,
  changeHeaderText,
  getHeader,
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
      const wrapper = getWeatherWrapper();
      clearContent(wrapper);
      const head = getHeader();
      clearContent(head);
      renderLoadingSpinner(loading);
      resolve();
    })
      .then(() => {
        return fetchWeatherData(input.value);
      })
      .then((weatherData) => {
        currentWeatherData = weatherData;
        currentWeatherData.forEach((item) => {
          const component = new WeatherCard(
            item.temp,
            item.datetime,
            item.icon,
            item.description,
          );
          const card = component.createWeatherCard();
          component.renderWeatherCard(card);
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        const head = getHeader();
        changeHeaderText(head, input.value);
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
