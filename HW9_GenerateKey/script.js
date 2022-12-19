const charactersLong = 'abcdefghijklmnopqrstuvwxyz0123456789';
const charactersShort = 'xyz01'

function generateKey(lengthOfKey, setOfCharacters) {
    let newKey = "";

    do {
        // j = Math.floor(Math.random() * setOfCharacters.length);
        newKey = newKey + setOfCharacters[Math.floor(Math.random() * setOfCharacters.length)];
    } while (newKey.length < lengthOfKey);

    return newKey;
}

const key1 = generateKey(6, charactersLong);
const key2 = generateKey(20, charactersShort);
console.log(key1);
console.log(key2);