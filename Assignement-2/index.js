const prompt = require('prompt-sync')();

function calculateDifference(a,b) {
    return a-b;
}

let a = parseFloat(prompt("Enter 1st argument\n"));
let b = parseFloat(prompt("Enter 2nd argument\n"));

let c = calculateDifference(a,b);

console.log(c);


function isOdd(m) {
    if(m%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let x = parseFloat(prompt("Enter a number:\n"))

let y = isOdd(x);

console.log(y);


function findMin(arr) {
    return Math.min(...arr);
}


let input1 = prompt("Enter an array: ");
let numbers1 = input.split(' ').map(num => parseFloat(num.trim()));

let minNumber = findMin(numbers1);

console.log(`The smallest number is: ${minNumber}`);


function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

let input2 = prompt("Enter an array: ");
let numbers2 = input.split(' ').map(num => parseFloat(num.trim()));

let evenNumbers = filterEvenNumbers(numbers2);

console.log(`New Array: ${evenNumbers}`);  



function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}


let input3 = prompt("Enter an array: ");
let numbers3 = input.split(' ').map(num => parseFloat(num.trim()));

let sortedNumbers = sortArrayDescending(numbers3);

console.log(`Sorted array in descending order: ${sortedNumbers}`); 




function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

let input4 = prompt("Enter a string: ");

let result = lowercaseFirstLetter(input4);
console.log(`Result with first letter lowercased: ${result}`);


function findAverage(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum / arr.length;
}


let input5 = prompt("Enter an array: ");
let numbers5 = input5.split(' ').map(num => parseFloat(num.trim())); 


let average = findAverage(numbers5);
console.log(`The average is: ${average}`);



function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let year = parseInt(prompt("Enter a year: "));

if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

