function functionName (b,t) {
  let result = b + t;
  console.log("My name is " + result);
}
functionName("Begaiym " , " Turdukeeva");


function volume (height, radius) {
  let result = height * 3.14 * radius ** 2 / 3 ;
  console.log ("cylinder volume is " + result);
} 
volume (8, 5);


function word (a) {
  console.log("The string length " + a.length);
}
word ("Hello");

function evenOdd (num) { 
  if (num % 2 === 0) {
    console.log ("num is even " + num )
  }
  else  {
    console.log ("num is odd " + num);
  }
}
evenOdd (5);