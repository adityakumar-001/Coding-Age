// // OOPS -> (object oriented programing)
// // Class
// // Class is a blueprint for creating an object

// class Rectangle {
//     area(length, breadth){
//         let ans = length * breadth
//         return ans;
//     }
//     perimeter(length, breadth){
//         let ans = 2 * (length + breadth)
//         return ans;
//     }
// }

// //  creating an object
// let rect1 = new Rectangle()

// // accessing or using the method
// let ans = rect1.area(45, 23)
// console.log(rect1.perimeter(45, 32));
// console.log(ans);

// let rect2 = new Rectangle()
// let ans1 = rect2.perimeter(34, 32)
// console.log(ans1);


class bankAccount {
    constructor(initialbalnce) {
        this.initialbalnce = initialbalnce
    }
    get_balence(){
        return (this.initialbalnce);
    }

    deposite(amount){
        this.initialbalnce = this.initialbalnce + amount
        return this.initialbalnce
    }

    withdrawal(amount){
        this.initialbalnce = this.initialbalnce - amount
        return this.initialbalnce
    }
}
const aditya = new bankAccount (10000)
console.log(aditya.get_balence());
console.log(aditya.deposite(500));
console.log(aditya.withdrawal(2000));

