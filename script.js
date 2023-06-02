// BACKGROUND BLOB

const blob = document.getElementById("blob");
const card = document.getElementById("card");
let cardImg = document.getElementById("img");

document.body.onpointermove = event => {
    const {clientX, clientY} = event;

    blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
    }, {duration: 2500});
};


const menuCheckbox = document.getElementById("menu_checkbox");
const menuExpanded = document.getElementById("menu_expanded");

const contactButton = document.getElementById("contact_button");
const navIcon = document.getElementById("nav_icon");
const hamburgers = document.querySelectorAll(".hamburger");

menuCheckbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        menuExpanded.style.transform = "translateY(0)";
        navIcon.style.border = "1.5px solid #222222";
        hamburgers.forEach(hamburger => {
            hamburger.style.backgroundColor = "#222222";
        });
        document.body.classList.add('fixed');

      } else {
        menuExpanded.style.transform = "translateY(-100%)";
        navIcon.style.border = "1.5px solid white";
        hamburgers.forEach(hamburger => {
            hamburger.style.backgroundColor = "white";
        });
        document.body.classList.remove('fixed');
      }
});

// INTERSECTION OBSERVER

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); 
        } else {
            entry.target.classList.remove('show'); 
        }
    });
});

const hiddenEl = document.querySelectorAll('.hidden');
hiddenEl.forEach((el) => observer.observe(el));

//// 

const observer_two = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show_two'); 
        } else {
            entry.target.classList.remove('show_two'); 
        }
    });
});

const hiddenElTwo = document.querySelectorAll('.hidden_two');
hiddenElTwo.forEach((el) => observer_two.observe(el));

///
const options = {
    threshhold: 0,
    rootMargin: "500px 0px 0px 0px"
};

const observer_three = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show_three'); 
        } else {
            entry.target.classList.remove('show_three'); 
        }
    });
}, options);

const hiddenElThree = document.querySelectorAll('.hidden_three');
hiddenElThree.forEach((el) => observer_three.observe(el));

// HERO IMAGE HEIGHT CALCULATION ON LOAD

window.onload = function calcHeight() {

    let panningImage = document.getElementById("panningImage");
    let heroText = document.querySelector(".hero_text_container");
    let width = panningImage.offsetWidth;

    if (window.innerWidth > 800) {
        
        let height = Math.floor(width * 0.75);
        panningImage.style.height = `${height}px`;
        heroText.style.height = `${height}px`;
    } else {
        panningImage.style.height = "650px";
    };
}

window.onresize = function calcHeight() {

    let panningImage = document.getElementById("panningImage");
    let heroText = document.querySelector(".hero_text_container");
    let width = panningImage.offsetWidth;

    if (window.innerWidth > 800) {
        
        let height = Math.floor(width * 0.75);
        panningImage.style.height = `${height}px`;
        heroText.style.height = `${height}px`;
    } else {
        panningImage.style.height = "650px";
    };
}

// Button hover animation

const buttonHoverObj = document.getElementById("explore_container");

buttonHoverObj.addEventListener("mouseover", () => {
    const buttonContainer = document.getElementById("explore_button");

    buttonContainer.style.width = "125px";
    buttonContainer.style.height = "125px";
    buttonContainer.style.backgroundColor = "var(--groen)";

    const arrowOne = document.querySelector('.arrow_one');
    const arrowTwo = document.querySelector('.arrow_two');

    arrowOne.style.top = "150%";
    arrowTwo.style.top = "0";
});

buttonHoverObj.addEventListener("mouseout", () => {
    const buttonContainer = document.getElementById("explore_button");

    buttonContainer.style.width = "300px";
    buttonContainer.style.height = "300px";
    buttonContainer.style.backgroundColor = "transparent";

    const arrowOne = document.querySelector('.arrow_one');
    const arrowTwo = document.querySelector('.arrow_two');

    arrowOne.style.top = "0";
    arrowTwo.style.top = "-150%";
});

// BACK TO TOP 

window.onscroll = function showButton() {
    const topButton = document.getElementById("toTop");

    topButton.style.right = "25px";
}


// section 1

const track = document.querySelector(".carousel_container");
const carousel = document.querySelector(".carousel");

track.addEventListener("mousedown", (event) => {
    track.dataset.mouseDownAt = event.clientX;
    carousel.style.animationPlayState = "paused";
});

track.addEventListener("mouseup", (e) => {
    track.dataset.mouseDownAt = "0";  
    track.dataset.prevPercentage = track.dataset.percentage;
});

track.addEventListener("mousemove", (e) => {
    if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 1.1;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  carousel.animate({
    transform: `translate(${nextPercentage}%, 0)`
  }, { duration: 2500, fill: "forwards" });
  
  for(const li of carousel.getElementsByClassName("carousel_item")) {
    li.animate({
      backgroundPosition: `${100 + nextPercentage}% 0%`
    }, { duration: 2500, fill: "forwards" });
  }
});


// hover cta

const cContainer = document.querySelector('.carousel_container');
const tooltip = document.querySelector('.tooltip');

tooltip.style.opacity = "0";

cContainer.onmousemove = event => {
    const {clientX, clientY} = event;

    tooltip.animate({
    left: `${clientX - 100}px`,
    top: `${clientY - 350}px`,
    width: '100px',
    height: '100px',
    opacity: 1,
    filter: 'blur(0px)',
    fontSize: '0.9rem'
    }, {duration: 1900});
};

cContainer.onmouseleave = event => {
    
    tooltip.animate({
    width: '0px',
    height: '0px',
    opacity: '0',
    filter: 'blur(20px)',
    fontSize: '0rem' 
    }, {duration: 1850, delay: 50});
    
};

// article hover effect 1

const hover1 = document.querySelector('.hover1');
const article1 = document.querySelector('.article_hover_item_1');

hover1.onmousemove = event => {
    const {clientX, clientY} = event;

    article1.animate({
    left: `calc(${clientX}px - 7vw)`,
    top: 20,
    opacity: 1,
    filter: 'blur(0px)',
    fontSize: '0.9rem'
    }, {duration: 800});
};

hover1.onmouseleave = event => {
    
    article1.animate({
    opacity: '0',
    }, {duration: 750, delay: 50});
    
};

// article hover effect 2

const hover2 = document.querySelector('.hover2');
const article2 = document.querySelector('.article_hover_item_2');

hover2.onmousemove = event => {
    const {clientX, clientY} = event;

    article2.animate({
    left: `calc(${clientX}px - 46vw)`,
    top: 10,
    opacity: 1,
    filter: 'blur(0px)',
    fontSize: '0.9rem'
    }, {duration: 800});
};

hover2.onmouseleave = event => {
    
    article2.animate({
    opacity: '0',
    }, {duration: 750, delay: 50});
    
};

// article hover effect 3

const hover3 = document.querySelector('.hover3');
const article3 = document.querySelector('.article_hover_item_3');

hover3.onmousemove = event => {
    const {clientX, clientY} = event;

    article3.animate({
    left: `calc(${clientX}px - 7vw)`,
    top: 40,
    opacity: 1,
    filter: 'blur(0px)',
    fontSize: '0.9rem'
    }, {duration: 800});
};

hover3.onmouseleave = event => {
    
    article3.animate({
    opacity: '0',
    }, {duration: 750, delay: 50});
    
};

// article hover effect 4

const hover4 = document.querySelector('.hover4');
const article4 = document.querySelector('.article_hover_item_4');

hover4.onmousemove = event => {
    const {clientX, clientY} = event;

    article4.animate({
    left: `calc(${clientX}px - 46vw)`,
    top: 30,
    opacity: 1,
    filter: 'blur(0px)',
    fontSize: '0.9rem'
    }, {duration: 800});
};

hover4.onmouseleave = event => {
    
    article4.animate({
    opacity: '0',
    }, {duration: 750, delay: 50});
    
};


