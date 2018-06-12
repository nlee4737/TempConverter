var fahr;
var cel;
var result = document.getElementById("result");
//var convertToF = CtoF();
//var convertToC = FtoC();

var temp = document.getElementById("tempForm");
temp = temp.value;
temp = parseFloat(temp);

function convertToF() {
    if (document.getElementById("toF")) {
    document.getElementById("convert").onclick = CtoF();
    }
}    
function convertToC() {
    if (document.getElementById("toC")) {
    document.getElementById("convert").onclick = FtoC();
    }
}

function CtoF() {
        cel = (temp - 32) * 5/9;
        result.value = writeln(cel);
}
function FtoC() {
        fahr = (temp * (9/5)) + 32;
        result.value = writeln(fahr);
}

//if (document.getElementById("toF")) {
//    document.getElementById("convert").onclick = convertToF;
//} else if (document.getElementById("toC")) {
//    document.getElementById("convert").onclick = convertToC;
//} else {
//    document.getElementById("result").value = "no radio button";
//}
