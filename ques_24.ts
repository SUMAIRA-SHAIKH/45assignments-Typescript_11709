/*
24. More Conditional Tests:
You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array
*/

console.log("\n\t\t ***~BOOLEAN CONDITONS TEST WITH DIFFERENT METHODS~*** ")
console.log("\t\t =====================================================");
// Equality with strings
console.log("\n\t~Tests for Equality and Inequality with Strings~")

let myname:string ='Sumaira Aziz';
console.log(`\nchecking  Equality with strings Orinal string is "${myname}"\n`)
console.log("string uppercase SUMAIRA AZIZ--------------------",myname == "SUMAIRA AZIZ")
console.log("string casesensitive Sumaira aziz not equal----- ",myname !== "Sumaira aziz")
console.log("string title-case Sumaira Aziz-------------------",myname == "Sumaira Aziz")

// Numerical tests
console.log("\n\t~Numerical tests:~\n");

let numb : number = 11709
console.log(`let roll no is = ${numb}?--------------------------`,numb==11709)
console.log("roll no is equal to 11708?-----------------------",numb == 11708)
console.log("roll no greater than 10708-----------------------",numb > 10708) //true
console.log("roll no less than 11710?-------------------------",numb < 11710)
console.log(`roll no is not equal to ${numb} ------------------`,numb !== numb)

console.log("\n\t~Conditinoal Test  (<,>,=,!=)~\n")
console.log("10 > 5-------------------------------------------",10 > 5); // True
console.log("2 < 1--------------------------------------------",2 < 1); // False
console.log("123 == 123---------------------------------------",123==123)
console.log("99.99 not equal to 100?--------------------------",((99.99 as number)!==(100 as number))); 
console.log("(125 as number)!==124)---------------------------",(125 as number)!==124)
console.log("(5 as number) === 6------------------------------",(5 as number) === 6)

// Tests using "and" and "or" operators
console.log("\n\t~Tests with 'AND'(&&) operator and  'OR'(||) Operator:~\n");
console.log("(10<5)&&(5>4)-----------------------------------",(10<5)&&(5>4)); // both are true
console.log("(10<5)||(5>4)-----------------------------------",(10<5)||(5>4)); // one is true
console.log("(1<2)&&(2<3)&&(3<4)&&(4>5)----------------------",(1<2)&&(2<3)&&(3<4)&&(4>5));//one condition is false than result false
console.log("(1<2)||(2<3)||(3<4)||(4>5)----------------------",(1<2)||(2<3)||(3<4)||(4>5));//any one condition is true statement is true.

// Test whether an item is in a array
console.log("\n\t~Test whether an item is in a Array~\n")

let assignmentArr:string[] = ["ques_1", "ques_2", "ques_3"]; //declear array
let assignmentStr:string = "ques1,ques2,ques3" // declear variable
console.log(`ARRAY =`,assignmentArr)
console.log(`string =`,assignmentStr)

console.log("Is array present? ------------------------------",Array.isArray(assignmentArr));
console.log("// syntax for checking array is present ( Array.isArray(assignmentArr) )")
console.log("Is STRING present in Array?-------------------- ",Array.isArray(assignmentStr));
console.log("// syntax for checking string is present in Array (Array.isArray(assignmentStr))")

console.log("\n\t~Test whether an item is in a Array e.g 2~\n")
//2nd example of array (true or false)
let fruits: string[] = ["apple", "banana", "cherry"];
console.log(`Fruits in Array are`,fruits);
console.log("Is 'apple' in fruits?---------------------------",fruits.includes("apple"));//true
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?-----------------------",!fruits.includes("mango"));
console.log("Is watermellon is in fruit?---------------------",fruits.includes("watermellon"))