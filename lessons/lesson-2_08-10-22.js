console.log(typeof 9)
let num = 349.7999012345
console.log(Math.random())
console.log(Math.floor(123.90001))
console.log(Math.ceil(123.90001))
console.log(Math.round(123.50001))

console.log(Math.min('1',2,3,4,5,6,7,8,9))
console.log(Math.max(1,2,3,4,5,6,7,8,9))
console.log(typeof Number("56"))
console.log(typeof ('2' * '3'))

console.log(Math.abs(10))      
console.log(Math.sqrt(10)) 
console.log(Math.sqrt(2))    
console.log(Math.pow(2, 0.5))
console.log(num.toString(16).padStart(2, '0'))

console.log(Math.PI)
console.log(Math.PI.toFixed(4))
console.log(num.toPrecision(3))
console.log(num.toExponential(3))
console.log((23545678).toLocaleString(3))

console.log(Math.pow(5, 50) - Math.pow(5, 50))

console.log(10 + Math.floor(Math.random() * 11))

// (8.5).toString() |-2| = 2  #000000 #ffffff rbg(0, 0, 0) rgb(255, 255, 255)


const paragraph = 'My name is Asabeneh Yetayeh. I live in Finland, Helsinki.      '
let para = 'yayyy'
console.log(paragraph.length)
console.log(paragraph[3])
console.log(paragraph.toLowerCase())
console.log(paragraph.substring(3, 7))
console.log(paragraph.substr(3, 4))
console.log(paragraph.slice(3, 7))
console.log(paragraph.split(''))
console.log('r' + paragraph + 'r')
console.log('r' + paragraph.trim() + 'r')
console.log(paragraph.includes('eyeh'))
console.log(paragraph.replaceAll('eh', (char, idx, str) => char.toUpperCase() + idx + str[0]))
console.log(paragraph.charAt(11))
console.log(paragraph.indexOf('a'))
console.log(paragraph.lastIndexOf('a'))
console.log(paragraph.charCodeAt(11))
console.log(paragraph.concat(para, ' ', 'ty'))
console.log(paragraph.startsWith(''))
console.log(paragraph.endsWith(' '))
console.log(paragraph.search('a'))
console.log(paragraph.match(/a/gi))
console.log(para.repeat(4))

let num2 = 123

let koal = `fhoieo ${(num2 + num).toFixed()} `
console.log(koal)