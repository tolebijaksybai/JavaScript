/* Значения из текстовых инпутов */
const anInitialFee = document.getElementById('an-initial-fee'),  // первональный вызнос
    creditTerm = document.getElementById('credit-term');         // срок кредита

/* Значения из range инпутов */
const anInitialFeeRange = document.getElementById('an-initial-fee-range'),  // range для первонального вызнос
      creditTermRange = document.getElementById('credit-term-range');  // range для срока кредита

/* Итоговые данные */
const totalAmountOfCredit = document.getElementById('amount-of-credit'), // итоговая сумма кредита
      totalmouthlyPayment = document.getElementById('monthly-payment');  // ежемесячный платеж

const inputsRange = document.querySelectorAll('.input-range');

const assignValue = () => {
    anInitialFee.value = anInitialFeeRange.value;
    creditTerm.value = creditTermRange.value;
};

assignValue();

/* Модально окно */
const btnOpenConfig = document.getElementById('open-configure'),
      wrapperModal = document.getElementById('wrapper-modal'),
      overlay = document.getElementById('overlay');

const saveConfiguration = document.getElementById('saveConfiguration'),
    cancelConfiguration = document.getElementById('cancelConfiguration');

btnOpenConfig.addEventListener('click', () =>{
    wrapperModal.classList.add('active');
});

const closeModal = () => {
    wrapperModal.classList.remove('active');
}

overlay.addEventListener('click', () => closeModal());
saveConfiguration.addEventListener('click',() =>closeModal());
cancelConfiguration.addEventListener('click',() => closeModal());

/* Configurate auto */

const cars = document.querySelectorAll('.car'),
      dots = document.querySelectorAll('.dot');

const currentPrecent = 8.7;

let totalPriceOfConfigurate = 0;

const additionalAmount = document.getElementById('additionalAmount');
additionalAmount.innerHTML = totalPriceOfConfigurate;

const priceOfAuto = 700000;
const priceOfAutoElement = document.getElementById('priceOfAuto');
priceOfAutoElement.innerHTML = priceOfAuto;

for(input of inputsRange) {
    input.addEventListener('input', ()=> {
        assignValue();
        calculation(anInitialFee.value, creditTerm.value);
    })
}

const calculation = (anInitialFee = 100000, creditTerm = 1) => {
    /* 
        Сумма кредита = Сумма кредита + ((((стоимость авто + допы) - первый взнос) * проценты) / 100)
        Ежемесячный платеж = сумма кредита / срок кредита * 12
    */

    /* Расчет итогового кредита */
    const amountOfPrecents = (((priceOfAuto + totalPriceOfConfigurate) - anInitialFeeRange.value) * currentPrecent) / 100;
    const totalPriceOfCredit = (priceOfAuto + totalPriceOfConfigurate) - anInitialFeeRange.value + amountOfPrecents;

    /* Расчет месяцев */
    const numberOfMonths = 12 * creditTerm; // Количество месяцев
    const monthlyPayment = totalPriceOfCredit / numberOfMonths; // Ежемесячная плата

    if (totalPriceOfCredit < 0){
        return false;
    }else {
        totalAmountOfCredit.innerHTML = Math.round(totalPriceOfCredit);
        totalmouthlyPayment.innerHTML = Math.round(monthlyPayment);
    }
}
calculation();

/* Configuration settings */
const pricesOfColors = {
    blue: 0,
    brown: 2000,
    orange: 4000,
    pink: 6000,
    red: 8000
};

let currentPriceOfColor = pricesOfColors.blue;

const activeColor = color => {
    for (car of cars) {
        car.classList.remove('active');
    };
    for (dot of dots){
        dot.classList.remove('active');
    };

    Array.from(cars).filter(item => {
        return item.dataset.color === color;
    }).forEach(item => {
        item.classList.add('active');
    });

    currentPriceOfColor = pricesOfColors[`${color}`];
    checkTotalPriceOfConfigurate();
};
for (dot of dots) {
    dot.addEventListener('click', e =>{
        e.target.classList.add('active');
    });
};

const engine = document.getElementById('engine'),
    complectation = document.getElementById('complectation');

const checkTotalPriceOfConfigurate = () => {
    totalPriceOfConfigurate = +(engine.value) + +(complectation.value) + currentPriceOfColor;
    additionalAmount.innerHTML = totalPriceOfConfigurate;
    calculation(anInitialFee.value, creditTerm.value);
};

saveConfiguration.addEventListener('click', () => checkTotalPriceOfConfigurate());
engine.addEventListener('change', () => checkTotalPriceOfConfigurate());
complectation.addEventListener('change', () => checkTotalPriceOfConfigurate());


docked