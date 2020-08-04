// Responsive Menu
const menuBtn = document.querySelector('.navbar__burger');
const menu = document.querySelector('.navbar__menu');
const menuLink = document.querySelectorAll('.navbar__link');

const lineTop = document.querySelector('.line--top');
const lineMid = document.querySelector('.line--mid');
const lineBottom = document.querySelector('.line--bottom');

const closeMenu = () => {
  menu.classList.toggle('menu--slide');
  lineTop.classList.toggle('cross--top');
  lineMid.classList.toggle('invisible');
  lineBottom.classList.toggle('cross--bottom');
}

menuBtn.addEventListener('click', () => {
    closeMenu();
});

menuLink.forEach(el => {
  el.addEventListener('click', () => {
    closeMenu();
  });
});


// Accordion
const accordionBtn = document.querySelectorAll('.projects__project__accordion');
const accordionText = document.querySelectorAll('.projects__project__accordion__text');
const panel = document.querySelectorAll('.projects__project__panel');

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", function() {
        this.classList.toggle("active");
        if (this.classList == "projects__project__accordion") {
          accordionText[i].innerText = 'more info';
        } else {
          accordionText[i].innerText = 'less info';
        };
        if (panel[i].style.maxHeight) {
          panel[i].style.maxHeight = null;
        } else {
          panel[i].style.maxHeight = panel[i].scrollHeight + "px";
        } 
      });
};

// jQuery cross-browser smooth scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// GSAP page animations
// gsap.from('.main__container__logo__img', { opacity: 0, duration: 1, y: -50 });
// gsap.from('.main__container__titles__buttons', { opacity: 0, duration: 2 });

var tl = gsap.timeline({ defaults: {duration: 1}});
tl.from(".main__container__logo__img", {y: -50, opacity: 0})
  .to();