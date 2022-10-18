// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
// function myFunction(a){
//     return a.slice(0,3)
// }
// console.log(myFunction([1,2,3,4]))

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
// function myFunction(a){
//     return a.slice(0, 3)
// }
// console.log(myFunction('abcdefgh'))

// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists

// function myFunction(a,b){
//     return a.hasOwnProperty(b)
// }

// console.log(myFunction({a:1,b:2,c:3},'b'))
// console.log(myFunction({x:'a',y:'b',z:'c'},'a'))
// console.log(myFunction({x:'a',y:'b',z:undefined},'z'))

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

// function myFunction(a){
//     return a.slice(-3)
// }
// console.log(myFunction('abcdefgh'))

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
// function myFunction(a, n){
//     return a[n-1]
// }
// console.log(myFunction('abcdefgh', 3))

// Write a function that takes an array (a) as argument
// Return the number of elements in a

// function myFunction(a){
//     return a.length
// }
// console.log(myFunction([1,2,3,4,6]))

// Write a function that takes a value as argument
// Return the type of the value

// function myFunction(a){
//     return typeof a
// }
// console.log(myFunction([1,2,3,4,6]))

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array

// function myFunction(a){
//     a.splice(-3)
//     return a
// }
// console.log(myFunction([1,2,3,4,6,7,9,]))

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
// function myFunction(a,b){
//     return a[b]
// }

// console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'))
// console.log(myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country'))

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

// function myFunction(a){
    
//     return a.slice(3)
// }
// console.log(myFunction('abcdefgh'))

// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set

// function myFunction(set, val){
    
//     return 
// }
// console.log(myFunction(new Set([1,2,3,4]), 2))

let arr = [1,2,3,4,1,2,5,6,]
console.log(arr.slice(3))
let set = new Set(arr)
console.log(set.has(7))
console.log(set)

let str = 'paris'
console.log(str.search('is'))

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction(a, b){
    
    return a < b ? a / b : a * b 
}
console.log(myFunction(10, 100))
console.log(myFunction(90, 45))