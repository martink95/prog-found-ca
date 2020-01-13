// Question 1
var nameOfAssignment = "Prog-found-ca";

// Question 2
var person = {
    name: "Martin",
    age: 24
};

// Question 3
var outOfStock = false;

if(outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// Question 4
var numberArray = [0, 1, 2, 3, 4];

for(i=0; i < numberArray.length; i++) {
    console.log(numberArray[i]); 
}

// Question 5 
for(i=15; i <= 25; i++) {
    console.log(i);
}

// Question 6
for(i=15; i <= 25; i++) {
    if(i === 20) {
        console.log(i);
    }
}

// Question 7
var personArray = [{name: "Martin", age: 24, isStudent: true}, {name: "Robert", age: 25, isStudent: false}];
for(i=0; i < personArray.length; i++) {
    // using backticks ` to enable the use of template literals (template strings)
    console.log(`age: ${personArray[i].age}, is student: ${personArray[i].isStudent}`);
}

// Question 8
function whatIDontLike(thingIDontLike) {
    console.log(`I dont like ${thingIDontLike}`);
}
whatIDontLike("giraffes");

// Question 9
function subract(firstNumber, secondNumber) {
    if(typeof firstNumber === "number" && typeof secondNumber === "number") {
        console.log(firstNumber - secondNumber);
    } else {
        console.log("I'm sorry, you need to enter numbers.");
        
    }
}
subract(399, 200);

// Question 10
var carArray = [];

function addCarToArray(carBrand) {
    carArray.push(carBrand);
}

function logCarArray() {
    console.log("------ Car Brands ------");
    
    for(i = 0; i < carArray.length; i++) {
        console.log(carArray[i]);
    } 
    console.log("------------------------");
}

addCarToArray("Volkswagen");
addCarToArray("Seat");
addCarToArray("Fiat");
logCarArray();