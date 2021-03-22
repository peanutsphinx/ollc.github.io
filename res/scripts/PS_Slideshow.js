/**
 * Title: PS_Slideshow.js
 * Author: PeanutSphinx
 * 
 * About:
 * For slideshow gallery to be able to work.
 * 
 */

var slideIndex = 1; //default slide index array
showSlides(slideIndex); //call showSlide function and returning the value with slideIndex


//for previous and next button, declare a function
function plusSlides(n) {
    showSlides(slideIndex += n); //showSlides value is the value of slideIndex AND value of n
}

//image control for thumbnails
function currentSlide(n) {
    showSlides(slideIndex = n); //showSlides value is the value of slideIndex EQUAL to value of n
}

//main function on how slideshow gallery work
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("gallery");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}