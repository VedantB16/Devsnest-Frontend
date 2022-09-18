
function compareNumbers(num1, num2){
    if(num1>num2){
        console.log(num1+ " is greater than "+num2);
    } else if (num1<num2){
        console.log(num2+ " is greater than "+num1);
    } else {
        console.log("both are equal");
    }
}

function addNumbers(num1, num2){
    return num1+num2
}

// function expression syntax
const add = function addNumbers(num1, num2){
    return num1+num2
}

//anonymous func
const subtract = function (num1, num2){
    return num1-num2
}

const person = {
    firstname : "john",
    lastname : "doe",
    print : function (){
        console.log("this function is a property of an object");
    }
}


compareNumbers(5,10)
compareNumbers(51,105)
compareNumbers(55,10)
compareNumbers(52,52)

console.log(addNumbers(10,5))
const result = addNumbers(100, 200)
console.log(result)

console.log("using add variable - add(9,10)  - " + add(9,10))

console.log(subtract(5,10))

person.print()


