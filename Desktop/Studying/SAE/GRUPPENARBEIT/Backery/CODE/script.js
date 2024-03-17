

document.addEventListener("DOMContentLoaded", function() {

window.addEventListener("scroll", function() {
    scrollFunction();
});

function scrollFunction() {
    var scrollToTopButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

document.getElementById("scroll-to-top").addEventListener("click", function() {
    scrollToTop();
});

function scrollToTop() {
    var homeSection = document.getElementById("home-section");
    if (homeSection) {
        homeSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}

});




document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const dropdownContent = document.getElementById('dropdown');

    const isHomePage = window.location.pathname === '/index.html';

 
    if (isHomePage) {
        homeLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            dropdownContent.classList.toggle('show');
        });
    } else {
        homeLink.addEventListener('click', function(event) {
            window.location.href = '/index.html';
        });
    }
 
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#home-link') && !event.target.closest('.dropdown')) {
            dropdownContent.classList.remove('show');
        }
    });

    dropdownContent.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            window.location.href = event.target.getAttribute('href');
        }
    });
});



/*const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function(){
  for(let i = 0; i < revealElements.length; i++){
    const isElementsOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;
    
    if(isElementsOnScreen){
      if (!revealElements[i].classList.contains("revealed")) { // Добавлено условие, чтобы не применять clip-path к элементам, которые должны анимироваться
        revealElements[i].classList.add("revealed");
      }
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("DOMContentLoaded", scrollReveal);*/






document.addEventListener("DOMContentLoaded", function() {
    const decrementBtns = document.querySelectorAll(".product-card__quantity-btn.decrement");
    const incrementBtns = document.querySelectorAll(".product-card__quantity-btn.increment");
    const quantityNumbers = document.querySelectorAll(".product-card__quantity-number");

    decrementBtns.forEach((btn, index) => {
      btn.addEventListener("click", function() {
        let quantity = parseInt(quantityNumbers[index].textContent);
        if (quantity > 1) {
          quantity--;
          quantityNumbers[index].textContent = quantity;
        }
      });
    });

    incrementBtns.forEach((btn, index) => {
      btn.addEventListener("click", function() {
        let quantity = parseInt(quantityNumbers[index].textContent);
        quantity++;
        quantityNumbers[index].textContent = quantity;
      });
    });
});
  




  