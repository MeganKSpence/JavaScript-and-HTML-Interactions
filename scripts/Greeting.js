console.log("Welcome to the Greeting.js!");

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

function geometry (hour) { // notice tese parameters
  if (hour < 12) return "good morning";
  else if (hour < 19) return "good afternoon";
  else if (hour >= 19) return "good evening";
}

// This coding illustrates the advanced meathod
function main () {

  let firstNumber, text;

  //get the value of the Width Input Field, id="textfield1"
  firstNumber = document.getElementById("textfield1").value;

  //validate if user typed a number, odd validation by TRUE conditional
  document.getElementById("valadityTest1").innerHTML = alert( testNaN (firstNumber));
  document.getElementById("valadityTest1").innerHTML = testNaN (firstNumber);

  // get the value of the Hieght Input Field, id="textfield2"
  console.log(stop);

  if (stop == true) {
    document.getElementById("large").innerHTML = "Restart bacause I said so." //Change to more appropriate message
  }
  else {
    console.log("What did you say?", geometry (firstNumber)); // deiference between calling functions between calling arguments and sending parameter's, local variables
    document.getElementById("large").innerHTML = "What did you say? " + geometry (firstNumber);
  }
}
