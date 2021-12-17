$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger, .nav-menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})