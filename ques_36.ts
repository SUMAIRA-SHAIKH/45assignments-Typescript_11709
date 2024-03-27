/*
36. T-Shirt:
Write a function called make_shirt() that accepts a size and the text of a message that should
be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
message printed on it. Call the function.
*/
console.log("---------T-SHIRT----------")
import { sign } from "crypto";



//parameter (size,lable) paramerter of func()
function make_shirt(size: string, message: string) {
  //return size + message;
return (`My shirt size is ${size} and label is ${message}`)
}
let myFunc = make_shirt("'Small-X'", "'~HELLO EVERY ONE!~'");

// HOW TO PRINT ON CONSOLE
console.log(myFunc)


/*

//---------------2nd method--------


//2ND METHOD OF FUNC CREAT (ARROW FUNCTION)
let func = (size: number, message: string) => {
  return size + message
}
console.log(func(20," I'm a Cool Boy!"));

 /*
    console.log(
      `Making a ${size} t-shirt with the message "${message}" printed on it`
    );
  }
  
  make_shirt("medium", "Code is Life");
  */
 