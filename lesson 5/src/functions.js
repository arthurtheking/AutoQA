const numArr = [10, 52, 138, 175, 225];

const strArr = ["Here ", "is ", "the ", "result ", "of ", "String ", "values ", "adding "];

function sumValues(arr) {
    
    let result = 0;

        
    arr.map((element) => {
        if (typeof(element) == "number") {
            result += element;
        } else {
            result = arr.join(' ');
        }
    });


    return result;
}

console.log(sumValues(numArr));

console.log(sumValues(strArr));