// function countdigit(number, reN){
//     let reNC = 0;
//     while(number > 0) {
//         let lastdigit = number % 10;
//         if (lastdigit === reN){
//             reNC++;
//         }
//         number = Math.floor(number / 10);
//     }
//     console.log(reNC);
// }
// countdigit(576756787, 7)

// function countfraction(number){
//     for (let i = 0; i <= number; i++){
//         if (number % i ==0){
//             console.log(i);

//         }
//     }
// }
// countfraction(32)

// function countFra(number){
//     let i = 1;
//     while(i <= number){
//         if (number % i == 0){
//             console.log(i);
//         }
//         i++ ;
//     }
// } countFra(32)

// Unlimited Parameter
// arguments --> JAvascript Keyword
// function sum(){
//     let ans = 0;
//     for (let i = 0; i < arguments.length; i++){
//         ans = ans + arguments[i];
//     }
//     console.log(ans);
// }
// sum(1,3,5,7,74,4)

// arrow function, first class function --> making function as a variable

// OOPS ---> Object Orianted

// anonymous function
// let greet = function (a, b){
//     return a + b
// }

// // Variable but acting as a function
// let sum = function (a, b){
//     return a + b
// }
// console.log(sum (5, 9));

// //  arrow function
// let sum1 = (a, b) =>{
//     return a + b
// }
// console.log(sum1(78, 90));

// //  Immediately invoked function IIFE, always put semicolon al last
// (function sum (a,b ){
//     console.log(a + b)
// }) (5, 9);

// (function greet (){
//     console.log("Hello");
// })();

// // always gives the unique result
// const num1 = Symbol("123")
// const num2 = Symbol("123")
// console.log(num1 == num2);

// Selection Short algorithm -->    it cheak the smallest element in the array and put it at the starting position
function selectionSort(...arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i != minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
console.log(selectionSort(6, 50, 14, 30, 2, 1));
