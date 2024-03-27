/*
22. Intentional Error:
If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error
before closing the program.
*/

//undefined array jo array nahi ha wo show karana ha previous kisi arary k ques ma b kia tha just copy that or see pic

let mixArray: (string|number)[] = ["Sumaira",28, "Aziz", 56,"Imran",30,"Burhan",3,,"array"]
// index                 [            0       1     2     3     4    5     6    7   8-undeifined  9 ]

console.log(`Print an array index 0`,mixArray[0]);
console.log(`Print an array index 8`,mixArray[8]); // Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
console.log(`Print an array index 1`,mixArray[1])  //array index-1  print
console.log(`Print an array index 9`,mixArray[9])


//mixArray[0];// = "Sumaira"; // Correcting the error by accessing a valid index.