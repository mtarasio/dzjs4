function showArg() {
   console.log("Кількість аргументів: " + arguments.length);
}

showArg();
showArg('hello', 'world');



console.log("----------------------------------------------")

function getNumbers(a, b) {
   if (a < b) {
     return -1;
   } else if (a > b) {
     return 1;
   } else {
     return 0;
   }
 }

console.log("Перше число менше, ніж друге значить: " + getNumbers(1, 2));  
console.log("Перше число більше, ніж друге значить: " + getNumbers(2, 1));  
console.log("Числа рівні значить: " + getNumbers(2, 2));   


console.log("----------------------------------------------")




function factorial(n) {
   if (n === 0) {
     return 1;
   } else {
     return n * factorial(n - 1);
   }
 }

console.log("Факторіал для 0 ----" + factorial(0));   
console.log("Факторіал для 1 ----" + factorial(1));   
console.log("Факторіал для 2 ----" + factorial(2));   
console.log("Факторіал для 5 ----" + factorial(5)); 

console.log("----------------------------------------------")

function getDigits(a, b, c) {
   return Number(`${a}${b}${c}`);
 }

console.log("Три окремі числа 5, 10, 15 пертворюються в одне: " + getDigits(a=5, b=10, c=15));




console.log("----------------------------------------------")

function getSquare(length, width = length) {
   return length * width;
 }
console.log("Площа прямокутника зі сторонами 40 і 58: ----" + getSquare(40, 58));   
console.log("Площа квадрата зі стороною 3: ----" + getSquare(3));      
console.log("Площа квадрата зі стороною 10: ----" + getSquare(10));      