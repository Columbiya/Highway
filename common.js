'use strict';
let sandwich = document.querySelector('#sandwich-menu');
let sandwich_pop_up;

sandwich.addEventListener('click', function() {
    this.classList.toggle('active-menu');

    let span = this.querySelector('span');
    span.classList.toggle('active-icon');

    sandwich_pop_up = this.parentElement.querySelector('.pop-up-menu');
    sandwich_pop_up.classList.toggle('active');

    let nav = sandwich_pop_up.querySelector('nav');
    nav.classList.toggle('active');
});

let contact = document.querySelector("#contact-us");

contact.addEventListener('click', function(e) {
    e.preventDefault();
    let chat_div = document.querySelector('#chat');
    chat_div.classList.toggle('active');
    chat_div.children[0].classList.toggle('active');
});