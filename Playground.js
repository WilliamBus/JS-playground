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

// // TODO - Write a function that takes an array with numbers and return an array with the elements multiplied by 2.
// // NOTE - arrayByTwo([2,5,4]) --> [4,10,8].
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

// TODO - Create an function that takes an array and return duplicate numbers in a new array
//NOTE - ex: arraysDuplicateNumbers([1,2,3,4,5,6,5,1]) -> [5,1]
//NOTE - ES5 - Not Working
function duplicatedNumber(arr) {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] === arr[x] && !newArray.includes(arr[1])) {
                newArray.push(arr[i])
            }
        }
    } 
    return newArray
}
console.log(duplicatedNumber([1,2,3,4,5,6,5,1]))

// //NOTE - ES6 - filters through the numbers in the console.log array looking for all the duplicate numbers
// const ArrayDuplicateNumbers = arr => (
//     arr= [...new Set([...arr.filter(num => arr.indexOf(num) !== arr.lastIndexOf(num))])].sort((a,b) => a-b), arr.length ? arr: null
// )
// console.log(ArrayDuplicateNumbers([1,2,3,4,5,6,5,1]))