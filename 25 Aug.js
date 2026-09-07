// arr = [1,2,3,4,5] // find the 2nd largest number
// const arr = [1,2,3,40,5]
// let largest = [0];
// let SecondLar = [0];
// for(let i = 0; i < arr.length; i++){
//     if (arr[i] > largest) {
//         largest = arr[i];}
//     }
// for(let i = 0; i < arr.length; i++){
//         if (arr[i] > SecondLar && arr[i] != largest){
//             SecondLar = arr[i]
//         }
// } console.log(SecondLar)


// Function:- A function in programming is a reusable block of code that performs a specific task. Simple example

// Imagine you have to add two numbers many times. Instead of writing the addition code repeatedly, you can create a function:

// function greet(){ }
// function greet(){
// // code
// console.log("Hello");
// }
// greet() //  () --> calling the function
// greet()
 
// Example: let Username = "Aditya"
// massage = `Hello' ${Username} Kaise ho Bro !`
// console.log(massage);

// function greet (Username) {
//     console.log(`Hello, ${Username}`)
// }
// greet("Aditya") // --> calling the function , "Aditya" --> argument

// function Adi(){
//     console.log("Hello");   // function without peremeter
// } 
// Adi()

// Find the largest number using function 
// input: ([1, ,2, 3, 4, 5])
// output: 5

function largestNumber(arr){
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i]
        }
    }
    console.log(largest);
     }
largestNumber([1, 2, 3, 4, 5])