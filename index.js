$(function(){
$('.fa-bars').click(function(){
    $('.hum-body').fadeIn(500).addClass('active');
});

$('.hum-close').click(function(){
    $('.hum-body').fadeOut(500).removeClass('active');
});
    
});