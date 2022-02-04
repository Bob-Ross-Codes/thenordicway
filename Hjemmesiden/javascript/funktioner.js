const burgermenu = document.querySelector(".burgermenu");
const navMenu = document.querySelector(".navmenu");

burgermenu.addEventListener("click", ()=> {
    burgermenu.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    burgermenu.classList.remove("active")
    navMenu.classList.remove("active")
}))






//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}