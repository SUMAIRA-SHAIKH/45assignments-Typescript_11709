/*
QUESTION # 3
3. Name Cases:
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase. */

console.log(`\n\t\tname: Sumaira Aziz     \troll: 11709 \n\n QUESTION NO 3 :Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase.\n`)

let person_name = "Sumaira imran daughter of aziz ahmed shaikh"

console.log(`original case`,person_name)

console.log(`lower case = `, person_name.toLowerCase())  //string in lower case
console.log(`upper case = `,person_name.toUpperCase()) // upper case
//Title Case
const toTitleCase = (str: string) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");

    let capitalized = toTitleCase(person_name);
    console.log(`title case=`,capitalized);

    //2nd method of title case
   // let titlecasename = person_name.replace(/\b\w/g, (word) => word.toUpperCase());
  //console.log(titlecasename)



/*
function capitalizeWords(string){
    return string.split('').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join('');
}
let naam = "sumaira aziz";
let capitalized = capitalizeWords(naam);
console.log(capitalized);
*/

//console.log(person_name.toString()) //titlecase wrong
//console.log(person_name.charAt(0).toUpperCase()+person_name.slice(1).toLowerCase()); // show only 1st letter capital
/*
let username:string []= person_name.split("");
let titlecasename :string = "";
for (let i=0; i < person_name.length; i++)
{
    titlecasename += username[i].charAt(0).toUpperCase()+username[i].slice(1).toLowerCase()+""
}
console.log(titlecasename) */




// 3rd ,method
let person_names ="sumaira aziz wife of imran"
let titlecasename= person_names.replace(/\b\w+/g,(word)=>word.charAt(0).toUpperCase()+word.slice(1)) //slice(1) because 1st leter of word small del
console.log( `another method of title case=`,titlecasename)
