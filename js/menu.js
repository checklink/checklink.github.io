let button = document.querySelector('.icon-menu');

button.addEventListener('click', () => {
	let body = document.querySelector('.menu__body');
	let menu = document.querySelector('.icon-menu');
	let list = document.querySelector('.menu__list');
	let li = list.querySelectorAll('.menu__link');
	let nav = document.querySelector('#fp-nav');
	nav.classList.toggle('hide');
	body.classList.toggle('active');
	menu.classList.toggle('active');
	for (let i = 0; i < li.length; i++) {
		li[i].addEventListener('click', () => {
			body.classList.remove('active');
			menu.classList.remove('active');
			nav.classList.remove('hide');
		});
	}
});
