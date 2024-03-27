/*
42. Great Magicians:
Start with a copy of your program from Exercise 41. Write a function called make_great() that
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified.
*/

console.log("\n\t--------Message with Magician name(array)-------")
let magiciansname:string[] = ['Burhan','Imran','Ali','Sumaira'];

function make_great(greet: string) {
  for (let item of magiciansname) {
   // magicians[i] = magicians[i] + " the Great";
    console.log(greet,item);
  }
}
//strong typing error {argument of string[]} fun call parameter ma strong typing ni krni
make_great('The great magician');
//show_magicians(`hi`);// Modifies the original array
//show_magicians(magiciansname); // Shows modified names
