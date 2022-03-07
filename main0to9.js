"use strict";

function clearActive() {
    for (var a in elements) for (var b in elements[a].classList) "active" === elements[a].classList[b] && elements[a].classList.remove("active");
}

function addActive(a) {
    elements[a].classList.add("active");
}

function printSequence(a) {
    for (var b = sequence[a], c = 0; c < b.length; c++) "1" === b[c] && addActive(c);
}

function stepSequence() {
    clearActive(), counter >= sequence.length && (counter = 0), printSequence(counter), 
    document.getElementById("display").innerHTML = sequence[counter], counter++, setTimeout(stepSequence, frequency);
}

var frequency = 1e3, sequence = ["0000000", "0101000", "0110111", "1010111", "1011001", "1001111", "1101111", "1011100", "1111111", "1011111"], elements = document.getElementById("shape").getElementsByTagName("*"), counter = 0;

window.onload = function() {
    stepSequence();
};