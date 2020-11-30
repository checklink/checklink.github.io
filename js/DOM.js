//const head = document.getElementsByTagName('h1');
//const head = document.getElementsByClassName('head');
//console.log(head[0]);

/*
const head = document.getElementById('main_head');
console.log(head);

//обращение через селектор
const selector1 = document.querySelector('#main_head');
const selector2 = document.querySelector('.head');
const selector3 = document.querySelector('h1');
console.log(selector1, selector2, selector3);

//		guerySelector - обращается только к 1 элементу
//		когда его находит, дальше уже не идёт




//обращение ко всем селекторам
const selectorAll = document.querySelectorAll('li');
console.log(selectorAll);



//обращаемся к атрибуту
const attribute = document.querySelector('[title="JS"]')
console.log(attribute);
*/


// Практика
const type = document.querySelector('#head');
const mark = document.querySelector('.mark');
const title = document.querySelectorAll('[title="JS"]');

//РАБОТА С КЛАССАМИ
type.className = 'red';
//присваиваем класс .red к элементу с #head



mark.className = 're_mark';
//но, классНэйм - перезаписывает класс, если он есть



mark.classList.add('remark');
/*
	- .add() - это метод, что добавляет класс
	- всё присвоение записываем теперь в скобках
	- .add() - добавит отдельно класс, а не перезапишет его
*/



mark.classList.remove('re_mark');
/*
	- .remove() - это метод, что удаляет класс, если он есть
*/



mark.classList.toggle('toggle');
/*
	- .toggle() - добавит класс, если его нет
	- убирет класс, если он есть
*/



console.log(mark.classList.contains('toggle'));
/*
	- .contains() - возвращает true || false, если класс есть/нету
*/


//вывод в консоль
console.log(type.className);
console.log(mark.className);



//РАБОТА СО СТИЛЯМИ
const crossOut = document.querySelector('.crossOut');

crossOut.style.textDecoration = 'line-through';
/*
	- .style - свойство, что обращается к стилю css
	- text-decoration - записано в css
	- но, в JS нельзя писать индитификаторы через '-'
	- поэтому мы пишем так: textDecoration
	- значение писать в '...', оно может быть любым, с '-'
*/
console.log(crossOut);



//Обращение к переменной напрямую
const list = document.querySelector('ul');
const li = list.querySelector('.highlight');
/*
	- обращаемся не через document
*/

console.log(li);
li.style.color = 'blue';



//СОБЫТИЯ
const li2 = list.querySelectorAll('li');
for (let i = 0; i < li2.length; i++) {
	li2[i].addEventListener('click', () => {
		li2[i].classList.toggle('work');
	});
	//console.log(li2[i]);
}
/*
	- .lenght - свойство псевдомассива, что значит кол-во элементов
	- .addEventListener() - свойство, что навешивает события
	- 'click' - событие клика
	- (arg) - аргумента может быть всего 3 штуки
	- ( () => {...}) - внутри аргумента поместили стелочную функцию
	- без имени, и тд. тд.
*/