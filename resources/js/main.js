let nav = document.getElementById('nav');
let toggler = document.getElementById('toggler');

toggler.onclick = function () {
    if (window.pageYOffset < 110) {
        nav.classList.toggle('solid')
    }
};


window.onscroll = function() {
    if ( window.pageYOffset > 100) {
        nav.classList.add("solid");
    } else {
        nav.classList.remove("solid");
    }
};
