//Define variables
let partialResult = 0;
const regExp = /^\d+([\+\-\*\/]\d+)*$/;

//Function to get input
let getInput = () => document.getElementById("input-number").value;

//Function to check input
let checkInput = () => {
    let inputCheck = getInput();
    if (inputCheck.length == 0) {
        setResult("Introduce un número");
        setBackground("lightcoral");
        return false;
    } else if (!inputCheck.match(regExp)) {
        setResult("Error en la operación");
        setBackground("lightcoral");
        return false;
    } else {
        setResult("");
        recalculate();
        setBackground("ghostwhite");
        return true;
    }
};

//Function to recalculate partial result
let recalculate = () => partialResult = Function('return ' + getInput())();

//Function to set background
let setBackground = (color) =>
    document.getElementById("result").setAttribute("style", "background-color: " + color);

//Function to set result
let setResult = (result) =>
    document.getElementById("result").innerText = result;

//Function to add operator
let handleClickOperation = event => {
    if (checkInput()) {
        document.getElementById("input-number").value += event.target.innerText;
        document.getElementById("input-number").focus();
    }
};

//Function to get result
let handleClickResult = () => {
    if (checkInput()) {
        setResult(partialResult);
        setBackground("lightgreen");
    }
};

//Set event listeners for buttons
document.querySelectorAll(".button-operation").forEach(button =>
    button.addEventListener("click", handleClickOperation));
document.getElementById("button-res").addEventListener("click", handleClickResult);

// //Set event listener for input enter key press
document.getElementById("input-number").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleClickResult();
    }
});