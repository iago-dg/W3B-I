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
