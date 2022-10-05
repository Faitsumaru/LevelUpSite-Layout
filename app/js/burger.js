$(function () {
    //burger for header:
    $('.burger-btn').on('click', function() {
        $('.menu').toggleClass('menu--active'); //list show
        $('.burger-btn').toggleClass('burger-btn--active'); //burger button animation
    });
})