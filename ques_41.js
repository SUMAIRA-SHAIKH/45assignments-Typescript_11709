/*
41. Magicians:
Make an array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array.
*/
console.log("\n\t-------Magicians Name using Array + function method--------");
let magicianNames1 = ['Burhan', 'Imran', 'Ali', 'Sumaira'];
function show_magicianss() {
    for (let magicianNames of magicianNames1) {
        console.log(magicianNames);
    }
}
show_magicianss(); //function calling
