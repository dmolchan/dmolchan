// toglge menus function
function toggleMenu() {
  this.classList.toggle("close")
  document.querySelector(".main-nav").classList.toggle("toggle-nav")
}
document.querySelector(".lines-button").addEventListener("click", toggleMenu)


// tabs gallery triggers
function openLink(evt,animName) {
  tabContent = document.querySelectorAll(".content")
  tabLinks = document.getElementsByClassName("nav-item");
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }
  for (x = 0; x < tabLinks.length; x++) {
    tabLinks[x].style.display = "flex";
  }
  document.getElementById(animName).style.display = "flex";
} 

// function to set a specific theme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark themes
function toggleTheme() {
  if(localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

 // Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
  } else {
      setTheme('theme-light');
  }
})();