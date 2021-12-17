'use strict';

const gallery = document.querySelectorAll('.gallery__item');
const images_src = [];
const gallery_popUp = document.querySelector('#gallery__pop-up');
const big_image = gallery_popUp.querySelector('.gallery__image');
let current, src;

gallery_popUp.addEventListener('click', function(event) {
    if (event.target != this) return;

    this.classList.remove('active');
});

for (let item of gallery) {
    item.addEventListener('mouseenter', function() {
        let element = this.querySelector('.hover-appering');

        element.style.display = 'block';
        let height = element.scrollHeight;
        element.style.height = height + "px";
        element.style.opacity = 1;
    });

    item.addEventListener('mouseleave', function() {
        let element = this.querySelector('.hover-appering');

        element.style.height = 0;
        element.style.opacity = 0;

        setTimeout(() => element.style.display = "none", 600);
    });

    item.addEventListener('click', function(event) {
        event.preventDefault();

        if (event.target.tagName == 'IMG') src = event.target.src;
        else {
            src = item.querySelector('img[data-show]').src;
        }

        current = images_src.indexOf(src) + 1;

        gallery_popUp.querySelector('#item-current').innerHTML = current;
        gallery_popUp.querySelector('img[data-big-show]').src = src;
    
        gallery_popUp.classList.add('active');
        
    });

    images_src.push(item.querySelector('img[data-show]').src);
}

gallery_popUp.querySelector('#item-in-total').innerHTML = images_src.length;

let switch_next = document.querySelector('#gallery-next');
let switch_prev = document.querySelector('#gallery-prev');

switch_prev.addEventListener('click', function() {
    current--;
    if (current == 0) current = images_src.length;
    src = prevSrc(current, images_src);
    gallery_popUp.querySelector('#item-current').innerHTML = current;
    let img = gallery_popUp.querySelector('img[data-big-show]');
    img.src = src;
});

switch_next.addEventListener('click', function() {
    current++;
    if (current > images_src.length) current = 1;
    src = nextSrc(current, images_src);
    gallery_popUp.querySelector('#item-current').innerHTML = current;
    let img = gallery_popUp.querySelector('img[data-big-show]');
    img.src = src;
});


function nextSrc(current, array) {
    return array[current - 1];
}

function prevSrc(current, array) {
    return array[current - 1];
}
