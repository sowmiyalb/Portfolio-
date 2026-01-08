const reveals=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{reveals.forEach(s=>{if(s.getBoundingClientRect().top<window.innerHeight-100){s.classList.add('active')}})});
let index=0;const slides=document.querySelectorAll('.slide');
function showSlide(i){slides.forEach(s=>s.classList.remove('active'));slides[i].classList.add('active');}
function nextSlide(){index=(index+1)%slides.length;showSlide(index);}
function prevSlide(){index=(index-1+slides.length)%slides.length;showSlide(index);}
