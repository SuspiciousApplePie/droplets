import { Restaurant } from "./restaurant.js";

import lemonImage from "./img/lemon.jpeg";
import kiwiImage from "./img/kiwi.jpeg";
import pizzaImg from "./img/pizza.jpeg";
import ramenImg from "./img/ramen.jpeg";
import greenSaladImg from "./img/green_salad.jpeg";
import gyozaImg from "./img/gyoza.jpeg";

export class Menu extends Restaurant {
	constructor() {
		super();
		this.beverageSection = document.createElement("div");
		this.mainSection = document.createElement("div");
		this.sideSection = document.createElement("div");
		this.button = document.querySelector("#menu");
	}

	displaySection() {
		const sections = [ this.beverageSection, this.mainSection, this.sideSection ];
		const label = ["Beverage", "Main", "Side"];
		
		sections.forEach((section, index) => {
			section.className = "food-section";
			const header = document.createElement("h1");
			header.textContent = label[index];
			section.appendChild(header);

			this.container.appendChild(section);
		});
	}

	displayFood() {
		const menu = [
			{
				foodName: "Pizza",
				price: 30,
				type: "main",
				img: pizzaImg,
			},
			{
				foodName: "Ramen Noodles",
				price: 25,
				type: "main",
				img: ramenImg,
			},
			{
				foodName: "Lemoon Juice",
				price: 8,
				type: "beverages",
				img: lemonImage,
			},
			{
				foodName: "Kiwi",
				price: 11,
				type: "beverages",
				img: kiwiImage,
			},
			{
				foodName: "Green Salad",
				price: 15,
				type: "side",
				img: greenSaladImg,
			},
			{
				foodName: "Gyoza",
				price: 18,
				type: "side",
				img: gyozaImg,
			}
		];

		menu.forEach(item => {
			const food = document.createElement("section");
			food.className = "food-item";

			const imageElement = document.createElement("img");
			imageElement.height = 250;
			imageElement.width = 250;
			imageElement.src = item.img;
			const itemElement = document.createElement("div");
			itemElement.textContent = item.foodName;
			const priceElement = document.createElement("div");
			priceElement.textContent = `${item.price} LS`;

			food.appendChild(imageElement);
			food.appendChild(itemElement);
			food.appendChild(priceElement);

			switch(item.type) {
				case "beverages":
					this.beverageSection.appendChild(food);
					break;
				case "main":
					this.mainSection.appendChild(food);
					break;
				case "side":
					this.sideSection.appendChild(food);
					break;
			}
		});
	}

	displayPage() {
		this.container.id = "menu-content";
		this.button.className = "selected";
		this.displaySection();
		this.displayFood();
	}

	clearPage() {
		super.clearPage();
		this.button.className = null;
		this.beverageSection.innerHTML = "";
		this.mainSection.innerHTML = "";
		this.sideSection.innerHTML = "";
	}
}