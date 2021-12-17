let inputs = document.querySelectorAll('.autorization .input input');

let login = document.querySelector('.in-login');

let pass = document.querySelector('.in-pass');

let button = document.querySelector('.autorize-btn');


button.addEventListener('click', function(){
    inputs.forEach(input => {

        if (login.parentNode.classList.contains('valid') && pass.parentNode.classList.contains('valid')){
            window.location.href = 'https://www.google.ru/'
        }

        if (input.value == ''){
            input.parentNode.classList.add('empty');
        } 
        else {
            if (login.value.includes('@')){
                login.parentNode.classList.add('valid');
            } else if (login.value == ''){
                login.parentNode.classList.add('empty');
            } else {
                login.parentNode.classList.add('invalid');
            }            
            if (pass.value != ''){
                pass.parentNode.classList.add('valid');
            }        
        }
    })
})

inputs.forEach(input => {       

    input.addEventListener('focus', function(){
        this.parentNode.classList.add('focus');
        this.parentNode.classList.remove('empty');
    });

    input.addEventListener('blur', function(){
        this.parentNode.classList.remove('focus', 'valid', 'invalid');
    });

});




