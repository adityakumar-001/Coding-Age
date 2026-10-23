// Backend
// 1. database connect
// 2. backend start
console.log("backend system started");

// connecting the database

//  eventual completion

await new Promise((resolve, reject) => setTimeout(reject, 1000)).then (() =>{
    console.log("BACKEND IS RUNNING");
}).catch((error)=>{
    console.log("Database error")
}).finally(()=>{
    console.log("This is finnaly");
})
