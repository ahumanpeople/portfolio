/* ----- show###() event click functions are text that triggers a dropdown ----- */

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

document.getElementById("showProjectA").addEventListener("click", function () {
    const project = document.getElementById("projectA");
    project.classList.toggle("hidden");
    this.textContent = project.classList.contains("hidden") ? " > Learn More (Show Project Report)" : " < Learn More (Hide Project Report)";
});

document.getElementById("showProjectB").addEventListener("click", function () {
    const project = document.getElementById("projectB");
    project.classList.toggle("hidden");
    this.textContent = project.classList.contains("hidden") ? " > Learn More (Show Project Report)" : " < Learn More (Hide Project Report)";
});

/* ----- show###() event click functions for mobile display only ----- */

// add em


/* ----- photo gallery of all projects ----- */

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

/* ----- showSlides###() functions are for slideshows thoroughout webpage ----- */

var slideIndexA = 0; // set up variables
showSlidesA();

function showSlidesA() {
    var i;
    var slides = document.getElementsByClassName("slidesA"); // select all slides within slideshow
    
    for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
    slideIndexA++; // hide all pictures and begin count
    if (slideIndexA > slides.length) {slideIndexA = 1;} // if count surpasses amount of pictures, reset count
    slides[slideIndexA-1].style.display = "block";
    setTimeout(showSlidesA, 5000); // select right picture and load on screen for 5 seconds
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

/* ----- showSlides###() function for mobile display in About Me Section ----- */

var aboutMeIndex = 0; // variables to set up showAboutMeSlides function
var aboutMeTimeout;
var viewport = window.matchMedia("(max-width: 768px)"); // set viewport threshold to 768px

function showAboutMeSlides(viewport) {
    const slides = document.getElementsByClassName("slidesAboutMe");
    if (aboutMeTimeout) // resets function if program is timed out
    {
        clearTimeout(aboutMeTimeout);
        aboutMeTimeout = null;
    }

    if (viewport.matches) // if the viewport width is small (mobile)
    {
        for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
        aboutMeIndex++; // hide all pictures and begin count

        if (aboutMeIndex > slides.length) {aboutMeIndex = 1;} // if count surpasses amount of pictures, reset count
        slides[aboutMeIndex-1].style.display = "block";
        aboutMeTimeout = setTimeout(() => showAboutMeSlides(viewport), 5000); // select right picture and load on screen for 5 seconds
    }
    else
    {
        for (i = 0; i < slides.length; i++)
        { // show all pictures
            slides[i].style.display = "block";
        }
    }
}

showAboutMeSlides(viewport); // start function
// update if viewport is resized
viewport.addEventListener("change", function () {
    aboutMeIndex = 0;
    showAboutMeSlides(viewport);
});
