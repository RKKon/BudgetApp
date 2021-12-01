// Function

/* let a = 30;
function showFirstMessage(text) {
	alert(text);
	a = 20;
}
showFirstMessage('Hello man');
console.log(a);
 */

/* function returnNum() {   
	let num = 61;
	return num;
}

let returnNumber = returnNum(); // то как можно получить функцию в переменую и потом использовать.
console.log(returnNumber); */


// 3 Типа функции 

// 1 function declaration

/* console.log(calc(8,13));
function calc(a,b) { // это называется function declaration, можно вызвать в любом месте кода даже выше
	return(a + b);
}
console.log(calc(1,3)); 

// 2 function expression

let exp = function (a,b) { // это называется function expression, работает только на строчках ниже.
	return(a + b);
};
console.log(exp(7,3)); 

// 3 Стрелочная функция 

let arrows = (a,b) => a+b; // можно и без {} но не всегда. 
console.log(arrows(33,44)); */


// Методы это вспомогательыне функции // Методы позволяют изменять строки или др типы данных
// А свойства это вспомогательыне значения. // свойство пишется без круглых скобок в конце.(и через точку)

/* let str = 'Testing';
console.log(str.length); // свойство 
console.log(str.toUpperCase()); // Метод . toUpperCase() обязательно с скобками() 
console.log(str.toLowerCase()); //Метод

let ten = '10.7px';
//console.log(Math.round(ten)); // Math.round округляет к ближайшему целому(но без px и тп.)
console.log(parseInt(ten)); // округляет в целое чесло откидывая остальное 
console.log(parseFloat(ten)); // отбрасыает px и тп. но после точки оставляет */


/* // callback Function  

function greeting(name) {
	alert('Hello ' + name);
}
  
function processUserInput(callback) {
	var name = prompt('Please enter your name.');
	callback(name);
}
  
processUserInput(greeting); */


/* //практика от заданий
function() {
    for (let i = 0; i < 2; i++) {
        q1 = prompt('Введите обязательную статью расходов в этом месяце', '');
        q2 = prompt('Во сколько обойдется?', '');
    
        if ((typeof(q1)) === 'string' && (typeof(q1)) != null && ((typeof(q2)) != null && q1 != '' && q2 != '' && q1.length < 50)) {
            console.log('one is correct');
            appData.expenses[q1] = q2;
        } else {
            alert('One of answer is wrong, try again');
            --i;
        }
    } 
}
// other way to do the cycle(instead of - for) (chooseExpenses)

let i = 0;   
while ( i < 2) {
    let q1 = prompt('Введите обязательную статью расходов в этом месяце', '');
    let q2 = prompt('Во сколько обойдется?', '');
    i++;
    if ((typeof(q1)) === 'string' && (typeof(q1)) != null && ((typeof(q2)) != null && q1 != '' && q2 != '' && q1.length < 50)) {
        console.log('one is correct');
        appData.expenses[q1] = q2;
    } else {
        alert('One of answer is wrong, try again');
        --i;
    }
}
 let i = 0;
do {              // other way to do the cycle(instead of - for)
    let q1 = prompt('Введите обязательную статью расходов в этом месяце', '');
    let q2 = prompt('Во сколько обойдется?', '');
    i++;
    if ((typeof(q1)) === 'string' && (typeof(q1)) != null && ((typeof(q2)) != null && q1 != '' && q2 != '' && q1.length < 50)) {
        console.log('one is correct');
        appData.expenses[q1] = q2;
    } else {
        alert('One of answer is wrong, try again');
        --i;
    }
}
while ( i < 2); */