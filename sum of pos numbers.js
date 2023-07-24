// function sumofnum(arr) {
//     let initialvalue = 0;



//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             initialvalue += arr[i];
//         }
//     }
//     return initialvalue;
// }

// console.log(sumofnum([-1, 0, 2, 3]));



function sumofnum(arr) {

    return arr.filter((x) => x > 0).reduce((acc, current) => acc + current + 0)
}
console.log(sumofnum([-1, 0, 2, 3]));

