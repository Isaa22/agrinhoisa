// Hero Section Slideshow
const slides = document.querySelectorAll('.slide');
const slideButtons = document.querySelectorAll('.slide-btn');
let currentSlide = 0;

// Function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  slideButtons.forEach((button, i) => {
    button.classList.toggle('active', i === index);
  });
}

// Function to switch to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Add event listeners to slide buttons
slideButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Automatically switch slides every 5 seconds
setInterval(nextSlide, 5000);

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const viewDetailsButtons = document.querySelectorAll('.view-details');
const popup = document.getElementById('project-popup');
const closePopup = document.querySelector('.close-popup');
const popupTitle = document.getElementById('popup-title');
const popupImage = document.getElementById('popup-image');
const popupDescription = document.getElementById('popup-description');
const popupTechnologies = document.getElementById('popup-technologies');
const popupTools = document.getElementById('popup-tools');
const popupVideo = document.getElementById('popup-video');

viewDetailsButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const project = projectDetails[index];
    popupTitle.textContent = project.title;
    popupImage.src = project.image;
    popupDescription.textContent = project.description;
    popupTechnologies.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join('');
    popupTools.innerHTML = project.tools.map(tech => `<li>${tech}</li>`).join('');
    popupVideo.src = project.video;
    popup.style.display = 'flex';
  });
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
  popupVideo.src = ''; // Stop the video when popup is closed
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    popupVideo.src = ''; // Stop the video when popup is closed
  }
});

// Testimonial Slider
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial-card");
  let currentIndex = 0;

  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          testimonial.classList.remove("active");
          if (i === index) {
              testimonial.classList.add("active");
          }
      });
  }

  document.getElementById("prev").addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
  });

  document.getElementById("next").addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
  });

  // Auto slide
  setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
  }, 4000);

  showTestimonial(currentIndex);
});


function toggleMenu() {
  document.querySelector("nav").classList.toggle("nav-open");
}