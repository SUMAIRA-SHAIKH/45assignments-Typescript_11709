/*
44. Sandwiches:
Write a function that accepts an array of items a person wants on a sandwich. The function
should have one parameter that collects as many items as the function call provides, and it should
print a summary of the sandwich that is being ordered. Call the function three times, using a different
number of arguments each time.
*/
console.log('\n----------ARRAY AS A PARAMETER----------');
//array as a parameter
function my_Sandwiches(...items) {
    return (` I want Sandwich of ${items}`);
}
;
let collection1 = my_Sandwiches("cucumber", "cheeze", "lettuce");
let collection2 = my_Sandwiches("turkey", "swiss", "mayo");
let collection3 = my_Sandwiches(); // without arrgunment
console.log(collection1);
console.log(collection2);
console.log(collection3);
