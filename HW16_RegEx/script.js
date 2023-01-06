document.querySelector('#sellIt').addEventListener('click', addForm);

function addForm() {
    document.getElementById('orderForm').style.display = 'block';
}


const myForm = document.forms.order;
const submitButton = myForm.elements.submitButton;

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputContainers = this.querySelectorAll('.inputContainer');
    inputContainers.forEach(element => {
        element.className = '.inputContainer'
        const errorMessage = element.querySelector('.errorMessage');
        if (errorMessage) {
            errorMessage.remove();
        }

    });

    const orderInfoTDs = document.querySelectorAll('.orderInfo');
    orderInfoTDs.forEach(element => {
        element.innerHTML = "";
    });


    const inputName = getInput('order', 'name');
    const regExpName = /[А-ЩЮЯЇІЄҐ][а-щьюяїієґ]+ [А-ЩЮЯЇІЄҐ][а-щьюяїієґ]+/;
    if (regExpName.test(inputName.value)) {
        document.getElementById('nameData').append(inputName.value);
    } else {
        showError(inputName);
    }
    const inputEmail = getInput('order', 'email');
    const regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
    if (regExpEmail.test(inputEmail.value)) {
        document.getElementById('emailData').append(inputEmail.value);
    } else {
        showError(inputEmail);
    }

    const inputPhone = getInput('order', 'phone');
    const regExpPhone = /\+380\([0-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/
    if (regExpPhone.test(inputPhone.value)) {
        document.getElementById('phoneData').append(inputPhone.value);
    } else {
        showError(inputPhone);
    }

    const inputTown = document.getElementById('town');
    if (inputTown.selectedIndex === 0) {
        showError(inputTown);
    } else {
        document.getElementById('townData').append(inputTown.value);
    }

    const inputPost = getInput('order', 'post');
    if (inputPost.value.trim() === '' || inputPost.value < 1) {
        showError(inputPost);
    } else {
        document.getElementById('postData').append(inputPost.value);
    }

    const inputPayments = this.querySelectorAll('input[name="payment"]');
    let somethingIsChecked = false;
    for (const inputPayment of inputPayments) {
        if (inputPayment.checked) {
            document.getElementById('paymentData').append(inputPayment.value);
            somethingIsChecked = true;
        } 
    }
    if (somethingIsChecked === false) {
        showError(inputPayments[0]);
    }

    const inputNumber = getInput('order', 'number');
    if (inputNumber.value.trim() === '' || inputNumber.value < 1) {
        showError(inputNumber);
    } else {
        document.getElementById('numberData').append(inputNumber.value);
    }

    const inputComment = getInput('order', 'comment');
    document.getElementById('commentData').append(inputComment.value);
    
    if (!this.querySelector('.errorMessage')) {
        document.querySelector('#orderData').style.display = 'block';
        document.getElementById('orderForm').style.display = 'none'

    }
});



function showError(element) {
    const error = document.createElement('div');
    error.className = "errorMessage";
    error.append('Ви маєте заповнити це поле');
    const div = element.closest('div');
    div.appendChild(error);
    div.className = "invalidField inputContainer";
}

function getInput(formName, inputName) {
    const form = document.forms[formName];
    return form[inputName];
}