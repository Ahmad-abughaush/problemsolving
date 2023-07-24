function sumofnegandpos(arr) {

    let newarr = []
    let sumofpos = 0
    let sumofneg = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sumofpos += arr[i]
        }
        else if (arr[i] < 0) {
            sumofneg += arr[i]
        }
    }

    newarr.push(sumofpos);
    newarr.push(sumofneg);
    
    return newarr

}

console.log(sumofnegandpos([-3, -2, -1, 0, 1, 2, 3]));