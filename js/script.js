const btn = document.getElementById('menu-btn'); 
const nav = document.getElementById('menu');



btn.addEventListener("click", () => {
    btn.classList.toggle('open');
    nav.classList.toggle("flex")
    nav.classList.toggle("hidden")
})


// Onclick button want each corresponding image show 







// dots.forEach(dot => {
//         dot.addEventListener("click", (n) => {
//                 for(let i = 1; i < testimonails.length; i++) {
//                     if(testimonails[i].classList.contains("flex")) {
//                         testimonails[i].classList.remove("hidden")
//                     }
//                     testimonails[i].classList.add("flex")
//                 }
//         })
//     });

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  
  var slides = document.getElementsByClassName("testimonial");
  var circles = document.querySelectorAll("button#dots")
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.add("hidden");
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].classList.replace("hidden", "flex");
  circles[slidePosition-1].className += " enable";
}



