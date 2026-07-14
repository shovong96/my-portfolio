// ===========================
// SCROLL REVEAL ANIMATION
// ===========================

const sections = document.querySelectorAll(".section");

const revealSection = () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// ===========================
// ANIMATE SKILL BARS
// ===========================

const progressBars = document.querySelectorAll(".progress-bar");
let skillsAnimated = false;

function animateSkills() {

    if (skillsAnimated) return;

    const skillsSection = document.querySelector("#skills");

    const top = skillsSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {

        progressBars.forEach(bar => {
            bar.style.width = bar.dataset.width;
        });

        skillsAnimated = true;
    }

}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// ===========================
// ACTIVE NAVIGATION LINK
// ===========================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================
// SMOOTH SCROLL
// ===========================

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        window.scrollTo({

            top: target.offsetTop - 70,

            behavior: "smooth"

        });

    });

});

// ===========================
// NAVBAR SHADOW ON SCROLL
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
        navbar.style.background = "rgba(15,23,42,.95)";

    } else {

        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(15,23,42,.80)";

    }

});

// ===========================
// HERO IMAGE FLOAT EFFECT
// ===========================

const heroImage = document.querySelector(".hero-image img");

let direction = 1;

setInterval(() => {

    heroImage.style.transform =
        direction === 1
            ? "translateY(-10px)"
            : "translateY(0px)";

    direction *= -1;

}, 1800);

// ===========================
// PROJECT CARD HOVER EFFECT
// ===========================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

// ===========================
// PROJECT GALLERY LIGHTBOX
// ===========================

const galleryImages = document.querySelectorAll(".project-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("active");

    });

});

function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        closeLightbox();
    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closeLightbox();
    }

});

// ===========================
// TYPEWRITER EFFECT
// ===========================

const title = document.querySelector(".hero h2");

const roles = [
    "Senior Royalty Analyst",
    "AI Workflow Automation Enthusiast",
    "Business Intelligence Professional",
    "Power BI & Excel Specialist"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        title.textContent = currentRole.substring(0, charIndex++);
        
        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeWriter, 1500);

            return;
        }

    } else {

        title.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) roleIndex = 0;

        }

    }

    setTimeout(typeWriter, deleting ? 40 : 80);

}

typeWriter();

console.log("Portfolio Loaded Successfully");