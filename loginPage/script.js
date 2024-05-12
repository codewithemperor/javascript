const form = document.querySelector('.registration');
const matricField = document.querySelector('.matricField');
const passwordField = document.querySelector('.passwordField');
const cPasswordField = document.querySelector('.cPasswordField');


function checkMatric () {
    const matric = form.matric.value;
    if (matric.length < 10 || matric.length > 10  ) {
        return matricField.classList.add('invalid');
    }
    else {
        return matricField.classList.remove('invalid');
    }
}

function checkPassword () {
    const password = form.password.value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}$/;
    
    if (!password.match(passwordPattern)  ) {
        return passwordField.classList.add('invalid');
        
    }
    else {
        return passwordField.classList.remove('invalid');
    }
}

function confirmPassword() {
    const password = form.password.value;
    const confpass = form.cpassword.value;
    if (password !== confpass || confpass === "") {
        return cPasswordField.classList.add('invalid')
    }
    else {
        return cPasswordField.classList.remove('invalid')
    }
}



form.matric.addEventListener("input", checkMatric);
form.password.addEventListener("input", checkPassword);
form.cpassword.addEventListener("input", confirmPassword);

