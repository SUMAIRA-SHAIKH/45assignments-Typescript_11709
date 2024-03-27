/*
20. Think of something you could store in an array. For example, you could make a list of mountains,
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list
containing these items.
*/

let rivers: String[]= ['Amazon River','Mississippi River','Yellow River','Congo River','Ganges River']
console.log('Most famous rivers in the world are:')//, rivers)


for(let i=0; i < rivers.length; i++)   //serial no code
{
    console.log(`${i+1}. ${rivers[i]}`) // shows the all name
}
