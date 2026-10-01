// Question 7

function findunique(arr){
    for (let i = 0; i < arr.length; i++){
        let duplicate = false;
        for (let j = 0; j < arr.length; j++){
            if (i != j && arr[i] == arr[j]){
                duplicate = true;
                break;
            }
        }
        if (!duplicate){
            return arr[i];
        }
    }
    return -1
}
let ans = findunique ([4,5,1,1,4,5])
console.log(ans);

