// JavaScript source code
var blok = document.getElementById("blok");
var rupa = document.getElementById("rupa");
var lik = document.getElementById("lik");
var skakanje = 0;
var brojac = 0;

rupa.addEventListener('animationiteration', () => {
    var random = -((Math.random() * 300) + 150);
    rupa.style.top = random + "px";
    brojac++;
});

setInterval(function () {
    var likTop = parseInt(window.getComputedStyle(lik).getPropertyValue("top"));
    if (skakanje == 0) {
        lik.style.top = (likTop + 2) + "px";
    }
    var BlokLeft = parseInt(window.getComputedStyle(blok).getPropertyValue("left"));
    var rupaTop = parseInt(window.getComputedStyle(rupa).getPropertyValue("top"));
    var cTop = -(500 - likTop);
    if ((likTop > 480) || ((BlokLeft < 20) && (BlokLeft > -50) && ((cTop < rupaTop) || (cTop > rupaTop + 130)))) {
        alert("Igra završena. Rezultat: " + (brojac - 1));
        lik.style.top = 100 + "px";
        brojac = 0;
    }
}, 10);

function skok() {
    skakanje = 1;
    let BrojSkokova = 0;
    var IntervalSkoka = setInterval(function () {
        var likTop = parseInt(window.getComputedStyle(lik).getPropertyValue("top"));
        if ((likTop > 6) && (BrojSkokova < 15)) {
            lik.style.top = (likTop - 5) + "px";
        }
        if (BrojSkokova > 20) {
            clearInterval(IntervalSkoka);
            skakanje = 0;
            BrojSkokova = 0;
        }
        BrojSkokova++;
    }, 10);
}