var menuList = document.querySelector('.mobile_menu-active');

// OPEN MOBILE MENU
document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('mobile_menu__button');
    var isMenu = false;
    menuButton.addEventListener('click', function() {
        menuList.classList.toggle('open');
    });
});


// CLOSE MOBILE MENU IF CLICKS
var mobileHrefs = document.querySelectorAll('.mobile_menu__item')

mobileHrefs.forEach(function(link) {
    link.addEventListener('click', function(event) {
        menuList.classList.remove('open');
    });
  });

//   ---------------
  