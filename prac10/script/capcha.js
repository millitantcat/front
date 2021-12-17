let capcha = {

    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',

    string : '',

    capcha : function() {
        this.string = document.querySelector('.img h1').innerText = Math.random().toString(36).substr(2, 6);
        console.log(this.string); // Для тестов
    },

    validate : function(){
        let validateText = document.querySelector('.status');
        let input = document.querySelector('.capcha-input input');
        if (this.string == '') return;
        if (input.value == this.string){
            validateText.style.color = "green";
            validateText.innerHTML = "Круто! Похоже, Вы не робот"
        } else {
            validateText.style.color = "red";
            validateText.innerHTML = "Неверная капча! Попробуйте еще раз"
        }
        input.value = "";
    },
};

document.querySelector('.check').addEventListener('click', function(){
    capcha.validate();
});

document.querySelector('.capcha input').addEventListener('keydown', function(event){
    if (event.keyCode == 13){
        capcha.validate();
    }
}); 

document.querySelector('.capcha-out button').addEventListener('click',function(){
    capcha.capcha();
});

document.querySelector('.capcha-input input').addEventListener('input', function(){
    if (document.querySelector('.capcha-input input').value != '') {
        document.querySelector('.check').classList.add('visible-btn');
    } else {
        document.querySelector('.check').classList.remove('visible-btn');
    }
    
})

