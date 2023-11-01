function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
/*
const intro = document.querySelector(".intro");
const logoSpan = document.querySelectorAll(".logoint");

const isPageReloaded = performance.navigation.type === performance.navigation.TYPE_RELOAD;

if (isPageReloaded) {
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("active");
        }, (idx + 1) * 200);
      });

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove("active");
            span.classList.add("fade");
          }, (idx + 1) * 50);
        });
      }, 2100);

      setTimeout(() => {
        intro.style.top = "-100vh";
      }, 2800);
    });
  });
} else {
  intro.style.display = "none";
}
*/


let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logoint');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

      logoSpan.forEach((span, idx) =>{
        setTimeout(()=>{
          span.classList.add('active');
        }, (idx + 1) * 400)
      });

      setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
            }, (idx + 1) * 50)
        })
      }, 2000);

      setTimeout(()=>{
        intro.style.top = '-100vh';
      }, 2300)

    })
})

