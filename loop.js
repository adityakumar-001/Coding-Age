// loop
const arr = [1,2,3,4,5]
for (const element of arr){
    if (element % 2 == 0){
        console.log(element);
        
    }
}

const arr1 = ["hello", true, 32, null, undefined]
for (const value of arr1){
    console.log(value); // hello, true, 32, null, undefined   
}

// Callback => 

function square(a){
    console.log(a ** 2);
}
function greet (name , func){
    console.log(`hello, ${name} welcome`);
    func(18)
}
greet("Aditya", square)


// parameter -> operation, num1, num2
function calculator (num1 , num2, operation){
    return operation (num1, num2)
}

// function -> first class function, function as a variable, arrow function
function sum (a, b){
    return a + b
}

const substract = (a, b) => a - b
const Multiply = (a, b) => a * b
const Divide = (a, b) => a / b

let ans = calculator(5, 10, Divide)
console.log(ans);

// Map -> Data Structure
const myMap = new Map ()
myMap.set("Key","Value")
myMap.set("1","World")
myMap.set("true",["World", null])

for (const [key, value] of myMap){
    console.log(key, ":- ", value);
}

console.log(myMap);             // {"key" => "value", 1 => hello, true => ["world", null]}

console.log(myMap.keys());      // it will give all the keys

console.log(myMap.values());    // it will give all the value

console.log(myMap.get(true));   // value ["world, null"]

myMap.delete("key")             // delete key

console.log(myMap);    

myMap.clear()                   // clear all the keys and value

console.log(myMap); 


