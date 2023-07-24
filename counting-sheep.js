function count(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            num++;
        }
    }

    return num;
}

console.log(count([true, true, true, true, true, false, false, false, false, true])); // Output: 6
