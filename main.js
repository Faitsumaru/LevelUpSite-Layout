$(function () {

    //General:
    htmlFetcher("./html/header.html", "header"); //header
    htmlFetcher("./html/footer.html", "footer"); //footer

    //Home Page:
    htmlFetcher("./html/Home/hero.html", ".section__hero-main"); //hero
    htmlFetcher("./html/brands.html", ".section__brands"); //brands
    htmlFetcher("./html/Home/products.html", ".section__products"); //products
    htmlFetcher("./html/Home/awards.html", ".section__awards"); //awards & recognition
    htmlFetcher("./html/Home/perspective.html", ".section__perspective"); //perspective
    htmlFetcher("./html/Home/news.html", ".section__news"); //news

    //Products Page:
    htmlFetcher("./html/Products/hero.html", ".section__hero-products"); //hero
    htmlFetcher("./html/Products/sites.html", ".section__sites"); //sites
    htmlFetcher("./html/Products/team.html", ".section__team"); //team

    //About Page:
    htmlFetcher("./html/About/hero.html", ".section__hero-about"); //hero
    htmlFetcher("./html/About/stats.html", ".section__stats"); //statistics
    htmlFetcher("./html/About/culture.html", ".section__culture"); //culture
    htmlFetcher("./html/About/info.html", ".section__info"); //information
    htmlFetcher("./html/About/hiring.html", ".section__hiring"); //hiring

    //Career Page:
    htmlFetcher("./html/Career/hero.html", ".section__hero-career"); //hero
    htmlFetcher("./html/Career/advantages.html", ".section__advantages"); //advantages
    htmlFetcher("./html/Career/life.html", ".section__life"); //life
    htmlFetcher("./html/Career/write.html", ".section__write"); //write
    htmlFetcher("./html/Career/pack.html", ".section__pack") //pack
    
    //Contact Page:
    htmlFetcher("./html/Contact/hero.html", ".section__hero-contact"); //hero
    htmlFetcher("./html/Contact/connection.html", ".section__connection"); //connection
});

function htmlFetcher(url, selector) { //adding HTML page in general page (index)
    fetch(url) 
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
    });
}

function burgerMenu() {     //burger & locked header
    const body = document.querySelector('body');
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.burger');
    if (!menu.classList.contains('--active')) {
        menu.classList.add('--active');
        burger.classList.add('--active-burger');
        body.classList.add('locked');
    } else {
        menu.classList.remove('--active');
        burger.classList.remove('--active-burger');
        body.classList.remove('locked');
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth > 770) {
            menu.classList.remove('--active');
            burger.classList.remove('--active-burger');
            body.classList.remove('locked');
        }
    })
}
burger.burgerMenu();

function fixedNav() { //scrolling nav fixing
    const nav = document.querySelector('nav');
    const breakpoint = 1;
    if (window.scrollY >= breakpoint)
        nav.classList.add('fixed__nav');
    else
        nav.classList.remove('fixed__nav');
}
window.addEventListener('scroll', fixedNav);


//---=Slider=---//
function slider(prev, next) {
    let position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 1;
    const container = document.querySelector('.slider-container');
    const track = document.querySelector('.slider-track');
    const btnPrev = document.querySelector('.btn-prev'); 
    const btnNext = document.querySelector('.btn-next'); 

    const items = document.querySelectorAll('.slider-item'); //all elems
    const itemsCount = items.length; //count of all elems
    const itemWidth = container.clientWidth / slidesToShow; //width of every single element
    const movePosition = slidesToScroll * itemWidth; //moving slider position (scrollins)

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    if (prev == 1 && next == 0) { //prev btn click
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    }
    
    if (prev == 0 && next == 1) { //next btn click
        const itemsRight = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsRight >= slidesToScroll ? movePosition : itemsRight * itemWidth;
    }

    track.style.transform = `translateX(${position}px)`;

    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

function formSending() {
    const name = document.querySelector('.form__text--name');
    const mail = document.querySelector('.form__text--mail');
    const subject = document.querySelector('.form__text--subject');
    const message = document.querySelector('.form__message');
    const button = document.querySelector('.form__btn');

    if (name.value == "" || mail.value == "" || subject.value == "" || message.value == "") {
        alert('Empty fields.\nPlease try again!');
    }
    else {
        alert('Successfully done! 👌👌👌');
    }
}