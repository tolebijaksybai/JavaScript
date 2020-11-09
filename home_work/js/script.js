let quiz = prompt('отношение к технике apple', '');
const menu = document.querySelector('.menu');
let menuItem = '<li class="menu-item">Пятый пункт</li>';
menu.insertAdjacentHTML('beforeend', menuItem);
const menuItems = document.querySelectorAll('.menu-item');
menu.insertBefore(menuItems[2], menuItems[1]);
/* let menuItem = document.createElement('li');
menuItem.classList.add('menu-item');
menuItem.textContent = "Пятый пункт";
menu.append(menuItem);
 */

let imgUrl = "url(../img/apple_true.jpg)";
document.body.style.backgroundImage = imgUrl;

const title = document.querySelector('.title');
title.textContent = 'Мы продаем только подлинную технику Apple';

const adv = document.querySelector('.adv');
adv.remove();

let idPrompt = document.querySelector('#prompt');

idPrompt.textContent = quiz;