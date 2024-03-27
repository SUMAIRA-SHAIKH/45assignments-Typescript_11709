/*
39. City Names:
Write a function called city_country() that takes in the name of a city and its country. The
function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least
three city-country pairs, and print the value that’s returned.
*/

console.log('-------"City","Country"---------')
// 1st method
/*function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
//  let mycities = city_country("karachi","Pakistan")
  //console.log(mycities)
  
  console.log(city_country("Lahore", "Pakistan"));
  console.log(city_country("Tokyo", "Japan"));
  console.log(city_country("Paris", "France"));
  console.log(city_country('Dubai','UAE'))
  */

  //2nd method
  function city_country(city: string, country: string){
    console.log(`${city}, ${country}`) // console in function
  }
  
//  let mycities = city_country("karachi","Pakistan")
  //console.log(mycities)
  
  city_country("Lahore", "Pakistan")
  city_country("Tokyo", "Japan")
  city_country("Paris", "France")
  city_country('Dubai','UAE')