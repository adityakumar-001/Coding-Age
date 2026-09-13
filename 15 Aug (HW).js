// 15 Aug (HW)

/**
 * Three angles will be given. use the conditionals to find out that the angles can form a triangle or not.
 * If they can then which triangle it will be (acute, right or obtuse).
 * 
 * Acute -> all angles should be less than 90 degree.
 * Right -> only one angle should be 90 degree.
 * Obtuse -> only one angle should be greater than 90.
 */



// Work is Finally Done:

let  a = 60, b = 90,  c = 30
let d = a + b + c
if (d != 180 ) {
    console.log ("Not a triangle")}

else if ( a < 90 & b < 90 & c < 90) {
    console.log ("It a Acute triangle")}
else if (a === 90 | b === 90 | c === 90) {
    console.log ("Right angle Triangle")}
else if (a > 90 | b > 90 | c > 90 ) {
    console.log ("Obtuse angle Triangle")}

else {console.log("Not a Triangle")};
