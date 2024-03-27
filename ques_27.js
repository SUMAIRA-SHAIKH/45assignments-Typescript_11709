/*
27. Alien Colors #3:
Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color
alien.
*/
//*Green alien version:*
console.log(`\n\t-------GREEN ALIEN VERSION--------`);
let alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("\nYour Green color earned 5 points.");
}
else if (alien_color1 == "yellow") {
    console.log("\nYour Yellow color earned 10 points.");
}
else if (alien_color1 == "red") {
    console.log("\nYou Red color earned 15 points.");
}
else {
    console.log('\nyou earned 0 points');
}
console.log(`\n\t-------YELLOW ALIEN VERSION--------`);
//*Yellow alien version:*
let alien_colors = "yellow";
if (alien_colors == "green") {
    console.log("Your GREEN color earned 5 points.");
}
else if (alien_colors == "yellow") {
    console.log("\nYour Yellow color earned 10 points.");
}
else if (alien_colors == "red") {
    console.log("\nYou red color earned 15 points.");
}
//*Red alien version:*
console.log(`\n\t-------RED ALIEN VERSION--------`);
let alien_color2 = "red";
if (alien_color2 == "green") {
    console.log("\nYour green color earned 5 points.");
}
else if (alien_color2 == "yellow") {
    console.log("Your yellow color earned 10 points.");
}
else if (alien_color2 == "red") {
    console.log("\nYour Red color earned 15 points.");
}
