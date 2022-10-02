let labels = document.getElementsByClassName('Label');
let credentails = document.getElementById('credentials')
let userName =document.getElementById('userName');
let userNameError =document.getElementById('username-error-msg');

// Username Validation

userName.addEventListener('blur' , () => {
    checkLength(userName , 3 , 12);
})

let checkLength = (field , min , max) => {
    let text = field.value.trim();
    if(text === ''){
        userNameError.classList.add('error');
        userNameError.innerText = "Error"
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
