// Write a function that takes a number as input and creates an array of numbers starting from 1 to that number

const numArr = num => {
    return Array(num).fill(0).map((item, index) => ++index)
}

console.log(numArr(12))

// function spoonerize(words) {
//     let word1 = words.split(" ")[0], word2 = words.split(" ")[1];
//     let letter1 = word1[0], letter2 = word2[0];
//     word1 = letter2 + word1.slice(1);
//     word2 = letter1 + word2.slice(1)
//     return `${word1} ${word2}`
// }

const spoonerize = words => words.replace(/^(.)(.* )(.)(.*)$/, '$3$2$1$4');
console.log(spoonerize("Nit Picking"))
// (N)(it )(P)(icking)
// Gode Ciyu

let bla = "random stuff".replace(/(.)(.*)(.)(.*)/, "$4_$3_$2_$1")
console.log(bla)

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump 
console.log(zeroFuel(100,50,1))
console.log(zeroFuel(50,25,2))

function findUs(n1, n2, k, primeFactors, digits) {
    let answer = [];
    const canBeDivided = num => {
        for (let number of primeFactors) {
            if (num % number != 0) return false
        }
        return true
    }

    const containsAllDigits = (num) => {
        for (let digit of digits) {
            if (!String(num).includes(`${digit}`)) return false
        }
        return true
    }

    for (let i = n1; i <= n1 + (n2 * k); i++) {
        if (canBeDivided(i) && containsAllDigits(i)) {
            answer.push(i)
        }
    }

    return answer;
}
console.log(findUs(30, 90, 4, [2, 3], [6, 2]))
console.log(findUs(30, 400, 18, [2, 3, 7], [6, 2, 5]))

// const canBeDivided = (num, primeFactors) => {
//     for (let number of primeFactors) {
//         if (num % number != 0) return false
//     }
//     return true
// }

// console.log(canBeDivided(180, [2,3,4,5, 10, 11]))

// const canBeDivided = (num, digits) => {
//     for (let digit of digits) {
//         if (!String(num).includes(`${digit}`)) return false
//     }
//     return true
// }

// console.log(canBeDivided(28501, [1,8,0,2,5]))
// let a = 5
// console.log(typeof 90)
// console.log(typeof String(90))
// console.log(`${a}`)