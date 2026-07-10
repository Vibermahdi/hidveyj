/*==================================
        HIDAVI CLINIC
==================================*/


/*==============================
      HEADER SCROLL
==============================*/

const header = document.querySelector(".header");

const consultBtn = document.querySelector(".consult-float");

/*==============================
        COUNTER
==============================*/

const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const step = target / 100;

    const update = () => {

        current += step;

        if (current < target) {

            counter.textContent = Math.floor(current).toLocaleString("fa-IR");

            requestAnimationFrame(update);

        } else {

            counter.textContent = target.toLocaleString("fa-IR");

        }

    };

    update();

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            runCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*==============================
      SECTION ANIMATION
==============================*/

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => {

    section.classList.add("fade-up");

    sectionObserver.observe(section);

});

/*==============================
        MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav");

if(menuBtn && nav){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

    document.querySelectorAll(".nav a").forEach(link=>{

        link.addEventListener("click",()=>{

            nav.classList.remove("active");

        });

    });

}

/*==============================
        BACK TO TOP
==============================*/

const backTop = document.querySelector(".back-top");

if(backTop){

    backTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*==========================
    Active Navigation
==========================*/

const navLinks = document.querySelectorAll(".nav-list a");

/*==============================
        WINDOW SCROLL
==============================*/

window.addEventListener("scroll", () => {

if(consultBtn){

    if(window.scrollY > 400){

        consultBtn.classList.add("show");

    }else{

        consultBtn.classList.remove("show");

    }

}
    /* Header */

if (header) {

    if (window.scrollY > 80) {

        header.style.top = "8px";

    } else {

        header.style.top = "20px";

    }

}

    /* Back To Top */

    if (backTop) {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }

    /* Active Navigation */

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

if (href && href.endsWith("#" + current)) {

    link.classList.add("active");

}

    });

});