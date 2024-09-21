
const totop = document.getElementsByClassName("red");

const scrolls = window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll
  (".reveal,.left1,.left2,.left3");
  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


// const hiddenElements = document.querySelector(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));

function openNav() {
  document.getElementById("mySidenav").style.width = "80%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}