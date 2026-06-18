/* ===== Stanzin Sangay — Portfolio scripts ===== */

// Theme toggle (persists in localStorage)
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);

  function syncIcon() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    const dark = root.getAttribute("data-theme") !== "light";
    btn.textContent = dark ? "🌙" : "☀️";
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("#themeToggle")) {
      const dark = root.getAttribute("data-theme") !== "light";
      const next = dark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      syncIcon();
    }
    if (e.target.closest("#menuBtn")) {
      document.getElementById("navLinks").classList.toggle("open");
    }
  });

  document.addEventListener("DOMContentLoaded", syncIcon);
})();

// Highlight active nav link based on current page
document.addEventListener("DOMContentLoaded", function () {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === page) a.classList.add("active");
  });
  document.querySelectorAll("#year").forEach((el) => (el.textContent = new Date().getFullYear()));
});

// Scroll reveal
document.addEventListener("DOMContentLoaded", function () {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          obs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => obs.observe(el));
});

// Animate skill bars when visible
document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll(".skill-fill");
  if (!bars.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.style.width = en.target.dataset.level + "%";
          obs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  bars.forEach((b) => obs.observe(b));
});

// Project filtering
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll("[data-category]");
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      projects.forEach((p) => {
        const show = f === "all" || p.dataset.category === f;
        p.style.display = show ? "" : "none";
      });
    });
  });
});

// Contact form — sends the message straight to WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  // WhatsApp number in international format (no +, spaces or dashes)
  const WHATSAPP_NUMBER = "919419212533";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const note = document.getElementById("formNote");
    const name = (form.querySelector("[name=name]").value || "").trim();
    const email = (form.querySelector("[name=email]").value || "").trim();
    const message = (form.querySelector("[name=message]").value || "").trim();

    const text =
      "Hi Stanzin, I'm reaching out from your portfolio.\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n\n" +
      "Message:\n" + message;

    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank", "noopener,noreferrer");

    note.textContent = "Thanks, " + name + "! Opening WhatsApp so you can send your message directly.";
    note.style.color = "var(--accent-2)";
    form.reset();
  });
});
