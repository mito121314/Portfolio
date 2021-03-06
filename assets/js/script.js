// Start at page top on reload
//window.onload = function(){
//    window.scrollTo(0,0);
//}

//window.onscroll = function () {
//    var scrollPosY = window.pageYOffset | document.body.scrollTop;
//    document.getElementById("scrollValue").innerHTML = scrollPosY;
//}

var $section = $("section");
var $currentSection = 0;
var $sectionCtrls = $("#section-ctrl-container");
var $up = $("#sectionUp");
var $down = $("#sectionDown");

$section.waypoint(function (direction) {

    if (direction == "down") {
        $currentSection++;
    } else {
        $currentSection--;
    }

//    console.log($currentSection);

    if ($currentSection !== 1) {
        //Show section controllers
        $sectionCtrls.css("display", "block");
        $sectionCtrls.addClass("animate-zoom");
    } else {
        //Hide section controllers
        $sectionCtrls.css("display", "none");
    }

    //Set links appropriately
    if ($currentSection === 1) {
        $up.attr("href", "#home");
        $down.attr("href", "#about");
    }
    if ($currentSection === 2) {
        $up.attr("href", "#home");
        $down.attr("href", "#work");

        var scrollPosY = window.pageYOffset | document.body.scrollTop;
        var icons = document.getElementsByClassName("hex-container");
        var hoverMeSVG = document.getElementById("hoverMeSVG");
        var flipCard = document.getElementById("flipCard");
        var aboutMe = document.getElementById("aboutMe");

        if (scrollPosY > 500) {
            /*animate-in hexagon icons*/
            for (var i = 0, length = icons.length; i < length; i++) {
                icons[i].style.opacity = 1;
                icons[i].classList.add('animate-top');
            }

            flipCard.classList.add('animate-left');
            aboutMe.classList.add('animate-right');
            setInterval(function () {
                hoverMeSVG.style.opacity = 1;
            }, 600);

        }
    }
    if ($currentSection === 3) {
        $up.attr("href", "#about");
        $down.attr("href", "#contactMe");
        $down.removeClass("sec-down-spin");

        var works = document.getElementsByClassName("workBox");
        var i = 0;
        var length = works.length;

        function showWork() {
            works[i].style.opacity = 1;
            works[i].classList.add('animate-top');
            i++;
            if (i !== length) {
                setTimeout(showWork, 250);
            }
        }
        showWork();
    }
    if ($currentSection === 4) {
        $up.attr("href", "#work");
        $down.attr("href", "#home");
        $down.addClass("sec-down-spin");

        var inputs = document.getElementsByClassName("contactInput");
        var i = 0;
        var length = inputs.length;

        var animation = 'animate-left';

        function showContact() {
            inputs[i].style.opacity = 1;
            inputs[i].classList.add(animation);
            if (animation === 'animate-left') {
                animation = 'animate-right';
            } else {
                animation = 'animate-left';
            }
            i++;
            if (i !== length) {
                setTimeout(showContact, 250);
            }
        }
        showContact();
    }

}, {offset: "40%"});


// Resize navigation split div on scroll
window.addEventListener('load', function () {
    var div = document.getElementById('navSplit');

    window.addEventListener('scroll', function () {

        const html = document.documentElement;
        let height = html.clientHeight;
        let scrollHeight = html.scrollHeight - height;
        let scrollTop = html.scrollTop;
        let percent = Math.floor(scrollTop / scrollHeight * 100);

        div.style.width = 100 - percent + '%';

    }, false);

}, false);



// 'Check my work' button arrow flip animation
var btn = document.getElementById('welcomeBtn');
var arrow1 = document.getElementById('welcomeArrow1');
var arrow2 = document.getElementById('welcomeArrow2');

btn.addEventListener('mouseover', function () {
    arrow1.classList.remove('out1');
    arrow1.classList.add('over1');
    arrow2.classList.remove('out2');
    arrow2.classList.add('over2');
});

btn.addEventListener('mouseout', function () {
    arrow1.classList.remove('over1');
    arrow1.classList.add('out1');
    arrow2.classList.remove('over2');
    arrow2.classList.add('out2');
});



// Active nav classes
const links = document.querySelectorAll('.navlink');
const sections = document.querySelectorAll('section');

function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 500 < sections[index].offsetTop) {
    }

    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
}
changeLinkState();
window.addEventListener('scroll', changeLinkState);

//Move navigation active-slider
//$('.navlink').click(function () {
//    if (!$(this).hasClass('active')) {
//
//        $('.navlink').removeClass('active');
//        $(this).addClass('active');
//        var width = $(this).width() + 22;
//        offsetTop = $(this).offset().top - $('.navlinks').offset().top;
//        offsetLeft = $(this).offset().left - $('.navlinks').offset().left;
//
//        $('.active-slider').animate({
//            top: offsetTop,
//            left: offsetLeft,
//            right: $('.navlinks').width() - $(this).width() - offsetLeft,
//            bottom: $('.navlinks').height() - $(this).height() - offsetTop,
//            width: width + 2
//        }, 50, 'linear');
//    }
//});

// WORK MODALS
// open modal
function openModal(id) {
    var html = document.documentElement;
    var modal = document.getElementById(id + "Modal");
    html.style.overflow = "hidden";
    modal.style.display = "block";
}
// close modal
function closeModal(id) {
    var html = document.documentElement;
    var modal = document.getElementById(id + "Modal");
    html.style.overflow = "auto";
    modal.style.display = "none";
}
// prevent event bubbling
function doNothing(e) {
    e.stopPropagation();
}
