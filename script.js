window.location.replace("./#last")
let count = 1;
let outputElement = document.getElementById("outputxd");
let lastnumber = 1;

setInterval(function () {
    outputElement.innerHTML += count+". "lastnumber * 2 + "<br>";
    lastnumber = lastnumber * 2;
}, 100);

