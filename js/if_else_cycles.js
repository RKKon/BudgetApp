// New Block. if and else

/* if (3*3 == 9) {
	console.log('Answer is correct');
} else {
	console.log("Answer is wrong");
} */

/* let num = 100;
let bag = 100;
if (num == bag) {
	console.log('bag is equals 100');  
} else if (num < bag) {
	console.log('bag is more than 100');
} else {
	console.log('bag is less than 100');
}

(num == bag) ? console.log('bag is = 100'): console.log('bag more 100');

switch (num) {  
	case num < bag:
		console.log('bag is more than 100');
		break;
	case num > bag:
		console.log('bag is less than 100');
		break;
	case bag:
		console.log('bag is equals 100');
		break;
	default:
		console.log('something went wrong'); // выполнится при любом условии
		break;
} */


// New Block Cycles


/* let num = 50;
while (num < 56 ) {
	console.log(num);
	num++;
} */

/* let num = 50;
do {
	console.log(num);
	num++;
}
while (num <56);  // такой цыкл нужен когда надо что-то сделать а потом проверить. */

/* let num = 50;
for (num; num < 56; num++) { // for используется в 95% случаев
	console.log(num);
} */

/* let num = 50;
for (num; num < 56; num++) { // for используется в 95% случаев
	if (num == 54) {
		continue; //break чтобы закончить а continue чтобы пропустить. 
	}
	console.log(num);
} */