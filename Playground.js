// // SECTION -  variables.

// /*
// "learnt" about const, let and var and that var isnt used anymore because it is an old version of const and let combined
// :)
// (already knew about this stuff)
// */

// //NOTE - assigns a chosen variable (num1) to a chosen value (10) and cannot be changed.
// const pi = 3.14
// console.log (pi)

// //NOTE - assigns a chosen variable (num2) to a chosen value (20) and the value can be changed.
// let num2 = 20
// num2 = 34
// console.log (num2)

// //NOTE - assigns a chosen variable (num3) to a chosen value (30) and can be changed (not used often anymore).
// var num3 = 30
// console.log (num3)

// const fullName = "William Busbridge"
// console.log(fullName)

// const studyplace = "NMIT"
// console.log(studyplace)


// //NOTE - concatenation = + " " +.
// console.log(fullName + " " + studyplace)

// console.log(`My full name is ${fullName} and I study at ${studyplace}`)

// const working = true
// const notWorking = false

// if (working) {
//     console.log(fullName)
// } else {
//     console.log("Die")
// }

// if (pi === 3.14) {
//     console.log(fullName)
// } else {
//     console.log("Die")
//}

// // SECTION -  numbers.

// let a = 2
// let result
// // if() {} else {}
// if (a > 0) {
//     result = "positive"
// } else {
//     result = "Not Positive"
// }
// console.log (result)

// // SECTION -  clicker.

// const clickText = document.querySelector("#clickcount")

// let clicks = 0;

// function add() {
//     clicks++;
//     clickText.innerText = "Clicks: " + clicks
// }

// //SECTION -  arrays.

// //NOTE - arrays are a special type of objects that can be accessed through numbers from zero up to N-1.
// let arr = [] 

// arr = ['Will', 1, 'food', 100]
// console.log(arr[2])

// //NOTE - push() & pop().
// //NOTE - push() = adds an item to the end of an array.
// arr.push('joe')
// console.log(arr)

// //NOTE - pop() = removes an item from the end of an array.
// let lastItem = arr.pop()
// console.log(lastItem)
// console.log(arr)

// //NOTE - unshift() = adds an item to the beginning of an array.
// arr.unshift('apples')
// console.log(arr)

// //NOTE - shift() = removes an item from the beginning of an array.
// let firstItem = arr.shift()
// console.log(firstItem)
// console.log(arr)

// //ANCHOR - JavaScript for loop.
// //NOTE - the best way to iterate any array mathmatically through a for loop.
// console.log(arr.length)
// for(let i = 0; i < arr.length; i++){
//     console.log(i, arr[i])
// }

// //ANCHOR - Javascript iterators.
// let a = [-5, -4, -3]
// let b = 0
// let c = [12, 13, 14]

// //NOTE - concat() = method used to join two or more arrays.
// let result = a.concat(b, c)
// console.log(result)


// //NOTE - making program get even and odd numbers
// let numbers = [2,4,7,8,9]
// let isEven = (num) => {
//     if(num % 2 == 0) {
//         console.log(num + ' is even number')
//         return
//     } else {
//         console.log(num + ' is odd number')
//         return false
//     }
// }
// console.log(isEven(numbers))

// //NOTE - every() = Determines whether all the members of an array satisfy the specified test.
// numbers.every(isEven)

// //NOTE - some() = Determines whether the specified callback function returns true for any element of an array.
// numbers.some(isEven)

// //ANCHOR - callback function.
// for (let j = 0; j < numbers.length; j++) {
//     let temp = numbers[j]
//     if (temp % 2 == 0) {
//         console.log(temp + ' is even number')
//     } else {
//         console.log(temp + ' is odd number')
//     }
// }

// //SECTION - functions.

// function greeting() {
//     return console.log('Hello World!')
// }
// greeting()


// //TODO - Write a function that adds any two numbers and returns the result.
// function sum(a,b) {
//     return a+b
// }
// console.log(sum(2,3))

// //TODO - Write a function that takes an array, check whether the sum of its elements is even or odd, the value should return "even" or "odd".
// function checkArraySum(arr) {
//     let sum = 0
//     for (i = 0; i < arr.length; i++) {
//         	sum += arr[i]
//     }

//     if(sum % 2 == 0) {
//         return 'even'
//     } else {
//         return 'odd'
//     }
// }
// console.log(checkArraySum([0, 1, 5]))

// //TODO - Write a function that an array of items returns only integers.
// //NOTE - array = ["will", 5, 6, 2, "pizza"] --> [5, 6, 2].
// //NOTE - declare function and nammed it.
// function onlyIntegers(arr) {
//     //NOTE - declared variable integer using let to an empty array.
//     let integer = []
//     //NOTE - stared for loop so it can run through the array finding all the integers.
//     for(let i = 0; i < arr.length; i++) {
//         //NOTE - uses the object "Number" with the attached functionality "isInteger" to search through all the array finding all the integers and returns a boolean value.
//         if(Number.isInteger(arr[i])) {
//             //NOTE - adds all these numbers found in the array to the end of the empty array we made earlier up.
//             integer.push(arr[i])
//             //NOTE - end of if.
//         }
//         //NOTE - end of for.
//     }
//     //NOTE - returns our variable called integer.
//     return integer
// }
// //NOTE - runs onlyIntegers function and prints out the array written in the parrameter.
// console.log(onlyIntegers(["will", 5, 6, "dog", 2, "pizza", 8]))

// //TODO - Write a function that takes an array with numbers and return an array with the elements multiplied by 2.
// //NOTE - arrayByTwo([2,5,4]) --> [4,10,8].
// function operationMultiply(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] *= 2
//     }
//     return arr
// }
// console.log(operationMultiply([3, 4, 2, 6]))

// //TODO - Write the above multiplication stuff in one line.
// const arrayByTwo = (arr) => arr.map(el => el * 2)
// console.log(arrayByTwo([2,5,4]))

// //SECTION - Game.
// //TODO - Create a function which takes two strings (p1 & p2) ad aruguments and returns a string stating the winner (Rock, Paper or Scissors).

// //ANCHOR - Game consitions.
// //NOTE - If p1 wins return the string "The winner is p1".
// //NOTE - If p2 wins return the string "The winner is p2". 
// //NOTE - if they are the same then return "Its a draw".

// function rps(p1, p2) {
//     //NOTE - Draw.
//     if(p1 === p2) return 'It\'\s a draw'
//     //NOTE - P1 Win.
//     else if (p1 === 'Rock' && p2 === 'Scissors') return 'The winner is p1'
//     else if (p1 === 'Paper' && p2 === 'Rock') return 'The winner is p1'
//     else if (p1 === 'Scissors' && p2 === 'Paper') return 'The winner is p1' 

//     //NOTE - P2 Win.
//     else return 'The winner is p2'
// }
// console.log (rps('Paper', 'Paper'))

// //ANCHOR - ES6 JavaScript.
// function rpsTwo(p1, p2) {
//     let obj = {
//         Rock: 'Sciccors',
//         Scissors: 'Paper',
//         Paper: 'Rock'
//     }
//     return p1 === p2 ? 'It\'\s a draw' : obj[p1] === p2 ? 'The winer is P1' : 'The winner is P2'
// }

// console.log(rpsTwo('Paper', 'Scissors'))

// //ANCHOR - JS built in function includes().
// function rpsThree(p1, p2) {
//     const wins = ['RockScissors', 'PaperRock', 'ScissorsPaper']

//     //NOTE - this line says: if the variable p1 is the exact same as the variable p2 it prints out "It's a draw".
//     //NOTE - otherwise if it is they are not the same then it adds them together and says the winner is p1 or p2.
//     return p1 === p2 ? 'It\'\s a draw' : `The winner is ${wins.includes(p1 + p2) ? 'p1' : 'p2'}`
// }

// console.log(rpsThree('Paper', 'Rock'))

// //SECTION - own function creation.
// //TODO - Create a function that takes an array and return the types of the elements (data types) in a new array.
// //NOTE - ex: arrTypes([1,3, "Ali", []]) -> ["number", "number", "string", "object"].
// function returnElement(arr) {
//     let array = []
//     for (let i = 0; i < arr.length; i++) {
//         array[i] = typeof(arr[i])
//     }
//     return array
// }
// console.log(returnElement([1,3, "Ali", []]))

// //TODO - Compact the above.
// function returnElement2(arr) {
//     let array2 = []
//     for (let i = 0; i < arr.length; i++) {array2[i] = typeof(arr[i])} return array2
// }
// console.log(returnElement2([1,3, "Ali", []]))

// //TODO - write the compacted in ES6.
// //NOTE - .map() function creates a new array with the results of calling a provided function on every element in the calling array.
// const arrTypesNew = arr => arr.map(x => typeof x)
// console.log(arrTypesNew([1,3, "Ali", []]))

// //TODO - Create a function that takes 2-D arrays and returns the sum on min values in each row.
// /* NOTE - 2-D array

// ex: sumMinArrays([
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
// ])

// output -> 1+6+11 = 18
// */

// function sumMinArrays(arr) {
//     let sumTotal = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let y = arr[i][0]

//         for (let x = 0; x < arr[i].length; x++) {
//             if (y > arr[i][x]) {
//                 y = arr[i][x]
//             }
//         }
//         sumTotal += y
//     }
    
//     return sumTotal
// }
// console.log([sumMinArrays([
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
// ])])

// //TODO - above in ES6
// const sumMinArraysNew = arr => arr.reduce((a, b) => a + Math.min(...b),0)
// console.log([sumMinArraysNew([
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
// ])])
// //NOTE - reduce() = 
// //NOTE - ... = 
// //NOTE - Math.min() = 

// //TODO - Create an function that takes an array and return duplicate numbers in a new array
// //NOTE - ex: arraysDuplicateNumbers([1,2,3,4,5,6,5,1]) -> [5,1]
// //NOTE - ES5 - Not Working
// function duplicatedNumber(arr) {
//     const newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let x = i + 1; x < arr.length; x++) {
//             if (arr[i] === arr[x] && !newArray.includes(arr[1])) {
//                 newArray.push(arr[i])
//             }
//         }
//     } 
//     return newArray
// }
// console.log(duplicatedNumber([1,2,3,4,5,6,5,1]))

// //NOTE - ES6 - filters through the numbers in the console.log array looking for all the duplicate numbers
// const ArrayDuplicateNumbers = arr => (
//     arr= [...new Set([...arr.filter(num => arr.indexOf(num) !== arr.lastIndexOf(num))])].sort((a,b) => a-b), arr.length ? arr: null
// )
// console.log(ArrayDuplicateNumbers([1,2,3,4,5,6,5,1]))

// //TODO - Create a function that takes an array of numbers or letters and return a string.
// //NOTE - arrayToString([6,7,"Ali","Sonny",10]) -> ""
// function arrayToString(arr) {
//     let result = ""
//     for (let i = 0; i < arr.length; i++) {
//         result = result + arr[i]
//     }
//     return result
// }
// console.log(arrayToString([6,7,"Ali","Sonny",10]))

// //TODO - Create a function that takes an array with numbers, transform that array into a mirror.
// //NOTE - arrayToMirror([0,2,4,6,8]) output -> [0,2,4,6,8,6,4,2,0]
// //NOTE - ES5
// function arrayToMirror(arr) {
//     for (let i = arr.length - 2; i >= 0; i--) {
//         arr.push(arr[i])
//     }
//     return arr
// }
// console.log(arrayToMirror([0,2,4,6,8]))

// //NOTE - ES6
// const toMirror = arr => [...arr, ...arr.reverse().slice(1)]
// console.log(toMirror([0,2,4,6,8]))

// //TODO - Create a function that returns the total number of arrays inside a given main array.
// //NOTE - totalOfArrays([[1,2,3], [4,5,6]]) ->total number of arrays = 2
// function totalOfArrays(arr) {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             count++
//         }
//     }
//     return count
// }
// console.log(totalOfArrays([[1,2,3], [4,5,6], [7,8,9], 10, []]))

// //TODO - Create a function that takes a number as an argument and returns an array of numbers counting down from the given number to zero.
// //NOTE - Ex: arrayCountDown(5) output -> [5,4,3,2,1,0]
// function arrayCountDown(num) {
//     let array = []
//     for (let i = num; i >= 0; i--) {
//         array.push(i)
//     }
//     return array
// }
// console.log(arrayCountDown(5))

// //ES6 of ^
// const countDownArray = num => Array.from(Array(num + 1).keys()).reverse()
// console.log(countDownArray(10))

// //TODO - Create a function that takes two numbers and a math operator (+, -, /, *) and will perform a calculation with the given numbers.
// //NOTE - ex: cal (2, "+", 3) -> 5
// function calNum(num1, operator, num2) {
//     if(operator == '+') return num1+num2;
//     if(operator == '-') return num1-num2;
//     if(operator == '/' && num2 !=0) return num1/num2;
//     if(operator == '*') return num1*num2;
//     else return "Can not divide by 0!";
// }
// console.log(calNum(9, "*", 8));

// //TODO - Re-write the code above in ES6
// const numCal = (num1, operator, num2) => operator + num2 === "/0" ? "Can not divide by 0!" : eval(num1+operator+num2)
// console.log(numCal(9, "/", 0));

// //TODO - rewrite the ES5 with switch instead of if
// function calNum2(num1, operator, num2) {
//     switch (operator) {
//         case '+': return num1+num2;
//         case '-': return num1-num2;
//         case '*': return num1*num2;
//         case '/': return num1/num2;
//         if (operator = '/' && num2 === 0) {
//             "Can not divide by 0!"
//         }
//     }
// }
// console.log(calNum(9, "/", 0));

// //TODO - Create an array that rotates the values clockwise by one.
// //NOTE - The last value should then be the first.
// //NOTE - ex. rotateArray([20, 15, 26, 22, 30]) -> [30, 20, 15, 26, 22]
// function rotateArray(arr) {
//     let lastValue = arr.pop()
//     arr.unshift(lastValue)
//     return arr
// }

// console.log(rotateArray([20, 15, 26, 22, 30]))

// //TODO - Create a function that takes a given date ("3/26/2024") return the day of the date as a string ("Tuesday") assumingthe week starts on Sunday.
// function getDayName(day) {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//     let date = new Date(day)
//     return days[date.getDay()]
// }
// console.log(getDayName("3/26/2024"))

// //NOTE - ES6
// const getDayNameTwo = day => new Date(day).toLocaleDateString('en-us', {weekday: 'long'})
// console.log(getDayNameTwo("2024-03-26"))

// //TODO - Create a function that can take a flat array (1D) and change it to have nested arrays to represent and incremental depth level.
// //NOTE - ex. nestArray([1,2,6,3]) -> [1, [2, [6, [3]]]]
// function nestArray(arr) {
//     if (arr.length == 1) return arr
//         let temp = []
//         for (let i = 0; i < arr.length; i++) temp.push(arr[i])
//         return [arr[0], nestArray(temp)]
//     }

// const nestArray2 = arr => arr.length === 1 ? arr : [arr[0], nestArray2(arr.slice(1))]
// console.log(nestArray2([1,2,6]))

// const nestArray3 = arr => (
//     arr.slice(0, -1).reduceRight((arr, e) => [e, arr], [arr.pop()])
// )
// console.log(nestArray3([1,2,3,4]))

// //TODO - Create a function that takes two dates and returns the number of days between the first and second date.
// /*NOTE - EX.
// getNumbers (
//     new Date("March 26 2024")
//     new Date("March 30 2024")
// )
// output -> 4 days*/
// function getDays(date1, date2) {
//     return new Date(date2 - date1).getDate() -1
// }

// //NOTE - ES6 (provide inline comments for the code)
// const getDays2 = (date1, date2) => {
//     return new Date(date2 - date1).getDate() -1
// }

// console.log(getDays2(
//     new Date("March 26 2024"),
//     new Date("March 30 2024")
// ))

// //SECTION - More Arrays.
// //TODO - Create a function that takes an array of stringified numbers as a parameter and return an array of numbers.
// //NOTE - EX: ["1", "3", "6.7"] -> [1, 3, 6.7]
// //NOTE - (from Johan \/)
// function destringifyArray(arr) {
//     let temp = []
//     for (let i = 0; i < arr.length; i++) {
//         temp[i] = JSON.parse(arr[i])
//     }
//     return temp
// }
// console.log(destringifyArray(["1", "3", "6.7"]))

// //NOTE - smaller ES5 of ^
// //NOTE - (from frederick \/)
// function destringify(arr) {
//     return arr.map(Number)
// }
// console.log(destringify(["1", "3", "6.7"]))

// //NOTE - ES6 of ^
// let arrayToNumbers = arr => arr.map(e => +e)
// console.log(arrayToNumbers(["1", "3", "6.7"]))

//TODO - 
//NOTE - EX: