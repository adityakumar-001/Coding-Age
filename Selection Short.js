// // arr = [4,3,2,1,3,4], At which index the array has the smallest element
// let arr = [11, 10, 3, 4, 5]
// let smallestElement = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < arr[smallestElement]){
//         smallestElement = i;
//     }
// }
// console.log(smallestElement);

// let arr = [11, 10, 4, 3, 5]
// let smallest = [0];
// for (let i = 0; i<arr.length; i++){

// }




// move all the 0's at the end 
/**
 * input: [4,0,5,0,1,2]
 * output: [5,4,1,2,0,0]
 */

// let arr = [4,0,5,0,1,2]
// let sh = [];
// for (i = 0; i < arr.length; i++)
//     if (arr[i] != 0){
//         sh.push(arr[i])
//     }
//     for (i = 0; i < arr.length; i++){
//     if (arr[i] == 0){
//         sh.push(arr[i])
//     }   
// }
// console.log(sh);


// Find the commom elements
// Given 
// a = [1,2,3,4,5]
// b = [3,4,5,6,7]

let a = [1,2,3,4,5]
let b = [3,4,5,6,7]
let ab = []
let cd = []
for (i = 0; i < a.length; i++){
    for (j = 0; j < b.length; j++){
        if (a[i] == b[j]){
            ab.push(a[i])
        }
    }
}
for (k = 0; k < a.length; k++){
    for (l = 0; l < b.length; l++){
        if (a[k] != b[k]){
            cd.push([a[k], b[l]])
        }
    }
} console.log([ab, cd]);

// Find Pair
// Given: nums = [1,2,3,4]
// Print every Possible Pair
// 1 2
// 1 3
// 1 4
// 2 3
// 2 4
// 3 4

// let nums = [1,2,3,4,5]
// for (let i = 0; i < nums.length; i++){
//     for (let j = i + 1 ; j < nums.length; j++){
//         console.log([nums[i], nums[j]]);
//     }
// }

