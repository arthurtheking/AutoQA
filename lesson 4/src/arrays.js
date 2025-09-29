//Created Arrays

const numArr = [1, 2, 3, 4, 5];

const strArr = ["green", "red", "blue", "white", "black"];

const boolArr = [true, false, true, false];

const anyArr = [100, "Nick", false];



//Basic methods

numArr.push(6);
console.log(numArr);

console.log("<----------------->")

strArr.pop();
console.log(strArr);

console.log("<----------------->")

numArr.shift();
console.log(numArr);

console.log("<----------------->")

numArr.unshift(0);
console.log(numArr);

console.log("<----------------->")


//ForEach() + map()

numArr.forEach(element => {
    console.log(element);
});

console.log("<----------------->")

strArr.forEach(element => {
    console.log(element);
});

console.log("<----------------->")


boolArr.forEach(element => {
    console.log(element);
});

console.log("<----------------->")


anyArr.forEach(element => {
    console.log(element);
});

console.log("<----------------->")

const filteredArray = anyArr.map((element, arr) => {
    return typeof(element);
})

console.log(filteredArray);