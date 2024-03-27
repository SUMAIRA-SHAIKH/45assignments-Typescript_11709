/* 
18. Seeing the World:
Think of at least five places in the world you’d like to visit.
• Store the locations in an array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its
order has changed.
*/
let myplace: string[] = ['karachi','hyd','sukkur','badin','larkana','dadu'] // store location in arr
console.log(myplace)//1. print original arr 
// making a copy of array
let copyofarr =myplace.slice();
//alphabetical
console.log('alphabetical order')//2. alphabetcal arr
let sortedarr = copyofarr.sort();
console.log(sortedarr)
//original arr
console.log('still in original order') // 3. still original
console.log(myplace)
//reverse arr
console.log('reverse order')
let reverserarr=myplace.reverse();
console.log(reverserarr);
//again reverse order
console.log('again reverse order')
let reverserarr1=myplace.reverse();
console.log(reverserarr);

//printing original arr
//console.log('printing original arr')
//console.log(myplace)
