let starsBlock = document.querySelector('.stars');
for (i = 0; i < 5; i++) {
    starsBlock.innerHTML += `<div class="star"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></div>`
};

let starsArr = document.querySelectorAll('.star');

$(document).ready(function(){
    $('.star')
    .on('mouseenter',function(){  
        for (let i = 0; i <= $(starsArr).index(this); i++){
            $(starsArr[i]).addClass('hovered');
        }
    })
    .on('mouseleave', function(){
        for (let i = 0; i <= $(starsArr).index(this); i++){
            $(starsArr[i]).removeClass('hovered');
        } 
    })
    .on('click', function(){
        for (let i = 0; i <= $(starsArr).index(this); i++){
            $(starsArr[i]).removeClass('hovered');
            $(starsArr[i]).addClass('saved');            
        }
        $('.mark').removeClass('invisible');
    });

    $('.send-btn').on('click', function(){
        $('.star').removeClass('saved');
        $('.mark').addClass('invisible');
    })
})

        
