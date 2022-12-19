function intoDegree (num, degree) {
    if (degree > 0) {
        return num * intoDegree(num, degree - 1);
    } else if (degree == 0) {
        return 1;
    } else {        
        // return (1 / intoDegree(num, -1 * degree));
        return 1 / num * intoDegree(num, degree + 1);
    }
}

const result = intoDegree(2, 3);
console.log(result);

