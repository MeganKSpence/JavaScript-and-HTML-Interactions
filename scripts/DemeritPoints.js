// console.log("You made it to DemeritPoints.js");

let stop = false;

function testNaN (number) {
  console.log(stop);
  if ( isNaN (number)) {
    stop = true;
    return "Type a Real Number"
  } else {
    return "Input validated"
  }
}

function geometry (speed) { // notice tese parameters
  const speedLimit = 70;
  let kmPerPoint = 5;

  if (speed <= 70) return "you are going at a good speed";

  let demerits = Math.floor((speed - speedLimit) / kmPerPoint);
  if (demerits > 11) return "license suspended"
  if (demerits <= 11 && demerits > 0) return "you are going to fast, slow down"

}

// This coding illustrates the advanced meathod
function main () {

  let firstNumber, secondNumber, text;

  //get the value of the Width Input Field, id="textfield1"
  firstNumber = document.getElementById("textfield1").value;

  //validate if user typed a number, odd validation by TRUE conditional
  document.getElementById("validityTest1").innerHTML = alert(testNaN (firstNumber));
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  // get the value of the hieght Input Field, id="textfield2"

  if (stop == true) {
    document.getElementById("large").innerHTML = "Restart bacause I said so." //Change to more appropriate message
  }
  else {
    console.log( geometry (firstNumber)); // deiference between calling functions between calling arguments and sending parameter's, local variables
    document.getElementById("large").innerHTML = geometry (firstNumber);
  }
}
