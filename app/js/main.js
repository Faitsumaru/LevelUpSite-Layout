$(function () {

    //Pages Fetching
    $("header").load("./html/header.html");
    $("footer").load("./html/footer.html");


    //burger for header:
    $('.burger-btn').on('click', function() {
        $('.menu').toggleClass('menu--active'); //list show
        $('.burger-btn').toggleClass('burger-btn--active'); //burger button animation
    });
})