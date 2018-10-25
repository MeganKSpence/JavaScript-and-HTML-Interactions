console.log("You made it to Modulus.js");

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

function geometry (number1) { // tried to figure out to make my origional code work, but couldn't. So I used this simple code because I couldn't put nothing
  even = number1 % 2
    if (even === 0) return "this number is even";
    else if (even === 1) return "this number is odd";
  }
         // notice tese parameters


 // This coding illustrates the advanced meathod
function main () {

  let firstNumber, text;

  //get the value of the Width Input Field, id="textfield1"
  firstNumber = document.getElementById("textfield1").value;

  //validate if user typed a number, odd validation by TRUE conditional
  document.getElementById("validityTest1").innerHTML = alert(testNaN (firstNumber));
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);


  if (stop == true) {
    document.getElementById("large").innerHTML = "Please input a real number, no text is to be written" //Change to more appropriate message
  }
  else {
    console.log("What did you say?", geometry (firstNumber)); // deiference between calling functions between calling arguments and sending parameter's, local variables
    document.getElementById("large").innerHTML = "What did you say? " + geometry (firstNumber);
   }
 }
