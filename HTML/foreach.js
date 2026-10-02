// For each (Loop)
// The forEach() method in JavaScript executes a provided function once for erery element in a array

// const word = ["a", "b", "c", "d", "e"]

// word.forEach((item) =>{
//     console.log(item);  
// }) 

const num = [11,22,33,44,55]
// num.forEach((item) =>{
//     if (item % 2 == 0){
//     console.log(item);
//     }
// })

num.forEach((item, index) =>{
    console.log(index, ":-", item);    
})

num.forEach((item, index, arr) => {
    arr[index] = index + 1
})
console.log(num);

const coding = [
    {
        language: "javascrit",
        extension: ".js"
    },
    {
        language: "python",
        extension: ".py"
    },
    {
        language: "golang",
        extension: ".go"
    }
]
coding.forEach((item) => {
    console.log(item.language);
    console.log(item.extension);
})

// Filter:- 
const arr = [1,2,3,4,5,6,7,8,9]
let ans = arr.filter((item) => item % 2 == 0)
console.log(ans);

// Symbol -> make the variable unique
const score1 = Symbol(10)
const score2  = Symbol(10)
console.log(score1 == score2);


// Object 
const obj1 = {
    key : "value",
    age: "34",
    address:{
        city: "Patna",
        pincode: "800027",
        town: "Patna"
    }
}
console.log(obj1["key"]);
console.log(obj1.key);
obj1.key = "Aditya"
console.log(obj1);

obj1.greet = function(name){
    console.log (`hello, ${name} Welcome`);
    return "Hii"
}
console.log(obj1.greet("Aditya"));
console.log(obj1);


const obj = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}
const obj3 = {7: "g", 8: "h", 9: "i"}

const ansObj = {...obj, ...obj2, ...obj3}
console.log(ansObj);

const keyArray = Object.keys(obj)

keyArray.forEach((item) => {
    console.log(`${item} and ${typeof item}`);
})
