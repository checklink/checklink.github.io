localStorage.a;
let $btn = document.getElementById('btn');
let $counter = document.querySelector('.block__counter');
let num = localStorage.a || 0;
$counter.textContent = num;

// add
$btn.onclick = () => {
	num++;
	save()
	if (num == 12) alert('you are super');
}

// delete
let $btn2 = document.getElementById('btn2');
$btn2.onclick = () => {
	num = 0;
	save()
}

// function
function save() {
	$counter.textContent = num;
	localStorage.a = num;
	console.log(num);
}


