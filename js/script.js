// NAV: scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener(
  "scroll",
  () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  },
  { passive: true },
);

// NAV: hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  const open = hamburger.classList.toggle("open");
  navLinks.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
});

// Close menu on link click
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// Close menu on outside click
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    document.body.style.overflow = "";
  }
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings within same parent
        const siblings = Array.from(
          entry.target.parentElement.querySelectorAll(".reveal:not(.visible)"),
        );
        const idx = siblings.indexOf(entry.target);
        setTimeout(
          () => {
            entry.target.classList.add("visible");
          },
          Math.min(idx * 80, 300),
        );
        revealObs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);

reveals.forEach((el) => revealObs.observe(el));

// FORM: submit handler removido (sem backend)

// CONTADOR ANIMADO nas estatísticas
function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-target"), 10);
  const suffix = el.getAttribute("data-suffix") || "";
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(ease * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll(".stat-number[data-target]").forEach((el) => {
  counterObs.observe(el);
});

// ACTIVE nav link on scroll
const sections = document.querySelectorAll("section[id], div[id]");
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const activeObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navAnchors.forEach((a) => {
          if (a.classList.contains("nav-cta")) return; // não mexe no botão Agendar
          a.style.color =
            a.getAttribute("href") === "#" + id ? "var(--rose)" : "";
        });
      }
    });
  },
  { threshold: 0.4 },
);

sections.forEach((s) => activeObs.observe(s));
