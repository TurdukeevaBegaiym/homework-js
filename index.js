//1
function functionName (b,t) {
  let result = b + t;
  console.log("My name is " + result);
}
functionName("Begaiym " , " Turdukeeva");

//2
function volume (height, radius) {
  let result = (height * 3.14 * radius ** 2) / 3 ;
  console.log ("cylinder volume is " + result);
} 
volume (8, 5);

//3
function word (a) {
  console.log("The string length " + a.length);
}
word ("Hello");

//4
function evenOdd (num) { 
  if (num % 2 === 0) {
    console.log ("num is even " + num )
  }
  else  {
    console.log ("num is odd " + num);
  }
}
evenOdd (5);

//5
function square (n) {
  let sq = n ** 2;
  console.log("The square of this number is " + sq)
}
square (5);

//6
function sqrt (number) {
  console.log (Math.sqrt(number));
}
sqrt (25);

//7
function pentagon (a, b, c, d, e) {
  let result = a + b + c + d + e;
  console.log ("perimeter of a pentagon " + result);
}
pentagon (2,6,8,4,5);


//8
for (let i = 0; i <= 33; i += 3) {
  console.log(i);
}

//10 
let san = 10
for (let i = 0; i <= san; i++) {
  let result = i ** 2;
  console.log (result);
  
}

//12 
for (a = 0; a <= 20; a++) {
  if ( a % 2 === 0) {
    console.log(a);
  }
}
//13 
for (a = 0; a <= 15; a++) {
  if ( a % 2 ==! 0) {
    console.log(a);
  }
}


//14
let students = ["Begaiym", "Asan"]
students.unshift("Myrza", "Saule", "Baitur");
students.push("Jyldyz", "Dameli");

console.log(students);

//15 
let example4 = [1, 8, 5, 6, 4];
for (let i = 0; i < example4.length; i++) {
  if (example4[i] % 2 === 0 ) {
    console.log (example4[i])
  }
  
}
//17 
let example6 = ["i", "like","to", "eat!"];
  let result = "i " + "like " + "to " + "eat! ";
  console.log(result);

//19
let funcName = ["Erjan","Dali","Myrza"];
for (let i = 0; i < funcName.length; i++) {
  console.log(" Hello " + funcName[i] );
}

//20

let example2 = [2, 3, 4, 5];
for (let i = 0; i < example2.length; i++) {
  let result = example2[i] ** 2;
  console.log(result);
}

//21 

