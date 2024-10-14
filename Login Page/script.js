const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')



form.addEventListener('submit', (e)=>{
    // e.preventDefault() Prevent Submit

    let errors = []

    if(firstname_input){
        // if we have first name input then we are in the signup
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)

    }
    
    else{
        // if we don't have a first name input then we are in the login
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if(errors.length >0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
});



function getSignupFormErrors(firstname,email,password,repeatpassword){
    let errors = []

    if(firstname === ''  || firstname == null){
        errors.push('Firstname is reqired')
        firstname_input.parentElement.classList.add('incorrect')
    }

    if(email === ''  || email == null){
        errors.push('Email is reqired')
        email_input.parentElement.classList.add('incorrect')
    }

    if(password === ''  || password == null){
        errors.push('Password is reqired')
        password_input.parentElement.classList.add('incorrect')
    }

    if(password !== repeatpassword){
        errors.push('password does not match repeated password')
        password_input.parentElement.classList.add('incorrect')
        repeat_password_input.parentElement.classList.add('incorrect')
    }

    return errors;
};

function getLoginFormErrors(email, password){
    let errors = []
  
    if(email === '' || email == null){
      errors.push('Email is required')
      email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
      errors.push('Password is required')
      password_input.parentElement.classList.add('incorrect')
    }
  
    return errors;
  }
  

const allInputs = [firstname_input,email_input,password_input,repeat_password_input].filter(input => input != null)

allInputs.forEach(input=>{
    input.addEventListener('input',() => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})