let outputElement = document.getElementById("outputxd");
let lastnumber = 1;

setInterval(function () {
    outputElement.innerHTML += lastnumber * 2 + "<br>";
    lastnumber = lastnumber * 2;
}, 100);

