/*
19. Dinner Guests:
Working with one of the programs from Exercises 14 through 18, print a message indicating
the number of people you are inviting to dinner.
*/

//let guest:string [] 
const mylist1: string[] = ["Aisha",'Samreen','Marvi',"Jamila"];


console.log(`i am inviting ${mylist1.length} people to dinner, which are following:.`) // no of guest show

for(let i=0; i < mylist1.length; i++)   //serial no code
{
    console.log(`${i+1}. ${mylist1[i]}`) // shows the all name
}