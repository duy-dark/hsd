$(document).ready(function() {
    $('button').on('click', function() {
        $(this).toggleClass('is-active');
        if ($(this).hasClass('is-active') === true) {
            $('.box-left').css('display', 'block');
            $('.box-left').css('background-color', ' rgba(255, 255, 255, 1)');
        } else {
            $('.box-left').css('display', 'none');
        }

    });
    $('.box-right .br-work .product .gridpro .item').on('click', function() {

        /*$(location).href('http://www.yoshida-net.co.jp/info/?p=952');*/
        var url = "http://www.yoshida-net.co.jp/info/?p=952";
        $(location).attr('href', url);
        $('.box-right .br-work .product .gridpro .item').load(location);
    });
});