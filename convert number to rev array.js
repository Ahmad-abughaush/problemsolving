

// function convert(str){
// const reverse=str.split('').reverse().join("")

// const revarr=reverse.split("")

// return revarr
// }
// console.log(convert("ahmad"));


function conv(n){
let str=n.toString().split("").map((m)=>Number(m)).reverse()
return str
}
console.log(conv(567));

