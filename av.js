// 1. Take input from the user and convert it to an integer
const userInput = prompt("Enter a positive integer:");
const number = parseInt(userInput);

// 2. Validate input and calculate factorial
if (isNaN(number) || number < 0) {
    console.log("Error: Please enter a valid positive integer.");
    alert("Error: Please enter a valid positive integer.");
} else {
    let factorial = 1;
    
    // Loop to multiply numbers from 1 up to the entered number
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    
    // 3. Output the result
    console.log(`The factorial of ${number} is: ${factorial}`);
    alert(`The factorial of ${number} is: ${factorial}`);
}