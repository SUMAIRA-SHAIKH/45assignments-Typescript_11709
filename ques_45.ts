/*
45. Cars:
Write a function that stores information about a car in an Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword
arguments. Call the function with the required information and two other name-value pairs, such as
a color or an optional feature. Print the Object that’s returned to make sure all the information was
stored correctly.
*/

console.log('\n\t---------OBJECT{ car }---------')

function car_info(
    manufacturer: string, 
    model: string,
    ...additionalInfo) {

    let car = { manufacturer, model , ...Object.fromEntries (additionalInfo)};
    return car;
  };

  let my_car_info = car_info("toyota","corolla",['color','black'],
  ['year',[2022]])
  
console.log(my_car_info)

  console.log(car_info("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
  console.log(car_info("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));