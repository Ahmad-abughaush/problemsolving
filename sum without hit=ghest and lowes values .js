function sumarray(arr) {
    let init = 0;
    if (arr == null) return init;
    return arr.sort((a, b) => a - b).slice(1, -1).reduce((acc, current) => acc + current ,0)

}
console.log(sumarray([ -1, 0, 1, 2, 3]));




function sumofarray(arr){

let init = 0

if(arr==null)return init;

return 
arr.sort((a,b)=>a-b).slice(1,-1).reduce((acc, current) => acc + current,0)
}

console.log (sumofarray([-1,0,1,2,3]))
