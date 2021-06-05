//var nombree = undefined;

console.log(nombre); //undefined
apellido(); //Luque

var nombre = 'Miguel';

function apellido() {
    console.log("Luque");
}

console.log(nombre); //Miguel
apellido(); //Luque

console.log('')

//LET
console.log(x1) //Uncaught ReferenceError: Cannot access 'x1' before initialization
let x1 = 10

//CONST
console.log(x2) //Uncaught ReferenceError: Cannot access 'x2' before initialization
const x2 = 25