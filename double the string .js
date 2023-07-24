
function doublethestring(str) {
    return str.split('').map(x => x + x).join("");
}

console.log(doublethestring('ahmad'));

// return str.split("").map(s => s.repeat(2)).join("");
