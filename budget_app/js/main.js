// 'use strict';
const startBtn = document.querySelector('#start'),
	budgetValue = document.querySelector('.budget-value'),
	dayBudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearSavingsValue = document.querySelector('.yearsavings-value');

const expensesItems = document.querySelectorAll('.expenses-item'),
	expensesItemBtn = document.querySelector('.expenses-item-btn'),
	optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
	countBudgetBtn = document.querySelector('.count-budget-btn'),
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

const chooseIncome = document.querySelector('.choose-income'),
	savingCheckBox = document.querySelector('#savings'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent');

const yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function start() {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}

	budgetValue.textContent = money;
	appData.budget = money.toFixed();
	appData.timeData = time;

	if (appData.timeData != "" || isNaN(time)) {
		yearValue.value = new Date(Date.parse(time)).getFullYear();
		monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
		dayValue.value = new Date(Date.parse(time)).getDate();
	} else {
		yearValue.value = new Date().getFullYear();
		monthValue.value = new Date().getMonth();
		dayValue.value = new Date().getDate();
	}

});

expensesItemBtn.addEventListener('click', function () {
	let sum = 0;

	for (let i = 0; i < expensesItems.length; i++) {

		let a = expensesItems[i].value,
			b = expensesItems[++i].value;

		if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
			appData.expenses[a] = b;
			sum += +b;
		} else {
			i--;
		}
	}
	expensesValue.textContent = sum;

});


countBudgetBtn.addEventListener('click', function () {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	if (appData.budget != undefined) {
		dayBudgetValue.textContent = appData.moneyPerDay + " руб.";

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Это минимальный уровень достатка!";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Это средний уровень достатка!";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "Это высокий уровень достатка!";
		} else {
			levelValue.textContent = "Ошибочка...!";
		}

	} else {
		dayBudgetValue.textContent = "Вы не записали даход!"
	}

});

optionalExpensesBtn.addEventListener('click', function () {
	let sum = 0;
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = +optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;

		sum += appData.optionalExpenses[i];
		optionalExpensesValue.textContent = sum;
	}
});


chooseIncome.addEventListener('input', function () {

	let items = chooseIncome.value;
	appData.income = items.split(", ");
	incomeValue.textContent = items;
});

savingCheckBox.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}

});


chooseSum.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +chooseSum.value,
			percent = +choosePercent.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});
choosePercent.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +chooseSum.value,
			percent = +choosePercent.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
	chooseExpenses: {},
	detectDayBudget: {},
	detectLevel: {},
	checkSavings: {},
	chooseOptExpenses: {},
	chooseIncome: {}
};

// for (let key in appData) {
// 	console.log(`Наша программа включает в себя данные:  + ${key} + -  + ${appData[key]}`);
// }


