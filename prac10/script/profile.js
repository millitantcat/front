$(document).ready(function(){
    $('.card').mouseenter(function(){
        $('.card').addClass('active')
        $('.card').children().addClass('active');
    })
    .mouseleave(function(){
        $('.card').removeClass('active')
        $('.card').children().removeClass('active');
        $('.avatar').removeClass('opened');
    });
    
    $('.avatar').click(function(){
        $('.avatar').toggleClass('opened');
        $('.social').toggleClass('active');
    });
    
})

