// script.js
// Navigation Toggle
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");
const navbar = document.querySelector(".navbar");

navToggleBtn.addEventListener("click", function() {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

// Close navbar when clicking on a nav link
const navLinks = document.querySelectorAll("[data-nav-link]");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    navToggleBtn.classList.remove("active");
  });
});

// Header scroll effect
window.addEventListener("scroll", function() {
  if (window.scrollY >= 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Back to top button
const backToTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function() {
  if (window.scrollY >= 300) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".skills-progress");

function animateSkillBars() {
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";
    
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
}

// Intersection Observer for skill bars animation
const skillsSection = document.getElementById("skills");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

if (skillsSection) {
  observer.observe(skillsSection);
}