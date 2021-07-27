//Inputs and values
let getInputRoomClass = () => document.getElementById("input-room-class").value;
let getInputOcupation = () => document.getElementById("input-ocupation").value;
let getInputNights = () => document.getElementById("input-nights").value;
let getInputParking = () => document.getElementById("input-parking").value;
let getInputSpa = () => document.querySelector(".checkbox-spa").checked;
let totalCost = 0;
let totalDay = 0;

//Function to get total cost
let handleClickTotal = () => {
    let roomClass = getInputRoomClass();
    let ocupation = getInputOcupation();
    let nights = getInputNights();
    let parking = getInputParking();
    let extraSpa = getInputSpa() ? 20 : 0;
    let ocupationModifier = (ocupation === "individual") ? 0.75 : (ocupation === "triple") ? 1.25 : 1;

    totalDay = extraSpa + ((roomClass === "standard") ? 100 : (roomClass === "junior-suite") ? 120 : 150);
    totalCost = (totalDay * nights * ocupationModifier) + (parking * 10);

    document.getElementById("result").innerText = totalCost;
};

//Set event listener for button
document.getElementById("button-calculate").addEventListener("click", handleClickTotal);

//Set event listeners for inputs
document.querySelectorAll("input, select").forEach(field =>
    field.addEventListener("click", handleClickTotal));

//Preventing input type number from decimals
document.querySelectorAll("input[type=number]").forEach(field =>
    field.addEventListener("change",event =>{
        let inputNumber = event.target.value;
        if(!Number.isInteger(inputNumber)) event.target.value = Math.ceil(inputNumber);
    }));

