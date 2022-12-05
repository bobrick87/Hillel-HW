const numberArray = [1, 2, 4, 3, 4, 5, 6, 4, 7];

const stringArray = ['apple', 'orange', 'cherry', 'lemon', 'orange']

function removeElement(array, element) {
    let position;
    
    while (array.indexOf(element) != -1) {
        position = array.indexOf(element);
        console.log(position);
        array.splice(position, 1);
    }
}


removeElement(numberArray, 4);
console.log(numberArray);

removeElement(stringArray, 'orange');
console.log(stringArray);