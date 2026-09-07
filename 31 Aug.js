// Bubble Short algorithm
// arr = [67,983,90,435,83] // shorting
// for(let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr.length -1 -i; j++){
//         if (arr[j] > arr[j +1]){
//             [arr[j], arr[j + 1]] = [arr[j+1], arr[j]]
//         }
//     }
// }
// console.log(arr);


// arr = [59,46,78,49,64]
// for (let i = 0; i < arr.length; i++){
//     for (let m = 0; m < arr.length -1 -i; m++){
//         if(arr[m] > arr[m +1]){ 
//         [arr[m], arr[m+1]] = [arr[m+1], arr[m]] 
//         }
//     }
// }console.log(arr);


// Function 
// function greet (){
//     console.log("Hello, Aditya");
// }
// greet()
// greet()
// greet()
// greet()


// function Sum (a, b){  // --> a,b parameter
//     console.log(a+b);
// }
// Sum(5, 6) // --> arguments

// Find the largest Digit
// Input: 58329
// function largestDigit(number){
//     let largestNumber = 0;
//     while (number > 0);{
//     let lastdigit = number % 10;
//     if (lastdigit > largestNumber){
//         largestNumber = lastdigit;
//      }
//         number = Math.floor(number / 10)
// }
//         console.log(largestNumber)
// }

// largestDigit(67934)
function largestDigit(number){
    let largestnumber = 0; 
    while(number > 0){
        let lastdigit = number % 10;
        if (lastdigit > largestnumber){
            largestnumber = lastdigit
        }
        number = Math.floor(number/10)
    } console.log(largestnumber);
}
largestDigit(567381)
