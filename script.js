// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received.`);
  } else {
    alert("Please fill in all fields.");
  }
});

// Dynamic Project Highlight
const projects = document.querySelectorAll(".project");
projects.forEach((project, index) => {
  project.addEventListener("mouseenter", () => {
    project.style.backgroundColor = "#eaeaea";
  });
  project.addEventListener("mouseleave", () => {
    project.style.backgroundColor = "#f4f4f4";
  });
});
