function start() {


    const nav_toggle = document.getElementsByClassName("nav-toggle");

    for (let i = 0; i < nav_toggle.length; i++) {
        nav_toggle[i].addEventListener("click", backAndForth, true);
    }
}

function backAndForth() {

    const main_nav = document.getElementsByClassName("main-nav");
    const hamburger = document.getElementsByClassName("hamburger");
    for (let i = 0; i < main_nav.length; i++) {
        main_nav[i].classList.toggle("is-open");
    }

    for (let j = 0; j < hamburger.length; j++) {
        hamburger[j].classList.toggle("is-open");
    }
}

//hamburger menu toggle	



window.addEventListener("load", start, true);