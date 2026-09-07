// array
const arr = [1, 2, 3, true, false, "Hello"];

console.log(arr[0])

arr[0] = 1.4

console.log(arr)

const arr1 = new Array(1, true, false, "Hello")
console.log(arr1)

arr.push(3.2) // add after last element
console.log(arr)

arr.pop() // remove the last element
console.log(arr)

arr.unshift(2) // insert at 0th index
console.log(arr)

arr.shift() // remove the 0th index element
console.log(arr)

console.log(arr.includes(4))  // if includes then true otherwise false


const arr2 = ["hello", true, false, 43, [45.3, "world"]]

console.log(arr2.indexOf("true"))  // 1

const num1 = [1, 2, 3]
const num2 = [4, 5, 6]

console.log(num1.concat(num2))

console.log(num2.reverse())

const firstName = "ayush"
const lastName = "kumar"

console.log(firstName + " " + lastName)

console.log([num1, num2])

console.log(num1.join("-"))

const nums = [10, 22, 33, 46, 55, 65]
let b = nums.slice(1, 5)  // new array
console.log("slice", b)
console.log("slice", nums)

let a = nums.splice(1, 2, 5)
console.log("splice:", a)  // num 
console.log("splice:", nums)




// spread operator, ...array_name = "a", "b", "c"

const names = ["a", "b", "c"]
names.push("d")
console.log(names)

console.log(...names, "e")

console.log(Array.isArray("Ankit"))
console.log(Array.isArray(names))

console.log(Array.from("Ayush"))
console.log(Array.from("1"))

let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1, score2, score3))