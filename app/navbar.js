const btn = document.querySelector(".menuB");
const linkMenuClose = document.querySelectorAll(".linkMenuClose")
const linkMenuOpen = document.querySelectorAll(".linkMenuOpen")
const BtnOpen = document.querySelector(".menuBOpen");
btn.addEventListener("click", menu);

function menu() {
    for (var i = 0; i < linkMenuClose.length; i++) {
        linkMenuClose[i].classList.toggle('linkMenuOpen')
    }
    btn.classList.toggle('menuBOpen')

}