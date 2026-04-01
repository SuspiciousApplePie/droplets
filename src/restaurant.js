export class Restaurant {
	constructor() {
		this.container = document.querySelector('#content');
	}

	clearPage() {
		this.container.innerHTML = "";
	}
}