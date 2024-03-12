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

//TODO - Write a function that an array of items returns only integers.
//NOTE - array = ["will", 5, 6, 2, "pizza"] --> [5, 6, 2].
//NOTE - declare function and nammed it.
function onlyIntegers(arr) {
    //NOTE - declared variable integer using let to an empty array.
    let integer = []
    //NOTE - stared for loop so it can run through the array finding all the integers.
    for(let i = 0; i < arr.length; i++) {
        //NOTE - uses the object "Number" with the attached functionality "isInteger" to search through all the array finding all the integers and returns a boolean value.
        if(Number.isInteger(arr[i])) {
            //NOTE - adds all these numbers found in the array to the end of the empty array we made earlier up.
            integer.push(arr[i])
            //NOTE - end of if.
        }
        //NOTE - end of for.
    }
    //NOTE - returns our variable called integer.
    return integer
}
//NOTE - runs onlyIntegers function and prints out the array written in the parrameter.
console.log(onlyIntegers(["will", 5, 6, "dog", 2, "pizza", 8]))

