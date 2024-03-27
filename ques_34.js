/*
34. Pizzas:
Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and
then use a for loop to print the name of each pizza.

• Modify your loop to print a sentence using the name of the pizza instead of printing just the name of
the pizza. For each pizza you should have one line of output containing a simple statement like I like
pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The
output should consist of three or more lines about the kinds of pizza, you like and then an additional
sentence, such as I really love pizza!  */
console.log("\n\t...........PIZZA'S-.............. ");
let pizzas = ["pepperoni", "margherita", "fajita"];
//print only names of pizza
console.log("flavour of Pizza's are: ");
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
//priting names and sentences/message
for (let i = 0; i < pizzas.length; i++) {
    console.log(`\nI Like to eat ${pizzas[i]} pizza`);
}
console.log(`\nPizza is the best food in the world. It is really cheesy. You can eat it hot or cold. There are hundreds of different toppings. Pizza is better than any other food. `);
/*

//2nd method

pizzas.forEach(pizza => {
console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");
*/ 
