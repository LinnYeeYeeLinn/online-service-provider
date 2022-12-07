$(document).ready(function(){
    $('ul li a').click(function(){
        $('ul li a').removeClass('active');
        $(this).addClass('active');
    });  
    $(".fa-bars").click(function(){
        $(this).toggleClass('fa-times');
        $('.itemList').slideToggle();
    })
})