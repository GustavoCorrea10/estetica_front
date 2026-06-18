// NAV: scroll effect
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    },
    { passive: true },
  );
}

// NAV: hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
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
}

// SCROLL REVEAL (Correção para elementos sempre aparecerem)
const reveals = document.querySelectorAll(".reveal");
if (reveals.length > 0 && "IntersectionObserver" in window) {
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -20px 0px" },
  );

  reveals.forEach((el) => revealObs.observe(el));
} else {
  // Caso o navegador não suporte, mostra tudo na hora
  reveals.forEach((el) => el.classList.add("visible"));
}

// ACTIVE nav link on scroll
const sections = document.querySelectorAll("section[id], div[id]");
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

if (
  sections.length > 0 &&
  navAnchors.length > 0 &&
  "IntersectionObserver" in window
) {
  const activeObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navAnchors.forEach((a) => {
            if (a.classList.contains("nav-cta")) return;
            if (a.getAttribute("href") === "#" + id) {
              a.classList.add("active");
            } else {
              a.classList.remove("active");
            }
          });
        }
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((s) => activeObs.observe(s));
}

// CARROSSEL DE MARCAS INFINITO
const marcasTrack = document.getElementById("marcas-track");
const btnPrev = document.getElementById("marcas-prev");
const btnNext = document.getElementById("marcas-next");

if (marcasTrack) {
  marcasTrack.innerHTML += marcasTrack.innerHTML;

  let isScrolling = false;
  let scrollInterval = setInterval(autoScrollMarcas, 1500);

  function autoScrollMarcas() {
    if (!isScrolling) {
      marcasTrack.scrollBy({ left: 204, behavior: "smooth" });
    }
  }

  function resetInterval() {
    isScrolling = true;
    clearTimeout(marcasTrack.scrollTimeout);
    clearInterval(scrollInterval);
    marcasTrack.scrollTimeout = setTimeout(() => {
      isScrolling = false;
      scrollInterval = setInterval(autoScrollMarcas, 1500);
    }, 3000);
  }

  marcasTrack.addEventListener("scroll", () => {
    const totalWidth = marcasTrack.scrollWidth;
    const halfWidth = totalWidth / 2;

    if (marcasTrack.scrollLeft >= halfWidth) {
      marcasTrack.style.scrollBehavior = "auto";
      marcasTrack.scrollLeft -= halfWidth;
    } else if (marcasTrack.scrollLeft <= 0) {
      marcasTrack.style.scrollBehavior = "auto";
      marcasTrack.scrollLeft += halfWidth;
    }
  });

  marcasTrack.addEventListener("touchstart", resetInterval, { passive: true });
  marcasTrack.addEventListener("mousedown", resetInterval);

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      marcasTrack.scrollBy({ left: -204, behavior: "smooth" });
      resetInterval();
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      marcasTrack.scrollBy({ left: 204, behavior: "smooth" });
      resetInterval();
    });
  }
}
