document.addEventListener("DOMContentLoaded", function() {
    // Typing effect for the introductory paragraph
    const introText = "I'm B.tech Information Technology Final Year Student of Rajkiya Engineering College Azamgarh. Which is affiliated to AKTU. Seeking for Opportunity for Full Stack Software Developer fresher as well as 0-1 year experience.";
    const typingElement = document.getElementById("typing-effect");
    let introIndex = 0;

    function typeIntro() {
        if (introIndex < introText.length) {
            typingElement.textContent += introText.charAt(introIndex);
            introIndex++;
            setTimeout(typeIntro, 50); // Adjust typing speed here
        }
    }

    // Typing effect for span elements
    const spans = document.querySelectorAll(".text-secondary");
    let currentSpanIndex = 0;
    let currentCharIndex = 0;

    function typeSpans() {
        if (currentSpanIndex < spans.length) {
            const span = spans[currentSpanIndex];
            const text = span.getAttribute('data-text'); // Using data attribute for original text
            span.textContent = text.substring(0, currentCharIndex + 1);
            currentCharIndex++;

            if (currentCharIndex < text.length) {
                setTimeout(typeSpans, 100); // Adjust typing speed here
            } else {
                currentCharIndex = 0;
                currentSpanIndex++;
                setTimeout(typeSpans, 500); // Pause before typing next span
            }
        }
    }

    // Store original text in data-text attribute for each span
    spans.forEach(span => {
        span.setAttribute('data-text', span.textContent);
        span.textContent = ''; // Clear initial text
    });

    // Start both typing effects simultaneously
    typeIntro();
    typeSpans();
});
// Scroll to the top of the first section when the page loads
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
});
// Get all navigation items and sections
const navbarItems = document.querySelectorAll('.navbar-items');
const sections = document.querySelectorAll('section');

// Add event listener to each navigation item
navbarItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Remove active class from all navigation items
    navbarItems.forEach((item) => {
      item.classList.remove('active');
    });

    // Add active class to the current navigation item
    item.classList.add('active');

    // Hide all sections
    sections.forEach((section) => {
      section.classList.remove('active');
    });

    // Show the corresponding section
    sections[index].classList.add('active');

    // Scroll to the top of the section
    sections[index].scrollIntoView({ behavior: 'smooth' });
  });
});
