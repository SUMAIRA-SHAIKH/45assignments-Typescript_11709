
/* question 13
13. Your Own Array:
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list
that stores several examples. Use your list to print a series of statements about these items, such as
“I would like to own a Honda motorcycle.”*/

//const transportation: string [] = ["cycle" , "bike", "car","ship","bus","rikshaw","aeroplane"]

const transportation: string [] = ["corola" , "civic", "yaris","mehran","BMW","MIRA","ALTO"]

// 1st method (loop)
for (let i=0 ; i<transportation.length; i++)

console.log(`“I would like to own a ${transportation[i]} Car.”`)

//2nd method
/*
transportation.map((ib)=>{
    console.log(`“I would like to own a ${ib}.”`)
}
)
*/

//3rd method
 /*
transportation.forEach(transportation =>{
    console.log(`i would like to own a ${transportation}`);
})
*/