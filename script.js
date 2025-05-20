document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu_bar ul");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector(".nav_bar").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (menu.classList.contains("active")) {
          hamburger.classList.remove("active");
          menu.classList.remove("active");
        }
      }
    });
  });

  // Sticky navigation on scroll
  const navBar = document.querySelector(".nav_bar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navBar.classList.add("scrolled");
    } else {
      navBar.classList.remove("scrolled");
    }
  });

  // Project filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      projectItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
  // Form validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple validation - check if required fields are filled
      const inputs = this.querySelectorAll(
        "input[required], textarea[required], select[required]"
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          input.style.borderColor = "red";
          isValid = false;
        } else {
          input.style.borderColor = "";
        }
      });

      if (isValid) {
        // Here you would typically send the form data to a server
        alert("Thank you for your message! We will get back to you soon.");
        this.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    });
  }

  // Animate elements when they come into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".about, .services, .projects, .testimonials, .form_section"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animation
  const animatedElements = document.querySelectorAll(
    ".about, .services, .projects, .testimonials, .form_section"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on page load
});
// WhatsApp button configuration
document.addEventListener("DOMContentLoaded", function () {
  // Replace with your actual phone number (remove all non-digit characters)
  const phoneNumber = "1234567890".replace(/\D/g, "");
  const whatsappButton = document.querySelector(".whatsapp-float");

  if (whatsappButton) {
    whatsappButton.href = `https://wa.me/${918360170678}`;

    // Optional: Add pre-filled message
    const message = "Hello! I'm interested in your interior design services...";
    whatsappButton.href = `https://wa.me/${918360170678}?text=${encodeURIComponent(
      message
    )}`;
  }
});
