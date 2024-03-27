/* QUESTION 12 
12. Greetings:
Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be
personalized with the person’s name. */

let  friendsName1: string[] = ["Aishaa" , "Sahibaa" , "Samreenn" ,"Marvii" ,"Nazishh"];
for(let i=0; i< friendsName1.length; i++)
{
    console.log(`Hey! ${friendsName1[i]}, how are you?`)
}
/*     2nd method
console.log(`Hey! ${friendsName1[0]}, how are you?`)
console.log(`Hey! ${friendsName1[1]}, how are you?`)
console.log(`Hey! ${friendsName1[2]}, how are you?`)
console.log(`Hey! ${friendsName1[3]}, how are you?`)
console.log(`Hey! ${friendsName1[4]}, how are you?`)
*/

