let list = document.querySelector('.block__list');
let li = list.querySelectorAll('.item-list');
for (let i = 0; i < li.length; i++) {
	li[i].addEventListener('click', () => {
		li[i].classList.toggle('done');
	});
}

const plug = document.querySelector('.block__plug');

const container = document.querySelector('.block');
container.addEventListener('mouseenter',
	() => {
		container.style.width = '400px';
		container.style.height = '540px';
		container.style.borderRadius = '15px';
		list.style.display = 'block';
		plug.style.display = 'none';
	});
container.addEventListener('mouseleave',
	() => {
		container.style.width = '300px';
		container.style.height = '300px';
		container.style.borderRadius = '0px';
		list.style.display = 'none';
		plug.style.display = 'flex';
	});

// let list = document.querySelector('ul');
// let li = list.querySelectorAll('li');
// for (let i = 0; i < li.length; i++) {
// 	li[i].addEventListener('click', () => {
// 		li[i].classList.toggle('pidor');
// 	});
// }