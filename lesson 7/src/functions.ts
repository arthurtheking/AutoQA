const numArr = [10, 52, 138, 175, 225];

const strArr = ["Here ", "is ", "the ", "result ", "of ", "String ", "values ", "adding "];

const mixedArr = ["Mike", 16, true, [1,2,3], {eyes : 'green'}]




function sumValues(arr : unknown[]) {


    if(arr.every((e) => typeof(e) === 'number' )) {
        let result : number = arr.reduce((acc, i) => acc + i, 0);
        console.log(result);
        
        return result

    } else if(arr.every((e) => typeof(e) === 'string' )) {
        let result : string = arr.join('');
        console.log(result);

        return result

    } else {
        console.log('Array has different types of elements');
    }
}

sumValues(numArr);
sumValues(strArr);
sumValues(mixedArr);



const arrowSumValues = (arr : number[] | string[] | unknown[]) : number | string | void => {


    if(arr.every((e) => typeof(e) === 'number' )) {
        let result : number = (arr as number[]).reduce((acc, i) => acc + i, 0);
        console.log(result);
        
        return result

    } else if(arr.every((e) => typeof(e) === 'string' )) {
        let result : string = (arr as string[]).join('');
        console.log(result);

        return result

    } else {
        console.log('Array has different types of elements');
    }
}


console.log(arrowSumValues(numArr));
console.log(arrowSumValues(strArr));
console.log(arrowSumValues(mixedArr));