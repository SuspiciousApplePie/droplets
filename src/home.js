import { Restaurant } from "./restaurant.js";

export class Home extends Restaurant {
	constructor() {
		super();
		this.titleSection = document.createElement("div");
		this.reviewSection = document.createElement("div");
		this.scheduleSection = document.createElement("div");
		this.addressSection = document.createElement("div");
		this.button = document.querySelector("#home");
	}

	addTitle() {
		this.titleSection.className = "title";
		const title = document.createElement('h1');
		title.textContent = "Bladie's Pizzeria";
		this.titleSection.appendChild(title);
		this.container.appendChild(this.titleSection);
	}

	addReview() {
		const reviews = [
			{
				name: "Yukino",
				review: "The ramen pizza is good, but the ramen is better, dunno why they call themselves pizzeria, but you get the point!",
				rating: 10,
			},
			{
				name: "Charlotte",
				review: "The food is tasty, but it has high concentration of Aetherium according to my tests, if you are not a Luminary, proceed with caution.",
				rating: 10.
			}
		];

		this.reviewSection.className = "reviews";

		reviews.forEach(index => {
			this.container.appendChild(this.reviewSection);
			const wrapper = document.createElement("div");
			wrapper.className = "review";

			const nameElement = document.createElement("h1");
			nameElement.textContent = index.name;

			const reviewElement = document.createElement("p");
			reviewElement.textContent = index.review;

			const ratingElement = document.createElement("p");
			ratingElement.textContent = `${index.rating}/10`;

			wrapper.appendChild(nameElement);
			wrapper.appendChild(reviewElement);
			wrapper.appendChild(ratingElement);

			this.reviewSection.appendChild(wrapper);

		});
	}

	addScheduleList() {

		this.container.appendChild(this.scheduleSection);
		this.scheduleSection.className = "schedule-list";

		const scheduleListHeader = document.createElement("h1");
		scheduleListHeader.textContent = "Schedule";
		this.scheduleSection.appendChild(scheduleListHeader);

		const schedules = [
			{
				day: "Monday - Friday",
				time: "9am - 6pm",
			},
			{
				day: "Saturday",
				time: "9am - 9pm",
			},
		];

		schedules.forEach(schedule => {
			const scheduleList = document.createElement("div");
			scheduleList.className = 'schedule';

			const dayElement = document.createElement("div");
			dayElement.textContent = schedule.day;
			scheduleList.appendChild(dayElement);

			const timeElement = document.createElement("div");
			timeElement.textContent = schedule.time;
			scheduleList.appendChild(timeElement);

			this.scheduleSection.appendChild(scheduleList);
		});
	}

	displayAddress() {
		this.container.appendChild(this.addressSection);
		this.addressSection.className = "address";

		const addressHeader = document.createElement("h1");
		addressHeader.textContent = "Address";
		this.addressSection.appendChild(addressHeader);

		const addressText = document.createElement("p");
		addressText.textContent = "48, Sunstone Ave, Illumia, Luminae";
		this.addressSection.appendChild(addressText);
	}

	displayPage() {
		this.container.id = "home-content";
		this.button.className = "selected";
		this.addTitle();
		this.addReview();
		this.addScheduleList();
		this.displayAddress();
	}

	clearPage() {
		super.clearPage();
		this.button.className = null;
		this.titleSection.innerHTML = "";
		this.reviewSection.innerHTML = "";
		this.scheduleSection.innerHTML = "";
		this.addressSection.innerHTML = "";
	}
}