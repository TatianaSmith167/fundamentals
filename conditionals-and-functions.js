//Equals
let equals = 1 === 1;
console.log(equals);

//Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

//Greater than Equals
let greaterthanEq = 5 >= 5;

//Less than Equals
let lessThanEq = 4 <= 9;

//Not Equals
let notEquals = 5 !==2;

let storeA = 3.10;
let storeB = 4.40;

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price")
    } else {
        console.log("Their prices are equal.")
    }

    let x = 10;

    function addNumbers(n, m, x) {
        console.log(x);
        return n + m
    };
}

let ourArray = [1, 2, 3, 4, 5];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
   //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for(let j = 0; 'j<10; j++') {
       console.log('j is equal to: ' + j);
    }
}
/*...*
/*...*/

let
while (x < 10) {
    console.log('Ran');
}






