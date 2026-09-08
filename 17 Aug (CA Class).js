//   // switch case (for Multiple condition)

//  let light = "yellow";
//  switch (light) {
//    case "red":
//      console.log("Stop");
//      break;
//    case "yellow":
//      console.log("ready to go");
//      break;
//    case "green":
//      console.log("Go");
//      break;
//    default:
//      console.log("invalid light color");
//  }

// //  terniary condition --> (condition = true ? this code will run : this code will not run, condition = false ? this code will not run : this code will run)
//  let number = 11;
//  number % 2 == 0 ? console.log(number) : console.log("No Number found");

//  let number = 12;
//  number % 2 == 0 ? number % 4 == 0
//      ? console.log("Even and divisible") 
//      : console.log("Even number but not divisible by 4") 
//      : console.log("odd number");


//   // VIP ture , Age < 30 --> cannot attend the meeting, VIP false --> Not a VIP

//  let VIP = true 
//  let age = 29
//  if (VIP == false)
//      if (age > 30){
//      console.log("Attend the meeting")}
//      else {console.log ("cannot attend the meeting")}
//  else {console.log("Not a VIP")}



//  Loop 
//  for loop, while loop, do while loop


//  for(let i = 10; i >= 0; i--){
//      console.log(i)
//  }

//  print 1 to 50, odd number
// for(let i = 2; i <= 50; i = i + 2){console.log(i)}
  // for (let i = 1; i <= 50; i++)
  //     if (i % 2 != 0){console.log(i)

  //    }

// //  7 se Divisible
//  for(let i = 1; i <= 50; i++)
//      if (i % 7 == 0){console.log(i)
//  }

//  sum of number from 10 to 20
//  let ans = 0;
//  for(let i = 10; i <= 20; i++){
//  ans = ans + i;}
//  console.log(ans)

// //  find the 2 to the power 3 using for loop
//  let ans = 1;
// let a = 2;
//  for (let i = 1; i <= 3; i++){
//      ans = ans * i;
//  }
//  console.log(ans)


//  print 1 to 20 cude 
let a = 1;
for (let i = 1; i <= 20; i++){
    if (a = i ** 3){
      console.log(a);
    }
}