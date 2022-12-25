const loginButton = document.getElementById('login');
const loader = document.getElementById('loader');


if (loginButton !== null) {
    loginButton.onclick = myFunction;
}


function myFunction(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    console.log(`email: ${email}`);
    const password = document.querySelector('#password').value;
    console.log(`пароль: ${password}`);

    loader.style.display = 'flex';
    

    setTimeout(function() {
        location.href = 'profile.html';
    }, 2000)

}