const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]


  let newArr = []
  for (let language of languages) {
    if (!newArr.includes(language)) {
        newArr.push(language)
    }
  }
  console.log(newArr)
  
  const setOfLanguages = [...new Set(languages)]
  console.log(setOfLanguages)

  for (const language of setOfLanguages) {
    console.log(language)
  }

//   let today = new Date()
//   console.log(today)

const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
// companies.delete('Facebook')
console.log(companies.has('Facebook'))
// companies.clear()
console.log(companies.size) // 5 elements in the set
console.log(companies)


  const langSet = new Set(languages)
  console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
  console.log(langSet.size) // 4
  
  const counts = []
  const count = {}
  
  for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
  }
  console.log(counts)

  let a = [1, 2, 3,3, 4, 5]
let b = [3,3, 4, 5, 6, 6]
let c = [...b, ...a]

let C = [...new Set(c)]

console.log(C)

let A = new Set(a)
let B = new Set(b)

let c1 = b.filter((num) => a.includes(num))
let C1 = new Set(c1)
console.log(c1)
console.log(C1)

let c2 = b.filter((num) => !a.includes(num))
let C2 = new Set(c2)
console.log(c2)
console.log(C2)


// Maps

countries = [
    ['Finland', ['Helsinki', 'rain'], 3, 5],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)

  const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set(['Finland'], 'Helsinki', 7)
countriesMap.set(true, 'Stockholm')
countriesMap.set('Norway', "that")
// countriesMap.set('Norway', "this")

console.log(countriesMap)
console.log(countriesMap.size)

console.log(countriesMap.get("Norway"))
console.log(countriesMap.has("norway"))

let obj = [
    [true, "very true"],
    [[9], "nine"]
]

let objMap = new Map(Object.entries(obj))
console.log(objMap)
console.log(objMap.get('9'))

console.log(obj)
console.log(Object.keys(obj))

for (const country of countriesMap) {
    console.log(country)
}


for (const [country, city] of countriesMap){
    console.log(country, city)
}



function basicOp(operation, value1, value2){
  if (operation == "+") return value1 + value2
  else if (operation == "-") return value1 - value2
  else if (operation == "*") return value1 * value2
  else if (operation == "/") return value1 / value2
}
console.log(basicOp("+", 7, 5))

console.log(eval("5 * 5"))

console.log(15 * 4)
console.log(500 + (15 * 0.9) + (15 * 0.9 * 0.9) + (15 * 0.9 * 0.9 * 0.9) + (15 * 0.9 * 0.9 * 0.9 * 0.9))

console.log(525.65 - 30)
console.log(536.585 - 45)
console.log(546.63 - 60)
console.log((15 * 0.9))
console.log((15 * 0.9) * 0.9)
console.log((15 * 0.9) * 0.9 * 0.9)

function movie(card, ticket, perc) {
    let count = Math.ceil(card / ticket), systemA = n => ticket * n;
    const systemB = n => card + (((ticket * (Math.pow(perc, n + 1) - 1)) / (perc - 1)) - ticket)
    while (Math.ceil(systemB(count)) > systemA(count)) count++
    return count
};
console.log(movie(500, 15, 0.9))
console.log(movie(100, 10, 0.95))



console.log(42 * 15)
let ab = 9
console.log(++ab)
// function movie(card, ticket, perc) {
//   let count = 1, systemA = n => ticket * n, systemBArr = [ticket * perc]
//   let systemB = Math.ceil(card + systemBArr.reduce((acc, curr) => acc + curr, 0))

//   while (systemB >= systemA(count)) {
//       systemBArr.push(systemBArr[systemBArr.length - 1] * perc)
//       systemB = Math.ceil(card + systemBArr.reduce((acc, curr) => acc + curr, 0))
//       count++
//   }
//   return count
// };
// console.log(movie(500, 15, 0.9))
// console.log(movie(100, 10, 0.95))
