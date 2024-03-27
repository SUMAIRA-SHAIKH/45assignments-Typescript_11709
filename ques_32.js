/*
32. Checking Usernames:
Do the following to create a program that simulates how websites ensure that everyone has a
unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames
are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print
a message that the person will need to enter a new username. If a username has not been used, print
a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be
accepted.
*/
console.log("\n\t...........ARRAY METHOD CHECKING DUPLICATE ARRAY-..............\n ");
let current_users = ["user1", "Admin", "User2", "user3", "user4", "user5", "user8"];
let new_users = ["User1", "User6", "user7", "admin", "useR8,", "User9"];
//we will use  forEach method
new_users.forEach((newUser) => {
    let new_userslower = newUser.toLowerCase();
    //we will use some() method
    let userNametaken = current_users.some(current_users => current_users.toLowerCase() === new_userslower); // not check casecensitive all applied lower
    //now we will apply conditions
    if (userNametaken) {
        console.log(`${newUser} needs to choose a new username bacause it's already taken`);
    }
    else {
        console.log(`${newUser} is the new member added`);
        current_users.push(newUser); //add new user to current user array
    }
});
console.log(current_users);
/*
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
  */
/* 2nd method

let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

//we will use  forEach method
new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});

*/ 
