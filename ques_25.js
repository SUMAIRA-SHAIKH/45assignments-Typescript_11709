/*25. Alien Colors #1:
Imagine an alien was just shot down in a game. Create a variable called alien_color and assign
it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)
*/
console.log('\n\t\tCOLOR POINTS GAME');
console.log('\t\t====================');
let alien_color = "Yellow";
if (alien_color == "Yellow") // statement is true
 {
    console.log("Hurray! player just earned 5 points! :) ");
}
else { //statement is false
    console.log("Alas! you fail :( ");
}
//Version that fails (no output)
alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
}
