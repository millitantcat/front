let icon = document.querySelector('.icon');
let search = document.querySelector('.search');
let clear = document.querySelector('.clear');
let input = document.querySelector('.input input')

icon.addEventListener('click', function(){
    search.classList.toggle('active');
    clear.classList.toggle('active');
});

clear.addEventListener('click', function(){
    input.value = '';
});

input.addEventListener('keydown', function(event){
    if (event.keyCode == 13){
        document.location.href = `https://yandex.ru/search/?text=${input.value}`;
    }
});

