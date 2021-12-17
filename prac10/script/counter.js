let counters = document.querySelectorAll('.social-list .counter');

let list = document.querySelector('.social-list');

counters.forEach(counter => {
    counter.value = randomNumber(100, 500);
})

list.addEventListener('click', function(){
    window.setInterval(function(){
        counters.forEach(counter => {
            if (counter.value < 1000)
                counter.value++;
        }, 100);
    });
});

function randomNumber(min, max){
    const res = Math.random()*(max,min) + min;
    return Math.floor(res);
}


