function negativenumber(arr) {
    let newarr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newarr.push(arr[i] * -1);
        } else {
            newarr.push(arr[i]);
        }
    }

    return newarr;
}

console.log(negativenumber([-1, 0, 1, 2, 3]));
