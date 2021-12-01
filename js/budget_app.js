//The program 

/* expensesItemBtn = document.querySelector('.expenses-item-btn'),
optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
countBudgetBtn = document.querySelector('.count-budget-btn'), */
// my first way to do buttons, later I will check it 

"use strict";
//getting selectors From HTML. First buttons and checkbox
let startBtn = document.querySelector('#start'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    checkSavings = document.querySelector('#savings'),
// after buttons and checkbox
    expensesItem = document.querySelectorAll('.expenses-item'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
// right side
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expenseValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
// date
    dayValue = document.querySelector('.day-value'),
    monthValue = document.querySelector('.month-value'),
    yearValue = document.querySelector('.year-value');
   

// other selectors
let money, time;

startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    // если работаем с input то ставим value
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate(); // это для дня 
});

expensesItemBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
            let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let q1 = expensesItem[i].value;  // получаем данные переменной как я понял
            let q2 = expensesItem[++i].value;
        
            if ((typeof(q1)) === 'string' && (typeof(q1)) != null && ((typeof(q2)) != null && q1 != '' && q2 != '' && q1.length < 50)) {
                appData.expenses[q1] = q2;
                sum += +q2;
            } else {
                --i;
            }
        }
        expenseValue.textContent = sum.toFixed();
    } else {
        expenseValue.textContent = 'Ошибка, возможно вы не начали расчет';
    }
});

optionalExpensesBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let expenses = optionalExpensesItem[i].value; // получаем данные переменной как я понял
            appData.optionalExpenses[i] = expenses;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';// or expenses 
        }
    } else {
        optionalExpensesValue.textContent = 'Ошибка, возможно вы не начали расчет';
    }
});

countBudgetBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget  - +expenseValue.textContent ) / 30).toFixed();//изменяет на строку, if toFixed () округляет до целого, если 1 то до 1.1 или др.
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay >= 1 && appData.moneyPerDay < 400 ) { 
            levelValue.textContent = 'you have low standard of life';
        } else if (appData.moneyPerDay >= 400 && appData.moneyPerDay <= 2000) {
            levelValue.textContent = 'you have middle standard of life';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'your standard of life is great';
        } else {
            levelValue.textContent = 'Error in counting your standard of life';
        }
    } else {
        dayBudgetValue.textContent = 'Ошибка, возможно вы не начали расчет';
    }  
});

chooseIncome.addEventListener('input', function() {
    if (appData.budget != undefined) {
        let items = chooseIncome.value;  // получаем данные переменной как я понял
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;  
        //while (typeof(items) != "string" || items == '' || items == null) {
        //    incomeValue.textContent = 'неверные данные';
        //}
    } else {
        incomeValue.textContent = 'Ошибка, возможно вы не начали расчет';
    }  
});

checkSavings.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.budget != undefined) {
        if (appData.savings == true) {
            let sum = +chooseSum.value,
                percent = choosePercent.value;
            appData.monthIncome = sum /100 * percent / 12;
            appData.yearIncome = sum /100 * percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);  
        }
    } else {
        monthSavingsValue.textContent = 'Ошибка, возможно вы не начали расчет или не поставили галочку по накоплениям.';
        yearSavingsValue.textContent = 'Ошибка, возможно вы не начали расчет или не поставили галочку по накоплениям.';
    } 
});

choosePercent.addEventListener('input', function() {
    if (appData.budget != undefined) {
        if (appData.savings == true) {
            let sum = +chooseSum.value,
                percent = choosePercent.value;
            appData.monthIncome = sum /100 * percent / 12;
            appData.yearIncome = sum /100 * percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);  
        }
    } else {
        monthSavingsValue.textContent = 'Ошибка, возможно вы не начали расчет или не поставили галочку по накоплениям.';
        yearSavingsValue.textContent = 'Ошибка, возможно вы не начали расчет или не поставили галочку по накоплениям.';
    }
});

const appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    timeData: time,
};
    





