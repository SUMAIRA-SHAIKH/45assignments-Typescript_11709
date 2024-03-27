/*
30. Hello Admin:
Make an array of five or more usernames, including the name 'admin'. Imagine you are writing
code that will print a greeting to each user after they log in to a website. Loop through the array, and
print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a
status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/

console.log(`\n\t-------print a message to all and differnt message to ADMIN--------\n`)

let usernames: string[] = ["Sumaira","Imran","Admin", "Aisha", "Aziz", "Burhan"];
/*
for(let i=0; i< usernames.length; i++)
{
    if(usernames[i]=="Admin")
    {
        console.log(`Hello ${usernames[i]} would you like to see a status report? `)
    }
    else
    {
        console.log(`Hello ${usernames[i]} thank you for logging in again!.`)
    }
}

*/

usernames.forEach((username) => {
  if (username === "Admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for loggin in again.`);
  }
});
