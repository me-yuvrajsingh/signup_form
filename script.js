const err1  = document.querySelector('.error1');
const err2  = document.querySelector('.error2');
const form = document.getElementById('form')
const passwordBox = document.querySelector('.password');
const cnfmPassword = document.querySelector('.confirm-password');

form.addEventListener('submit', (e)=>{
    if (passwordBox.value != cnfmPassword.value){
        e.preventDefault()
            err1.style.display = "flex";
            console.log("error1")
    }
    
})

document.querySelector('.fa-times').addEventListener('click', ()=>{
    err1.style.display = "none";
})

    