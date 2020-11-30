
// Number
let num = 5.0002;

//String
let string = "Bob";
let string2 = 'how are you "nothing?"';
let string3 = `Hello, ${string}, ${string2}`;
console.log(string3);

//Bool
let bool = true;
let lie = false;
console.log(bool || lie);

//Object
let object = {
	a: 5, //	номер
	b: 'javascript', //	текстовые
	c: false, //	буллевые
	d: { //	объекты
		d: 10,
		e: 15
	},
	mass: [1, 2, 3], //	массивы
	mass2: ['a', 'b', 'c']
}
object.a = 7; // меняем значение в объекте
console.log(object.a); // выводим элементы
console.log(object['mass2']);


//Массивы
let array = [1, 'b', { a: 1, b: 'hello' }, true];
console.log(array[2]); //	обращаемся к 2 элементу
//	счет идет с 0


//Undefined
let und;
console.log(und);


//Null
let hole = null;
console.log(hole);
