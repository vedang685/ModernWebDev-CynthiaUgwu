const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const respMenu = document.querySelector("#responsiveMenu");


    if (mediaQuery.matches) {
        const menuButton = document.querySelector("#menuButton");
        const closeButton = document.querySelector("#close");
        
        menuButton.addEventListener("click", () => {
            if(counter == 0)
            {
                respMenu.classList.add("active");
                gsap.from(respMenu, {
                    top: "-100vh",
                    duration: 0.8,
                    scrub: 5
                });
                counter = counter+1;
            }
            else
            {
                menuButton.addEventListener("click", () => {
                    respMenu.classList.add("active");
                    gsap.to(respMenu, {
                        top: 0,
                        duration: 0.8,
                    });
                });
                counter = counter+1
            }
            if(counter!=2)
            {
                gsap.from("#nav2 h1",{
                    y: "-10",
                    opacity:0,
                    delay: 0.8
                })
                gsap.from("#menuContent h1",{
                    y: "-20",
                    opacity:0,
                    duration: 0.8,
                    delay: 0.5
                })
            }
        });
        
        closeButton.addEventListener("click", () => {
            gsap.to("#nav2 h1",{
                y: '-20',
                opacity:0,
                duration: 0.5,
                onComplete: ()=>{
                    gsap.to("#nav2 h1",{
                        y: '0',
                        opacity:1,
                        duration: 0.1,
                    })
                }
            })
            gsap.to("#menuContent h1",{
                y: '-20',
                opacity:0,
                duration: 0.6,
                onComplete: ()=>{
                    gsap.to("#menuContent h1",{
                        y: '0',
                        opacity:1,
                        duration: 0.1,
                    })
                }
            })

            gsap.to(respMenu, {
                top: "-100vh",
                duration: 0.5,
                delay:0.3,
                onComplete: () => {
                    respMenu.classList.remove("active");
                },
            });
        });
    }
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
        stagger: .4
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

document.addEventListener("DOMContentLoaded", () => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    if (mediaQuery.matches) {
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
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    if (mediaQuery.matches) {
        var menuButton = document.getElementById("menuButton");
        var menuLinks = document.getElementById("menuLinks");

        menuButton.addEventListener("click", () => {
            menuButton.classList.toggle("active");
            setTimeout(() => {
                menuLinks.classList.toggle("active");
                setTimeout(() => {
                    menuButton.style.opacity = "0";
                }, 500);

            }, 500);
        });
    }
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

    setTimeout(updateCurrentTime, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    updateCurrentTime();
});

document.addEventListener("DOMContentLoaded", () => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    if (mediaQuery.matches) {
        gsap.from("#secondPage h1",{
            x: "-20",
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger: "#secondPage h1",
                scroller:"body",
            }
        })
        gsap.from("#about img, #about p, #about h5, #about a",{
            x: "-20",
            opacity:0,
            duration: 3,
            scrollTrigger:{
                trigger: "#about",
                scroller:"body",
                delay: 2,
            }
        })
    }
});



skewcircle();
circleMouseFollower();
landingPage();
