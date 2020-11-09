document.getElementById('movie').innerHTML

/* Для изменение текст по айди */
var one = 'Моя Элемент';
$('#test').text(one);

/* Для анимация исчезания */
$('#test').fadeOut('slow');

/* Для обрашение класса */
document.getElementsByClassName('myclass')[0].innerHTML = one;

/* Css из jQuery */
// document.getElementsByClassName('myclass')[0].style.color = 'red'; 
$('.myclass').css('color','red');
$('.myclass').css('background-color','black');


/* Массивы */
var arrayNum = [1, 2, 3, 4, 5];
var arrayString = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый'];
var arrayJson = {
        'menu': {
            'first': 'Первое блюдо',
            'second': 'Второе блюдо'
        } 
    }
$('#result1').text('Вывод первого элемента массива arrayNum: ' + arrayNum[4]);
$('#result2').text('Вывод второго элемента массива arrayString: ' + arrayString[2]);
$('#result3').text('Вывод первого элемента массива arrayJson: ' + arrayJson['menu']['second']);

/* Методы */
// reverse();
// concat(12);
// slice(1,-1);
// splice()
// unshift()
// pop()
// shift()

function mySum(a, b){
	return a+b;
}
console.log(mySum(5, 5));