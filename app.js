console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
       continue;
    }
    else {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++){
    if (i % 3 ==0) {
        console.log(`${i}: FIZZ`);
    }
    if (i % 5 == 0) {
        console.log(`${i}: BUZZ`);
    }
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i}: FIZZBUZZ`);
    }

}

// Exercise 3 Section
// console.log("EXERCISE 3 - While Loop ODDS:\n==========\n");
// let i = 1; 

// while (i < 100){
//     if (i % 2 !== 0){
//         console.log(i);
//     } 
//     i++;    
// }

// console.log("EXERCISE 3 - Do/While ODDS:\n==========\n");
//let i = 1;
// do {
//     if (i % 2 !== 0){
//         console.log(i);
//     }
//     i++;
// } while (i < 100);

console.log("EXERCISE 3 - FizzBuzz While Loop:\n==========\n");
let x = 1;

while (x < 100){
    if (x % 3 == 0) {
        console.log(`${x}: FIZZ`);
    }
    if (x % 5 == 0) {
        console.log(`${x}: BUZZ`);
    }
    if (x % 3 == 0 && x % 5 == 0){
        console.log(`${x}: FIZZBUZZ`);
    }
    x++;
}

console.log("EXERCISE 3 - FizzBuzz Do While Loop:\n==========\n");
let j = 1;
do {
    if (j % 3 == 0) {
        console.log(`${j}: FIZZ`);
    }
    if (j % 5 == 0) {
        console.log(`${j}: BUZZ`);
    }
    if (j % 3 == 0 && j % 5 == 0){
        console.log(`${j}: FIZZBUZZ`);
    }
    j++;
} while (j <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
var n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

var i = 0;

for (; i <= n; i++){
    if (i == value){
        console.log(`Found value ${value}!`);
        break;
    }
}

if (i != value){
    console.log(`Did not find value! ${value}`);
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
var n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`fizzDivisor: ${fizzDivisor}`);
console.log(`buzzDivisor: ${buzzDivisor}`);
console.log(`n: ${n}`);
console.log(`start: ${start}`);

for (let i = start; i <= n; i++){
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log(`${i} FIZZBUZZ`);        
    }
    else if (i % fizzDivisor == 0){
        console.log(`${i} FIZZ`);
    }
    else if (i % buzzDivisor == 0){
        console.log(`${i} BUZZ`);
    }  
}
