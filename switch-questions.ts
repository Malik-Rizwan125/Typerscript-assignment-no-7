
// 1. Write a ts program to print day of week name using switch case.


// var day: string | null = prompt("Enter any number 0 to 7");
// var weakDay: number = Number(day)
// switch (weakDay) {
//     case 1: console.log('Monday')
//         break;
//     case 2: console.log('Tuesday')
//         break;
//     case 3: console.log('Wendesday')
//         break;
//     case 4: console.log('Tuesday')
//         break;
//     case 5: console.log('Friday')
//         break;
//     case 6: console.log('Saturday')
//         break;
//     case 7: console.log('Sunday')
//         break;

//     default: {
//         console.log("Enter the right number");
//     }
// }




// 2. Write a ts program print total number of days in a month using switch case.



// var day: string | null = prompt("Total number of day in a month");

// var totalDay: number = Number(day)

// switch (totalDay) {
//     case 1: {
//         console.log("31 day in junuary");
//         break;
//     }
//     case 2: {
//         console.log("28 day in Fabray");
//         break;
//     }
//     case 3: {
//         console.log("31 day in March");
//         break;
//     }
//     case 4: {
//         console.log("30 day in april");
//         break;
//     }
//     case 5: {
//         console.log("31 day in May");
//         break;
//     }
//     case 6: {
//         console.log("30 day in June");
//         break;
//     }
//     case 7: {
//         console.log("31 day in july");
//         break;
//     }
//     case 8: {
//         console.log("31 day in Augest");
//         break;
//     }

//     case 9: {
//         console.log("30 day in stember");
//         break;
//     }
//     case 10: {
//         console.log("31 day in October");
//         break;
//     }
//     case 11: {
//         console.log("30 day in November");
//         break;
//     } case 12: {
//         console.log("31 day in December");
//         break;
//     }
//     default: {
//         console.log("enter the correct number")
//     }

// }


// 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.

// var alpha: string | null = prompt("Enter any alphabet")
// var alphaWords: string = String(alpha)

// switch (true) {
//     case (alphaWords == "a" || alphaWords == "e" || alphaWords == "i" || alphaWords == "o" || alphaWords == "u"): {
//         console.log(`This ${alphaWords} alphabet is constant`)
//         break;
//     }
//     case (alphaWords == "A" || alphaWords == "E" || alphaWords == "I" || alphaWords == "O" || alphaWords == "U"): {
//         console.log(`This ${alphaWords} alphabet is constant`)
//         break;
//     }
//     case (alphaWords > "a" || alphaWords < 'z' || alphaWords > "A" || alphaWords < 'Z'): {
//         console.log(`This ${alphaWords} alphabet is vewol`)
//     }
// }


// 4. Write a ts program to find maximum between two numbers using switch case.



// var num1: string | null = prompt("Enter the number num1");
// var numValue1: number = Number(num1);
// var num2: string | null = prompt("Enter the number num2");
// var numValue2: number = Number(num2);

// switch (true) {

//     case (numValue1 > numValue2): {
//         console.log("num1 is greater then num2 and num1 is :", num1);
//         break;
//     }
//     case (numValue1 < numValue2): {
//         console.log("num2 is greater then num1 and num2 is :", num2);
//         break;
//     }

//     case (numValue1 == numValue2): {
//         console.log("num1 is equel to num2");
//         break;
//     }
// }


// 5. Write a ts program to check whether a number is even or odd using switch case.

// var num1: string | null = prompt("Enter any number")

// var findNumber: number = Number(num1)

// switch (true) {
//     case (findNumber % 2 == 0): {
//         console.log(`The find ${findNumber} number is even`)
//         break;
//     }
//     default: {
//         console.log(`The find ${findNumber} number is odd`)
//     }
// }


// 6. Write a ts program to check whether a number is positive, negative or zero using switch case.

// var num1: string | null = prompt("Enter eny number here")
// var findNumber: number = Number(num1)

// switch (true) {
//     case (findNumber >= 0): {
//         console.log(`This ${findNumber} is positive`)
//         break;
//     }
//     case (findNumber <= 0): {
//         console.log(`This ${findNumber} is negative`)
//         break;
//     }
//     case (findNumber == 0): {
//         console.log(`This ${findNumber} Expression is equel to zero`)
//         break;
//     }
// }

// 8. Write a ts program to create Simple Calculator using switch case.

// var operator: string | null = prompt("Enter operator like +, -, /, * and %")
// var operatorExpression = operator;

// var num2: string | null = prompt("Enter any number")
// var numTwo: number = Number(num2)

// var num3: string | null = prompt("Enter any number")
// var numThree: number = Number(num3)

// var result: number;


// switch (true) {
//     case (operatorExpression == '+'): {
//         result = numTwo + numThree;
//         console.log(result)
//         break;
//     }
//     case (operatorExpression == '-'): {
//         result = numTwo + numThree;
//         console.log(result)
//         break;
//     }
//     case (operatorExpression == '*'): {
//         result = numTwo + numThree;
//         console.log(result)
//         break;
//     }
//     case (operatorExpression == '/'): {
//         result = numTwo + numThree;
//         console.log(result)
//         break;
//     }
//     case (operatorExpression == '%'): {
//         result = numTwo + numThree;
//         console.log(result)
//         break;
//     }
//     default: {
//         console.log("Enter correct number and opertor")
//     }

// }
