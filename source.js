document.getElementById("showCourses").addEventListener("click", function () {
    const courseList = document.getElementById("courseList");
    courseList.classList.toggle("hidden");
    this.textContent = courseList.classList.contains("hidden") ? " > Revelant Courses Taken (Show)" : " < Revelant Courses Taken (Hide)";
});

document.getElementById("showOrgs").addEventListener("click", function () {
    const studentOrgList = document.getElementById("studentOrgList");
    studentOrgList.classList.toggle("hidden");
    this.textContent = studentOrgList.classList.contains("hidden") ? " > Student Organizations (Show)" : " < Student Organizations (Hide)";
});

document.getElementById("showSkills").addEventListener("click", function () {
    const skillList = document.getElementById("skillList");
    skillList.classList.toggle("hidden");
    this.textContent = skillList.classList.contains("hidden") ? " > Revelant Skills (Show)" : " < Revelant Skills (Hide)";
});



document.getElementById("toggleGallery").addEventListener("click", function () {
    const gallery = document.getElementById("gallery");
    gallery.classList.toggle("hidden");
    this.textContent = gallery.classList.contains("hidden") ? "View All Photos" : "Hide All Photos";
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");

document.querySelectorAll(".galleryImage").forEach(img => {
    img.addEventListener("click", function () {
        modal.classList.remove("hidden");
        modalImg.src = this.src;
        captionText.innerText = this.alt;
        captionText.style.fontFamily = "Roboto";
        captionText.style.fontSize = "1.25em";
    });
});

document.getElementById("closeModal").addEventListener("click", function () {
    modal.classList.add("hidden");
});

var slideIndexA = 0;
showSlidesA();

function showSlidesA() {
    var i;
    var slides = document.getElementsByClassName("slidesA");
    
    for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
    slideIndexA++;
    if (slideIndexA > slides.length) {slideIndexA = 1;}
    slides[slideIndexA-1].style.display = "block";

    setTimeout(showSlidesA, 5000);
}

var slideIndexB = 0;
showSlidesB();

function showSlidesB() {
    var i;
    var slides = document.getElementsByClassName("slidesB");
    
    for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
    slideIndexB++;
    if (slideIndexB > slides.length) {slideIndexB = 1;}
    slides[slideIndexB-1].style.display = "block";

    setTimeout(showSlidesB, 5000);
}

// PROBLEM CODE BELOW

var aboutMeIndex = 0;
var aboutMeTimeout;
var viewport = window.matchMedia("(max-width: 768px)");

function showAboutMeSlides(viewport) {
    const slides = document.getElementsByClassName("slidesAboutMe");
    if (aboutMeTimeout)
    {
        clearTimeout(aboutMeTimeout);
        aboutMeTimeout = null;
    }

    if (viewport.matches)
    {
        for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
        aboutMeIndex++;

        if (aboutMeIndex > slides.length) {aboutMeIndex = 1;}
        slides[aboutMeIndex-1].style.display = "block";
        aboutMeTimeout = setTimeout(() => showAboutMeSlides(viewport), 5000);
    }
    else
    {
        for (i = 0; i < slides.length; i++)
        {
            slides[i].style.display = "block";
        }
    }
}

showAboutMeSlides(viewport);
// Update on resize
viewport.addEventListener("change", function () {
    aboutMeIndex = 0;
    showAboutMeSlides(viewport);
});
