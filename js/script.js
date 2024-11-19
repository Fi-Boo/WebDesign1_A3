let resizeTimer;


var infoImg = document.querySelector('.info-img');
var infoContent = document.querySelectorAll('.info-content');
var rootvar = document.querySelector(':root');

function redoStyling() {
    let winWidth = window.innerWidth;

    if (winWidth < 361) {

        infoContent.forEach((info) => { 
            info.style.paddingTop = `${infoImg.clientHeight}px`;
        });
        
    } else if (winWidth > 360 && winWidth < 641) {
        
        infoContent.forEach((info) => { 
            info.style.paddingTop = '0';
            info.style.height = '100vh';
        });

        rootvar.style.setProperty('--nav-height', '6rem');

    } else if (winWidth > 640 && winWidth < 1024) {

        infoContent.forEach((info) => { 
            info.style.paddingTop = `${infoImg.clientHeight}px`;
        });

        rootvar.style.setProperty('--nav-height', '8rem');

    } else {

        infoContent.forEach((info) => { 
            info.style.paddingTop = '0';
            info.style.height = '100vh';
        });
    }

}

redoStyling();

var infoContentBox2PosY = document.querySelector('.info-content:first-of-type').clientHeight + window.innerHeight;
var infoContentBox3PosY = document.querySelector('.info-content:nth-child(2)').clientHeight + infoContentBox2PosY;
var infoContentBox4PosY = document.querySelector('.info-content:nth-child(3)').clientHeight + infoContentBox3PosY;
var infoContentEndPosY = document.querySelector('.info-content:last-child').clientHeight + infoContentBox4PosY;

window.addEventListener('resize', function () {

    document.body.classList.add('no-transition');

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        document.body.classList.remove('no-transition');
    }, 250); // delay in ms to wait for the resize to finish

    if (window.innerWidth > 640) {
        document.getElementById('menu-toggle').checked = false;
    }

    redoStyling();
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
        document.getElementById('menu-toggle').checked = false;
    } else {
        header.classList.remove('hide');
        if (currentScrollPos < prevScrollPos && (window.scrollY < (window.innerHeight + 20))) {
            window.scrollTo({
                top: 0, 
                behavior: 'smooth' // Smooth scrolling effect
            });
            document.querySelector('.info-img').style.transition = "none";
            document.querySelector('.info-img').style.right = '-110vw';
        }
    }

    

    if (currentScrollPos >= window.innerHeight && currentScrollPos <= (infoContentBox4PosY + 160)) {
        document.querySelector('.info-img').style.transition = "var(--animation-timing)";
        if (window.innerWidth >= 1366) {
            document.querySelector('.info-img').style.right = '0';
            document.querySelector('.info-img').style.transform = 'translateX(55%)';
            document.querySelector('.info-img img:first-child').style.right = '50vw';
            document.querySelector('.info-img img:first-child').style.transform = 'translateX(50%) rotate(5deg)';
        } else {
            document.querySelector('.info-img').style.right = '0';
            document.querySelector('.info-img img:first-child').style.right = '0';
        }
        document.querySelector('.info-img img:first-child').style.boxShadow = '0px 0px 10px 5px rgb(0,0,0,0.75)';
        
    } else {
        document.querySelector('.info-img').style.right = '-110vw';
        document.querySelector('.info-img img:first-child').style.right = '-110vw';
        document.querySelector('.info-img img:first-child').style.boxShadow = 'none';
    }

    if (currentScrollPos >= (infoContentBox2PosY - 80)) {
        if (window.innerWidth >= 1366) {
            document.querySelector('.info-img img:nth-child(2)').style.right = '50vw';
            document.querySelector('.info-img img:nth-child(2)').style.transform = 'translateX(50%) rotate(2deg)';
        }
        document.querySelector('.info-img img:nth-child(2)').style.boxShadow = '0px 0px 10px 5px rgb(0,0,0,0.75)';
    } else {
        document.querySelector('.info-img img:nth-child(2)').style.right = '-110vw';
        document.querySelector('.info-img img:nth-child(2)').style.boxShadow = 'none';
    }

    if (currentScrollPos >= (infoContentBox3PosY - 80)) {
        if (window.innerWidth >= 1366) {
            document.querySelector('.info-img img:nth-child(3)').style.right = '50vw';
            document.querySelector('.info-img img:nth-child(3)').style.transform = 'translateX(50%) rotate(-10deg)';
        }
        document.querySelector('.info-img img:nth-child(3)').style.boxShadow = '0px 0px 10px 5px rgb(0,0,0,0.75)';
    } else {
        document.querySelector('.info-img img:nth-child(3)').style.right = '-110vw';
        document.querySelector('.info-img img:nth-child(3)').style.boxShadow = 'none';
    }

    if (currentScrollPos >= (infoContentBox4PosY - 80)) {
        if (window.innerWidth >= 1366) {
            document.querySelector('.info-img img:last-child').style.right = '50vw';
            document.querySelector('.info-img img:last-child').style.transform = 'translateX(50%) rotate(5deg)';
        }
        document.querySelector('.info-img img:last-child').style.boxShadow = '0px 0px 10px 5px rgb(0,0,0,0.75)';
    } else {
        document.querySelector('.info-img img:last-child').style.right = '-110vw';
        document.querySelector('.info-img img:last-child').style.boxShadow = 'none';
    }
    

    


    prevScrollPos = currentScrollPos;

});



