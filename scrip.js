//  console.log (2 == 3)
//  console.log (2 !== 3)
// // // // // console.log (2 == "2")
// // // // // console.log (2 === "2")
// // // // // console.log (~15)

// // // // // console.log(2 > 3)
// // // // // console.log(2 < 3)
// // // // // console.log(2 <= 3)
// // // // // console.log(2 >= 3)

// // // // // console.log(null == 0)
// // // // // console.log(null < 0)
// // // // // console.log(null > 0)
// // // // // console.log(null >= 0)

// // // // // console.log(25 >> 3)
// // // // // console.log(25 << 3)

// // // // console.log(135>>3)
// // // // console.log(135<<3)

// // // // console.log(2**3+2**4+2**5+2**10)

// // // // cheak wheater a number is even or odd

// // // // Can Vote or Not

// // // // let a = 4
// // // // if (a % 2 == 0){
// // // //     console.log("even")
// // // // }
// // // // else
// // // // {console.log ("odd")}

// // // // Cheak Whether a odd number is divisible by 5 or not

// // // let a = 10
// // // if (a % 5 === 0){console.log("even")}
// // // else {console.log("odd")}

// // let a = "yellow"
// // // let a = prompt("entre your color")
// // // console.log(name)
// // if (a === "red"){
// //     console.log("Ruk be Gadhe")
// // }
// // else if (a === "yellow"){
// //     console.log("Gadi chalu kr ab")
// // }
// // else if (a === "green") {console.log("Go")
// // }

// // else {
// //     console.log ("undifind")}

// let  a = 30, b = 30,  c = 120
// d = a + b + c
// if (d === 180){console.log("Formation of Triangle")}

// if ( a < 90 & b < 90 & c < 90 & d === 180 ) {console.log ("It a Acute triangle")}
// else if (a === 90 | b === 90 | c === 90 & d === 180) {console.log ("Right angle Triangle")}
// else if  (a > 90 | b > 90 | c > 90 & d === 180) {console.log ("Obtuse angle Triangle")}
// else console.log ("Triangle nahi hai")


//Class 17 Aug --> if, else

// // switch case (for Multiple condition)

// let light = "yellow";
// switch (light) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "yellow":
//     console.log("ready to go");
//     break;
//   case "green":
//     console.log("Go");
//     break;
//   default:
//     console.log("invalid light color");
// }

// //terniary condition --> (condition = true ? this code will run : this code will not run, condition = false ? this code will not run : this code will run)
// let number = 11;
// number % 2 == 0 ? console.log(number) : console.log("No Number found");

// let numbr = 10;
// number % 2 == 0
//   ? number % 4 == 0
//     ? console.log("Even and divisible")
//     : console.log("Even number but not divisible by 4")
//   : console.log("odd number");


// // VIP ture , Age < 30 --> cannot attend the meeting, VIP false --> Not a VIP

// let VIP = true 
// let age = 29
// if (VIP == false)
//     if (age > 30){
//     console.log("Attend the meeting")}
//     else {console.log ("cannot attend the meeting")}
// else {console.log("Not a VIP")}



// Loop 
// for loop, while loop, do while loop


// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }

// // print 1 to 50, even number
// for(let i = 2; i <= 50; i = i + 2){console.log(i)}
// for(let i = 1; i <= 50; i++)
//     if (i % 2 ==0){console.log(i)

// }

// 7 se Divisible
// for(let i = 1; i <= 50; i++)
//     if (i % 7 ==0){console.log(i)

// }

// sum of number from 10 to 20
// let ans = 0;
// for(let i = 10; i <= 20; i++){
// ans = ans + i;}
// console.log(ans)

// find the 2 to the power 3 using for loop
// let ans = 1;
// let a = 2
// let b = 3
// for (let i = 1; i<= 3; i++){
//     ans = ans * a;
// }
// console.log(ans)

// Date 18 Aug Class
// while loop
// let i =1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// ! number divisible by 6 between 20 to 200 using while loop

let ans = 1;
for (let i = 20; i <= 200; i++){
    if (i % 6 == 0)
    console.log(i);}

// let i = 20; 
// while (i<=200){
//     if (i % 6 == 0) {
//         console.log(i)
//     }

//     i++;
// }

// Sum of digits in a Number :- 6543
// let num = 6543
// let ans = 0
// while (num > 0){
//     ld = num % 10
//     num = num / 10
//     ans = ans + ld
// }
// console.log(ans)
