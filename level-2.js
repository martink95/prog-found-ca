// Question 1
function isEven() {
    for(i = 15; i <= 25; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

function isOdd() {
    for(i = 15; i <= 25; i++) {
        if(i % 2) {
            console.log(i);
        }
    }
}

isEven();
//isOdd();

// Question 2
function firstFunction() {
    console.log("I am a function");
}

var innerfunction = firstFunction;

function outerFunction(funcArgument) {
    funcArgument();
}

outerFunction(innerfunction);
