const testArray = [1, 2, 3, [6, [3, 17, 564], 12], 9, [1, 8, 45], 32];
const testArray1 = 245;
console.log(Array.isArray(testArray));
let depth = 0;

function getListFromArray(arr, depth) {
    const ul = document.createElement('ul');

    if (Array.isArray(arr)) {
        arr.forEach (elem => {
            const li = document.createElement('li');

            if(Array.isArray(elem)) {
                console.log(elem);  
                li.append(getListFromArray(elem, depth + 1));
                
            } else if(depth === 0) {
                console.log(elem);
                li.append(elem);
            
            } else {
                li.append(`${depth}. ${elem}`);
            }
            ul.append(li);
        })
        return ul;
    } 
    return "Для створення списку потрібно передати масив!";
    
}

document.body.append(getListFromArray(testArray, 0));