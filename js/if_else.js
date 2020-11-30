let message = "Life is strange";
let first = 15;
let second = 10;
if (first > second) {
	console.log(message);
}

//упрощенная
if (2 > 1) console.log("I mini");


//много условий
let message2 = "weird, I just used it";
if (5 < 4 && 3 > 4 || 4 == "4" && 3 === 3) { // 4 == "4" is true
	console.log(message2);
}


//пустая строка
if (" ") {
	console.log("I work, all okey");
} else {
	console.log("Not work")
}


//перезначение в условии
let letter = "Hello";
let letterEnd;
if (5 > 1) {
	letterEnd = ", Grand-Pa";
} else {
	letterEnd = ", Grand-Ma";
}
letter += letterEnd;
console.log(letter);


//esle if
let numberif = 5;
if (numberif > 50) {
	console.log("1");
}
else if (numberif > 10) {
	console.log("2");
}
else if (numberif > 4) { //work
	console.log("3");
}


//Терарный
let terrarif = (2 > 1) ? "Yes" : "No";
console.log(terrarif);
//классический, читабельный


//Вложенный Терарный
let more_terra = 1 >= 1 ? "1" :
	1 > 2 ? "2" :
		1 > 3 ? "3" :
			1 > 4 ? "4" : "5";
console.log(more_terra);
//нечитабельно

console.log("-------");





//Преколдес
// const value = 'PROMOCODE';
// if (value === 'PROMOCODE') {
// 	console.log('Скидка');
// } else {
// 	console.log('Без скидки');
// }

let kek = 'NO_PROMOCODE';
const value = kek === 'PROMOCODE' ? 'Скидка' : 'Без скидки';
console.log(value);
