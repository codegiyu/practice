// console.log( 4 + '4' )    //44
// // console.log( 4 ++ '4' )   //4NaN4
// console.log( 4 + +'4' )   //8
// console.log( 4 + + 'four' )  //8

// 1 * "4"

function myFunction (param) {
    param = param.slice(0, -2)
    console.log(param)
    return param + 1
    // console.log(7)
}
console.log(myFunction('string').toUpperCase())
let string = 8
console.log(string)

function square(n) {
    return n ** 2
}

console.log(Math.sqrt(square(twoParams(5,8)) + square(3)))

function twoParams(p1, p2) {
    let p = (p1 **2) / 4
    return p * p2
}
console.log(twoParams(5,8))

function manyParams(...array) {
    console.log(array)
}
 let arr = [1,"2",false,4,5,6,7,8]
 console.log(...arr)

manyParams(5,9,"four")

const expression = function(dt,td) {
        return dt + td
}
console.log(expression(6,7))

const arrow = (dt,td) => String(td + 4).padEnd(4,0);

console.log(arrow(4,7))

let strong = (function(n) {
    return n
})(1)

console.log(strong)


// for Loop
// while loop
// do while loop
// for of loop
// for in loop
let i = 10
for (i; i > 0; i--) {
    console.log(i)
}
console.log(i)

while (i < 10) {
    console.log(i);
    i++
}
console.log(i)

do {
    console.log(i)
    i++
} while (i < -5)

let countries = ['Nigeria', 'Cameroon', 'Ghana', 'Togo', 'Benin', 'Mali'], arr2 = []

 for (let country of countries) {
    arr2.push(country.toLowerCase())  
 }
 console.log(arr2)

let strung = "Tuwjdabvaeh", strang =''
for (let char of strung) {
    strang += char.charCodeAt(0)
}
console.log(strang)

 let obj = {
    name: "Giyu",
    class: "well-defined",
    status: "mechanic"
 }

 for (let key in obj) {
    console.log(key)
 }

 for (let i in countries) {
    console.log(countries[i])
 }