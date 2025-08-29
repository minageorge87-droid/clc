document.getElementById("clc").onclick = function() {
    var x = +(document.getElementById("x").value);
    var y = +(document.getElementById("y").value);
    var o = document.getElementById("o").value;
}
if (o == "+") {
    console.log(x + y);
} else if (o == "-") {
    console.log(x - y);
} else if (o == "*") {
    console.log(x * y);
} else if (o == " / ") {
    console.log(x / y);
}