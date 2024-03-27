/* question 15
15. Changing Guest List:
You just heard that one of your guests can’t make the dinner, so you need to send out a new
set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person
you are inviting.
• Print a second set of invitation messages, one for each person who is still
in your list. */


console.log('list of the guest')
const mylist2 : string[] = ["Aisha","Samreen","Marvi","Jamila"]
console.log(mylist2)

console.log(`\ndue to some reason Mrs ${mylist2[2]} is not come`)


console.log(`NEW LIST Of GUEST`)

mylist2[2] = 'SUMAIRA';
//console.log('')

for(let z = 0; z <mylist2.length; z++)
{
    console.log(`${z}. ${mylist2[z]}`);
}


/*

let unabletoattend = "samreen";
console.log(`${unabletoattend} can't make it to dinner.`)
let newguest = "asma";
//newguest = mylist2[mylist2.indexOf(unabletoattend)]; //replace the guest
mylist2.forEach(mylist2 => {
    console.log(`dear, ${mylist2}, would you like to join me for dinner?`);
})

*/