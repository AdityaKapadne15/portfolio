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

// Create the blob dynamically
const blob = document.createElement("div");
blob.classList.add("blob");
document.body.appendChild(blob);

document.addEventListener("mousemove", (e) => {
    // Adjusting position correctly
    blob.style.left = `${e.clientX - 150}px`; // Centering blob relative to cursor
    blob.style.top = `${e.clientY - 150}px`;
});


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

function updateExperience() {
  const startDate = new Date(2022, 2); // Feb 2022
  const currentDate = new Date();

  let experienceYears = currentDate.getFullYear() - startDate.getFullYear();
  let experienceMonths = currentDate.getMonth() - startDate.getMonth();

  if (experienceMonths < 0) {
      experienceYears--;
      experienceMonths += 12;
  }

  let experienceText = `${experienceYears}+ years`;
  if (experienceMonths > 0) {
      experienceText = `${experienceYears}.${experienceMonths}+ years`;
  }

  // Select all elements with the ID 'experience-time'
  const experienceElements = document.querySelectorAll("#experience-time");

  if (experienceElements.length > 0) {
      experienceElements.forEach(el => el.textContent = experienceText);
  } else {
      console.error("No elements found with ID 'experience-time'");
  }
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", updateExperience);





