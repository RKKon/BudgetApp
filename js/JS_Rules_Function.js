//Work with Obj 

/* let testObj = {
	name: 'Andrei',
	likes: 'Computer',
	knowing: ['Scientology', 'Programming']
};
// добавить новую переменную в объект
testObj.age = 27 +' years old';
// удалить переменную из объекта
delete testObj.knowing;
// получить конкретную переменную в объекте
console.log(testObj.name); // или console.log(testObj['name']);
console.log(testObj);

//если надо перебратб объект то можно использовать цикл с in

for (let key in testObj) {
	console.log('Свойство ' + key + ' имеет значение ' + testObj[key]);
} */


// Масивы 


/* let massiv = [1, 2, 'tree', 4, 5];
massiv.pop(); // pop удаляет последний элемент масива 
massiv.push('6'); // push добавляет элемент масива 
massiv.shift(); // убирает первый элемент массива
massiv.unshift('21'); // дабавляет как первый элемент
massiv[5] = 7; // добавить в масив 
console.log(massiv);

for (let i = 0; i < massiv.length; i++) { //для перебора массива, нужен length 
	console.log(massiv[i]);
}
console.log(massiv);

massiv.forEach(function (item, i, mass) { // 1 это item, 2 и 3  не обязательны, имена могут быть любыми
	console.log(i + ': ' + item + " (массив: " + mass + ')');
}); 

let mass = [1, 3, 4, 7, 11];

for (let key of mass) { // for of перебирает сам масив
	console.log(key); // if key and цикл for _in_ то перебирает ключи(0,1,2 и тп)
} */

/* let ans = prompt('', ''),
	arr = [];
arr = ans.split(','); // для передачи от ползователя в массив
console.log(arr);

let arrTest = ['qweqew1', 'asdsad2', 'wqerqr3'],
	arrAns = arrTest.join(', '); // соединяет данные масива в строку, тут что написано через , и пробел
console.log(arrAns);

let arrTest = ['4', '1', '12'],
	arrAns = arrTest.sort(sortNumber); // sort() сортирует по алфавиту
function sortNumber(a,b) { // sort(sortNumber) сортирует по намерам
	return a-b;
}

console.log(arrAns);
// Инфо - ещё есть псевдо масивы которые не обладают этими методами но записан в объекте и как масив */

// про обекты
/* let soldier = {
	health: 500,
	armor:50
};

let jonh = {
	health: 200
};
jonh.__proto__ = soldier;
console.log(jonh);
console.log(jonh.armor); */

// как работать с классами, обектами, стилями, иф анд елс, функциями и тп 

// в отдельном файлах инфа о том как делать див и тп через JS