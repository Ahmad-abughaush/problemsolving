function countby(x, y) {
    let arr = [];
    let result = x * y;

    for (let i = x; i <= result; i += x) {
        arr.push(i);
    }

    return arr;
}

console.log(countby(3, 10));


