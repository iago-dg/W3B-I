const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", () => {
 window.scrollTo({
 top: 0,
 left: 0,
 behavior: "smooth",
 });
});
const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", () => {
 // Toggle website theme
 document.body.classList.toggle("dark");
});

const hamburger =
document.querySelector("#hamburger");
const navMenu =
document.querySelector("ul");
function openMenu() {
 hamburger.classList.toggle("active");
 navMenu.classList.toggle("active");
}
hamburger.addEventListener("click", () => {
 openMenu();
});

const navLink =
document.querySelectorAll ("#nav-link");
navLink.forEach((n) =>
n.addEventListener ("click",
closeMenu))
function closeMenu() {
 
hamburger.classList.remove("active")

 
navMenu.classList.remove("active")
}

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

const slid = document.querySelectorAll('.slider2');
const butnPrev2 = document.getElementById('prev-button2');
const butnNext2 = document.getElementById('next-button2');

let currentSlider2 = 0;

function hideSlider2() {
  slid.forEach(item => item.classList.remove('on2'))
}

function show_Slide2() {
  slid[currentSlider2].classList.add('on2')
}

function next_Slider2() {
  hideSlider2()
  if(currentSlider2 === slid.length -1) {
    currentSlider2 = 0
  } else {
    currentSlider2++
  }
  show_Slide2()
}

function prev_Slider2() {
  hideSlider2()
  if(currentSlider2 === 0) {
    currentSlider2 = slid.length -1
  } else {
    currentSlider2--
  }
  show_Slide2()
}

butnNext2.addEventListener('click', next_Slider2)
butnPrev2.addEventListener('click', prev_Slider2)

const hamburge = document.getElementById('hamburger');
const nav_link = document.querySelector('ul');

hamburge.addEventListener('click',hamburge.classList.toggle('active'), nav_link.classList.toggle('active'));

nav_link.addEventListener('click', function(){
  if (nav_link.classList.contains('active')){
    hamburge.classList.remove('active');
    nav_link.classList.remove('active');
  }
});

const hamburg = document.getElementById('hamburger');
const navList = document.querySelector('ul');

    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
    });












