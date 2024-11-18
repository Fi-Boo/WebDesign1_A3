let resizeTimer;

window.addEventListener('resize', function () {

    document.body.classList.add('no-transition');

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        document.body.classList.remove('no-transition');
    }, 250); // delay in ms to wait for the resize to finish

    if (window.innerWidth > 600) {
        document.getElementById('menu-toggle').checked = false;
    }
});

let prevScrollPos = window.scrollY;
var header = document.querySelector('.header-area');

window.addEventListener('scroll', function () {

    var currentScrollPos = window.scrollY;

    console.log(currentScrollPos);

    if (prevScrollPos < currentScrollPos) {
        header.classList.add('hide');
        if (window.scrollY < window.innerHeight) {
            window.scrollTo({
                top: window.innerHeight, // Scroll to the height of the viewport
                behavior: 'smooth' // Smooth scrolling effect
            });
        }
    } else {
        header.classList.remove('hide');
        if (currentScrollPos < prevScrollPos && (window.scrollY < (window.innerHeight + 20))) {
            window.scrollTo({
                top: 0, 
                behavior: 'smooth' // Smooth scrolling effect
            });
        }
    }

    prevScrollPos = currentScrollPos;

    
});

