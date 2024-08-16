/*** NAV ***/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  } 

/** GALLERY **/
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Button top
const $btnUp = document.getElementById("arriba");

//Hace aparecer el botón a 300px
window.addEventListener(
    "scroll",
    function (event) {
        var x = document.getElementById("arriba");
        var top = this.scrollY;
        if (top > 300) x.style.display = "block";
        else x.style.display = "none";
    },
    false
);

//Para que haga un scroll up el botón
window.addEventListener("scroll", (e)=>{
    let y = document.documentElement.scrollTop;
    if(y === 0){
        $btnUp.classList.add("hide");
        $btnUp.classList.add("active");
    } else if(y>=300){
        $btnUp.classList.add("active");
        $btnUp.classList.add("hide");
    }
})
window.addEventListener("click", (e)=>{
    if(e.target === $btnUp || e.target.matches("fa fa-angle-up")){
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    }
})