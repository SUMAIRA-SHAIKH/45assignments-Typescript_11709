/* question 14

14. Guest List:
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
includes at least three people you’d like to invite to dinner. Then use your list to print a message to
each person, inviting them to dinner. */
const mylist = ["Aisha", 'Samreen', 'Marvi', "Jamila"];
//const days : [] = ["Mon",'Tues','Wed',"Thursday"];string // delete 
//for  (let c=0; c < days.length; c++ ) // delete
//days.map((ib)=>{ // del
// )}
//***1st method */
for (let b = 0; b < mylist.length; b++) {
    console.log(`Mrs.${mylist[b]}! you are invited to my dinner on Sunday`); //del
}
//2nd method
/*
mylist.forEach(mylist => {
    console.log(`Dear, ${mylist}, would you like to join me for dinner?`);
})

*/ 
