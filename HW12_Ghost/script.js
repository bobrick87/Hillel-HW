const ghost = document.createElement('div');
const ghostText = document.createTextNode('You can type here something about yourself');

ghost.appendChild(ghostText);
ghost.id = "ghost";

function displayGhost() {
    document.getElementById("textField").after(ghost);
}

function hideGhost() {
    ghost.remove();
}

const textField = document.getElementById("textField");

textField.addEventListener('focus', displayGhost);
textField.addEventListener('blur', hideGhost);