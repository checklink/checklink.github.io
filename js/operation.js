let num = 3;
/*

	+
	-
	*
	/
	%
	** - степень

*/
num **= num;
console.log(num);


//	Складываем Слова
let stringOp = 'hello';
stringOp += ' world';
console.log(stringOp);


// Складываем ЧИсла в кавычках
let stringNum = '5';
console.log(stringNum + '10');


// Превращаем Строку в Число
let numString = '5';
console.log(+numString + +'10');


//Логические операторы
let logNum = 5;
let logString = '5';
console.log(logNum === 5, '5===5');
console.log(logNum !== 5, '5!==5');
console.log(logNum >= 3, '5>=3');
console.log(logNum <= 3, '5<=3');
console.log(logNum == 5, '==');
console.log(logNum != 5, '!=');

//разница === и ==
console.log(logNum === logString, '5 ==== "5"'); //разные типы данных
console.log(logNum == logString, '5 == "5"'); //одинаковые числа, разницы почти нет



