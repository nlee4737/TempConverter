var result;

function registerOnClickHandlers() {
    document.getElementById("convert").onclick = showResult;
}

function pageFinishedLoading() {
    result = document.getElementById("result");
}

function showResult() {
    var convertedTemp;
    var userInput = parseFloat(document.getElementById("temp").value);
    console.log(userInput);
    if (document.getElementById("toF").checked == true) {
        convertedTemp = (userInput * (9/5)) + 32;
    } else {
        convertedTemp = (userInput - 32) * 5/9;
    }
    if (convertedTemp) {
        result.value = convertedTemp;
    } else {
        alert("Please enter a number, beeeeeitch");
    }
}