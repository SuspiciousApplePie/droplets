import { searchBar } from "./constant.js";
import { setUpSumbitListener, setUpInputListener } from "./controller.js";

export function init() {
  removeLoading();
  const searchElement = createSearchBar();
  renderSearchBar(searchElement);
  setUpInputListener();
  setUpSumbitListener();
}

/* Remove loading screen */
function removeLoading() {
  const loadingElement = document
    .querySelector(".main")
    .querySelector(".loading-spinner");
  loadingElement.remove();
}

/* Search bar component*/

function createSearchBar() {
  const searchElement = document.createElement("search");
  searchElement.role = searchBar.ROLE;
  searchElement.className = searchBar.CLASS_NAME;

  const form = document.createElement("form");
  form.noValidate = true;

  const input = document.createElement("input");
  input.name = searchBar.INPUT_NAME;
  input.id = searchBar.INPUT_ID;
  input.required = true;
  input.placeholder = searchBar.INPUT_PLACEHOLDER;
  form.appendChild(input);

  const button = document.createElement("button");
  button.type = searchBar.BUTTON_TYPE;
  button.textContent = searchBar.BUTTON_TEXT;
  form.appendChild(button);

  searchElement.appendChild(form);

  return searchElement;
}

function renderSearchBar(searchElement) {
  const main = document.querySelector(".main");
  main.appendChild(searchElement);
}
