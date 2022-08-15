/*Llamando al formulario*/ 
const form = document.querySelector('.container__content__form');
//Recoge la informacion
const inputEmail = document.querySelector('.container__content__form__email');
//LLamando error
const error = document.querySelector('.container__content__form__email--error');

//Escucha
form.addEventListener('submit', (event)=>{//el event es una variable
    //Validacion email - expresiones regulares
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    //testeo 
    regExp.test(inputEmail.value);
    if(regExp.test(inputEmail.value) == true){
        inputEmail.style.border = '1px solid hsl(0, 36%, 70%)';
        inputEmail.style.backgroundImage = "url('')";
        error.innerHTML = '';
    }
    
    else{
        event.preventDefault();//evita recargas
        inputEmail.style.border = '1px solid #F47174';
        inputEmail.style.backgroundImage = "url('./imgs/error-alt-solid-24.svg')";
        error.innerHTML = 'Please provia a valid email';
    }
});

