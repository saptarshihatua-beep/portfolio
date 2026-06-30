/*==================================================
                PRELOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.style.display = "none";

        },600);

    },1000);

});

/*==================================================
            SCROLL PROGRESS BAR
==================================================*/

window.addEventListener("scroll", () => {

    const progressBar = document.getElementById("progress-bar");

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*==================================================
            SCROLL TO TOP BUTTON
==================================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==================================================
            MOBILE MENU
==================================================*/

const menuIcon = document.getElementById("menu-icon");

const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

/*==================================================
        CLOSE MENU WHEN LINK CLICKED
==================================================*/

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});

/*==================================================
            ACTIVE NAVBAR LINK
==================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
/*==================================================
                TYPING EFFECT
==================================================*/

const words = [
    "Computer Science Student",
    "Web Developer",
    "AI Enthusiast",
    "C++ Programmer",
    "Arduino Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect(){

    if(!typingElement) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
            currentWord.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }

    else{

        typingElement.textContent =
            currentWord.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();

/*==================================================
        SCROLL REVEAL ANIMATION
==================================================*/

const revealElements = document.querySelectorAll(
".section-title,.about-content,.timeline-item,.skill,.tech-card,.experience-card,.project-card,.contact-form"
);

function reveal(){

    const trigger = window.innerHeight - 120;

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/*==================================================
        SKILL BAR ANIMATION
==================================================*/

const progressBars =
document.querySelectorAll(".progress span");

function animateBars(){

    progressBars.forEach(bar=>{

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(()=>{

            bar.style.width = width;

        },300);

    });

}

window.addEventListener("load",animateBars);

/*==================================================
        PROJECT CARD EFFECT
==================================================*/

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform =
        "translateY(-15px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "translateY(0) scale(1)";

    });

});

/*==================================================
        HEADER SHADOW
==================================================*/

const header =
document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.35)";

    }

    else{

        header.style.boxShadow =
        "none";

    }

});
/*==================================================
                DARK MODE TOGGLE
==================================================*/

const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){

            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

        }

        else{

            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        }

    });

}

/*==================================================
            ANIMATED COUNTERS
==================================================*/

const counters = document.querySelectorAll(".counter");

const startCounter = (counter)=>{

    const target = +counter.getAttribute("data-target");

    let count = 0;

    const speed = target / 150;

    const update = ()=>{

        count += speed;

        if(count < target){

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        }

        else{

            counter.innerText = target;

        }

    };

    update();

};

const counterObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/*==================================================
        CONTACT FORM VALIDATION
==================================================*/

const contactForm = document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input=>{

            if(input.hasAttribute("required") && input.value.trim()===""){

                input.style.border = "2px solid red";

                valid = false;

            }

            else{

                input.style.border = "none";

            }

        });

        if(valid){

            alert("Thank you! Your message has been sent.");

            contactForm.reset();

        }

    });

}

/*==================================================
        SMOOTH SCROLL FOR LINKS
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==================================================
        KEYBOARD SHORTCUT
        Press H to go Home
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()==="h"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});

/*==================================================
        PAGE LOADED
==================================================*/

window.addEventListener("load",()=>{

    console.log("Portfolio Loaded Successfully!");

});