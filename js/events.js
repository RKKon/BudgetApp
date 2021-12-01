// event(событие)всё чем пользаватель занимается на стр это и есть событие

let btn = document.querySelectorAll('button'), // изменено с одного на ALL. ко всем кнопкам
    wrapper = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// пользаватель взаимодействет с выбраным обектом(btn) (если при 'click' то его первым пишем)

/* btn[0].addEventListener('click', function() {
    alert('You are right. You going in right direction! No matter what is going on. You will survive, flourish and prosper!!! You are Andrei!');
    
});
 */
// так же иногда нужно дабовлять event or(e) 
btn[0].addEventListener('click', function(event) {
    //alert('Just keep moving!!! You will have your Freedom!!!');
    //console.log(event);
    //let target = event.target;
    //target.style.display = 'none';
    console.log('произолшо ух ты ' + event.type + ' на элементе ' + event.target);
    
});
// cобытия работают с низу на верх по иерархия. ( примет от h2 потом div)
// это называется всплытие событий - это когда события срабатывают на самом вложенном затем на родителе а затем выше и више если есть
wrapper.addEventListener('click', function(event) {
    console.log('произолшо ух ты ' + event.type + ' на элементе ' + event.target);
});

link.addEventListener('click', function(e) {
    e.preventDefault(); // отменят стандартное поведение браузера(переход на др страницу, перезагрузка стр)
    console.log('произолшо ух ты ' + e.type + ' на элементе ' + e.target);
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('check if work leave');
    });
});