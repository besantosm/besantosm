$(document).ready(function(){

    $(windows).scroll(function(){
if( $(this).scrollTop() > 0 ){
    $('header').addClass('header2');
} else {
    $('header').removeClass('header2');
}
    });

});
