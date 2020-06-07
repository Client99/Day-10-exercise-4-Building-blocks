// Functions exercise 1
// Use your previous for loops and create a function which prints the first N numbers
let printNumbersTill = N => {
    for (let i = 1; i <= N; i++) {
        console.log(i);
    }
}
N = 20;
console.log(`The "printNumbersTill" function prints the first ${N} numbers:`);
printNumbersTill(N);
N = 15;
console.log(`Now, the "printNumbersTill" function prints the first ${N} numbers:`);
printNumbersTill(N);


// Functions exercise 2
// Create a function which gets a name as parameter and then returns a greeting to the specified person.
let greeter = name => {
    console.log(`Hello ${name}!`);
    // if (name === "Adam") {
    //     console.log("he's an adult");
    // }
    // if (name === "Mate") {
    //     console.log("he's an adult");
    // }
}
name = "Mark"
console.log(`Now, the "greeter" function says Hello to ${name}:`);
greeter(name);


// For loops and arrays exercise 1
// Create a function which gets an array as parameter and prints each value from it.
let printValues = arrN => {
    for (let i = 0; i < arrN.length; i++) {
        console.log(arrN[i]);
    }
}
let arrN = [0, 3, 6, 7, 9];
console.log(`Now, the "printValues" function prints the elements of the array[0, 3, 6, 7, 9]:`);
printValues(arrN);

// For loops and arrays exercise 2
// Change your previous printValues function to use forEach loop.
let printValues_forEach = myNumbers => {
    myNumbers.forEach((number) => {
        console.log(number);
    });
}
let myNumbers = [10, 20, 30, 50, 12];
console.log(`Now, the "printValues_forEach" function prints the elements of the array[10, 20, 30, 50, 12] using the forEach function:`);
printValues_forEach(myNumbers);