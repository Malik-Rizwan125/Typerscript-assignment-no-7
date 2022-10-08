// 1. Write a ts program to find maximum between two numbers using conditional operator.

// var num1: number = 16;
// var num2: number = 9;

// var result = (num1 >= num2) ? "num1 is greater then num2" : "num2 is greater then num1"
// console.log(result);


// 2. Write a ts program to find maximum between three numbers using conditional operator.


var num1: number = 5;
var num2: number = 7;
var num3: number = 3;

// var result = (num1 >= num2) ? "num1 is greater then num2 " : "num2 is greater then num1 "
// console.log(result)

// var maxNumber: number = num2;

// var result2 = (maxNumber >= num3) ? "maxNumber is greater then num3" : "num3 greater the maxNumber"

// console.log(result2)




// var num1: number = 16;
// var num2: number = 9;
// var num3: number = 99;

// var result=(num1 >= num2)? "num1 is greater then num2":"num2 is greater then num1";

// var maxNum = result;
// var result2 = (maxNum>=num3)? "maxNumber is greater then num3" : "num3 greater the maxNumber"

// console.log(result2)




// 3. Write a ts program to check whether a number is even or odd using conditional operator.

// var num1: number = 46

// var result = (num1 % 2 == 0) ? "This number is even" : "This number is odd"
// console.log(result);


// 5. Write a ts program to check whether character is an alphabet or not using conditional operator.



var alpha: string | null = prompt("Enter the alphabet character")
var alphaString: string = String(alpha)

var alphabet = (alphaString >= 'a' || alphaString <= 'z') ? "This words is alphabet" : "This is not a alphabet"
console.log(alphabet)


