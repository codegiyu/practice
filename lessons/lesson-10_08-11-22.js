// regEx

let pattern = /^giyu/gi

let regex = new RegExp("ie  $", "gi")

console.log(pattern)
console.log(regex)

// test
// match
// search
// replace

let str = "Giyu I neaeed gihi giua sentaen56cegifu4-() frega gi6usenta \n giyi giy,,,,, giyuuuuuuu giyuuuuuuuuuuuuuuuu a_....0giyuaauuu+%$# jdhuoeieie  "

console.log(pattern.test(str))
console.log(regex.test(str))
console.log(/giyu/i.test("Giyu I need a sentence"))

console.log(str.match(pattern))
console.log(str.match(regex))
console.log(str.match(/giyu/gi))

console.log(str.search(pattern))

console.log(str.replace(pattern, (substring, idx) => [...substring].reverse().join("") + idx))

console.log(str.match(/giy[fgjcftytu]?/g))
console.log(str.match(/giy[u]+/g))
console.log(str.match(/giy[u,]*/g))
console.log(str.match(/giy[u]{2}/g))
console.log(str.match(/giy[u]{2,}/g))
console.log(str.match(/giy[u]{2,4}/g))
console.log(str.match(/(sent|freg)a/gi))
console.log(str.match(/gi.{2,4}u/g))

console.log(/\d/i.test("I have 3 500c  20022 coins"))
console.log("I have 3 50c coins 5678 670i ".match(/\d+\b(?![a-z])/ig))
console.log("I have 3 50c coins 5678 670i ".match(/(?<![0-9])[a-z]+/ig))

// \d - Digits
// \D - Non-Digits
// \w - Words (Alphanumeric and _)
// \W - Non-Words Characters
// \s - Space and Tab
// \S - Non-Whitespace
// \b - Word Boundary
// \B - Non-Word Boundary
// \n - Newline
// \t - Tab