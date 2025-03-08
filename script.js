document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling
  document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Scroll Fade-in Effect
  const sections = document.querySelectorAll("section");

  const fadeInOnScroll = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (sectionTop < screenPosition) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", fadeInOnScroll);

  // Apply initial hidden state
  sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
  });

  fadeInOnScroll();

  // Quote Form Submission
  document.getElementById("quoteForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Simulating a form submission success
    alert("Your quote request has been submitted successfully!");
    this.reset();
  });
});
