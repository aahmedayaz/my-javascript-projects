let labels = document.getElementsByClassName('Label');
let credentails = document.getElementById('credentials')
let userName =document.getElementById('userName');
let email = document.getElementById('email');
let userNameError =document.getElementById('username-error-msg');
let emailError = document.getElementById('email-error-msg');

// Username Validation

userName.addEventListener('input' , () => {
    checkUserName(userName , 3 , 12);
})

email.addEventListener('input' , () => {
    checkEmail(email);
})

let checkEmail = (field) => {
    let text = field.value.trim();
    // if user add space before username
    field.value = text;
    let expression = /^[\w#][\w\.\’+#](.[\w\\’#]+)\@[a-z]+[a-z]+[a-z]+[a-z]+(.[a-z]+[a-z]+[a-z])*(.[a-zA-Z]{2,20})$/;

    // if email is empty
    if(text === ''){
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
        // if my email is Va;id
        emailError.classList.add('success')
        emailError.innerText = "\u2713 Valid Email";
    }
}

let checkUserName = (field , min , max) => {
    let text = field.value.trim();
    // if user add space before username
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
    else if(text.length < 3){
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
