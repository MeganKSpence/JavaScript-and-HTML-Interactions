// console.log("You made it to LandscapePotrait.js");

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

function geometry (width, height) { // notice tese parameters
  if (width == height) return 'sqare';
  return (width < height) ? 'portrtait' : 'landscape';
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
  secondNumber = document.getElementById("textfield2").value;

  //validate if user typed a number , odd validation by TRUE conditional
  document.getElementById("validityTest2").innerHTML = alert(testNaN (secondNumber));
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById("large").innerHTML = "Restart bacause I said so." //Change to more appropriate message
  }
  else {
    console.log("What did you say?", geometry (firstNumber, secondNumber)); // deiference between calling functions between calling arguments and sending parameter's, local variables
    document.getElementById("large").innerHTML = "What did you say? " + geometry (firstNumber, secondNumber);
  }
}
