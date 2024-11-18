let resizeTimer;

window.addEventListener('resize', function () {

    document.body.classList.add('no-transition');

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        document.body.classList.remove('no-transition');
    }, 250); // delay in ms to wait for the resize to finish
});

let prevScrollPos = window.scrollY;
var header = document.querySelector('.header-area');

window.addEventListener('scroll', function () {

    var currentScrollPos = window.scrollY;

    console.log(currentScrollPos);

    if (prevScrollPos < currentScrollPos) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    prevScrollPos = currentScrollPos;
});