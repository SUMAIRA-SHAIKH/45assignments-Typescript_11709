/* QUESTION 16
16. More Guests:
You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/

const dinnerguest : string[] = ["Aisha","Samreen","Marvi","Jamila"]
console.log('i have invited these guest to dinner:' )
console.log(dinnerguest)
console.log('i have bigger space for dinner table so i have to decide inivite more 3 guest to dinner \n')

//Add one new guest to the beginning of your array
console.log('I inivited to Sahiba 1st of the array')
dinnerguest.unshift('Sahiba')
console.log(dinnerguest)

//  Add one new guest to the middle of your array.
console.log('\n i inivited in middle of array to sara')
dinnerguest.splice(3,0,"Sara")
console.log(dinnerguest)

//Use append() to add one new guest to the end of your list.
console.log('\n in the end i invited to Mr Burhan')
dinnerguest.push('Burhan')
console.log(dinnerguest)

console.log('********')

//Print a new set of invitation messages, one for each person in your list.

for(let b=0; b < dinnerguest.length; b++)
{
    console.log(`Mrs. ${dinnerguest[b]} you are invited to my dinner`)
}



