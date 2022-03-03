const nav = document.querySelector(".nav-links");
const minMenu = document.querySelector(".min-menu");
const links = nav.querySelectorAll("a");

minMenu.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  minMenu.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.toggle("nav-open");
    minMenu.classList.toggle("toggle");
  })
})

window.onload = function () {
  let images = document.getElementsByClassName("pic");
  for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = showRender;
    images[i].onmouseout = showDraft;
  }
};

function showRender(event) {
  let image = event.target;
  let name = image.id;
  image.src = "./img/" + name + "R.png";
}

function showDraft(event) {
  let image = event.target;
  let name = image.id;
  image.src = "./img/" + name + "D.png";
}
