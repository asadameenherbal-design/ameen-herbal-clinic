// PRELOADER
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.transition = 'opacity 0.6s ease';
  setTimeout(()=>preloader.style.display='none',600);
});

// SCROLL ANIMATION
const sections = document.querySelectorAll('section');
window.addEventListener('scroll',()=>{
  sections.forEach(section=>{
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;
    if(top<trigger) section.classList.add('visible');
  });
});

// CUSTOM CURSOR
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', e=>{
  cursor.style.top = e.clientY+'px';
  cursor.style.left = e.clientX+'px';
});

// HERO SLIDER (fade)
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showSlide(index){
  slides.forEach((slide,i)=>{
    slide.classList.remove('active');
    if(i===index) slide.classList.add('active');
  });
}
setInterval(()=>{
  currentSlide = (currentSlide+1)%slides.length;
  showSlide(currentSlide);
},4000);

// TESTIMONIAL SLIDER
let track = document.querySelector(".testimonial-track");
let total = document.querySelectorAll(".testimonial-card").length;
let indexT = 0;
setInterval(()=>{
  indexT = (indexT+1)%total;
  track.style.transform = `translateX(-${indexT*100}%)`;
},4000);

// MOBILE SIDE MENU
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');
hamburger.addEventListener('click',()=>{sideMenu.style.right='0';});
closeBtn.addEventListener('click',()=>{sideMenu.style.right='-250px';});
sideMenu.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',()=>{sideMenu.style.right='-250px';});
});
// WhatsApp open with card name
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const name = card.dataset.name; // get card name
    const msg = `Hello! I want to ask about ${name} treatment.`; 
    const url = `https://wa.me/923121729554?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank'); // open WhatsApp in new tab
  });
});
