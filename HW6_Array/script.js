alert("Вітаю! Зараз з'явиться діалогове вікно, яке дозволить вам задати довжину та елементи массиву. Масив має містити мінімум 5 елементів! Кнопка 'Ок' відправить ваш елемент до массиву, кнопка 'Cancel' завершить формування масиву.");

const userArr = [];
let userElement;

do {
    userElement = prompt("Введіть елемент масиву");
    if (userElement !== null) {
        userArr.push(userElement);
        console.log(userArr);
    } else if (userArr.length < 5) {
        alert( `Масив має містити щонайменше 5 елементів! Ви вказали лише ${userArr.length}`);
    } else {
        break;
    }
} while (true);


// do {
//     userElement = prompt("Введіть елемент масиву");
//     if (userElement) {
//         userArr.push(userElement);
//         console.log(userArr);
//     } else if (userArr.length < 5) {
//         alert( `Масив має містити щонайменше 5 елементів! Ви вказали лише ${userArr.length}`);
//         userElement = 1;
//         continue;
//     } 
// } while (userElement);


console.log("Масив після сортування");
userArr.sort(function(a, b) {
    return (a-b);
});
console.log(userArr);

console.log("Масив після видалення 2-4 елементів")
userArr.splice(1, 3);

console.log(userArr);

