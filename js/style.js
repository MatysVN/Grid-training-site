const burgerBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-mobile");
const navItem = document.querySelectorAll(".nav__link");
const body = document.querySelector("body");
const footerYear = document.querySelector(".footer__year");

const showNav = () => {
	burgerBtn.classList.toggle("is-active");
	nav.classList.toggle("nav-mobile--active");
	body.classList.toggle("hidden");

	navItem.forEach((item) => {
		item.addEventListener("click", () => {
			burgerBtn.classList.remove("is-active");
			body.classList.remove("hidden");
			nav.classList.remove("nav-mobile--active");
		});
	});
};

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

currentYear();

burgerBtn.addEventListener("click", showNav);
navItem.addEventListener("click", showNav);
