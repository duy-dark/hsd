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

    var imageheight = $('.slider').children('img').height();
    $('.slider').css('height', imageheight);

    var images_slider = $(".slider img");
    var output = '<ul id="dots">';

    for (var i = 0; i < images_slider.length; i++) {
        if (i === 0) {
            $(".slider img").eq(i).addClass('current 1');
            output += '<li class="selected 1">';

        } else {
            $(".slider img").eq(i).addClass(i);
            output += '<li class="' + [i + 1] + '">';
        }

        output += '</li>';
    }

    output += '</ul>';

    $("#prev").after(output);
    $('#next').click(newImage);
    $('#prev').click(newImage);
    $('#dots li').click(selectImg);

    setInterval(function() { moveImg() }, 4000);
});
$(window).resize(function(event) {
    var imageheight = $('.slider').children('img').height();
    $('.slider').css('height', imageheight);
});

function selectImg() {

    $('#dots li.selected').removeClass('selected');
    var q = this.className;
    q--;

    var curPhoto = $('.slider img.current');
    var nextPhoto = $('.slider img').eq(q);


    $(this).addClass('selected');

    curPhoto.removeClass('current').addClass('previous');
    nextPhoto.css({ opacity: 0.0 }).addClass('current').animate({ opacity: 1.0 }, 1000,
        function() {
            curPhoto.removeClass('previous');
        });
}

function newImage() {
    var changePhoto = this.id;

    var curDot = $('#dots li.selected').removeClass('selected');
    var curPhoto = $('.slider img.current');


    if (changePhoto == 'next') {
        var nextPhoto = curPhoto.next();
        var nextDot = curDot.next();



        if (nextPhoto.length == 0) {
            nextPhoto = $('.slider img:first');
            nextDot = $('#dots li:first');

        }

    } else if (changePhoto == 'prev') {
        var nextPhoto = curPhoto.prev();
        var nextDot = curDot.prev();


        if (nextPhoto.length == 0) {
            nextPhoto = $('.slider img:last');
            nextDot = $('#dots li:last');

        }
    }

    nextDot.addClass('selected');

    curPhoto.removeClass('current').addClass('previous');
    nextPhoto.css({ opacity: 0.0 }).addClass('current').animate({ opacity: 1.0 }, 1000,
        function() {
            curPhoto.removeClass('previous');
        });


}

function moveImg() {
    var curDot = $('#dots li.selected').removeClass('selected');
    var curPhoto = $('.slider img.current');
    var nextPhoto = curPhoto.next();
    var nextDot = curDot.next();

    if (nextPhoto.length == 0) {
        nextPhoto = $('.slider img:first');
        nextDot = $('#dots li:first');

    }
    nextDot.addClass('selected');
    curPhoto.removeClass('current').addClass('previous');
    nextPhoto.css({ opacity: 0.0 }).addClass('current').animate({ opacity: 1.0 }, 1000,
        function() {
            curPhoto.removeClass('previous');
        });

}