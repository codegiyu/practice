// Date Methods

let today = new Date()
let alsoToday = Date.now()
console.log(alsoToday)
console.log(today)
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDay())
console.log(today.getDate())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())
console.log(today.getMilliseconds())
console.log(today.getTime())
console.log(today.getFullYear())
console.log(alsoToday - 1578092201341)
console.log(alsoToday)

// DD-MM-YYYY HH:mm
let dd = today.getDate().toString().padStart(2,0)
let mm = today.getMonth() + 1
let yyyy = today.getFullYear()
let hh = today.getHours()
let mmm = today.getMinutes()

let readableTime = `${dd}-${mm}-${yyyy} ${hh}:${mmm}`
console.log(readableTime)

// 18723334
// 4:55:40

const ehm = (ms) => {
    let num = ms / 1000
    let ss = String(Math.floor(num % 60)).padStart(2,0);
    let mm = String((Math.floor(num / 60)) % 60).padStart(2,0);
    let hh = String(Math.floor(num / 3600)).padStart(2,0);
    return `${hh}:${mm}:${ss}`
}
console.log(ehm(18723334))
console.log(((5 * 3600) + (12 * 60) + (3)) * 1000)
// 50  00:00:50
// 90  00:01:30
// 675 00:11:15

console.log(today.toISOString())
console.log((18723334).toLocaleString())