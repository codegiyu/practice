let arr = [2, "three", false, {me: "Giyu"}, 2, 0]
let [,second,,, third] = arr

// console.log(first)
console.log(second)
console.log(third)
// console.log(fourth)

const fullStack = [
    ['HTML', ['CSS', 'Bootstrap', 'Tailwind'], 'JavaScript', 'React'],
    ['Node', 'Express', ['MongoDB', 'MySQL']]
  ]
  const [[,[,boot], js, ...rest], [,ex, [,ms]], fifth] = fullStack
// const
// const frontEnd = fullStack[0]
// const backEnd = fullStack[1]

  
  console.log(boot)
  console.log(js)
  console.log(rest)
  console.log(ex)
  console.log(ms)
  console.log(fifth)

  const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

  for (const [country, city] of countries) {
  console.log(country, city)
  }

  function dest([[frontend], [backend]]) {
    console.log(` a frontend languages is ${frontend}`)
    console.log(`a backend languages is ${backend}`)
  }

  dest(fullStack)

  let numArr = [1,2,3,6,7]
  console.log(numArr.push(8))
console.log([8, ...numArr])
  let [numOne,, numTwo, ...that] = numArr
  console.log(numOne)
  console.log(numTwo)
  console.log(that)

let doubleDigits = [11,13,15]
let newArr = [...numArr, ...doubleDigits]

console.log(newArr)

let reduction = doubleDigits.reduce((acc, curr) => [curr * 2, ...acc],[])
console.log(reduction)

const square = {
    width: 30,
    height: 30
}

const rectangle = {
    // width: 20,
    height: 10,
    area: 200
}
rectangle.width = 40
// rectangle.width = null
let { width = 50, height: H, area } = rectangle


console.log(width, H, area)

console.log(rectangle.perimeter)

const perimeter = ({width, height}) => (2 * width) + (2 * height)

console.log(perimeter(square))

let newObj = {...square, 
    diagonal: 40, 
    perimeter: 120,
    width:35, 
    ...rectangle,
    width: 45
}
console.log(newObj)