let labels = document.getElementsByClassName('Label');
let credentails = document.getElementById('credentials')
let userName =document.getElementById('userName');
let email = document.getElementById('email');
let pin = document.getElementById('pin');
let userNameError =document.getElementById('username-error-msg');
let emailError = document.getElementById('email-error-msg');
let pinError = document.getElementById('pin-error-msg');

// Username Validation

userName.addEventListener('input' , () => {
    checkUserName(userName , 3 , 12);
})

const checkUserName = (field , min , max) => {
    let text = field.value.trim();
    // if user add space before and After Username
    field.value = text;
    // Validations
    if(text === ''){
        if(userNameError.classList.contains('success')){
            userNameError.classList.remove('success');
        }
        userNameError.classList.add('error');
        userNameError.innerText = "\u26CC Please Enter Username"
    }
    else if(text.length > max){
        if(userNameError.classList.contains('success')){
            userNameError.classList.remove('success');
        }
        userNameError.classList.add('error');
        userNameError.innerText = "\u26CC Username must be less than 12 characters";
    }
    else if(text.length < min){
        if(userNameError.classList.contains('success')){
            userNameError.classList.remove('success');
        }
        userNameError.classList.add('error');
        userNameError.innerText = "\u26CC Username must be greater than 3 characters";
    }
    else if(/\d/g.test(text)){
        if(userNameError.classList.contains('success')){
            userNameError.classList.remove('success');
        }
        userNameError.classList.add('error');
        userNameError.innerText = "\u26CC Numbers are not Allowed"
    }
    else{
        // Correct Attempt after Wrong Attempts
        if(userNameError.classList.contains('error')){
            userNameError.classList.remove('error');
        }
        userNameError.classList.add('success')
        userNameError.innerHTML = "\u2713 Username Available";
    }
}


// Email Validation

email.addEventListener('input' , () => {
    checkEmail(email);
})

const checkEmail = (field) => {
    let text = field.value.trim();
    // if user add space before and After Email
    field.value = text;
    let expression = /^[\w#][\w\.\’+#](.[\w\\’#]+)\@[a-z]+[a-z]+[a-z]+[a-z]+(.[a-z]+[a-z]+[a-z])*(.[a-zA-Z]{2,20})$/;

    // if email is empty
    if(text === ''){
        if(emailError.classList.contains('success')){
            emailError.classList.remove('success');
        }
        emailError.classList.add('error')
        emailError.innerText = "\u26CC Please Enter Email";
    }
    // if email is invalid
    else if(!expression.test(text)){
        // if my errorTag already contains success
        if(emailError.classList.contains('success')){
            emailError.classList.remove('success');
        }
        emailError.classList.add('error')
        emailError.innerText = "\u26CC Invalid Email";
    }
    else{
        // if my email is Valid
        emailError.classList.add('success')
        emailError.innerText = "\u2713 Valid Email";
    }
}


// Pin Validation

pin.addEventListener('input' , () =>{
    checkPin(pin);
})

const checkPin = (field) => {
    let text = field.value.trim();
    // if user add space before and After Pin
    field.value = text;
    if(text === ''){
        if(pinError.classList.contains('success')){
            pinError.classList.remove('success')
        }
        pinError.classList.add('error');
        pinError.innerText = "\u26CC Please Enter Your Pin"
    }
}


// Input Animation


Array.from(labels).forEach((label) => {
    let exactInput = label.nextElementSibling;
    exactInput.addEventListener('focus' , () => {
        label.classList.remove('lower');
        label.classList.add('upper');
    })

    exactInput.addEventListener('blur' , () => {
        label.classList.add('lower');
    })
})
