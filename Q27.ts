// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_color: string = "green" || "yellow" || "red" ;

console.log("Program were alien color is green\n")

alien_color = "green";

if (alien_color == "green") {
   
    console.log("You just earned 5 points for shooting the alien\n");
} 

console.log("\nProgram were alien color is yellow\n")

alien_color = "yellow";

if (alien_color == "yellow") {
    
    console.log("\n You just earned 10 points for shooting the alien\n");
} 

console.log("\nProgram were alien color is red\n")

alien_color = "red";

if (alien_color == "red") {
    
    console.log("\n You just earned 15 points for shooting the alien\n");
} 



export {};