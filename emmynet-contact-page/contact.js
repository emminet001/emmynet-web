 
    // This sample form validates the required fields and shows a confirmation.
    // Connect it to a backend or email service before using it to receive real messages.
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Stops the browser from reloading the page.
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!fullName || !email || !message) {
        formMessage.style.display = "block";
        formMessage.style.background = "#fff0f0";
        formMessage.style.color = "#a32323";
        formMessage.textContent = "Please complete all required fields.";
        return;
      }

      // Gather the selected interest boxes for the confirmation.
      const selectedInterests = Array.from(
        document.querySelectorAll('input[name="interest"]:checked')
      ).map((item) => item.value);

      formMessage.style.display = "block";
      formMessage.style.background = "#e6f7ea";
      formMessage.style.color = "#086d32";
      formMessage.textContent =
        "Thanks, " + fullName + "! Your form is ready. " +
        "Selected interests: " + (selectedInterests.join(", ") || "Not specified") +
        ". Please connect this form to an email service to deliver your message.";
      contactForm.reset();
    });

    
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open or close the mobile dropdown
menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("show");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

// Close the dropdown after selecting a link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Close the dropdown with the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});
