'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/* NAVBAR TOGGLE FOR MOBILE */
document.addEventListener('DOMContentLoaded', function () {
  // Open and close nav
  const navbarToggle = document.getElementById('navbar-toggle');
  const navMenu = document.querySelector('nav ul');

  navbarToggle.addEventListener('click', function () {
    navMenu.classList.toggle('open');
  });

  // Hamburger toggle
  navbarToggle.addEventListener('click', function () {
    this.classList.toggle('active');
  });

  // If a link has a dropdown, add sub-menu toggle
  const navLinks = document.querySelectorAll('nav ul li a:not(:only-child)');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const dropdown = this.nextElementSibling;

      if (dropdown && dropdown.classList.contains('navbar-dropdown')) {
        dropdown.classList.toggle('open');
      }

      // Close other dropdowns
      document.querySelectorAll('.navbar-dropdown').forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove('open');
        }
      });

      e.stopPropagation();
    });
  });

  // Click outside the dropdown to close it
  document.addEventListener('click', function () {
    document.querySelectorAll('.navbar-dropdown').forEach(dropdown => {
      dropdown.classList.remove('open');
    });
  });
});




/* SCROLL REVEAL*/

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.nav-tabs .tab');
  const contents = document.querySelectorAll('.tab-content .content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Add active class to the clicked tab and corresponding content
      tab.classList.add('active');
      const target = tab.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });
});


