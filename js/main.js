// $('button').click(function(){
//   $(this).toggleClass('close');
// });

const mainNav = document.querySelector(".main-nav")
const headerBurger = document.querySelector(".lines-button")

function toggleMenu() {
  this.classList.toggle("close")
  mainNav.classList.toggle("toggle-nav")
}

headerBurger.addEventListener("click", toggleMenu)
