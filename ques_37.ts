/*
37. Large Shirts:
Modify the make_shirt() function so that shirts are large by default, with a message that reads
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
size with a different message.
*/


console.log("\n\t\t--------T-SHIRT---------")
console.log("\nsmall and medium size t-shirt print a same message on both;\n but large size print different message for using Function-Method\n")
//create func without asign by-default

//function make_shirt(size: string = "large", message: string)
//  {

//     return size + message
//  }
    
//     let myFunc = make_shirt("Medium", " I LOVE TYPESCRIPT")
//     console.log(myFunc)
//------------------------------------------

//creating function and size by default
//    making size-large as default

//###but keep in mind what ever u make parameater by default make in end , if ur 1st parameter is by default it makes error

/*

function make_shirt( message: string, size: string = "Size 'Large'")
 {
    return size + message
 }
    
    let myFunc = make_shirt("  ~ I LOVE TYPESCRIPT ~ ")
    console.log(myFunc)
   

    //shirt of any type
//    function 
*/

//-------------------- if statement solution ques 37 for practise
//function message()
//  function make_shirt(a,b)
// {
    
//   return  message
// }

function message(){
let shirtsize: string[] = ['small','medium','large'] ;
 if(shirtsize[0]='small'){
    console.log(`${shirtsize[0]}, I love typescript`);
}if (shirtsize[1]='medium'){
     console.log(`${shirtsize[1]}, I love typescript`);
}if (shirtsize[2]='large'){
    console.log(`${shirtsize[2]}, I love c++`);
    //return message
}}
let myFunction = message
//console.log(myFunction)

if (message)
{
    myFunction();
}
// or only one if statement 
/*
 if (shirtsize[0]='small', shirtsize[1]="medium",shirtsize[2] ="large"){
    console.log(`${shirtsize[0]}, I love typescript`);
    console.log(`${shirtsize[1]}, I love typescript`);
    console.log(`${shirtsize[2]}, I love c++`)
}  */
