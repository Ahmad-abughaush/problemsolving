function sqr(arr) {
  
    let result = [];

    for (var i = 0; i < arr.length; i++) {
        let squareRoot = Math.sqrt(arr[i]);
        if (Number.isInteger(squareRoot)) {
            result.push(squareRoot);
        } else {
            result.push(arr[i]*arr[i]);
        }
    }

    return result;
}

console.log(sqr([1, 4, 5,6,9, 16])); 


