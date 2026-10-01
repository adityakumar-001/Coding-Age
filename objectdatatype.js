// //  datatype -> object -> key value pair
// const object = {
//     name : "Aditya",
//     age : 65
// }
// console.log(object)
// console.log(object["name"]);

// for (const key in object){
//     console.log(object[key]); 
// }

// Map & Object
// Key -> any datatype (Map)
// Key -> string ya symbol (Object)

const myJob = {
    name: "Aditya",
    age: 5
}
console.log(myJob["name"])
for (const a in myJob){
    console.log(a);     // keys name, age    
}

