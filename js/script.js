let menu = document.querySelector('.icon-menu');
let list = document.querySelector('.menu__list');
let li = list.querySelectorAll('.menu__link');

for (let i = 0; i < li.length; i++) {
	li[i].textContent += ".";
};

menu.addEventListener('click', () => {
	let menuBody = document.querySelector('.menu__body');
	let pageBody = document.querySelectorAll('.fp-tableCell');
	let nav = document.querySelector('#fp-nav');
	menuBody.classList.toggle('active');
	menu.classList.toggle('focus');
	nav.classList.toggle('hide');
	for (let i = 0; i < li.length; i++) {
		li[i].addEventListener('click', () => {
			menuBody.classList.remove('active');
			menu.classList.remove('focus');
			nav.classList.remove('hide');
		});
		pageBody[i].addEventListener('click', () => {
			menuBody.classList.remove('active');
			menu.classList.remove('focus');
			nav.classList.remove('hide');
		});
	};
});
let totalSlide = document.querySelector('.slider-counter__total');
let totalSection = document.querySelectorAll('.section');
totalSlide.textContent += totalSection.length;
