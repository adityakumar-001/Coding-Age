
// //  Maths and NUmbers
// const num = 64
// console.log(typeof num)
// const anotherNum = new Number(53);
// console.log(anotherNum)

// console.log(typeof anotherNum)

// const amount = 8737483
// console.log(amount.toString().length)

// const result = 12.3456789123;

// console.log("Orignal:   ", result);
// console.log("toFixed(2):   ", result.toFixed(2)); //Fixed
// console.log("toPrecision(7):   ", result.toPrecision(2)); 

// const anotherResult = 7484375.65747
// console.log(typeof(anotherResult.toPrecision(3)))
// 7.48e+6 ---> 7480000
// 6.876e+9 ----> 6876000000

// const rupee = 100000
// console.log(rupee.toLocaleString("en-Us"))


// // Maths --> javascript inbuilt function
// console.log(Math.abs(-5));  // absolute, 5
// console.log(Math.random()) // between 0 and 1
// console.log(Math.random() * 10)
// console.log(Math.floor(4.348748))
// console.log(Math.ceil(4.274738))
// console.log(Math.min(5, 4, 3, 1, 2))
// console.log(Math.max(5, 4, 3, 1, 2))



// binarry to number 
// Sum of numbers
let number = 12345612
let ans = 0;
while (number > 0){
    let lastdigit = number % 10
    ans = ans + lastdigit
    number = Math.floor(number/10)
}
console.log(ans)
