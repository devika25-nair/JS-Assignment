let a = parseInt(prompt("Enter correct answers (a):"));
let b = parseInt(prompt("Enter correct answers (b):"));
let c = parseInt(prompt("Enter correct answers (c):"));

let score = (3 * a) + b - (2 * c);

if (score<0) score = 0;
if ((a + b + c) > 50)  score -= 10;

let finalStatus = (course >= 60) ? "PASS" : "FAIL";
alert(score + ", " + finalStatus);