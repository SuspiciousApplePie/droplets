import "./styles.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { About } from "./about.js";

(function () {
	const home = new Home();
	const menu = new Menu();
	const about = new About();
	const body = document.querySelector("body");

	home.displayPage();

	body.addEventListener("click", (e) => {
		
		if (e.target.tagName.toLowerCase() === "button") {
			home.clearPage();
			menu.clearPage();
			about.clearPage();
			switch (e.target.id) {
				case "home":
					home.displayPage();
					break;
				case "menu":
					menu.displayPage();
					break;
				case "about":
					about.displayPage();
					break;
			}
		}	
	});
})();