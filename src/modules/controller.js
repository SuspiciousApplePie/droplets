import { searchBar } from "./constant";
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
    console.log("input");
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
