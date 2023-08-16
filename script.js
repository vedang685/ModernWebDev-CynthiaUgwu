const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function landingPage(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        delay: -1,
        duration: 1.5,
        stagger: .2
    })
    .from("#footer",{
        y: -10,
        opacity: 0,
        delay: -1,
        duration: 1.5,
        ease: Expo.easeInout
    })
}

function skewcircle(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    
    window.addEventListener("mousemove", (e)=>{
        var xdiff = e.clientX - xprev;
        var ydiff = e.clientY - yprev;
        if(xdiff < 0)
        {
            xdiff = -1 * xdiff;
            xscale = gsap.utils.clamp(.8,1.2, xdiff);
        }
        else
        {
            xscale = gsap.utils.clamp(.8,1.2, xdiff);
        }
        if(ydiff < 0)
        {
            ydiff = -1 * ydiff;
            yscale = gsap.utils.clamp(.8,1.2, ydiff);
        }
        else
        {
            yscale = gsap.utils.clamp(.8,1.2, ydiff);
        }

        xprev = e.clientX;
        yprev = e.clientY;

        circleMouseFollower(xscale, yscale);
    })
}

function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", (e) =>{
        document.querySelector("#minCircle").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

document.querySelectorAll(".elements").forEach((elem)=>{
    var rotate = 0;
    var diff = 0;

    elem.addEventListener("mouseleave",(e)=>{
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
        })
    });

    elem.addEventListener("mousemove",(e)=>{

        var pos = e.clientY - elem.getBoundingClientRect().top;
        diff = e.clientX - rotate;
        rotate = e.clientX;
        var value = gsap.utils.clamp(-20,20,diff*0.5);
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: pos,
            left: e.clientX,
            rotate: value,
        })
    });
});

document.addEventListener("DOMContentLoaded", ()=>{
    var menuButton = document.getElementById("menuButton");
    var menuLinks = document.getElementById("menuLinks");

    menuButton.addEventListener("click", ()=>{
        menuButton.classList.toggle("active");
        setTimeout(()=>{
            menuLinks.classList.toggle("active"); 
            setTimeout(()=>{
                menuButton.style.opacity="0";
            },500);
            
        }, 500);
    });
});

function updateCurrentTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    currentTimeElement.textContent = `${formattedHours}:${formattedMinutes} ${ampm} EST`;

    setTimeout(updateCurrentTime, 1000); // Update every 1 second
}

document.addEventListener("DOMContentLoaded", function() {
    updateCurrentTime();
});


skewcircle();
circleMouseFollower();
landingPage();
