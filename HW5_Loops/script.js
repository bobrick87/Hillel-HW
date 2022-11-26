const task = +prompt('Обери, яку задачу будемо виконувати (1, 2, 3, 4 або 5)');

switch (task) {
    case 1:
        document.write('1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….). <br>');
        for (let i = 20; i <= 30; i = i + 0.5) {
            document.write(i + "<br>");
        }
        break;
    case 2:
        document.write('2. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. <br>')
        const OneDollar = +prompt("Який сьогодні курс доллара?");
        if (isNaN(OneDollar)) {
            alert("Можна використовувати лише цифри!");
        } else {
            let i = 10;
            while (i <= 100) {
                document.write(`${i} доларів коштують ${OneDollar * i} <br>`);
                i = i + 10;
            }
        }
        break;
    

        default:
            alert("Некоректний вибір");

}