// Return: 

// function greet(){
//     return "Hello World"
// }
// let a = greet ()
// console.log(a);

// function subs (a, b){
//     return a - b 
// }
// let b = subs(9, 4)
// console.log(b);

// // default parameter
// function sum1 (a = 10, b){
//     return a + b
// }
// console.log(sum1(49, 89));

// function sum2 (a, b = 10){
// return a + b
// }
// console.log(sum2(15, 56));


// Cheak whether a number is an Armstrong number.
// 153 --> 1^3 + 5^3 + 3^3 = 153
// let number = 152;
// let Orignal = number
// let ans = 0;
// while (number > 0){
//     let lastdigit = number % 10
//      lastdigit = lastdigit **3
//     ans += lastdigit
//     number = Math.floor(number /10)
// }
// if (Orignal == ans){
//     console.log("Its Armstrong Number");
// }
// else {
//     console.log("Not a Armstrong Number");
    
// }

// 145 --> 1! + 4! + 5! = 145
// let num = 145;
// let Orignal = num;
// let ans = 0;
// while (num > 0){
//     let lastdigit = num % 10;
//     lastdigit = lastdigit ** 3
//     num += lastdigit
//     num = Math.floor(num / 10) 
// } 
// console.log(ans);


// let num =  145
// let Orignal = num
// let ans = 0 

// while (num > 0){
//         let lastdigit = num % 10
//         let factorial = 1;
//         for(let i = 1; i <= lastdigit; i++){
//             factorial *= i
//         }
//         ans += factorial
//         num = Math.floor(num/10)
// }
// if (Orignal == ans)
//     {console.log("Strong Number");
//     }
//     else{console.log("not a Strong Number");
//     }

// fibnachi
// let fib = 6
// let num = 0;
// let sum = 1;
// while (fib >= 0){
//     console.log(num);    
//     let next = num + sum
//     num = sum 
//     sum = next
//     fib--;
// } 



