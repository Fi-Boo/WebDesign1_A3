
var infoImg = document.querySelector('.info-img');
var infoContent = document.querySelectorAll('.info-content');
var rootvar = document.querySelector(':root');
var infoContentBox2PosY = document.querySelector('.info-content:first-child').clientHeight + window.innerHeight;
var infoContentBox3PosY = document.querySelector('.info-content:nth-child(2)').clientHeight + infoContentBox2PosY;
var infoContentBox4PosY = document.querySelector('.info-content:nth-child(3)').clientHeight + infoContentBox3PosY;
var infoContentEndPosY = document.querySelector('.info-content:last-child').clientHeight + infoContentBox4PosY;


// This function is intended to address some of the dynamic changes that can't be handled by by media queries. Such as the distance elements are moved due to a scroll trigger. I've tried to add as many as I could think of, but still a lot of testing to confirm what is missing.

function redoStyling() {
    let winWidth = window.innerWidth;

    if (winWidth < 640) {

        // for mobile portrait view, the padding at the top of each text block in the About us section can be larger due to the higher vertical size. 
        infoContent.forEach((info) => { 
            info.style.paddingTop = `${infoImg.clientHeight}px`;
        });

        rootvar.style.setProperty('--nav-height', '6rem');
        
        // for mobile landscaue view, the padding at the top of each text block in the About us section must be lower to ensure the text blocks line up with the slide out animations.
    } else if (winWidth >= 640 && winWidth < 768) {
     
        infoContent.forEach((info) => { 
            info.style.paddingTop = '0';
            info.style.height = '100vh';
        });

        rootvar.style.setProperty('--nav-height', '6rem');
    
    } else if (winWidth >= 768 && winWidth < 1024) {

        infoContent.forEach((info) => { 
            info.style.paddingTop = `${infoImg.clientHeight}px`;
        });

        rootvar.style.setProperty('--nav-height', '8rem');
    
    } else if (winWidth >= 1024) {

        infoContent.forEach((info) => { 
            info.style.paddingTop = '6rem';
            info.style.height = 'auto';
        });

        rootvar.style.setProperty('--nav-height', '8rem');
    } 
}

redoStyling();
window.onresize = function(){ location.reload(); } //reload on window resize

let resizeTimer;
// Forces transitions to not happen when screen resizing occurs to prevent weird transition delays.
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


    if (prevScrollPos < currentScrollPos) { //when scrolling down
        header.classList.add('hide'); //hides the nav bar
        document.getElementById('menu-toggle').checked = false; //forces the menu to close if it is open.
        document.querySelector('.home-text').style.opacity = "0"; //hides the home screen text. 
    } else {    //when scrolling up
        header.classList.remove('hide');  //shows the nav bar

        // this pulls the About Us images offscreen right if scrolling up towards the Home 
        if (currentScrollPos < prevScrollPos && (window.scrollY < (window.innerHeight + 20))) {
            document.querySelector('.info-img').style.transition = "none";
            document.querySelector('.info-img').style.right = '-110vw';
            document.querySelector('.home-text').style.opacity = "100"; //restores the home text
        }
    }

    // This next block handles the way the About Us image moves in and out of view as the user scrolls down the page. As it the code repeats itself for each of the 4 blocks, I'll just comment the first one.

    // if scrolling past the home section... and not past the About Us section
    if (currentScrollPos >= (window.innerHeight - 60) && currentScrollPos <= (infoContentBox4PosY + 160)) {
        document.querySelector('.info-img').style.transition = "var(--animation-timing)"; //add transition timer
        // in the cse of laptop+ res the image will move further out and stay lined against the center of the screen.
        if (window.innerWidth >= 1366) { 
            document.querySelector('.info-img').style.right = '0';
            document.querySelector('.info-img').style.transform = 'translateX(55%)'; 
            document.querySelector('.info-img img:first-child').style.right = '50vw';
            document.querySelector('.info-img img:first-child').style.transform = 'translateX(50%) rotate(5deg)';
        } else {  
            document.querySelector('.info-img').style.right = '0';
            document.querySelector('.info-img img:first-child').style.right = '0';
        } //shadow is added after the image comes into view to prevent shadow bleeding when it's off screen.
        document.querySelector('.info-img img:first-child').style.boxShadow = '0px 0px 10px 5px rgb(0,0,0,0.75)';
        
    } else { //this just pulls the element back to the right side off screen.
        document.querySelector('.info-img').style.right = '-110vw';
        document.querySelector('.info-img img:first-child').style.right = '-110vw';
        document.querySelector('.info-img img:first-child').style.boxShadow = 'none';
    }

    //similar as above, except this is for the 2nd image.
    if (currentScrollPos >= (infoContentBox2PosY - 80)) {
        if (window.innerWidth >= 1366) {
            document.querySelector('.info-img img:nth-child(2)').style.right = '50vw';
            document.querySelector('.info-img img:nth-child(2)').style.transform = 'translateX(50%) rotate(2deg)';
        } else {
            document.querySelector('.info-img img:nth-child(2)').style.right = '0';
            document.querySelector('.info-img img:nth-child(2)').style.boxShadow = '0px 0px 10px 5px rgb(0,0,0,0.75)';
        }
    } else {
        document.querySelector('.info-img img:nth-child(2)').style.right = '-110vw';
        document.querySelector('.info-img img:nth-child(2)').style.boxShadow = 'none';
    }
    // for 3rd image
    if (currentScrollPos >= (infoContentBox3PosY - 80)) {
        if (window.innerWidth >= 1366) {
            document.querySelector('.info-img img:nth-child(3)').style.right = '50vw';
            document.querySelector('.info-img img:nth-child(3)').style.transform = 'translateX(50%) rotate(-10deg)';
        } else {
            document.querySelector('.info-img img:nth-child(3)').style.right = '0';
            document.querySelector('.info-img img:nth-child(3)').style.boxShadow = '0px 0px 10px 5px rgb(0,0,0,0.75)';
        }
    } else {
        document.querySelector('.info-img img:nth-child(3)').style.right = '-110vw';
        document.querySelector('.info-img img:nth-child(3)').style.boxShadow = 'none';
    }
    //for last image.
    if (currentScrollPos >= (infoContentBox4PosY - 80)) {
        if (window.innerWidth >= 1366) {
            document.querySelector('.info-img img:last-child').style.right = '50vw';
            document.querySelector('.info-img img:last-child').style.transform = 'translateX(50%) rotate(5deg)';
        } else {
            document.querySelector('.info-img img:last-child').style.right = '0';
            document.querySelector('.info-img img:last-child').style.boxShadow = '0px 0px 10px 5px rgb(0,0,0,0.75)';
        }
    } else {
        document.querySelector('.info-img img:last-child').style.right = '-110vw';
        document.querySelector('.info-img img:last-child').style.boxShadow = 'none';
    }
    
    prevScrollPos = currentScrollPos;

});



