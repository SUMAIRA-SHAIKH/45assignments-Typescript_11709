/*
31. No Users:
Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

//import { Console } from "console";

console.log(`\n\t-------EMPTY ARRAY AND PRINT THE MESSAGE ON EMPTY ARRAY--------`)

let userNames: string[] = ["Sumaira","Imran","Admin", "Aisha", "Aziz", "Burhan"];

//to remove all members
userNames =[]; // out empty array

// CONSOLElog (userName);

 if (userNames.length > 0)
 {
    for(let i=0; i< userNames.length; i++)
{
    if(userNames[i]=="Admin")
    {
        console.log(`Hello ${userNames[i]} would you like to see a status report? `)
    }
    else
    {
        console.log(`Hello ${userNames[i]} thank you for logging in again!.`)
    }
}}else
{
    console.log(`we need to find some users!`)
}
  

/* 2ND METHOD
let userNames: string[] = [];

if(userNames.length === 0){
    console.log("We need to find some users!");
    
} else {
    // Greet Users 
}

// Removing all usernames ensures the message "We need to find some users!" is printed.
*/