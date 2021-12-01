// как работать с классами, обектами, стилями

let heart = document.querySelectorAll('.heart'),//наиболее популярный, получить селектор(класс, Id, тег и тп)
    aheart = document.querySelectorAll('.wrapper .heart'), //вложенность 
    oneCircle = document.querySelector('.circle'),
    box = document.querySelector('#box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
	wrapper = document.querySelector('.wrapper');

/* console.log(heart[0]);
console.log(oneCircle);
console.log(box);
console.log(btn);
console.log(btn[2]);
console.log(circle[1]); */

// для того чтобы добратся для стилей мы дабовляем к нашей переменой - style
//записываем переменную, затем .style, затем . и используем то свойство которое хотим поменять(без тире)
box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100%'; // если массив(может объект) то указать какой имеено номер

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// сделать тоже самое но через цикл.
//если не знаем сколько объектов или не задаватем кол-во то пишем - переменная.length 
/* for (let i = 0; i < heart.length; i++) { 
	heart[i].style.backgroundColor = 'blue';
} */
// есть более простйо способ forEach (из-за querySelectorAll)
// передаем 3 аргумента, но это не обязатльно, можно 1 (елемент/ы хотим перебрать)
// можно назвать как угодно но обычно - item, i(номер, как в цикле),и 3 сам масив но др name 
// если к примеру хотим каждый элемент покрасить то хватит только item
/* heart.forEach(function(item, i, hearts) {
	item.style.backgroundColor = 'blue';
}); */


// создаем элемент 


let divTest = document.createElement('div'),
	text = document.createTextNode('ахахаха тут текст'); // если напрямую текст

// classList используется для манипуляции классами (классы лучше писать через css а тут что делать)
divTest.classList.add('black'); // black это клас из CSS

// добавить элемент на сайт(страницу)
// Всё это работает толкьо к родительскому элементу
/* wrapper.appendChild(divTest); // как правильно писать, помещаем в родителя */

//document.body.appendChild(divTest); //пример в корень body, добавляет в конец body, к родительскому элементу
document.body.insertBefore(divTest, circle[1]); // вторым указываем перед чем ставим

// чтобы удалить элемент надо использовать removeChild
document.body.removeChild(circle[0]); // Работает к родительскому элементу
wrapper.removeChild(heart[0]); // удалит из родительского элемента(wrapper) первое heart

// замена элементов 2 способа
document.body.replaceChild(btn[1], circle[1]); // для замены одного элемента другим (ниже меняет местами)
document.body.insertBefore(divTest, circle[1]); // меняет местами

//divTest.innerHTML = '<h1>Hello</h1>'; // Дабавляет любой HTML code 
// Если от пользавателя то чтобы обезапасить и получать только текст надо писать
divTest.textContent = 'Hello World again';
