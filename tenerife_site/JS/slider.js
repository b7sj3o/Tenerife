$(function() {
    var inWrap = $('.slider-inner');

    $('.prev').on('click', function() {
        inWrap.animate({left: '100%'}, 300, function() {

            inWrap.css('left', '0%');

            $('.slide').first().before($('.slide').last())
        }) 
    })

    $('.next').on('click', function() {
        inWrap.animate({left: '-100%'}, 300, function() {
            
            inWrap.css('left', '0%');

            $('.slide').last().after($('.slide').first())
        }) 
    })
})

// Отримати всі елементи з класом "slide"
var slides = document.getElementsByClassName("slide");

// Знайти кількість елементів "slide"
// Присвоїти змінній SCSS значення
document.documentElement.style.setProperty('--number-of-slides', slides.length);


// ---------- change div order ----------
var arrowRightElement = document.querySelectorAll('.reviews_arrows');

if (window.innerWidth <= 628) {
    var imgElement = document.createElement('img');
    imgElement.src = 'img/icons/arrow-right.png';
    imgElement.alt = 'right';
    imgElement.className = 'arrow_right next';

    arrowRightElement[1].remove()
    arrowRightElement[0].appendChild(imgElement)
}