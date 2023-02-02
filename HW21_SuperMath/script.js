class SuperMath {
    constructor (obj) {
        this.object = obj;
        // console.log(this.object);
    }

    check(userObject = this.object) {
        let result;
        if (confirm(`Ви бажаєте обчислити ${userObject.x}${userObject.znak}${userObject.y}?`)) {
            switch (userObject.znak) {
                case "+":
                    result = userObject.x + userObject.y;
                    alert(`${userObject.x} + ${userObject.y} = ${result}`);
                    break;

                case "-":
                    result = userObject.x - userObject.y;
                    alert(`${userObject.x} - ${userObject.y} = ${result}`);
                    break;

                case "*":
                    result = userObject.x * userObject.y;
                    alert(`${userObject.x} * ${userObject.y} = ${result}`);
                    break;

                case "/":
                    result = userObject.x / userObject.y;
                    alert(`${userObject.x} / ${userObject.y} = ${result}`);
                    break;

                case "%":
                    result = userObject.x % userObject.y;
                    alert(`${userObject.x} % ${userObject.y} = ${result}`);
                    break;

                default:
                    alert("Якщо ви це бачите, щось жорстко пішло не так(((")
                    break;
            }
        } else {
            this.input();
        }
    }

    input(){
        const newUserObject = {};
        alert("Введіть нові дані для обчислення");
        let userX, userY, userZnak;
        do {
            userX = prompt("Введіть параметр 'x'");
            if (userX !== null && !isNaN(+userX) && userX.trim() !== "") {
                newUserObject.x = +userX;
            } else {
                alert("Вводити можна лише числа! Спробуйте ще раз!");
            }
        } while (!("x" in newUserObject));

        do {
            userY = prompt("Введіть параметр 'y'");
            if (userY !== null && !isNaN(+userY) && userY.trim() !== "") {
                newUserObject.y = +userY;
            } else {
                alert("Вводити можна лише числа! Спробуйте ще раз!");
            }
        } while (!("y" in newUserObject));

        do {
            userZnak = prompt("Введіть параметр 'Знак дії'(+,-,*,/,%)");
            if (userZnak.match(/^[\/\+\%\*\-]$/)) {
                newUserObject.znak = userZnak;
            } else {
                alert(`Параметр "Знак дії" некоректний`);
            }
        } while (!("znak" in newUserObject));

        this.check(newUserObject);
    }

}

const calc = new SuperMath({x:12, y:3, znak: "+"});
calc.check({x:1, y:9, znak: "+"});
// console.log(calc);
