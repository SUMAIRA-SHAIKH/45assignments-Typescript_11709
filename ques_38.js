/*
38. Cities:
Write a function called describe_city() that accepts the name of a city and its country. The
function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the
country a default value. Call your function for three different cities, at least one of which is not in the
default country.*/
console.log("\n\t\tusing Function method \n Country and their Cities");
function describe_city(nameofcity, country = "Pakistan") {
    return `${nameofcity} is in ${country}`;
}
// 3 cities
let city1 = describe_city("karachi");
let city2 = describe_city("Hyderabad");
let city3 = describe_city("Islamabad");
let city4 = describe_city("Jeddah", "Saudi arabia"); // default overwrite =saudi over write to Pak
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
/*
//----------------------------------------

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
let city1= describe_city('multan') //syntax like this and console must
describe_city("Karachi");
describe_city("Lahore");            // or like that no issue
describe_city("Tokyo", "Japan");
console.log(city1)
*/ 
