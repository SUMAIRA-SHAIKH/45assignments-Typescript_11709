/*
43. Unchanged Magicians:
Start with your work from Exercise 40. Call the function make_great() with a copy of the array
of magicians’ names. Because the original array will be unchanged, return the new array and store it
in a separate array. Call show_magicians() with each array to show that you have one array of the
original names and one array with the Great added to each magician’s name.
*/

console.log('\n\t\t-------ARRAY-------- ')
console.log('without changing original array,return the new array and store it in a separate array. ')
let magiciansname_1:string[] = ['Burhan','Imran','Ali','Sumaira'];
//making a copy of array
let magicianNameCopy =[...magiciansname_1]

function show_magicians(greet:string){
let withGreetings ="";

for (let item of magicianNameCopy){
    withGreetings += `${greet}${item}\n`
    //console.log(greet, item);
}
return withGreetings;

};
let mygreetings = show_magicians('Hello ');
let makeARRAY = mygreetings.split(`\n`);
console.log(makeARRAY);
//original array
console.log(magiciansname_1);

/*
let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
  let greatMagicians = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`${magician} the Great`);
});
return greatMagicians;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names  */