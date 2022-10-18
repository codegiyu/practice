let array = [6, 'strings', [54, false, [null], 'two'], 7, {lastName: "you"}, null, '6', undefined, true]
let string = 'codegiyu'
let num = 8
const arr = string.split('')
// arr = 4
array[1] = 'not strings'
arr[4] = 8
arr[6] = [8]
console.log(array.concat(arr, [5,6]))
console.log(arr)
console.log(array)
console.log(array[-1])
console.log(array.length) 
console.log(array[2][2][0])
console.log(array[array.length - 1])
console.log(array[2][array[2].length - 1])

let blabla = Array(10).fill('5')
console.log(blabla)
console.log(blabla[1])

console.log(array.includes('6'))
console.log(array.indexOf(6))
console.log(array.lastIndexOf(6))
console.log(Array.isArray(array[2]))
console.log(arr.join('-'))
console.log(arr.slice(7))
console.log(arr.slice(0, 5))
console.log(arr.slice(9))
console.log(arr.slice(-3))
console.log(arr.slice(1, -2))
console.log(arr.slice(-7, -2))
console.log(arr.slice(-9))

console.log(arr.splice(3,0,4,5))
console.log(arr)
console.log(arr.slice(7))
function tales(){
    return arr.shift()
}
console.log(tales())
arr.push('last', 'second-last')
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift('first', 'second', 0, 'lap', 200)
console.log(arr)
arr.shift()
console.log(arr)
console.log(arr.reverse())
console.log(arr.sort())

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    'who I am': {me: "you"},
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    isMarried: true,
    addition() {
        return 2 + 2
    },
    mySkills(){
        let line = `${this.skills.slice(0, -1).join(', ')} and ${this.skills.slice(-1)}`
        return line
    },
    addSkills(skill) {
        this.skills.push(skill)
    }
}
person.lastName = 'Best'
console.log(person.hasOwnProperty('skills'))
console.log(Object.assign(person, array[4]))
let baddo = Object.assign({}, person)
console.log(baddo)
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
console.log(person)
console.log(person.lastName)
console.log(person['who I am'])
console.log(person.addition())
console.log(person.addSkills('Tailwind'))
console.log(person.mySkills())