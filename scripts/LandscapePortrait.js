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
  firstNumber = document.getElementByID("textfield1").value;

  //validate if user typed a number, odd validation by TRUE conditional
  document.getElementByID("valadityTest1").innerHTML = alert( testNaN (firstNumber));
  document.getElementByID("valadityTest1").innerHTML = testNaN (firstNumber);

  // get the value of the Hieght Input Field, id="textfield2"
  secondNumber = document.getElementByID("textfield2").value;

  //validate if user typed a number , odd validation by TRUE conditional
  document.getElementByID("valadityTest2").innerHTML = alert( testNaN (secondNumber));
  document.getElementByID("valadityTest2").innerHTML = testNaN (secondNumber);

  console.log(stop);

  if (stop == true) {
    document.getElementByID("large").innerHTML = "Restart bacause I said so." //Change to more appropriate message
  }
  else {
    console.log("What did you say?", geometry (firstNumber, secondNumber)); // deiference between calling functions between calling arguments and sending parameter's, local variables
    document.getElementByID("large").innerHTML = "What did you say? " + geometry (firstNumber, secondNumber);
  }
}
