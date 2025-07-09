document.getElementById("toggleGallery").addEventListener("click", function () {
    const gallery = document.getElementById("gallery");
    gallery.classList.toggle("hidden");
    this.textContent = gallery.classList.contains("hidden") ? "View All Photos in Project Gallery" : "Hide All Photos in Project Gallery";
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