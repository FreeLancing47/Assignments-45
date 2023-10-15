/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following: */


// • Tests for equality and inequality with strings 

let car = "Honda";
console.log("\n");
console.log("\nTests for equality and inequality with strings\n");

console.log("Is car == 'Honda'? i predict True.");
console.log(car == "Honda")

console.log("Is car == 'Toyota'? I predict False.");
console.log(car == 'Toyata')

// • Tests using the lower case function
console.log("\n");
console.log("\nTests using the lower case function\n")

console.log("Is car == 'honda'? i predict True.");
console.log(car.toLowerCase() == "honda")

console.log("Is car == 'Honda'? i predict False.");
console.log(car.toLowerCase() == "Honda")

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let a = 5;
let b = 3;

console.log("\nNumerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to\n")

console.log("Is a > b ? I predict True")
console.log(a>b);

console.log("Is a < b ? I predict False")
console.log(a<b);

console.log("Is a = 5 ? I predict True")
console.log(a == 5)

console.log("Is a != 5 ? I predict False")
console.log(a != 5)

console.log("Is a >= 5 ? I predict True")
console.log(a>=5);

console.log("Is a =< b ? I predict False")
console.log(a<=3)

// • Tests using "and" and "or" operators

console.log("\nTests using 'and' and 'or' operators\n");

console.log("a is >=5 and a<10 ? i predict its True")
console.log(a>=5 && a<10);

console.log("b is >=5 and a>10 ? i predict its False")
console.log(b>=5 && b>10);


// • Test whether an item is in a array

console.log("\nTest whether an item is in a array\n");

let number: number [] = [1,2,3,4,5,6];

console.log(number);

console.log("\n5 exist in the array? i predict its True");
console.log(number.includes(5))

// • Test whether an item is not in a array 

console.log("\nTest whether an item is not in a array\n");

console.log("10 exist in the array? i predict its False");
console.log(number.includes(10))

export{};