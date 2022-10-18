// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise
// function myFunction(a, b){
//     if (!a[b] == false) {
//         return true
//     }
//     return false
// }

// console.log(myFunction({a:1,b:2,c:3},'b'))
// console.log(myFunction({x:'a',y:null,z:'c'},'y'))
// console.log(myFunction({x:'a',y:null,z:'c'},'c'))

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array
// function myFunction(a){
//     return a.slice(-3)
// }
// let b = [1,2,3,4,5,6]
// console.log(myFunction(b))
// console.log(b)

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
// function myFunction(a, b){

//     return (b / 100) * a
// }
// console.log(myFunction(40, 25))

// (25/100) * 40

// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise
// function myFunction(a, b){
//     return a.getTime() < b.getTime()
// }
// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))
// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))
// console.log(new Date('2000/01/01 08:00:00').getTime())
// console.log(new Date('2000/01/01 08:45:00').getTime())

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
// function myFunction(a){

// return a.slice(0, -3)
// }
// console.log(myFunction('abcdefg'))
// console.log(myFunction('1234'))

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

// function myFunction(a){

//     return a.slice(0, a.length / 2)
// }
// console.log(myFunction('abcdefgh'))
// console.log(myFunction('1234'))

// Write a function that takes an object (a) as argument
// Return an array with all object keys
// function myFunction(a){

//     return Object.keys(a)
// }
// console.log(myFunction({j:9,i:2,x:3,z:4}))

// let obj = {a:9, d:2, c:3, b:[4, 5, 6 ]}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
// function myFunction(a, b){

//     return {[a]: b}
// }
// console.log(myFunction('d','atg'))
// console.log(myFunction('bc','tg'))

// Write a function that takes an array (a) and a value (b) as argument
// The function should remove all elements equal to 'b' from the array
// Return the filtered array
// function myFunction(a, b){

//     return a.filter(item => item !== b) 
// }

// console.log(myFunction([1,2,3], 2))
// console.log(myFunction([1,2,'2'], '2'))
// console.log(myFunction([false,'2',1], false))
// console.log(myFunction([1,2,'2',1], 1))

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
// function myFunction(a, n){

//     return a.slice(-n)
// }
// console.log(myFunction([1,2,3,4,5,6,7,8], 2))
// console.log(myFunction([1,2,'2',true, [5],4,9], 4))

// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
// function myFunction(set){

// return [...set]
// }
// console.log(myFunction(new Set([1, 2, 3, 1, '1'])))

// Write a function that takes an object as argument
// In some cases the object contains other objects with some deeply nested properties
// Return the property 'b' of object 'a' inside the original object if it exists
// If not, return undefined
// function myFunction(obj){
    
//     return obj.a?.b
// }
// console.log(myFunction({a:1}))
// console.log(myFunction({a:{b:{c:3}}}))
// console.log(myFunction({b:{a:1}}))
// console.log(myFunction({a:{b:2}}))

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction(a, b, c, d, e, f){

    return ((((a + b) - c) * d) / e) ** f
}
console.log(myFunction(6,5,4,3,2,1))
//10.5