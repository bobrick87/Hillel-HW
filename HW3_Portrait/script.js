const birth_year = prompt('Вкажіть ваш рік народження');

console.log(birth_year);

let age;

if (birth_year === null || birth_year === "") {
    alert("Який жаль, що ви не вказали свій рік народження!");
    age = "Ми не знаємо вашого віку(((";
} else if (isNaN(+birth_year)) {
    alert("Для року народження можна використовувати лише цифри! Спробуємо ще раз!");
} else {
    age = new Date().getFullYear() - birth_year;
}

const city = prompt("В якому місті ви живете?");

let str_city;

switch (city) {
    case null:
    case "":
        alert("Який жаль, що ви не вказали своє місто!");
        str_city = "Ми не знаємо вашого міста(((";
        break;
    case "Київ":
        str_city = "Круто! Ви живете в столиці України!";
        break;
    case "Лондон":
        str_city = "Круто! Ви живете в столиці Великобританії!";
        break;
    case "Вашингтон":
        str_city = "Круто! Ви живете в столиці США!";
        break;    
    default:
        str_city = `Ви живете у місті ${city}`;
        break;
}
console.log(str_city);

const sport = prompt("Вкажіть ваш улюблений вид спорту");

let str_sport;

switch (sport) {
    case null:
    case "":
        alert("Який жаль, що ви не вказали свій улюблений вид спорту!");
        str_sport = "Ми не знаємо вашого улюбленого виду спорту(((";
        break;
    case "Футбол":
    case "футбол":
        str_sport = "Круто! Хочеш бути як Рональдо?";
        break;
    case "Бокс":
    case "бокс":
        str_sport = "Круто! Хочеш бути як Кличко?";
        break;
    case "Баскетбол":
    case "баскетбол":
        str_sport = "Круто! Хочеш бути як Шакіл О'ніл?";
        break;    
    default:
        str_sport = `Ваш улюблений вид спорту ${sport}.`;
        break;
}

alert(`${age}\n${str_city}\n${str_sport}`);
