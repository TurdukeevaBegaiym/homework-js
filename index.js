function functionName (b,t) {
  let result = b + t;
  console.log("My name is " + result);
}
functionName("Begaiym " , " Turdukeeva");


function volume (height, radius) {
  let result = (height * 3.14 * radius ** 2) / 3 ;
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

function square (n) {
  let sq = n ** 2;
  console.log("The square of this number is " + sq)
}
square (5);

function sqrt (number) {
  console.log (Math.sqrt(number));
}
sqrt (25);

function pentagon (a, b, c, d, e) {
  let result = a + b + c + d + e;
  console.log ("perimeter of a pentagon " + result);
}
pentagon (2,6,8,4,5);


for (let i = 0; i <= 33; i += 3) {
  console.log(i);
}

//11
let d = (1, 25)
let total = 0;
for (let i = 0 ; i < 25; i++){
  let n = d[i];
  total = total + d;

}
console.log (total);

//14
let students = ["Begaiym", "Asan"]
students.unshift("Myrza", "Saule", "Baitur");
students.push("Jyldyz", "Dameli");

console.log(students);


//19
let funcName = ["Erjan","Dali","Myrza"];
for (let i = 0; i < funcName.length; i++) {
  console.log= ("Hello" + funcName[i] );
}