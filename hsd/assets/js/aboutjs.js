$(document).ready(function() {
    $('button').on('click', function() {
        $(this).toggleClass('is-active');
         if ($(this).hasClass('is-active') === true) {
             $('.box-left').css('display','block');
             $('.box-left').css('background-color',' rgba(255, 255, 255, 1)');
        } else {
             $('.box-left').css('display','none');
        }
       
    });
});