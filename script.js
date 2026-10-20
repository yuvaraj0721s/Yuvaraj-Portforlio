// Personal links for Yuvaraj R's cybersecurity portfolio.
const PROFILE = {
  linkedin: "https://www.linkedin.com/in/yuva-raj-2327c",
  instagram: "https://www.instagram.com/alpha_exploiters/",
  email: "yuvaraj0721x@gmail.com",
  phone: "+917373389089"
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Activate Instagram and LinkedIn buttons throughout the portfolio.
document.querySelectorAll("[data-config-link]").forEach(link => {
  const url = PROFILE[link.dataset.configLink];
  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});

// Email buttons open a new email draft.
[document.getElementById("emailButton"), document.getElementById("emailLink")].forEach(link => {
  if (link) link.href = `mailto:${PROFILE.email}`;
});

// Resume is stored locally in assets and downloads when clicked.
const resumeButton = document.getElementById("resumeButton");
if (resumeButton) {
  resumeButton.href = "assets/Yuvaraj-Resume.pdf";
  resumeButton.setAttribute("download", "Yuvaraj-Resume.pdf");
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

const revealItems = document.querySelectorAll(".section-heading, .about-copy, .detail-card, .skill-card, .project-card, .timeline-item, .credential-card, .creator-panel, .contact-box");
revealItems.forEach(item => item.classList.add("reveal"));
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}
