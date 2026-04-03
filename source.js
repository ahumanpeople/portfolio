/* =============================================
   José Barrios Portfolio — Redesigned JS
   ============================================= */

/* ---------- Accordion Toggles ---------- */

function setupAccordion(triggerId, panelId) {
    const trigger = document.getElementById(triggerId);
    const panel = document.getElementById(panelId);
    if (!trigger || !panel) return;

    trigger.addEventListener("click", function () {
        const isOpen = !panel.classList.contains("hidden");
        panel.classList.toggle("hidden");
        trigger.classList.toggle("open", !isOpen);
    });
}

setupAccordion("showCourses", "courseList");
setupAccordion("showSkills", "skillList");
setupAccordion("showOrgs", "studentOrgList");

/* ---------- Project Expand Buttons ---------- */

function setupProjectToggle(btnId, panelId) {
    const btn = document.getElementById(btnId);
    const panel = document.getElementById(panelId);
    if (!btn || !panel) return;

    btn.addEventListener("click", function () {
        const isOpen = !panel.classList.contains("hidden");
        panel.classList.toggle("hidden");
        btn.classList.toggle("open", !isOpen);
        btn.innerHTML = isOpen
            ? '<span class="expand-icon">▶</span> Learn More'
            : '<span class="expand-icon" style="transform:rotate(90deg)">▶</span> Collapse';
    });
}

setupProjectToggle("showProjectA", "projectA");
setupProjectToggle("showProjectB", "projectB");
setupProjectToggle("showProjectC", "projectC");
setupProjectToggle("showProjectD", "projectD");

/* ---------- Slideshows ---------- */

function setupSlideshow(slideClass) {
    const slides = document.querySelectorAll("." + slideClass);
    if (!slides.length) return;

    let index = 0;

    function showSlide(i) {
        slides.forEach(s => s.classList.remove("active"));
        slides[i].classList.add("active");
    }

    showSlide(0);

    setInterval(function () {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 5000);
}

setupSlideshow("slidesA");
setupSlideshow("slidesB");
setupSlideshow("slidesC");
setupSlideshow("slidesD");

/* ---------- About Me Slideshow (responsive) ---------- */

const aboutSlides = document.querySelectorAll(".slidesAboutMe");
let aboutIndex = 0;
let aboutTimer = null;
const mobileBreak = window.matchMedia("(max-width: 768px)");

function showAboutSlide(i) {
    aboutSlides.forEach(s => s.classList.remove("active"));
    if (aboutSlides[i]) aboutSlides[i].classList.add("active");
}

function runAboutSlideshow(mq) {
    if (aboutTimer) {
        clearTimeout(aboutTimer);
        aboutTimer = null;
    }

    if (mq.matches) {
        // Mobile: cycle one slide at a time
        showAboutSlide(aboutIndex);
        aboutTimer = setInterval(function () {
            aboutIndex = (aboutIndex + 1) % aboutSlides.length;
            showAboutSlide(aboutIndex);
        }, 5000);
    } else {
        // Desktop/tablet: show all slides simultaneously (CSS handles layout)
        clearInterval(aboutTimer);
        aboutSlides.forEach(s => s.classList.add("active"));
    }
}

runAboutSlideshow(mobileBreak);
mobileBreak.addEventListener("change", function () {
    aboutIndex = 0;
    runAboutSlideshow(mobileBreak);
});

/* ---------- Image Modal ---------- */

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");

document.querySelectorAll(".galleryImage").forEach(function (img) {
    img.addEventListener("click", function () {
        modal.classList.remove("hidden");
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerText = this.alt;
    });
});

document.getElementById("closeModal").addEventListener("click", function () {
    modal.classList.add("hidden");
});

// Also close modal on backdrop click
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

// Close on Escape
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") modal.classList.add("hidden");
});

/* ---------- Active nav link on scroll ---------- */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
                link.style.color = "";
                if (link.getAttribute("href") === "#" + entry.target.id) {
                    link.style.color = "var(--accent)";
                }
            });
        }
    });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(function (s) { observer.observe(s); });
