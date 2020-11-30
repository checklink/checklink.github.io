// WHILE цикл
let i = 0;
while (i < 5) {
	console.log(i);
	i++;
}
console.log('while ^');


// DO-WHILE цикл
i = 0;
do {
	console.log(i);
	i++;
} while (i >= 0 && i < 5);
console.log('do-while^');


// FOR цикл
for (i = 0; i < 5; i++)
	console.log(i);

console.log('for ^');


// BREAK
for (i = 0; i < 5; i++) {
	console.log(i);
	if (i == 2) break; // остановит цикл, когда = 2
}
console.log('break = 2  ^');


// CONTINUE
for (i = 0; i < 5; i++) {
	if (i == 2) continue;
	console.log(i);	// строка при continue не будет работать
}
console.log('continue^');


/*
	- Входит в цикл, когда условие - true
	- break & continue - нельзя использовать в терарном
*/

// МЕТКИ
let mark, mark2;
firstFor: for (mark = 0; mark < 2; mark++) {
	for (mark2 = 0; mark2 < 3; mark2++) {
		if (mark2 == 2) {
			break firstFor;
			//continue firstFor;
		}
		console.log(mark2);
	}
}

/*
	- метки не позволяют перемещаться по коду куда угодно
	- метка должна быть выше цикла, тела где задействуется
	- метка привязана к циклу
*/