fibnachi
let fib = 6
let num = 0;
let sum = 1;
while (fib >= 0){
    console.log(num);    
    let next = num + sum
    num = sum 
    sum = next
    fib--;
} 