// JavaScript source code
var lik = document.getElementById("lik");
var blok = document.getElementById("blok");
function skok() {
    if (lik.classList != "animate") { 
        lik.classList.add("animate");
    }
    setTimeout(function () {
        lik.classList.remove("animate");
    }, 500)
}

var provjera = setInterval(function () {
    var likTop =
        parseInt(window.getComputedStyle(lik).getPropertyValue("top"));
    var blokLeft =
        parseInt(window.getComputedStyle(blok).getPropertyValue("left"));
    if (blokLeft < 20 && blokLeft > 0 && likTop >= 130) {
        blok.style.animation = "none";
        blok.style.display = "none";
        alert("izgubili ste.");
    }
}, 10);0