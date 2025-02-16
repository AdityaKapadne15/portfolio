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
  const startDate = new Date(2022, 1); // Feb 2022
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

document.addEventListener("DOMContentLoaded", function () {
  // ✅ List of image filenames (Fetch dynamically if using backend)
  const imagePaths = [
    "./assets/cert_imgs/top_talent_2024.png",
    "./assets/cert_imgs/Bravo_Award.png",
    "./assets/cert_imgs/call_for_code_2023.png",
    "./assets/cert_imgs/AZ-900_certification.jpg",
    "./assets/cert_imgs/aws_udemy.png",
    "./assets/cert_imgs/HTML_udemy.png",
    "./assets/cert_imgs/CSS_udemy.png",
    "./assets/cert_imgs/TS_udemy.png",
    "./assets/cert_imgs/nodejs_udemy.png",
    "./assets/cert_imgs/git_udemy.png",
    "./assets/cert_imgs/docker_udemy.png",
    "./assets/cert_imgs/devops_udemy.png",
    "./assets/cert_imgs/powershell_udemy.png",
    "./assets/cert_imgs/mongo_udemy.png",
    "./assets/cert_imgs/IBM_instana.png",
    "./assets/cert_imgs/IBM_instana_Intermediate.png"
  ];

  const imageFolder = "./assets/cert_imgs"; // Folder path
  const carouselImages = document.querySelector(".carousel-images");
  const indicatorsContainer = document.querySelector(".indicators");

  let currentIndex = 0;
  
  // ✅ Dynamically create image elements
  imagePaths.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = image;
      img.classList.add("carousel-item");
      img.alt = `Certificate ${index + 1}`;
      carouselImages.appendChild(img);

      // Create indicators (dots)
      const dot = document.createElement("div");
      dot.classList.add("indicator");
      dot.addEventListener("click", () => goToSlide(index));
      indicatorsContainer.appendChild(dot);
  });

  const totalSlides = imagePaths.length;
  const indicators = document.querySelectorAll(".indicator");
  updateIndicators();

  function updateIndicators() {
      indicators.forEach((dot, index) => {
          dot.classList.toggle("active", index === currentIndex);
      });
  }

  function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
  }

  function updateCarousel() {
      const newTransformValue = `translateX(-${currentIndex * 100}%)`;
      document.querySelector(".carousel-images").style.transform = newTransformValue;
      updateIndicators();
  }

  // Auto-slide feature (Optional)
  // let autoSlide = setInterval(nextSlide, 4000);
  // document.querySelector(".carousel").addEventListener("mouseover", () => clearInterval(autoSlide));
  // document.querySelector(".carousel").addEventListener("mouseleave", () => autoSlide = setInterval(nextSlide, 4000));

  // Attach event listeners to buttons
  document.querySelector(".prev").addEventListener("click", prevSlide);
  document.querySelector(".next").addEventListener("click", nextSlide);
});


document.addEventListener("DOMContentLoaded", function () {
  const carouselImages = document.querySelector(".carousel-images");
  const modal = document.getElementById("popup-modal");
  const modalImg = document.getElementById("popup-image");
  const closeBtn = document.querySelector(".close");

  // Open modal when an image is clicked
  carouselImages.addEventListener("click", function (event) {
      if (event.target.tagName === "IMG") {
          modal.style.display = "flex"; // Show modal
          modalImg.src = event.target.src; // Set image source
      }
  });

  // Close modal when clicking the close button
  closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});



