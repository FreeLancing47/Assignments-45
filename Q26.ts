// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

let alien_color: string = "green" || "yellow" || "red" ;

console.log("Program were alien color is green\n")

alien_color = "green"

if (alien_color == "green") {
   
    console.log("You just earned 5 points for shooting the alien\n");
} else {
    console.log("\n You just earned 10 points for shooting the alien")
}

console.log("\nProgram that prints else statement\n")

alien_color = "yellow"

if (alien_color == "green") {
    
    console.log("\n You just earned 5 points for shooting the alien\n");
}  else {
    
    console.log("\n You just earned 10 points for shooting the alien")
}
    


export {};