// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places: string [] = ["London","Denmark","New York","Belgium","Finland"];

// printing in orignal order
console.log("\n 1.orignal Order");
console.log(places);

// Alphabetic sorting of array without modifying the actual list
console.log("\n 2.Alphabetic sorting of array without modifying the actual list");   
console.log([...places].sort());

// showing array is in orignal order by printing it
console.log("\n 3.showing array is in orignal order by printing it");
console.log(places);

// Print your array in reverse alphabetical order 
console.log("\n 4.Print your array in reverse alphabetical order");
console.log([...places].sort((a,b) => a<b ? 1 : a>b ? -1 : 0));

// showing array is in orignal order by printing it
console.log("\n 5.showing array is in orignal order by printing it");
console.log(places);

// Reverse the order of your list.
console.log("\n 6a.Reverse the order of your list");
console.log(places.reverse());

// Print the array to show that its order has changed.
console.log("\n 6b.Print the array to show that its order has changed");
console.log(places);

// Reverse the order of your list again
console.log("\n 7a.Reverse the order of your list again");
console.log(places.reverse());

// Print the list to show it’s back to its original order.
console.log("\n 7b.Print the list to show it’s back to its original order");
console.log(places);

// Sort your array so it’s stored in alphabetical order.
console.log("\n 8a.Sort your array so it’s stored in alphabetical order");
console.log(places.sort());

// Print the array to show that its order has been changed.
console.log("\n 8b.Print the array to show that its order has been changed");
console.log(places);

// Sort to change your array so it’s stored in reverse alphabetical order
console.log("\n 9a.Sort your array so it’s stored in alphabetical order");
console.log(places.reverse());

// Print the array to show that its order has been changed.
console.log("\n 9b.Print the array to show that its order has been changed");
console.log(places);
