let userName = document.getElementById('userName')
let errorTag = document.getElementById('errorTag')
let submit = document.getElementById('submit')
console.log(submit);
userName.addEventListener('input' , (e) => {
    checkLength(userName , 3 , 15);
    checkNumber(userName);
})

const checkLength = (field , min , max) => {
    const text = field.value.trim();
    const textLength = text.length;
    console.log(textLength);
    if(textLength > max){
        errorTag.classList.add('error')
        errorTag.innerText = "UserName must be Less Than 15 characters"
    }
    if(textLength < min){
        errorTag.classList.add('error')
        errorTag.innerText = "UserName must be Greater Than 03 characters"
    }
    if(textLength >= min && textLength <= max){
        errorTag.classList.add('success')
        errorTag.innerText = "UserName Available"
    }
}

const checkNumber = (field) => {
    const text = field.value.trim();
    let access = ((/[0-9]/).test(text));
    console.log(access);
    if(access){
        errorTag.classList.add('error');
        errorTag.append(' Number Not allowed')
    }
}


let labels = document.getElementsByClassName('Label');
console.log(labels);
let credentails = document.getElementById('credentials')


Array.from(labels).forEach((label) => {
    let exactInput = label.nextElementSibling;
    exactInput.addEventListener('focus' , () => {
        label.classList.add('upper');
    })

    exactInput.addEventListener('blur' , () => {
        label.classList.add('upper');
    })
})