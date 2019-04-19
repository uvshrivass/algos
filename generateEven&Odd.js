// Program to generate even & odd numbers till N

var num = 9;
var evenArray = [];
var oddArray = [];

for (i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        evenArray.push(i)
    }
    else {
        oddArray.push(i)
    }
}

console.log(`The even numbers till ${num} are ` + evenArray);
console.log(`The odd numbers till ${num} are ` + oddArray);