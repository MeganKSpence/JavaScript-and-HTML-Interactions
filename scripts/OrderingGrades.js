console.log("You made it to the OrderingGrades.js");

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

function geometry (marks) { // notice tese parameters
  const average = geometry2 (marks);
  if (average > 89) return 'A';
  if (average > 79) return 'B';
  if (average > 69) return 'C';
  if (average > 59) return 'D';
  return 'F';
}
function geometry2 (marks) {
  let sum = 0;
  for (let mark of marks) sum += mark;
  return sum / marks.length;
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
    document.getElementById("large").innerHTML = "Please input a real number, no text is to be written" //Change to more appropriate message
  }
  else {
    console.log("My grade is: ", geometry (firstNumber, secondNumber), "because my average is: " + geometry2 (firstNumber, secondNumber)); // deiference between calling functions between calling arguments and sending parameter's, local variables
    document.getElementById("large").innerHTML = "My grade is: " + geometry (firstNumber, secondNumber), "because my grade is: " + geometry2(firstNumber, secondNumber);
  }
}
