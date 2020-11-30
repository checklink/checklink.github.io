// Объявили функцию
function printConsole() {
	console.log('Hello, Im function');
}
printConsole(); // вызвали функцию



// Аргументы в функцие
function printArg(arg1, arg2, arg3) {
	console.log('What a beautiful day');
	console.log(arg1);		// 5 - передали значение, при вызове функции
	console.log(arg2 + 4);	// 10+4
	console.log(arg3 + 5);	// 15+5
}
printArg(5, 10, 15, 4);

/*
 - аргумента 4 нет
 - функция использует только то, что есть.
 - аргументы находятся исключительно и только 
 - в функции, дальше они не работают.
 - функции могут принимать значение аргументов 'arg1 = 5'
*/



//Присвоение функции
const foo = function (arr) {
	console.log(arr);
};
foo([1, 2, 3]);	//передали значение массива - аргументу arr

/*
	- ; ставить объязательно
*/



//	Стрелочная функция
const bar = (args) => {
	console.log(args);
};
bar('Привет');



// RETURN - возвращение результата
function returnArg(aaa, bbb, ccc) {
	console.log('Возврат функции');
	return aaa + bbb + ccc; // 4 + 3 + 2
}
console.log(returnArg(4, 3, 2));
/*
	- пишем return перед аргументами
	- вызываем функцию через консоль
	- return может быть только один
	- последовательность аргументов важна
*/
