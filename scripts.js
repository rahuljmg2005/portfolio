// Navbar toggle
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const navbarLinks = document.getElementById("navbar-links");

  burgerMenu.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    burgerMenu.innerHTML = navbarLinks.classList.contains("active")
      ? '<span class="close-icon">&times;</span>'
      : '<span class="hamburger-icon">&#9776;</span> <span class="logot">MY PORTFOLIO</span>';
  });
});

// for changing text
const texts = [" Rahul", " a web developer"]; // Array of texts
let index = 0; // Tracks the current text
let charIndex = 0; // Tracks the current character
const typingSpeed = 100; // Typing speed in milliseconds
const delayBetweenTexts = 4000; // Delay before switching to the next text
const typedText = document.getElementById("typed-text");

// Function to type out the text
function typeText() {
  if (charIndex < texts[index].length) {
    typedText.textContent += texts[index].charAt(charIndex); // Add the next character
    charIndex++;
    setTimeout(typeText, typingSpeed); // Call itself to type the next character
  } else {
    // After typing the current text, wait before deleting
    setTimeout(deleteText, delayBetweenTexts);
  }
}

// Function to delete the text
function deleteText() {
  if (charIndex > 0) {
    typedText.textContent = texts[index].substring(0, charIndex - 1); // Remove the last character
    charIndex--;
    setTimeout(deleteText, typingSpeed); // Call itself to delete the next character
  } else {
    // Switch to the next text
    index = (index + 1) % texts.length; // Cycle through the array
    setTimeout(typeText, typingSpeed);
  }
}

// Start the typing animation
typeText();

// smooth navigations

// nav to about
document.getElementById("about").addEventListener("click", (a) => {
  a.preventDefault(); // Prevent default link behavior
  document.getElementById("about-nav").scrollIntoView({ behavior: "smooth" });
});

// navigate from nav bar to project
document.getElementById("pro").addEventListener("click", (p) => {
  p.preventDefault(); // Prevent default link behavior
  document.getElementById("pro-nav").scrollIntoView({ behavior: "smooth" });
});

// navigate from button to project
document.getElementById("pro2").addEventListener("click", (p) => {
  p.preventDefault(); // Prevent default link behavior
  document.getElementById("pro-nav").scrollIntoView({ behavior: "smooth" });
});

// navigate from home to contact
document.getElementById("con").addEventListener("click", (c) => {
  c.preventDefault(); // Prevent default link behavior
  document.getElementById("contact-nav").scrollIntoView({ behavior: "smooth" });
});
