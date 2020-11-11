const year = document.querySelector('.year'),
	days = document.querySelector('#days'),
	hours = document.querySelector('#hours'),
	minutes = document.querySelector('#minutes'),
	seconds = document.querySelector('#seconds'),
	countDown = document.querySelector('.countdown'),
	preloader = document.querySelector('.preloader');

function updateTime() {
	let currentYear = new Date().getFullYear();

	let deadline = new Date(2021, 01, 01, 00, 00, 00) - new Date();

	let newDay = Math.floor(deadline / (1000 * 60 * 60 * 24));
	let newHours = Math.floor((deadline / (1000 * 60)) % 24);
	let newMinutes = Math.floor((deadline / 1000 / 60) % 60);
	let newSeconds = Math.floor((deadline / 1000) % 60);

	year.innerText = currentYear + 1;
	days.innerText = newDay;
	hours.innerText = newHours;
	minutes.innerText = newMinutes;
	seconds.innerText = newSeconds;
}
updateTime();

countDown.style.display = "none";

setTimeout(function loading() {
	countDown.style.display = "flex";
	preloader.remove();
	setInterval(updateTime, 1000)
}, 1000);
