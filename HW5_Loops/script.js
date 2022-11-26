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
    case 3:
        document.write("3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N. <br>");
        const n = +prompt("Введіть ціле число");
        if (Number.isInteger(n)) {
            for (let i = 1; Math.pow(i, 2) <= n; i++) {
                document.write(`${i} <br>`);
            }
        } else {
           alert('Ви щось зробили невірно!');
        }
        break;
    case 4:
        document.write("4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе). <br>")
        const int = +prompt("Введіть ціле число");
        if (Number.isInteger(int) && (int > 1)) {
            let i = 1, isSimple = true;
            while (i < int) {
                if (int % i === 0 && i != int && i != 1) {
                    isSimple = false;
                    break;
                } 
                i++;
            }
            let text = (isSimple === true) ? `${int} є простим числом` : `${int} не є простим числом` ;
            document.write(text);
        } else {
            alert(`Ви щось зробили невірно!`)
        }
        break;
    
    default:
            alert("Некоректний вибір");
}

