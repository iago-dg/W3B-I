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
const butnPrev = document.getElementById('prev-button2');
const butnNext = document.getElementById('next-button2');

let currentSlider = 0;

function hideSlider() {
  slid.forEach(item => item.classList.remove('on2'))
}

function show_Slide() {
  slid[currentSlider].classList.add('on2')
}

function next_Slider() {
  hideSlider()
  if(currentSlider === slid.length -1) {
    currentSlider = 0
  } else {
    currentSlider++
  }
  show_Slide()
}

function prev_Slider() {
  hideSlider()
  if(currentSlider === 0) {
    currentSlider = slid.length -1
  } else {
    currentSlider--
  }
  show_Slide()
}

butnNext.addEventListener('click', next_Slider)
butnPrev.addEventListener('click', prev_Slider)




